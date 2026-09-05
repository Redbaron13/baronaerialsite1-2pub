#!/usr/bin/env python3
"""Compose the Baron Aerial Media 1200x630 share card from existing photography."""

from __future__ import annotations

from pathlib import Path

import numpy as np
from PIL import Image, ImageDraw, ImageEnhance, ImageFilter, ImageFont

ROOT = Path("/workspace")
OUT_PNG = Path("/workspace/.grok/og-raw.png")

W, H = 1200, 630
INK = (10, 14, 10)
GREEN = (28, 194, 77)
FG = (243, 246, 241)
MUTED = (209, 214, 207)

FONT_BOLD = "/usr/share/fonts/truetype/liberation/LiberationSans-Bold.ttf"
FONT_REG = "/usr/share/fonts/truetype/liberation/LiberationSans-Regular.ttf"


def cover_crop(im: Image.Image, w: int, h: int, y_bias: float = 0.0) -> Image.Image:
    """Cover-crop; y_bias in [-1, 1] shifts the window down (positive) toward the lights."""
    im = im.convert("RGB")
    scale = max(w / im.width, h / im.height)
    nw = max(w, int(round(im.width * scale)))
    nh = max(h, int(round(im.height * scale)))
    im = im.resize((nw, nh), Image.Resampling.LANCZOS)
    left = (nw - w) // 2
    slack = nh - h
    top = int(round((slack / 2) + y_bias * (slack / 2)))
    top = max(0, min(slack, top))
    return im.crop((left, top, left + w, top + h))


def tracked_width(font: ImageFont.FreeTypeFont, text: str, tracking: float) -> float:
    if not text:
        return 0.0
    total = 0.0
    for i, ch in enumerate(text):
        total += font.getlength(ch)
        if i < len(text) - 1:
            total += tracking
    return total


def draw_tracked(
    draw: ImageDraw.ImageDraw,
    x_center: float,
    y_top: float,
    text: str,
    font: ImageFont.FreeTypeFont,
    fill,
    tracking: float = 0.0,
) -> float:
    width = tracked_width(font, text, tracking)
    x = x_center - width / 2
    for i, ch in enumerate(text):
        draw.text((x, y_top), ch, font=font, fill=fill)
        x += font.getlength(ch) + tracking
    return width


def circular_badge(src: Image.Image, size: int, ring: int = 5) -> Image.Image:
    src = src.convert("RGBA")
    side = min(src.size)
    left = (src.width - side) // 2
    top = (src.height - side) // 2
    inset = int(side * 0.06)
    src = src.crop((left + inset, top + inset, left + side - inset, top + side - inset))
    inner = size - ring * 2
    photo = src.resize((inner, inner), Image.Resampling.LANCZOS)

    badge = Image.new("RGBA", (size, size), (0, 0, 0, 0))
    draw = ImageDraw.Draw(badge)
    draw.ellipse((0, 0, size - 1, size - 1), fill=GREEN + (255,))
    mask = Image.new("L", (inner, inner), 0)
    ImageDraw.Draw(mask).ellipse((0, 0, inner - 1, inner - 1), fill=255)
    photo.putalpha(mask)
    badge.paste(photo, (ring, ring), photo)
    return badge


def grade_aerial(bg: Image.Image) -> Image.Image:
    bg = ImageEnhance.Contrast(bg).enhance(1.14)
    bg = ImageEnhance.Color(bg).enhance(1.12)
    arr = np.asarray(bg).astype(np.float32)
    yy, xx = np.ogrid[:H, :W]
    # Mild edge vignette only — keep the highway lights.
    dist = np.sqrt(((yy - H * 0.58) / (H * 0.85)) ** 2 + ((xx - W / 2) / (W * 0.78)) ** 2)
    dist = np.clip(dist, 0.0, 1.0)
    keep = 0.78 + 0.22 * (1.0 - dist)
    ink = np.array(INK, dtype=np.float32)
    graded = arr * keep[..., None]
    # Thin cinematic letterbox, ~10px, so crop never eats the lockup.
    letter = np.clip(np.minimum(yy / 10.0, (H - 1 - yy) / 10.0), 0.0, 1.0)
    graded = graded * letter[..., None] + ink * (1.0 - letter)[..., None]
    return Image.fromarray(np.clip(graded, 0, 255).astype(np.uint8), "RGB")


def lockup_dim(size: tuple[int, int], cx: float, cy: float, rx: float, ry: float) -> Image.Image:
    """Soft ink oval behind the type so lettering reads without crushing the still."""
    layer = Image.new("RGBA", size, (0, 0, 0, 0))
    draw = ImageDraw.Draw(layer)
    draw.ellipse((cx - rx, cy - ry, cx + rx, cy + ry), fill=INK + (210,))
    return layer.filter(ImageFilter.GaussianBlur(48))


def main() -> None:
    night = Image.open(ROOT / "public/media/featured-night.webp")
    bg = cover_crop(night, W, H, y_bias=0.55)
    bg = grade_aerial(bg)
    card = bg.convert("RGBA")

    logo = Image.open(ROOT / "public/media/logo.jpg")
    badge_size = 108
    badge = circular_badge(logo, badge_size, ring=4)

    font_baron = ImageFont.truetype(FONT_BOLD, 88)
    font_aerial = ImageFont.truetype(FONT_BOLD, 40)
    font_sub = ImageFont.truetype(FONT_REG, 21)

    line1 = "BARON"
    line2 = "AERIAL MEDIA"
    sub = "Planned aerial operations  ·  Newark, NJ"
    track1 = 16
    track2 = 9
    track_sub = 1.8

    ascent1 = font_baron.getbbox(line1)[3] - font_baron.getbbox(line1)[1]
    ascent2 = font_aerial.getbbox(line2)[3] - font_aerial.getbbox(line2)[1]
    ascent_sub = font_sub.getbbox(sub)[3] - font_sub.getbbox(sub)[1]

    gap_badge = 20
    gap_title = 8
    gap_rule = 18
    rule_h = 3
    gap_sub = 14
    lockup_h = (
        badge_size
        + gap_badge
        + ascent1
        + gap_title
        + ascent2
        + gap_rule
        + rule_h
        + gap_sub
        + ascent_sub
    )
    y = int(round((H - lockup_h) / 2)) - 6
    cx = W / 2.0

    y_badge = y
    y1 = y_badge + badge_size + gap_badge
    y2 = y1 + ascent1 + gap_title
    y_rule = y2 + ascent2 + gap_rule
    y_sub = y_rule + rule_h + gap_sub
    cy = y + lockup_h / 2

    dim = lockup_dim((W, H), cx, cy + 8, rx=430, ry=210)
    card = Image.alpha_composite(card, dim)

    type_layer = Image.new("RGBA", (W, H), (0, 0, 0, 0))
    shadow_layer = Image.new("RGBA", (W, H), (0, 0, 0, 0))
    td = ImageDraw.Draw(type_layer)
    sd_t = ImageDraw.Draw(shadow_layer)

    for layer, fill in ((sd_t, (0, 0, 0, 220)), (td, FG + (255,))):
        draw_tracked(layer, cx, y1, line1, font_baron, fill, track1)
        draw_tracked(layer, cx, y2, line2, font_aerial, fill, track2)
        sub_fill = fill if layer is sd_t else MUTED + (255,)
        draw_tracked(layer, cx, y_sub, sub, font_sub, sub_fill, track_sub)

    rule_w = 68
    td.rounded_rectangle(
        (cx - rule_w / 2, y_rule, cx + rule_w / 2, y_rule + rule_h),
        radius=1.5,
        fill=GREEN + (255,),
    )

    shifted = Image.new("RGBA", (W, H), (0, 0, 0, 0))
    blurred = shadow_layer.filter(ImageFilter.GaussianBlur(6))
    shifted.paste(blurred, (0, 3), blurred)
    card = Image.alpha_composite(card, shifted)

    drop = Image.new("RGBA", (badge_size + 28, badge_size + 28), (0, 0, 0, 0))
    ImageDraw.Draw(drop).ellipse((2, 8, badge_size + 22, badge_size + 24), fill=(0, 0, 0, 150))
    drop = drop.filter(ImageFilter.GaussianBlur(8))
    card.paste(drop, (int(cx - (badge_size + 28) / 2), y_badge + 2), drop)
    card.paste(badge, (int(cx - badge_size / 2), y_badge), badge)
    card = Image.alpha_composite(card, type_layer)

    fin = ImageDraw.Draw(card)
    fin.rectangle((0, 0, W, 4), fill=GREEN + (255,))

    rgb = ImageEnhance.Sharpness(card.convert("RGB")).enhance(1.1)
    rgb.save(OUT_PNG, "PNG")
    w1 = tracked_width(font_baron, line1, track1)
    w2 = tracked_width(font_aerial, line2, track2)
    wsub = tracked_width(font_sub, sub, track_sub)
    print(f"wrote {OUT_PNG} {rgb.size}")
    print(
        "lockup",
        {
            "y": y,
            "y1": y1,
            "y2": y2,
            "y_sub": y_sub,
            "bottom": y_sub + ascent_sub,
            "w1": round(w1),
            "w2": round(w2),
            "wsub": round(wsub),
            "max_w_frac": round(max(w1, w2, wsub) / W, 3),
            "top_margin": y,
            "bot_margin": H - (y_sub + ascent_sub),
        },
    )


if __name__ == "__main__":
    main()
