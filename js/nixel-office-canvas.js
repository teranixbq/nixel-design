/**
 * NIXEL - Living Office Canvas Engine
 * Modular Engine utilizing NixelOfficeAssets for 50% Cozy View & Business Fixtures
 * Strictly < 500 lines.
 */

(function () {
  const canvas = document.getElementById('officeCanvas');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');

  let W = 1100, H = 480, tick = 0, activeId = 1, currentDomainKey = 'seo';

  const domains = {
    seo: [
      { id: 1, title: 'SEO & DATA LAB', role: 'Keyword Analyst', emp: 'Specialist 01', actWork: 'Analyzing search intent clusters', accent: '#445963', desk: {x: 140, y: 110}, idle: {x: 335, y: 340, name: 'Water Dispenser', act: 'Refilling cold water bottle'} },
      { id: 2, title: 'EDITORIAL SUITE', role: 'Content Strategist', emp: 'Specialist 02', actWork: 'Drafting semantic 2,800w guide', accent: '#8c581e', desk: {x: 520, y: 110}, idle: {x: 600, y: 350, name: 'Breakout Sofa', act: 'Lounging on sofa cushion'} },
      { id: 3, title: 'DEVOPS & RELEASE', role: 'Release Engineer', emp: 'Specialist 03', actWork: 'Dispatching webhook CMS payloads', accent: '#3c5c48', desk: {x: 880, y: 110}, idle: {x: 860, y: 375, name: 'Espresso Bar', act: 'Brewing steaming hot espresso'} },
      { id: 4, title: 'DOMAIN ARCH POD', role: 'Topology Architect', emp: 'Specialist 04', actWork: 'Auditing 48 backlink profiles & SILO', accent: '#944530', desk: {x: 160, y: 330}, idle: {x: 440, y: 200, name: 'Whiteboard Board', act: 'Sketching cluster concepts'} }
    ],
    ecommerce: [
      { id: 1, title: 'GROWTH & ADS', role: 'Performance Marketer', emp: 'Specialist 01', actWork: 'Optimizing TikTok & Meta ad spend', accent: '#445963', desk: {x: 140, y: 110}, idle: {x: 335, y: 340, name: 'Water Dispenser', act: 'Drinking cold water'} },
      { id: 2, title: 'STOREFRONT MERCH', role: 'Catalog Manager', emp: 'Specialist 02', actWork: 'Publishing seasonal catalog variants', accent: '#8c581e', desk: {x: 520, y: 110}, idle: {x: 600, y: 350, name: 'Breakout Sofa', act: 'Reviewing design catalog'} },
      { id: 3, title: 'LOGISTICS & SHIP', role: 'Fulfillment Lead', emp: 'Specialist 03', actWork: 'Dispatching automated batch orders', accent: '#3c5c48', desk: {x: 880, y: 110}, idle: {x: 860, y: 375, name: 'Espresso Bar', act: 'Drinking fresh coffee'} },
      { id: 4, title: 'CUSTOMER CARE', role: 'CX Specialist', emp: 'Specialist 04', actWork: 'Resolving priority VIP return tickets', accent: '#944530', desk: {x: 160, y: 330}, idle: {x: 440, y: 200, name: 'Whiteboard Board', act: 'Updating customer FAQ'} }
    ],
    saas: [
      { id: 1, title: 'PRODUCT DESIGN', role: 'Product Designer', emp: 'Specialist 01', actWork: 'Validating design tokens in Figma', accent: '#8c581e', desk: {x: 140, y: 110}, idle: {x: 440, y: 200, name: 'Whiteboard Board', act: 'Reviewing wireframes'} },
      { id: 2, title: 'API & SYSTEMS', role: 'Backend Engineer', emp: 'Specialist 02', actWork: 'Scaling distributed event queues', accent: '#445963', desk: {x: 520, y: 110}, idle: {x: 860, y: 375, name: 'Espresso Bar', act: 'Brewing strong espresso'} },
      { id: 3, title: 'UI CORE ENGINE', role: 'Frontend Engineer', emp: 'Specialist 03', actWork: 'Profiling 60 FPS canvas loop', accent: '#944530', desk: {x: 880, y: 110}, idle: {x: 600, y: 350, name: 'Breakout Sofa', act: 'Resting on lounge couch'} },
      { id: 4, title: 'DEPLOY PIPELINE', role: 'DevOps Specialist', emp: 'Specialist 04', actWork: 'Deploying zero-downtime canary', accent: '#3c5c48', desk: {x: 160, y: 330}, idle: {x: 335, y: 340, name: 'Water Dispenser', act: 'Refilling water mug'} }
    ]
  };

  let currentRoles = domains.seo;
  let characters = [];

  function initCharacters() {
    characters = currentRoles.map(r => ({
      id: r.id,
      data: r,
      state: 'working',
      curX: r.desk.x,
      curY: r.desk.y,
      targetX: r.desk.x,
      targetY: r.desk.y,
      stepCount: 0,
      facing: 1
    }));
  }
  initCharacters();

  function resize() {
    const rect = canvas.getBoundingClientRect();
    W = rect.width || 1100;
    H = rect.height || 480;
    canvas.width = W;
    canvas.height = H;
  }
  window.addEventListener('resize', resize);
  resize();

  const px = (x, y, w, h, col) => {
    ctx.fillStyle = col;
    ctx.fillRect(Math.round(x), Math.round(y), Math.round(w), Math.round(h));
  };

  function drawOffice() {
    ctx.fillStyle = '#F4EDE2';
    ctx.fillRect(0, 0, W, H);

    for (let y = 0; y < H; y += 28) px(0, y, W, 1, '#E9DEC9');
    for (let x = 0; x < W; x += 110) px(x, 0, 1, H, '#E9DEC9');

    const wallCol = '#DCD3C3';
    const glassCol = 'rgba(215, 235, 248, 0.45)';

    drawSuiteBox(20, 20, 320, 220, currentRoles[0], wallCol, glassCol);
    drawSuiteBox(360, 20, 340, 220, currentRoles[1], '#D5C7B2', glassCol);
    drawSuiteBox(720, 20, 360, 220, currentRoles[2], wallCol, glassCol);

    px(20, 260, 340, 4, wallCol);
    px(80, 325, 180, 8, '#CAD4DC');
    drawPlate(30, 268, 160, currentRoles[3]);

    // Draw rich cozy office amenities, lounge, botanicals, and domain fixtures
    if (window.NixelOfficeAssets) {
      window.NixelOfficeAssets.draw(ctx, W, H, tick, currentRoles, characters, px, currentDomainKey);
    }

    currentRoles.forEach(r => drawWorkstation(r));
  }

  function drawSuiteBox(rx, ry, rw, rh, role, wallCol, glassCol) {
    px(rx, ry, rw, 18, wallCol);
    px(rx, ry, 4, rh, wallCol);
    px(rx + rw - 4, ry, 4, rh, wallCol);
    px(rx, ry + rh - 6, rw * 0.60, 6, wallCol);
    ctx.fillStyle = glassCol;
    ctx.fillRect(rx + 8, ry + rh - 18, rw * 0.60 - 12, 12);
    px(rx + 8, ry + rh - 18, rw * 0.60 - 12, 1, '#B8C9D4');
    px(rx + rw * 0.60, ry + rh - 6, 4, 6, wallCol);
    px(rx + rw - 4, ry + rh - 6, 4, 6, wallCol);
    drawPlate(rx + 16, ry + 3, rw - 32, role);
  }

  function drawPlate(x, y, w, role) {
    px(x, y, w, 14, '#FFFFFF');
    px(x, y, w, 1, role.accent);
    ctx.fillStyle = '#232526';
    ctx.font = 'bold 9px "JetBrains Mono", monospace';
    ctx.fillText(`${role.title} · ${role.emp}`, x + 6, y + 10);
  }

  function drawWorkstation(r) {
    const x = r.desk.x, y = r.desk.y;
    const ch = characters.find(c => c.id === r.id);
    const occupied = (ch && ch.state === 'working');

    // Swivel Mesh Office Chair
    const cx = x + 16, cy = y + 4;
    px(cx - 3, cy + 24, 18, 2, '#334155');
    px(cx + 5, cy + 20, 2, 4, '#64748B');
    px(cx, cy + 16, 12, 4, '#1E293B');
    px(cx - 2, cy + 12, 2, 6, '#475569');
    px(cx + 12, cy + 12, 2, 6, '#475569');
    if (!occupied) {
      px(cx + 1, cy + 4, 10, 12, '#334155');
      px(cx + 2, cy + 5, 8, 10, '#475569');
    }

    // Floor Mat
    px(x - 8, y + 2, 68, 44, 'rgba(235, 225, 210, 0.45)');

    // Solid Oak Desk with 3-tier side pedestal
    px(x - 4, y + 16, 56, 5, '#DFCDBD');
    px(x - 4, y + 16, 56, 1, '#F3E8DB');
    px(x - 2, y + 21, 2, 21, '#64748B');
    px(x + 48, y + 21, 2, 21, '#64748B');
    px(x + 36, y + 21, 14, 20, '#CBD5E1');
    px(x + 38, y + 23, 10, 5, '#E2E8F0');
    px(x + 42, y + 25, 3, 1, '#475569');
    px(x + 38, y + 29, 10, 5, '#E2E8F0');
    px(x + 42, y + 31, 3, 1, '#475569');
    px(x + 38, y + 35, 10, 5, '#E2E8F0');
    px(x + 42, y + 37, 3, 1, '#475569');

    // Desk Mat
    px(x + 8, y + 15, 24, 5, '#1E293B');

    // 13" Slim Workstation Laptop (Interactive Click Target!)
    px(x + 12, y + 14, 16, 3, '#94A3B8');
    px(x + 13, y + 6, 14, 8, '#64748B');
    px(x + 14, y + 7, 12, 6, '#0F172A');
    if (occupied) px(x + 16, y + 9, 8, 2, r.accent);

    // Mug & Plant
    px(x + 1, y + 13, 5, 5, r.accent);
    px(x + 30, y + 13, 4, 4, '#FFFFFF');
    px(x + 31, y + 11, 2, 2, '#16A34A');
  }

  function drawCharacter(ch) {
    let x = ch.curX;
    let y = ch.curY;
    const isWalking = (ch.state === 'walk_to_idle' || ch.state === 'walk_to_desk');
    const isIdle = (ch.state === 'idle_activity');

    let bob = 0, legOffset = 0, swayX = 0;
    if (isWalking) {
      bob = Math.round(Math.abs(Math.sin(ch.stepCount * 0.25)) * 2);
      legOffset = Math.round(Math.sin(ch.stepCount * 0.25) * 3);
      y -= bob;
    } else if (isIdle) {
      // Gentle Breathing / Idle Sway Animation
      bob = Math.round(Math.sin(tick * 0.08) * 1.2);
      swayX = Math.round(Math.sin(tick * 0.04) * 0.8);
      y += bob;
      x += swayX;
    }

    // Shadow
    ctx.fillStyle = 'rgba(70, 60, 50, 0.18)';
    ctx.beginPath();
    ctx.ellipse(x + 9, ch.curY + 27, 8, 3, 0, 0, Math.PI * 2);
    ctx.fill();

    const pant = '#383A3C';
    if (ch.state === 'working') {
      px(x + 6, y + 15, 6, 10, pant);
      const t = (Math.floor(tick / 8) % 2 === 0) ? 1 : 0;
      px(x + 2, y + 12 - t, 4, 4, ch.data.accent);
      px(x + 13, y + 12 + t, 4, 4, ch.data.accent);
    } else if (isWalking) {
      px(x + 5 - legOffset, y + 17, 3, 10, pant);
      px(x + 10 + legOffset, y + 17, 3, 10, pant);
      px(x + 2 + legOffset, y + 9, 2, 7, ch.data.accent);
      px(x + 14 - legOffset, y + 9, 2, 7, ch.data.accent);
    } else {
      px(x + 6, y + 17, 3, 10, pant);
      px(x + 11, y + 17, 3, 10, pant);
      const armBob = (Math.floor(tick / 12) % 2 === 0) ? 1 : 0;
      px(x + 13, y + 9 - armBob, 3, 6, ch.data.accent);
      px(x + 14, y + 12 - armBob, 4, 4, '#C06C54');
    }

    px(x + 4, y + 8, 11, 10, ch.data.accent);
    px(x + 5, y + 1, 9, 8, '#F2D1B3');
    px(x + 7 + ch.facing, y + 4, 1, 2, '#232526');
    px(x + 10 + ch.facing, y + 4, 1, 2, '#232526');
    px(x + 4, y - 1, 11, 4, '#382E2B');
  }

  function update() {
    characters.forEach(ch => {
      const active = (activeId === ch.id);
      if (active) {
        if (ch.state === 'idle_activity' || ch.state === 'walk_to_idle') {
          ch.state = 'walk_to_desk';
          ch.targetX = ch.data.desk.x;
          ch.targetY = ch.data.desk.y;
        }
      } else {
        if (ch.state === 'working') {
          ch.state = 'walk_to_idle';
          ch.targetX = ch.data.idle.x;
          ch.targetY = ch.data.idle.y;
        }
      }

      if (ch.state === 'walk_to_idle' || ch.state === 'walk_to_desk') {
        const dx = ch.targetX - ch.curX;
        const dy = ch.targetY - ch.curY;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist > 2) {
          ch.facing = dx >= 0 ? 1 : -1;
          ch.curX += (dx / dist) * 1.5;
          ch.curY += (dy / dist) * 1.5;
          ch.stepCount++;
        } else {
          ch.curX = ch.targetX;
          ch.curY = ch.targetY;
          ch.state = (ch.state === 'walk_to_idle') ? 'idle_activity' : 'working';
        }
      }
    });
  }

  function loop() {
    tick++;
    ctx.clearRect(0, 0, W, H);
    drawOffice();
    update();
    characters.forEach(ch => drawCharacter(ch));
    requestAnimationFrame(loop);
  }
  loop();

  // Hit-Testing: Concise Tooltips & Desk Computer Clicks
  const tooltip = document.getElementById('inspectTooltip');
  const ttRole = document.getElementById('ttRole');
  const ttName = document.getElementById('ttName');
  const ttActText = document.getElementById('ttActText');
  const ttActDot = document.getElementById('ttActDot');

  canvas.addEventListener('mousemove', e => {
    const rect = canvas.getBoundingClientRect();
    const mx = e.clientX - rect.left;
    const my = e.clientY - rect.top;

    let hoveredComputerRole = null;
    currentRoles.forEach(r => {
      const dx = r.desk.x, dy = r.desk.y;
      if (mx >= dx + 8 && mx <= dx + 32 && my >= dy + 4 && my <= dy + 20) {
        hoveredComputerRole = r;
      }
    });

    if (hoveredComputerRole) {
      canvas.style.cursor = 'pointer';
      if (tooltip) {
        ttRole.innerText = 'WORKSTATION COMPUTER';
        ttRole.style.color = hoveredComputerRole.accent;
        ttName.innerText = `${hoveredComputerRole.emp}'s Laptop`;
        ttActText.innerText = 'Click to open Workstation OS screen';
        ttActDot.style.background = hoveredComputerRole.accent;
        tooltip.style.left = `${Math.min(W - 240, Math.max(16, hoveredComputerRole.desk.x - 40))}px`;
        tooltip.style.top = `${Math.max(16, hoveredComputerRole.desk.y - 60)}px`;
        tooltip.classList.add('show');
      }
      return;
    }

    let target = null;
    characters.forEach(ch => {
      if (mx >= ch.curX - 4 && mx <= ch.curX + 24 && my >= ch.curY - 6 && my <= ch.curY + 34) {
        target = ch;
      }
    });

    if (target && tooltip) {
      canvas.style.cursor = 'pointer';
      const d = target.data;
      const isWorking = (target.state === 'working');
      const actString = isWorking ? d.actWork : d.idle.act;

      ttRole.innerText = d.role.toUpperCase();
      ttRole.style.color = d.accent;
      ttName.innerText = d.emp;
      ttActText.innerText = actString;
      ttActDot.style.background = isWorking ? 'var(--accent-sage)' : 'var(--accent-terracotta)';

      tooltip.style.left = `${Math.min(W - 240, Math.max(16, target.curX - 60))}px`;
      tooltip.style.top = `${Math.max(16, target.curY - 60)}px`;
      tooltip.classList.add('show');
    } else {
      canvas.style.cursor = 'default';
      if (tooltip) tooltip.classList.remove('show');
    }
  });

  canvas.addEventListener('click', e => {
    const rect = canvas.getBoundingClientRect();
    const mx = e.clientX - rect.left;
    const my = e.clientY - rect.top;

    currentRoles.forEach(r => {
      const dx = r.desk.x, dy = r.desk.y;
      if (mx >= dx + 8 && mx <= dx + 32 && my >= dy + 4 && my <= dy + 20) {
        if (window.openComputerScreen) window.openComputerScreen(r.id);
      }
    });
  });

  window.setNixelActiveRole = id => activeId = Number(id);
  window.switchNixelBusinessDomain = domainKey => {
    if (!domains[domainKey]) return;
    currentDomainKey = domainKey;
    currentRoles = domains[domainKey];
    initCharacters();
  };
})();
