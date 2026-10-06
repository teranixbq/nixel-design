/**
 * NIXEL - Living Office Assets & Environment Fixtures
 * Rich, cozy Scandinavian aesthetic (50% comfort lounge, plants, bookshelves, floor lamp, coat rack, and domain props)
 * Strictly < 500 lines.
 */

window.NixelOfficeAssets = (function () {

  function drawAll(ctx, W, H, tick, currentRoles, characters, px, domainKey) {
    // 1. Cozy Breakout Lounge & Tufted Sofa
    drawCozyLounge(ctx, tick, px);

    // 2. High-Capacity Bookshelf & Archival Binder Units
    drawBookshelf(px);

    // 3. Communal Amenities: Water Cooler, Coffee Bar, Copier, Floor Lamp, Coat Rack
    drawCommunalFixtures(ctx, tick, px);

    // 4. Indoor Botanical Decor (Monstera, Fiddle Leaf Fig, Desktop Succulents)
    drawBotanicals(px);

    // 5. Domain-Specific Business Fixtures (Dynamic Props)
    drawDomainProps(px, domainKey, tick);
  }

  function drawCozyLounge(ctx, tick, px) {
    const sx = 520, sy = 320;

    // Scandi Area Rug with Fringes and Textured Weave
    px(sx - 12, sy - 8, 198, 144, '#E8DDD0');
    px(sx - 6, sy - 2, 186, 132, '#F2E8DC');
    for (let f = sy; f < sy + 130; f += 4) {
      px(sx - 10, f, 3, 1, '#D8C7B2');
      px(sx + 182, f, 3, 1, '#D8C7B2');
    }
    for (let w = sy + 12; w < sy + 124; w += 16) {
      px(sx + 6, w, 164, 1, '#DFD0BD');
    }

    // Floor Drop Shadow
    px(sx + 8, sy + 68, 158, 14, 'rgba(60, 50, 40, 0.18)');

    // 4 Mid-Century Wooden Legs
    px(sx + 18, sy + 70, 4, 8, '#7C4A2D');
    px(sx + 36, sy + 70, 4, 8, '#7C4A2D');
    px(sx + 135, sy + 70, 4, 8, '#7C4A2D');
    px(sx + 152, sy + 70, 4, 8, '#7C4A2D');

    // Solid Wood Plinth Base
    px(sx + 14, sy + 66, 146, 5, '#9E6B47');
    px(sx + 14, sy + 66, 146, 1, '#BA855E');

    // High Backrest with Tufted Diamond Buttons
    px(sx + 20, sy + 16, 134, 34, '#A74A36');
    px(sx + 20, sy + 16, 134, 3, '#C7634D');
    px(sx + 20, sy + 16, 2, 34, '#7F3323');
    px(sx + 152, sy + 16, 2, 34, '#7F3323');

    const tuftCols = [sx + 36, sx + 58, sx + 80, sx + 102, sx + 124];
    tuftCols.forEach((bx) => {
      px(bx, sy + 24, 3, 3, '#6A2518');
      px(bx - 1, sy + 23, 5, 1, '#8C3827');
      px(bx - 1, sy + 27, 5, 1, '#BD5B47');
      px(bx - 4, sy + 20, 2, 2, '#8C3827');
      px(bx + 5, sy + 28, 2, 2, '#8C3827');

      const b2x = bx + 11;
      if (b2x < sx + 140) {
        px(b2x, sy + 36, 3, 3, '#6A2518');
        px(b2x - 1, sy + 35, 5, 1, '#8C3827');
        px(b2x - 1, sy + 39, 5, 1, '#BD5B47');
      }
    });

    // 3 Thick Cushions with Double Piping
    const cushionW = 42;
    for (let c = 0; c < 3; c++) {
      const cx = sx + 24 + (c * cushionW);
      px(cx, sy + 46, cushionW - 2, 22, '#B8543F');
      px(cx, sy + 46, cushionW - 2, 2, '#D9745E');
      px(cx, sy + 64, cushionW - 2, 4, '#8E3827');
      if (c > 0) px(cx - 2, sy + 46, 2, 22, '#5C1D12');
    }

    // Curved Rounded Armrests
    px(sx + 10, sy + 26, 16, 44, '#A74A36');
    px(sx + 10, sy + 26, 16, 3, '#C7634D');
    px(sx + 10, sy + 26, 2, 44, '#7F3323');
    px(sx + 24, sy + 29, 2, 38, '#6A2518');

    px(sx + 148, sy + 26, 16, 44, '#A74A36');
    px(sx + 148, sy + 26, 16, 3, '#C7634D');
    px(sx + 162, sy + 26, 2, 44, '#7F3323');
    px(sx + 148, sy + 29, 2, 38, '#6A2518');

    // Throw Pillows
    px(sx + 24, sy + 32, 14, 14, '#3C5C48');
    px(sx + 26, sy + 34, 10, 10, '#50755D');
    px(sx + 136, sy + 32, 14, 14, '#8C581E');
    px(sx + 138, sy + 34, 10, 10, '#A76F2F');

    // Oval Coffee Table
    const tx = sx + 50, ty = sy + 84;
    px(tx + 4, ty + 18, 64, 4, 'rgba(60, 50, 40, 0.15)');
    px(tx, ty, 72, 20, '#DFCDBD');
    px(tx + 2, ty + 2, 68, 16, '#EDE0D2');
    px(tx + 12, ty + 20, 2, 6, '#64748B');
    px(tx + 35, ty + 20, 2, 6, '#64748B');
    px(tx + 58, ty + 20, 2, 6, '#64748B');
    px(tx + 16, ty + 6, 7, 7, '#FFFFFF');
    px(tx + 18, ty + 8, 3, 3, '#8C581E');
    px(tx + 36, ty + 5, 20, 10, '#FFFFFF');
    px(tx + 45, ty + 5, 2, 10, '#CBD5E1');

    // Scandinavian Floor Arc Lamp
    const lx = sx - 6, ly = sy + 8;
    px(lx + 2, ly + 68, 12, 3, '#334155');
    px(lx + 7, ly + 8, 2, 60, '#64748B');
    px(lx + 4, ly + 2, 18, 2, '#64748B');
    px(lx + 18, ly + 4, 10, 8, '#F59E0B');
    px(lx + 19, ly + 5, 8, 6, '#FEF3C7');
  }

  function drawBookshelf(px) {
    // Large Oak Bookshelf in Suite 02 (Center Top)
    const bx = 385, by = 44;
    px(bx, by, 76, 52, '#D2C0AA');
    px(bx + 2, by + 2, 72, 48, '#C4AF98');
    px(bx, by, 76, 2, '#DFD0BD');
    // 3 Shelves
    px(bx + 2, by + 18, 72, 2, '#B59F87');
    px(bx + 2, by + 34, 72, 2, '#B59F87');
    // Top Row: Colorful Binders & Books
    px(bx + 6, by + 5, 8, 13, '#944530');
    px(bx + 15, by + 4, 6, 14, '#3C5C48');
    px(bx + 22, by + 6, 7, 12, '#8C581E');
    px(bx + 30, by + 4, 8, 14, '#445963');
    px(bx + 40, by + 5, 5, 13, '#0284C7');
    px(bx + 47, by + 7, 16, 11, '#E2E8F0'); // Ceramic decor bowl
    // Mid Row: Reference Folders
    px(bx + 6, by + 21, 6, 13, '#334155');
    px(bx + 13, by + 22, 6, 12, '#475569');
    px(bx + 20, by + 20, 7, 14, '#944530');
    px(bx + 38, by + 23, 14, 11, '#16A34A'); // Mini shelf plant
    // Bottom Row: Archived Storage Boxes
    px(bx + 6, by + 38, 20, 11, '#E2E8F0');
    px(bx + 30, by + 38, 20, 11, '#E2E8F0');
  }

  function drawCommunalFixtures(ctx, tick, px) {
    // Water Cooler with Bubbles
    const wx = 335, wy = 340;
    px(wx, wy + 16, 20, 32, '#E2E8F0');
    px(wx + 2, wy + 18, 16, 28, '#FFFFFF');
    px(wx + 4, wy + 26, 4, 4, '#EF4444');
    px(wx + 12, wy + 26, 4, 4, '#0EA5E9');
    px(wx + 2, wy + 32, 16, 3, '#94A3B8');
    ctx.fillStyle = 'rgba(56, 189, 248, 0.85)';
    ctx.fillRect(wx + 2, wy, 16, 16);
    px(wx + 5, wy - 3, 10, 3, '#0284C7');
    const bY = wy + 12 - (Math.floor(tick * 0.3) % 10);
    px(wx + 8, bY, 2, 2, '#FFFFFF');

    // Commercial Copier/Scanner
    const pxX = 720, pxY = 275;
    px(pxX, pxY + 12, 36, 28, '#E2E8F0');
    px(pxX + 2, pxY, 32, 12, '#334155');
    px(pxX + 24, pxY + 2, 8, 8, '#0284C7');
    px(pxX - 10, pxY + 14, 12, 16, '#CBD5E1');
    px(pxX - 8, pxY + 16, 8, 12, '#FFFFFF');

    // Espresso Coffee Bar & Snack Station
    const cx = 840, cy = 360;
    px(cx, cy, 95, 45, '#D5C4AE');
    px(cx + 8, cy - 20, 26, 22, '#475569');
    px(cx + 12, cy - 16, 18, 14, '#1E293B');
    if (Math.floor(tick / 15) % 2 === 0) px(cx + 20, cy - 26, 2, 4, 'rgba(220,220,220,0.7)');
    // Hanging Cup Rack
    px(cx + 40, cy - 16, 48, 3, '#94A3B8');
    px(cx + 46, cy - 13, 6, 6, '#EF4444');
    px(cx + 58, cy - 13, 6, 6, '#38BDF8');
    px(cx + 70, cy - 13, 6, 6, '#10B981');
    px(cx + 82, cy - 13, 6, 6, '#F59E0B');

    // Wooden Coat Rack / Stand
    const crX = 495, crY = 275;
    px(crX + 3, crY + 40, 10, 3, '#7C4A2D');
    px(crX + 7, crY + 4, 2, 38, '#9E6B47');
    px(crX + 3, crY + 8, 10, 2, '#9E6B47');
    px(crX + 4, crY + 10, 5, 14, '#334155'); // Hanging jacket
    px(crX + 11, crY + 12, 2, 16, '#944530'); // Umbrella

    // Wall Clock
    px(530, 246, 22, 22, '#FFFFFF');
    px(530, 246, 22, 1, '#94A3B8');
    px(540, 256, 2, 2, '#0F172A');
    px(540, 252, 1, 5, '#0F172A');
    px(540, 256, 4, 1, '#EF4444');
  }

  function drawBotanicals(px) {
    // Large Monstera Deliciosa in Ceramic Planter (Breakout Corner)
    const mx = 705, my = 390;
    px(mx + 4, my + 18, 18, 16, '#FFFFFF'); // Pot
    px(mx + 6, my + 34, 14, 3, '#DFCDBD');  // Saucer
    px(mx, my + 2, 12, 12, '#16A34A');
    px(mx + 10, my - 6, 14, 14, '#15803D');
    px(mx + 16, my + 4, 12, 12, '#16A34A');
    px(mx + 4, my + 6, 2, 3, '#FFFFFF'); // Monstera Leaf hole
    px(mx + 14, my - 2, 2, 3, '#FFFFFF');

    // Tall Sansevieria (Snake Plant) in Suite 01 Corner
    const sx = 35, sy = 160;
    px(sx + 3, sy + 18, 14, 16, '#FFFFFF');
    px(sx + 4, sy - 2, 3, 20, '#15803D');
    px(sx + 8, sy - 6, 4, 24, '#16A34A');
    px(sx + 13, sy, 3, 18, '#15803D');

    // Potted Fiddle Leaf Fig in Hallway Corner
    const hx = 20, hy = 410;
    px(hx + 3, hy + 18, 14, 16, '#DFCDBD');
    px(hx + 1, hy + 4, 10, 10, '#15803D');
    px(hx + 8, hy - 4, 12, 12, '#16A34A');
  }

  function drawDomainProps(px, domainKey, tick) {
    if (domainKey === 'seo') {
      // Whiteboard with Semantic SILO Diagram
      const wx = 430, wy = 175;
      px(wx, wy, 70, 42, '#FFFFFF');
      px(wx, wy, 70, 2, '#94A3B8');
      px(wx + 8, wy + 10, 12, 6, '#0284C7');
      px(wx + 30, wy + 10, 12, 6, '#10B981');
      px(wx + 52, wy + 10, 12, 6, '#F59E0B');
      px(wx + 20, wy + 24, 32, 10, '#944530');
    } else if (domainKey === 'ecommerce') {
      // Stacked Shipping Delivery Packages near Hallway
      const kx = 440, ky = 185;
      px(kx, ky + 8, 20, 14, '#C89666'); // Cardboard Box 1
      px(kx + 4, ky + 12, 12, 2, '#FFFFFF'); // Shipping label
      px(kx + 16, ky, 18, 12, '#B88452'); // Box 2
      px(kx + 20, ky + 4, 10, 2, '#FFFFFF');
    } else if (domainKey === 'saas') {
      // Server Cabinet with Running LED Lights
      const rx = 1040, ry = 44;
      px(rx, ry, 32, 54, '#181B1E');
      px(rx + 2, ry + 2, 28, 50, '#0F1215');
      for (let s = ry + 8; s < ry + 48; s += 10) {
        px(rx + 4, s, 24, 6, '#262A30');
        const blink = (Math.floor(tick / 8 + s) % 3 === 0);
        px(rx + 6, s + 2, 2, 2, blink ? '#10B981' : '#047857');
        px(rx + 10, s + 2, 2, 2, '#38BDF8');
      }
    }
  }

  return { draw: drawAll };
})();
