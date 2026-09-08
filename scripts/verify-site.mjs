/** CI smoke: checks the built HTML and real browser behavior; never sends a live brief. */
import assert from 'node:assert/strict';
import fs from 'node:fs/promises';
import {chromium} from 'playwright';
const base=process.env.BAM_TEST_URL || 'http://127.0.0.1:8081';
const browser=await chromium.launch({headless:true,...(process.env.BAM_CHROME_CHANNEL?{channel:process.env.BAM_CHROME_CHANNEL}:{})});
const findings=[];
try {
 const sitemap=await (await fetch(base+'/sitemap.xml')).text();
 const paths=[...sitemap.matchAll(/<loc>https:\/\/baronaerial.com(.*?)<\/loc>/g)].map(m=>m[1]||'/');
 const titles=new Set();
 for(const path of paths){
  const res=await fetch(base+path);assert.equal(res.status,200,path);
  const html=await res.text();assert(!html.includes('grok.com/grok-app-builder'),`Builder script on ${path}`);
  assert(!html.includes('/__grok/'),`Builder manifest on ${path}`);
  const title=html.match(/<title>(.*?)<\/title>/)?.[1];assert(title,`Title missing on ${path}`);assert(!titles.has(title),`Duplicate title ${title}`);titles.add(title);
  assert(html.includes('rel="canonical"'),`Canonical missing ${path}`);
  for(const tag of html.matchAll(/<link[^>]*rel="stylesheet"[^>]*>/g)) {const href=tag[0].match(/href="([^"]+)"/)?.[1];if(href?.startsWith('/'))assert.equal((await fetch(base+href)).status,200,`Missing CSS ${href}`);}
 }
 for(const width of [390,834,1440]) {
  const context=await browser.newContext({viewport:{width,height:900}});const page=await context.newPage();const errors=[];
  page.on('pageerror',e=>errors.push(e.message));
  await page.goto(base,{waitUntil:'networkidle'});
  assert((await page.locator('h1').innerText()).includes('Altitude'),'Blank page');
  assert.equal(await page.evaluate(()=>document.documentElement.scrollWidth),width,'Horizontal overflow');
  const hero=page.locator('.photo-hero').first();assert(await hero.locator('img').evaluate(el=>el.complete&&el.naturalWidth>0),'Hero failed');
  if(width<1024){await page.getByRole('button',{name:'Open menu',exact:true}).click();assert(await page.getByRole('navigation',{name:'Mobile'}).isVisible());await page.keyboard.press('Escape');assert(!await page.getByRole('navigation',{name:'Mobile'}).count());assert.equal(await page.getByRole('button',{name:'Open menu',exact:true}).evaluate(el=>el===document.activeElement),true);}
  await page.getByRole('button',{name:'Switch to light mode'}).click();assert.equal(await page.locator('html').getAttribute('data-theme'),'light');
  assert.equal(await hero.locator('h1').evaluate(el=>getComputedStyle(el).color),'rgb(243, 246, 241)');
  await page.goto(base+'/contact');
  await page.locator('#mtype').selectOption({label:'Mapping + 3D Site Models'});await page.locator('#loc').fill('QA sample location');await page.locator('#timing').selectOption('Flexible window');await page.getByRole('button',{name:'Continue Mission Brief'}).click();await page.locator('#site').fill('Synthetic test draft. Do not send.');await page.reload();assert.equal(await page.locator('#site').inputValue(),'Synthetic test draft. Do not send.');
  assert.equal(await page.locator('#phone').getAttribute('type'),'tel');
  assert.deepEqual(errors,[],`Runtime errors at ${width}`);
  findings.push({width,overflow:false,menu:width<1024?'passed':'desktop',draftRestore:'passed'});
  await context.close();
 }
 const nojs=await browser.newContext({javaScriptEnabled:false,viewport:{width:390,height:844}});const page=await nojs.newPage();await page.goto(base);assert.equal(await page.locator('body').evaluate(el=>getComputedStyle(el).backgroundColor),'rgb(10, 14, 10)');await nojs.close();
 console.log(JSON.stringify({routes:paths.length,uniqueTitles:titles.size,stylesheets:'200',javascriptDisabled:'styled',viewports:findings},null,2));
} finally {await browser.close();}
