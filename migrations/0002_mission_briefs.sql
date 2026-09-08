-- Leads are server-only. No anonymous read or update API is exposed.
CREATE TABLE IF NOT EXISTS mission_briefs (
 id uuid PRIMARY KEY,
 payload jsonb NOT NULL,
 client_hash text,
 created_at timestamptz NOT NULL DEFAULT now(),
 delivered_at timestamptz,
 attempts integer NOT NULL DEFAULT 0,
 next_attempt_at timestamptz NOT NULL DEFAULT now(),
 delivery_lease_until timestamptz,
 last_error text
);
CREATE INDEX IF NOT EXISTS mission_briefs_rate_idx ON mission_briefs(client_hash, created_at);
CREATE INDEX IF NOT EXISTS mission_briefs_outbox_idx ON mission_briefs(next_attempt_at) WHERE delivered_at IS NULL;
REVOKE ALL ON mission_briefs FROM PUBLIC;
