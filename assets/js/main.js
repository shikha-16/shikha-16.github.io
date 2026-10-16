/* Shikha Bhat · personal site
   One script for every page. Each block below only runs if its page elements exist.

   EASY EDITS
   - Scrapbook photos (off-the-clock page): put images in images/gallery/ and set `img` in GALLERY below.
   - Blog posts: edit BLOGS below.
*/

/* ================= CONTENT YOU'LL WANT TO EDIT ================= */

// Gallery items. Add a photo by setting img: 'images/gallery/your-file.jpg'.
// Items without an img show as a colored placeholder frame.
const GALLERY = [
  { title: 'Singing at Google',            caption: 'Bengaluru',          img: '' },
  { title: 'Grace Hopper Celebration India', caption: '2024',              img: '' },
  { title: 'First fall in Pittsburgh',     caption: 'CMU',                img: '' },
  { title: 'BITS Goa days',                caption: 'where it started',   img: '' },
  { title: 'Women in Tech meetup',         caption: 'community',          img: '' },
  { title: 'Teach Zari',                   caption: 'with Nirmaan',       img: '' },
  { title: 'Guitar corner',                caption: 'covers in progress', img: '' },
  { title: 'With friends',                 caption: 'Pittsburgh',         img: '' },
];

// Blog posts (cards on blogs.html). Each post's full text lives in blog/<name>.html.
// `filter` must be one of: life, community, events.
const BLOGS = [
  {"title": "The Avenues of a Full Life", "url": "blog/a-full-life.html", "blurb": "What I think a happy life needs: relationships, purpose, presence, growth and a little whimsy.", "tag": "reflection", "year": "", "filter": "life", "cover": "a full life", "color": "#ff8cc6", "pat": 0},
  {"title": "My Love for Music", "url": "blog/music.html", "blurb": "Why music has always felt like home, from singing as a kid to posting covers.", "tag": "music", "year": "", "filter": "life", "cover": "music", "color": "#86ccff", "pat": 1},
  {"title": "Women in Technology: My Journey", "url": "blog/women-in-tech.html", "blurb": "Building a 550+ member community, maintaining open source for Hacktoberfest, and mentoring women in CS.", "tag": "community", "year": "", "filter": "community", "cover": "women in tech", "color": "#7ce7c0", "pat": 2},
  {"title": "Grace Hopper Celebration India 2024", "url": "blog/ghc-india-2024.html", "blurb": "Attending GHC India as a Google delegate: the talks that stuck with me, day by day.", "tag": "conference", "year": "2024", "filter": "events", "cover": "GHC India", "color": "#ffe14d", "pat": 3},
  {"title": "The Generation Google Scholarship", "url": "blog/generation-google.html", "blurb": "My experience with the APAC scholarship for women in CS, round by round, plus tips for applying.", "tag": "scholarship", "year": "2021", "filter": "events", "cover": "Gen Google", "color": "#b99bff", "pat": 0},
  {"title": "The Grace Hopper Celebration 2021", "url": "blog/vghc-2021.html", "blurb": "Becoming a GHC Student Scholar, what the virtual celebration was like, and tips for making the most of it.", "tag": "conference", "year": "2021", "filter": "events", "cover": "vGHC '21", "color": "#ffb067", "pat": 1},
  {"title": "Teach Zari with Nirmaan", "url": "blog/teach-zari.html", "blurb": "Teaching kids in a village near campus, and leading the team that made it happen.", "tag": "volunteering", "year": "2019", "filter": "community", "cover": "Teach Zari", "color": "#ff8cc6", "pat": 2}
];


// Bookshelf on the home page. status: 'reading' (leans out with a bookmark), 'read', or 'next'.
const BOOKS = [
  { title: 'Cleopatra and Frankenstein', author: 'Coco Mellors', status: 'reading', note: '' },
  { title: 'Hollywood Ending', author: 'John Green', status: 'reading', note: '' },
  { title: 'Normal People', author: 'Sally Rooney', status: 'read', note: 'a favorite' },
  { title: 'The Silent Patient', author: 'Alex Michaelides', status: 'read', note: 'a favorite' },
  { title: 'Little Women', author: 'Louisa May Alcott', status: 'read', note: 'a favorite' },
  { title: 'A Little Princess', author: 'Frances Hodgson Burnett', status: 'read', note: 'a favorite' },
];

// Songs on repeat (home page). Add your favorites here; the card stays hidden while this list is empty.
// spotify: optional link to the track on Spotify (Share → Copy song link). Without it, the button searches Spotify.
const TRACKS = [
  // { title: 'Song name', artist: 'Artist', spotify: 'https://open.spotify.com/track/...' },
];
// Optional: a Spotify playlist to embed under the tracks (Share → Copy link to playlist).
// It updates on its own whenever you change the playlist in Spotify.
const SPOTIFY_PLAYLIST = '';

// Travel (home page)
const HOMES = [
  { place: 'Ahmedabad', what: 'born' },
  { place: 'Pune', what: 'lived' },
  { place: 'Goa', what: 'college' },
  { place: 'Bengaluru', what: 'work' },
  { place: 'Pittsburgh', what: 'masters' },
  { place: 'Bay Area', what: 'work' },
];
const VISITED = ['Manali', 'Mumbai', 'Delhi', 'Coorg', 'Sri Lanka', 'Dubai', 'Mauritius', 'Hong Kong', 'Singapore', 'New York', 'Philadelphia', 'Washington DC', 'San Diego', 'Los Angeles'];
const BUCKET = ['Switzerland', 'Paris', 'Australia', 'London', 'Amsterdam', 'Japan', 'Kashmir', 'Meghalaya'];

/* ================= SHARED ================= */
(() => {
const site = document.getElementById('site');
const reduce = matchMedia('(prefers-reduced-motion: reduce)').matches;
const esc = s => String(s).replace(/[&<>"]/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));
const V = n => getComputedStyle(site).getPropertyValue(n).trim();
const $ = id => document.getElementById(id);

// Pittsburgh clock in the menu bar
const clock = $('clock');
function tick() { try { clock.textContent = 'Pittsburgh ' + new Date().toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', timeZone: 'America/New_York' }); } catch (e) {} }
if (clock) { tick(); setInterval(tick, 20000); }

/* ================= HOME: neural network ================= */
// Layers: where I've been → who I am → what I do → Shikha. Edit labels, descriptions and wires here.
const NET = {
  layers: [
    [ { id: 'work', t: 'Work', d: 'ML engineer at Google on Maps and Ads, and internships at Google and Uber' },
      { id: 'fam', t: 'Family and Friends', d: 'The people who keep me grounded' },
      { id: 'edu', t: 'Education', d: 'Computer science at BITS Goa, and an MS in Machine Learning at Carnegie Mellon' },
      { id: 'travelart', t: 'Travel and Art', d: 'Six homes so far, a long bucket list, and anything creative' } ],
    [ { id: 'passion', t: 'Passion', d: 'Going all in on what matters to me' },
      { id: 'curiosity', t: 'Curiosity', d: 'Wanting to know how things work, and why' },
      { id: 'compassion', t: 'Compassion', d: 'Caring about who the work is for' },
      { id: 'ethics', t: 'Ethics', d: 'Doing the right thing, especially with AI' },
      { id: 'love', t: 'Love', d: 'For people, for music, for good stories' },
      { id: 'motivation', t: 'Motivation', d: 'Showing up and doing the work' },
      { id: 'creativity', t: 'Creativity', d: 'Finding a new way to look at a problem' } ],
    [ { id: 'research', t: 'Research', d: 'ML for maternal health; earlier, COVID-19 modelling' },
      { id: 'music', t: 'Music', d: 'Trained in Hindustani classical; covers on YouTube' },
      { id: 'cs', t: 'Computer Science', d: 'Software engineering and ML, from Google to CMU' },
      { id: 'wit', t: 'Women in Tech', d: 'Founded a 550+ member community; mentoring' } ],
    [ { id: 'me', t: 'Shikha', d: 'All of the above, still training' } ],
  ],
  wires: {
    edu: ['curiosity', 'passion', 'creativity', 'ethics'],
    work: ['curiosity', 'motivation', 'passion'],
    fam: ['love', 'compassion', 'motivation', 'ethics'],
    travelart: ['love', 'creativity', 'compassion', 'passion'],
    curiosity: ['research', 'cs'],
    love: ['music'],
    motivation: ['cs', 'research'],
    compassion: ['research', 'wit'],
    ethics: ['research', 'cs'],
    creativity: ['music', 'cs'],
    passion: ['wit', 'cs'],
    research: ['me'], music: ['me'], cs: ['me'], wit: ['me'],
  },
};
const nc = $('net');
if (nc) {
  const nx = nc.getContext('2d'), tip = $('tip');
  const W = 880, H = 640, XS = [215, 420, 615, 780];
  const LAYER = ['#86ccff', '#ff8cc6', '#7ce7c0', '#ffe14d'];
  const nodes = [], byId = {};
  NET.layers.forEach((layer, li) => layer.forEach((n, i) => {
    const top = 40, bot = H - 52, span = bot - top;
    const y = layer.length === 1 ? (top + bot) / 2 - 20 : top + span * i / (layer.length - 1) * (li === 1 ? 1 : .9) + (li === 1 ? 0 : span * .05);
    const o = { ...n, li, i, x: XS[li], y, r: li === 3 ? 36 : 14 };
    nodes.push(o); byId[o.id] = o;
  }));
  const edges = []; Object.entries(NET.wires).forEach(([a, bs]) => bs.forEach(b => byId[a] && byId[b] && edges.push([byId[a], byId[b]])));
  const path = o => {
    const set = new Set([o]);
    const walk = (n, dir) => edges.forEach(([a, b]) => { const nxt = dir > 0 ? (a === n ? b : null) : (b === n ? a : null); if (nxt && !set.has(nxt)) { set.add(nxt); walk(nxt, dir); } });
    walk(o, 1); walk(o, -1); return set;
  };
  const curve = (a, b) => { const dx = (b.x - a.x) * .5; return [a.x, a.y, a.x + dx, a.y, b.x - dx, b.y, b.x, b.y]; };
  const at = (c, t) => { const u = 1 - t; return [u*u*u*c[0] + 3*u*u*t*c[2] + 3*u*t*t*c[4] + t*t*t*c[6], u*u*u*c[1] + 3*u*u*t*c[3] + 3*u*t*t*c[5] + t*t*t*c[7]]; };
  const pill = (txt, x, y, align, font) => {
    nx.font = font; const w = nx.measureText(txt).width, h = 24, px = 7;
    const left = align === 'right' ? x - w - px * 2 : align === 'center' ? x - w / 2 - px : x;
    nx.fillStyle = 'rgba(255,255,255,.92)'; nx.beginPath(); nx.roundRect ? nx.roundRect(left, y - h / 2, w + px * 2, h, 12) : nx.rect(left, y - h / 2, w + px * 2, h); nx.fill();
    nx.fillStyle = V('--ink'); nx.textAlign = 'left'; nx.textBaseline = 'middle'; nx.fillText(txt, left + px, y + 1); nx.textBaseline = 'alphabetic';
  };
  let pulse = -1, hover = null;
  function drawNet(p) {
    const ink = V('--ink');
    const on = hover ? path(hover) : null;
    nx.clearRect(0, 0, W, H);
    // wires as soft curves
    edges.forEach(([a, b]) => {
      const c = curve(a, b), lit = (p >= 0 && p > a.li && p < a.li + 1.7) || (on && on.has(a) && on.has(b));
      nx.strokeStyle = lit ? V('--accent') : (on ? '#e3eaf5' : '#b8c8e0'); nx.lineWidth = lit ? 3 : 1.6;
      nx.beginPath(); nx.moveTo(c[0], c[1]); nx.bezierCurveTo(c[2], c[3], c[4], c[5], c[6], c[7]); nx.stroke();
      if (p > a.li && p < a.li + 1) { const [x, y] = at(c, p - a.li); nx.fillStyle = V('--accent'); nx.beginPath(); nx.arc(x, y, 4.5, 0, 7); nx.fill(); }
    });
    // nodes
    nodes.forEach(o => {
      const dim = on && !on.has(o), act = p < 0 || p >= o.li;
      nx.globalAlpha = dim ? .28 : 1;
      if (hover === o) { nx.fillStyle = LAYER[o.li] + '55'; nx.beginPath(); nx.arc(o.x, o.y, o.r + 9, 0, 7); nx.fill(); }
      nx.beginPath(); nx.arc(o.x, o.y, o.r, 0, 7); nx.fillStyle = act ? LAYER[o.li] : '#fff'; nx.fill();
      nx.lineWidth = 2.2; nx.strokeStyle = ink; nx.stroke();
      if (o.li === 0) pill(o.t, o.x - o.r - 6, o.y, 'right', '500 19px IBM Plex Sans, sans-serif');
      else if (o.li === 3) { nx.fillStyle = ink; nx.textAlign = 'center'; nx.font = 'italic 40px Instrument Serif, serif'; nx.fillText(o.t, o.x, o.y + o.r + 42); }
      else pill(o.t, o.x, o.y + o.r + 17, 'center', o.li === 1 ? '500 16px IBM Plex Mono, monospace' : '600 17px IBM Plex Sans, sans-serif');
      nx.globalAlpha = 1;
    });
  }
  const hit = e => { const r = nc.getBoundingClientRect(), x = (e.clientX - r.left) * W / r.width, y = (e.clientY - r.top) * H / r.height; let f = null; nodes.forEach(o => { if (Math.hypot(o.x - x, o.y - y) < o.r + 12) f = o; }); return f; };
  nc.addEventListener('pointermove', e => {
    const f = hit(e); if (f !== hover) { hover = f; drawNet(pulse < 0 ? 4 : pulse); }
    if (f) { tip.innerHTML = '<b>' + esc(f.t) + '</b><br>' + esc(f.d); tip.classList.add('on'); const fr = $('fig').getBoundingClientRect();
      tip.style.left = Math.min(e.clientX - fr.left + 14, fr.width - 240) + 'px'; tip.style.top = (e.clientY - fr.top + 14) + 'px'; }
    else tip.classList.remove('on');
  });
  nc.addEventListener('pointerleave', () => { hover = null; tip.classList.remove('on'); drawNet(pulse < 0 ? 4 : pulse); });
  $('run').addEventListener('click', () => {
    if (reduce) { drawNet(4); return; } let t0 = null;
    const go = ts => { if (!t0) t0 = ts; pulse = (ts - t0) / 700; drawNet(pulse); if (pulse < 4) requestAnimationFrame(go); else { pulse = -1; drawNet(4); } };
    requestAnimationFrame(go);
  });
  drawNet(4);
  if (document.fonts) document.fonts.ready.then(() => drawNet(4));
}

/* ================= HOME: terminal ================= */
const out = $('term-out');
if (out) {
  const inp = $('term-in'), tb = $('term-body');
  const go = (url, label) => { setTimeout(() => { location.href = url; }, 450); return 'opening ' + label + '…'; };
  const cmds = {
    help: () => 'commands: <span class="k">whoami</span> <span class="k">where is she</span> <span class="k">research</span> <span class="k">music</span> <span class="k">reading</span> <span class="k">travel</span>\npages:    <span class="k">experiences</span> <span class="k">off-the-clock</span> <span class="k">blogs</span> <span class="k">contact</span>\nalso:     <span class="k">clear</span>',
    whoami: () => 'Shikha Bhat. MS ML @ Carnegie Mellon. ex-Google ML engineer.\nbuilds ML for maternal health. cares most about AI for social impact.\noff the clock: sings, reads, travels.',
    research: () => '<span class="c">now</span>   sequential screening for postpartum depression (CMU LASI × UPMC)\n<span class="c">past</span>  agent-based COVID-19 models (ICAART), severity risk (Frontiers)',
    music: () => 'trained in hindustani classical · girly pop on repeat\nlistens to every genre, always for the lyrics first\ncovers → <a href="https://www.youtube.com/channel/UCk3wDccuE9qDIIfIF9JwXhQ" target="_blank" rel="noopener">youtube</a>',
    reading: () => { const r = BOOKS.filter(b => b.status === 'reading'); return 'currently reading: ' + (r.length ? r.map(b => '<span class="c">' + esc(b.title) + '</span>' + (b.author ? ' by ' + esc(b.author) : '')).join(', ') : 'nothing right now') + '\nfull shelf → <a href="off-the-clock.html">~/off-the-clock</a>'; },
    travel: () => 'homes: ' + HOMES.map(h => h.place).join(' → ') + '\nbeen to ' + VISITED.length + ' more places · bucket list: ' + BUCKET.slice(0, 4).join(', ') + '…',
    experiences: () => go('experiences.html', '~/experiences'),
    'off-the-clock': () => go('off-the-clock.html', '~/off-the-clock'),
    gallery: () => go('off-the-clock.html#scrapbook', '~/off-the-clock'),
    blogs: () => go('blogs.html', '~/blogs'),
    contact: () => go('contact.html', '~/contact'),
    ls: () => 'experiences/  off-the-clock/  blogs/  contact',
    sudo: a => { if (a.join(' ') !== 'hire shikha') return 'try: sudo hire shikha'; setTimeout(() => { location.href = 'contact.html'; }, 1300); return 'permission granted ✨ graduating Dec 2026.\nopening ~/contact so you can say hi…'; },
    where: () => { let t = ''; try { t = new Date().toLocaleTimeString('en-US', { hour: 'numeric', minute: '2-digit', timeZone: 'America/New_York' }); } catch (e) {} return 'she\'s in <span class="c">Pittsburgh, PA</span>, at Carnegie Mellon' + (t ? '\nlocal time: ' + t : ''); },
    clear: () => { out.innerHTML = ''; return null; },
  };
  cmds.whereis = cmds.where;
  cmds.cd = a => { const t = (a[0] || '').replace('~/', '').replace(/\/$/, ''); return cmds[t] && t !== 'cd' ? cmds[t]() : 'cd: try ~/experiences, ~/off-the-clock, ~/blogs or ~/contact'; };
  function run(raw) {
    raw = raw.trim(); if (!raw) return; const [c, ...a] = raw.split(/\s+/);
    out.insertAdjacentHTML('beforeend', '<span class="k">$</span> ' + esc(raw) + '\n');
    const f = cmds[c.toLowerCase()]; const r = f ? f(a) : 'command not found: ' + esc(c) + ' · try help';
    if (r !== null) out.insertAdjacentHTML('beforeend', r + '\n\n'); tb.scrollTop = tb.scrollHeight;
  }
  $('term-form').addEventListener('submit', e => { e.preventDefault(); run(inp.value); inp.value = ''; });
  document.querySelectorAll('.term-hints button').forEach(b => b.addEventListener('click', () => run(b.dataset.cmd)));
}

/* ================= HOME: vinyl ================= */
const disc = $('disc');
if (disc) {
  const spinBtn = $('spin'); let rot = 0, vel = 0, spinning = false, dragA = null;
  (function loop() { if (dragA === null) { if (spinning) vel += (2 - vel) * .05; else vel *= .97; rot += vel; } disc.style.transform = 'rotate(' + rot + 'deg)'; requestAnimationFrame(loop); })();
  const ang = e => { const r = disc.getBoundingClientRect(); return Math.atan2(e.clientY - (r.top + r.height / 2), e.clientX - (r.left + r.width / 2)) * 180 / Math.PI; };
  disc.addEventListener('pointerdown', e => { dragA = ang(e); disc.setPointerCapture(e.pointerId); });
  disc.addEventListener('pointermove', e => { if (dragA === null) return; const a = ang(e); let d = a - dragA; if (d > 180) d -= 360; if (d < -180) d += 360; rot += d; vel = d; dragA = a; });
  ['pointerup', 'pointercancel'].forEach(t => disc.addEventListener(t, () => dragA = null));
  spinBtn.addEventListener('click', () => { spinning = !spinning; disc.classList.toggle('out', spinning); spinBtn.textContent = spinning ? '❚❚ Stop' : '▶ Spin it'; });
}


/* ================= HOME: bookshelf + bucket list ================= */
const shelf = $('shelf');
if (shelf) {
  const SPINE = ['#ff8cc6', '#86ccff', '#7ce7c0', '#ffe14d', '#b99bff', '#ffb067'];
  const info = $('book-info');
  const show = i => {
    const b = BOOKS[i];
    shelf.querySelectorAll('.spine').forEach((el, j) => el.setAttribute('aria-pressed', j === i));
    info.innerHTML = `<span class="st st-${b.status}">${b.status === 'reading' ? 'currently reading' : b.status === 'next' ? 'up next' : 'read'}</span><b>${esc(b.title)}</b>${b.author ? `<span class="by">by ${esc(b.author)}</span>` : ''}${b.note ? `<p>${esc(b.note)}</p>` : ''}`;
  };
  shelf.innerHTML = BOOKS.map((b, i) => `<button class="spine${b.status === 'reading' ? ' reading' : ''}" role="listitem" style="background:${SPINE[i % SPINE.length]};height:${150 + ((i * 37) % 4) * 14}px" aria-label="${esc(b.title)}${b.author ? ' by ' + esc(b.author) : ''}"><span>${esc(b.title)}</span></button>`).join('');
  shelf.querySelectorAll('.spine').forEach((el, i) => el.addEventListener('click', () => show(i)));
  const cur = BOOKS.findIndex(b => b.status === 'reading');
  show(cur < 0 ? 0 : cur);
}
const homes = $('homes');
if (homes) {
  const C = ['#86ccff', '#ffe14d', '#7ce7c0', '#ffb067', '#ff8cc6', '#b99bff'];
  $('travel-count').textContent = `${HOMES.length} homes · ${VISITED.length} places visited · ${BUCKET.length} on the bucket list`;
  homes.innerHTML = HOMES.map((h, i) => `<li><span class="dot" style="background:${C[i % C.length]}"></span><b>${esc(h.place)}</b><small>${esc(h.what)}</small></li>`).join('');
  $('stamps').innerHTML = VISITED.map((v, i) => `<span class="stamp-tag" style="--r:${((i * 37) % 9) - 4}deg;background:${C[i % C.length]}">${esc(v)}</span>`).join('');
  $('bucket').innerHTML = BUCKET.map(b => `<li><span class="box"></span>${esc(b)}</li>`).join('');
}

/* ================= HOME: songs on repeat ================= */
const crate = $('crate');
if (crate) {
  const card = $('tracks-card');
  if (!TRACKS.length && !SPOTIFY_PLAYLIST) { card.hidden = true; }
  else {
    const C = ['#ff8cc6', '#86ccff', '#7ce7c0', '#ffe14d', '#b99bff', '#ffb067'];
    const info = $('track-info');
    const link = t => t.spotify || 'https://open.spotify.com/search/' + encodeURIComponent(t.title + ' ' + t.artist);
    const show = i => {
      const t = TRACKS[i];
      crate.querySelectorAll('.sleeve').forEach((el, j) => el.setAttribute('aria-pressed', j === i));
      info.innerHTML = `<span class="st st-reading">on repeat</span><b>${esc(t.title)}</b><span class="by">${esc(t.artist)}</span><a class="btn" href="${esc(link(t))}" target="_blank" rel="noopener">▶ play on Spotify ↗</a>`;
    };
    crate.innerHTML = TRACKS.map((t, i) => `<button class="sleeve" style="background:${C[i % C.length]};--r:${((i * 29) % 7) - 3}deg" aria-label="${esc(t.title)} by ${esc(t.artist)}"><span>${esc(t.title)}</span></button>`).join('');
    crate.querySelectorAll('.sleeve').forEach((el, i) => el.addEventListener('click', () => show(i)));
    if (TRACKS.length) show(0); else crate.hidden = true;
    const m = SPOTIFY_PLAYLIST.match(/playlist\/([A-Za-z0-9]+)/);
    if (m) $('spotify-embed').innerHTML = `<iframe title="My Spotify playlist" src="https://open.spotify.com/embed/playlist/${m[1]}?utm_source=generator" width="100%" height="152" frameborder="0" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>`;
  }
}

/* ================= EXPERIENCES: PPD timeline + project filter ================= */
const tlPts = document.querySelector('.tl-pts');
if (tlPts) {
  const TP = [[40, 'prior'], [128, 'T1'], [216, 'T2'], [304, 'T3'], [392, 'delivery'], [480, 'postpartum']];
  const ink = V('--ink'), fills = [V('--c4'), V('--c3'), V('--c2'), V('--c6'), V('--c1'), V('--c5')];
  tlPts.innerHTML = TP.map(([x, l], i) => `<circle cx="${x}" cy="96" r="10" fill="${fills[i]}" stroke="${ink}" stroke-width="2"/><text x="${x}" y="130" fill="${ink}">${l}</text>`).join('');
  document.querySelector('.tl-line').setAttribute('stroke', ink);
  document.querySelector('.tl-arcs').setAttribute('stroke', V('--accent'));
  document.querySelector('.tl-q').setAttribute('fill', V('--pen'));
  document.querySelector('.tl-cap').setAttribute('fill', V('--mute'));
}
document.querySelectorAll('#filters .chip').forEach(c => c.addEventListener('click', () => {
  document.querySelectorAll('#filters .chip').forEach(x => x.setAttribute('aria-pressed', x === c));
  const f = c.dataset.f; document.querySelectorAll('#cards .card').forEach(card => card.hidden = !(f === 'all' || card.dataset.t.split(' ').includes(f)));
}));

/* ================= GALLERY: scrapbook ================= */
const board = $('board');
if (board) {
  const TINTS = ['#ff8cc6', '#ffe14d', '#7ce7c0', '#86ccff', '#b99bff', '#ffb067', '#ff8cc6', '#7ce7c0'];
  board.innerHTML = GALLERY.map((g, i) => `<div class="it pol"><span class="tape"></span>${g.img
      ? `<img src="${esc(g.img)}" alt="${esc(g.title)}" loading="lazy" draggable="false">`
      : `<div class="ph" style="background:${TINTS[i % 8]}"><div><small>photo</small>${esc(g.title)}</div></div>`}<div class="cap">${esc(g.caption)}</div></div>`).join('')
    + `<div class="it pass"><div class="m"><div class="air">Shikha Air · boarding pass</div><div class="route"><span>GOI<small>BITS Goa</small></span>→<span>BLR<small>Google</small></span>→<span>PIT<small>CMU</small></span></div><dl><dt>Class</dt><dt>Seat</dt><dt>Gate</dt><dd>MS ML</dd><dd>LASI lab</dd><dd>Dec 2026</dd></dl></div><div class="s">2019 → 2026<br>S. BHAT<br>Bags: 1 guitar</div></div>`
    + ['ex-Googler', "CMU '26", 'ML nerd', 'bookworm'].map((t, i) => `<div class="it stk" style="background:${TINTS[(i + 2) % 8]}">${t}</div>`).join('');
  const items = [...board.children];
  // [left %, top px, rotation] for each item in order: 8 photos, boarding pass, 4 stickers
  const SCATTER = [[2, 30, -5], [22, 10, 4], [42, 40, -3], [62, 6, 5], [80, 46, -6], [6, 360, 3], [28, 330, -4], [52, 360, 6], [66, 300, -2], [44, 250, -8], [8, 640, 6], [30, 640, -4], [50, 630, 3], [72, 640, -5]];
  const narrow = () => innerWidth <= 900;
  function layout(tidy) {
    if (narrow()) return;
    const bw = board.clientWidth;
    if (tidy) {
      let x = 16, y = 24, rowH = 0;
      items.forEach(el => { const w = el.offsetWidth, h = el.offsetHeight; if (x + w > bw - 16) { x = 16; y += rowH + 24; rowH = 0; } el.style.left = x + 'px'; el.style.top = y + 'px'; el.style.transform = 'rotate(0deg)'; x += w + 20; rowH = Math.max(rowH, h); });
      board.style.height = Math.max(700, y + rowH + 30) + 'px'; return;
    }
    board.style.height = '700px';
    items.forEach((el, i) => { const [lx, ty, r] = SCATTER[i % SCATTER.length]; const w = el.offsetWidth; el.style.left = Math.min(bw - w - 10, Math.max(10, lx / 100 * bw)) + 'px'; el.style.top = Math.min(ty, 700 - el.offsetHeight - 10) + 'px'; el.style.transform = `rotate(${r}deg)`; });
  }
  let z = 10;
  items.forEach(el => el.addEventListener('pointerdown', e => {
    if (narrow()) return;
    const sx = e.clientX, sy = e.clientY, ox = el.offsetLeft, oy = el.offsetTop; el.setPointerCapture(e.pointerId); el.classList.add('drag'); el.style.zIndex = ++z;
    const mv = ev => { el.style.left = Math.max(-10, Math.min(board.clientWidth - el.offsetWidth + 10, ox + ev.clientX - sx)) + 'px'; el.style.top = Math.max(-10, Math.min(board.clientHeight - el.offsetHeight + 10, oy + ev.clientY - sy)) + 'px'; };
    const up = () => { el.classList.remove('drag'); el.removeEventListener('pointermove', mv); el.removeEventListener('pointerup', up); };
    el.addEventListener('pointermove', mv); el.addEventListener('pointerup', up);
  }));
  $('scatter').addEventListener('click', () => layout(false));
  $('tidy').addEventListener('click', () => layout(true));
  addEventListener('resize', () => layout(false));
  addEventListener('load', () => layout(false));
  layout(false);
}

/* ================= BLOGS: cards + filter ================= */
const posts = $('notes');
if (posts) {
  const COV = ['#ff8cc6', '#86ccff', '#7ce7c0', '#ffe14d', '#b99bff', '#ffb067', '#ff8cc6'];
  posts.innerHTML = BLOGS.map((b, i) => `<a class="post${i === 0 ? ' feat' : ''}" data-t="${b.filter}" href="${esc(b.url)}">
    <div class="cover pat${b.pat ?? i % 4}" style="background-color:${b.color || COV[i % COV.length]}"><span class="sticker">${esc(b.tag)}${b.year ? ' · ' + b.year : ''}</span><span class="kicker">${esc(b.cover)}</span></div>
    <div class="pbody"><h3>${esc(b.title)}</h3><p>${esc(b.blurb)}</p><span class="read">read the post →</span></div></a>`).join('');
  document.querySelectorAll('#bfilters .chip').forEach(c => c.addEventListener('click', () => {
    document.querySelectorAll('#bfilters .chip').forEach(x => x.setAttribute('aria-pressed', x === c));
    const f = c.dataset.f; document.querySelectorAll('#notes .post').forEach(p => p.hidden = !(f === 'all' || p.dataset.t === f));
  }));
}

/* ================= CONTACT: friendship bracelet ================= */
const beads = $('beads');
if (beads) {
  const bIn = $('b-in');
  const pal = [['#ff8cc6', '#26193d'], ['#ffe14d', '#26193d'], ['#7ce7c0', '#26193d'], ['#86ccff', '#26193d'], ['#b99bff', '#26193d'], ['#ffb067', '#26193d']];
  const spacer = c => `<span class="bead sp" style="background:${c};border:1.5px solid #26193d"></span>`;
  function string(txt) {
    txt = (txt || '').toUpperCase().slice(0, 16);
    beads.innerHTML = txt
      ? spacer('#ffffff') + spacer(pal[1][0]) + [...txt].map((ch, i) => ch === ' ' ? spacer('#ffffff') : `<span class="bead" style="background:${pal[i % 6][0]};color:${pal[i % 6][1]};border:1.5px solid #26193d;animation-delay:${i * .04}s">${esc(ch)}</span>`).join('') + spacer(pal[1][0]) + spacer('#ffffff')
      : '<span style="color:var(--mute)">type something</span>';
  }
  bIn.addEventListener('input', () => string(bIn.value));
  document.querySelectorAll('.b-ctrl [data-b]').forEach(b => b.addEventListener('click', () => { bIn.value = b.dataset.b; string(b.dataset.b); }));
  string(bIn.value);
}
})();

/* ================= BLOG POSTS: highlight current section in "on this page" ================= */
(() => {
  const links = [...document.querySelectorAll('.toc-list a')];
  if (!links.length || !('IntersectionObserver' in window)) return;
  const map = new Map(links.map(a => [a.getAttribute('href').slice(1), a]));
  const io = new IntersectionObserver(es => es.forEach(e => { if (e.isIntersecting) { links.forEach(l => l.classList.remove('on')); map.get(e.target.id)?.classList.add('on'); } }), { rootMargin: '-20% 0px -70% 0px' });
  document.querySelectorAll('.article-body h2[id]').forEach(h => io.observe(h));
})();
