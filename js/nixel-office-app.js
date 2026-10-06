/**
 * NIXEL - Office App Controller
 * Workstation Computer Screen OS (Logs, Task Checklist To-Do, & Upcoming Schedule)
 * Strictly < 500 lines.
 */

(function () {
  const domainData = {
    seo: {
      title: "SEO & Content Factory",
      roles: [
        {
          id: 1, suite: "SUITE 01", title: "Keyword Analysis", role: "Keyword Analyst", emp: "Specialist 01",
          desc: "Clustering 1,850 organic search queries and intent segmentation.", metric: "Vol: 142k | Low KD", color: "#445963",
          logs: [
            { time: "09:15 AM", task: "Pulled 1,850 organic search keywords via Search Console API.", status: "COMPLETED", tag: "#445963" },
            { time: "10:30 AM", task: "Filtered commercial intent clusters and grouped into 14 silos.", status: "VERIFIED", tag: "#3C5C48" },
            { time: "11:45 AM", task: "Exported structured YAML briefs for Suite 02 content copywriters.", status: "DELIVERED", tag: "#8C581E" }
          ],
          todos: [
            { text: "Connect Google Search Console & Ahrefs API webhooks", done: true, tag: "SETUP" },
            { text: "Cluster high-volume low-KD query database (Vol: 142k)", done: true, tag: "ANALYSIS" },
            { text: "Audit competitor SERP title patterns & feature snippets", done: false, tag: "IN PROGRESS" },
            { text: "Deliver semantic keyword map to Suite 02", done: false, tag: "PENDING" }
          ],
          schedule: [
            { time: "02:00 PM", plan: "Review indexing feedback from Suite 03 deployment." },
            { time: "04:30 PM", plan: "Run weekly automated backlink discovery scan." }
          ]
        },
        {
          id: 2, suite: "SUITE 02", title: "Content Editorial", role: "Content Strategist", emp: "Specialist 02",
          desc: "Drafting 2,800-word comprehensive semantic long-form guide.", metric: "Readability: 74.2", color: "#8c581e",
          logs: [
            { time: "11:50 AM", task: "Ingested semantic keyword brief from Suite 01.", status: "IN PROGRESS", tag: "#8C581E" },
            { time: "01:15 PM", task: "Drafted 2,800-word authoritative guide with contextual comparison tables.", status: "COMPLETED", tag: "#445963" },
            { time: "02:20 PM", task: "Audited readability score (Flesch: 74.2) and verified WCAG text contrast.", status: "APPROVED", tag: "#3C5C48" }
          ],
          todos: [
            { text: "Ingest content brief YAML from Suite 01", done: true, tag: "INGEST" },
            { text: "Draft 2,800-word authoritative semantic guide", done: true, tag: "DRAFT" },
            { text: "Insert custom comparison diagrams and infographic assets", done: true, tag: "MEDIA" },
            { text: "Final editor review for brand voice & tone consistency", done: false, tag: "IN REVIEW" }
          ],
          schedule: [
            { time: "03:15 PM", plan: "Handoff final validated markdown payload to Suite 03." },
            { time: "05:00 PM", plan: "Brainstorm next sprint topics with marketing lead." }
          ]
        },
        {
          id: 3, suite: "SUITE 03", title: "Deploy & Release", role: "Release Engineer", emp: "Specialist 03",
          desc: "Automated webhook push to CMS and search indexing API ping.", metric: "Status: 200 OK Live", color: "#3c5c48",
          logs: [
            { time: "02:30 PM", task: "Parsed markdown assets into headless CMS publication payload.", status: "PACKAGED", tag: "#445963" },
            { time: "02:35 PM", task: "Dispatched automated webhook publish event to edge servers.", status: "DEPLOYED", tag: "#3C5C48" },
            { time: "02:38 PM", task: "Pinged Google Search Indexing API (HTTP 200 OK verified).", status: "LIVE", tag: "#944530" }
          ],
          todos: [
            { text: "Validate staging build with automated headless checks", done: true, tag: "QA" },
            { text: "Execute automated zero-downtime webhook push to CMS", done: true, tag: "DEPLOY" },
            { text: "Broadcast cache invalidation to Cloudflare CDN edge", done: true, tag: "EDGE" },
            { text: "Monitor real-time error logs and telemetry response times", done: false, tag: "MONITOR" }
          ],
          schedule: [
            { time: "03:45 PM", plan: "Conduct canary rollback drill on test cluster." },
            { time: "05:30 PM", plan: "Nightly backup snapshot of production databases." }
          ]
        },
        {
          id: 4, suite: "SUITE 04", title: "Domain Topology", role: "Topology Architect", emp: "Specialist 04",
          desc: "Auditing 48 backlink profiles and internal SILO hierarchy.", metric: "DR: 72 | 98% Clean", color: "#944530",
          logs: [
            { time: "08:45 AM", task: "Crawled graph tree across 48 subdomains and internal links.", status: "COMPLETED", tag: "#445963" },
            { time: "10:10 AM", task: "Identified 3 orphaned URLs and redirected link equity into tier-1 pillars.", status: "RESOLVED", tag: "#3C5C48" },
            { time: "11:20 AM", task: "Re-generated XML sitemap and validated hreflang alternate tags.", status: "VERIFIED", tag: "#8C581E" }
          ],
          todos: [
            { text: "Crawl 48 subdomains for broken internal anchor links", done: true, tag: "CRAWL" },
            { text: "Map SILO architecture hierarchy in database", done: true, tag: "GRAPH" },
            { text: "Patch 3 orphaned redirects and link juice leakage", done: true, tag: "FIX" },
            { text: "Run automated toxic backlink audit & disavow update", done: false, tag: "SCHEDULED" }
          ],
          schedule: [
            { time: "04:00 PM", plan: "Verify XML sitemap sync with Google Search Console." },
            { time: "06:00 PM", plan: "Generate weekly domain health executive report." }
          ]
        }
      ]
    },
    ecommerce: {
      title: "E-Commerce & DTC Store",
      roles: [
        {
          id: 1, suite: "SUITE 01", title: "Ad Creatives & Bidding", role: "Performance Marketer", emp: "Specialist 01",
          desc: "Optimizing multi-channel ad spend across TikTok and Meta funnels.", metric: "ROAS: 4.8x | $12k", color: "#445963",
          logs: [{ time: "09:00 AM", task: "Audited ad sets on TikTok & Meta.", status: "COMPLETED", tag: "#445963" }],
          todos: [
            { text: "Adjust bid caps on highest ROAS campaign", done: true, tag: "ROAS" },
            { text: "A/B test 4 new UGC video hook intros", done: false, tag: "TESTING" }
          ],
          schedule: [{ time: "03:00 PM", plan: "Review afternoon conversion spend velocity." }]
        },
        {
          id: 2, suite: "SUITE 02", title: "Storefront Catalog", role: "Catalog Manager", emp: "Specialist 02",
          desc: "Publishing seasonal collection variants and product pricing tiers.", metric: "1,420 Active SKUs", color: "#8c581e",
          logs: [{ time: "11:00 AM", task: "Published 48 Autumn Capsule SKUs.", status: "PUBLISHED", tag: "#3C5C48" }],
          todos: [
            { text: "Sync inventory matrix with Shopify store", done: true, tag: "SYNC" },
            { text: "Configure tier volume discount tables", done: false, tag: "CONFIG" }
          ],
          schedule: [{ time: "04:30 PM", plan: "Audit product photo alt tags and SEO titles." }]
        },
        {
          id: 3, suite: "SUITE 03", title: "Logistics & Dispatch", role: "Fulfillment Lead", emp: "Specialist 03",
          desc: "Triggering automated warehouse batch printing and carrier labels.", metric: "99.4% On-Time SLA", color: "#3c5c48",
          logs: [{ time: "01:45 PM", task: "Dispatched batch #842 for 240 outgoing packages.", status: "DISPATCHED", tag: "#3C5C48" }],
          todos: [
            { text: "Print warehouse thermal pick-sheets", done: true, tag: "PRINT" },
            { text: "Audit pending international customs declarations", done: false, tag: "LOGISTICS" }
          ],
          schedule: [{ time: "05:00 PM", plan: "Final daily carrier package handoff." }]
        },
        {
          id: 4, suite: "SUITE 04", title: "Customer Experience", role: "CX Specialist", emp: "Specialist 04",
          desc: "Resolving priority VIP return tickets with instant store credit.", metric: "CSAT: 98% | <3m SLA", color: "#944530",
          logs: [{ time: "10:00 AM", task: "Cleared VIP refund queue with instant credits.", status: "RESOLVED", tag: "#3C5C48" }],
          todos: [
            { text: "Respond to open live-chat inquiries", done: true, tag: "CHAT" },
            { text: "Update FAQ knowledgebase for holiday shipping", done: false, tag: "DOCS" }
          ],
          schedule: [{ time: "03:30 PM", plan: "Review weekly customer sentiment scorecard." }]
        }
      ]
    },
    saas: {
      title: "SaaS Software Squad",
      roles: [
        {
          id: 1, suite: "SUITE 01", title: "Product Specification", role: "Product Designer", emp: "Specialist 01",
          desc: "Validating user onboarding flows and component design tokens.", metric: "42 Figma Tokens", color: "#8c581e",
          logs: [{ time: "09:30 AM", task: "Audited accessibility contrast for button tokens.", status: "PASSED", tag: "#3C5C48" }],
          todos: [
            { text: "Publish design token JSON to shared repo", done: true, tag: "TOKENS" },
            { text: "Prototype mobile drawer navigation", done: false, tag: "UX" }
          ],
          schedule: [{ time: "02:30 PM", plan: "Design critique with frontend team." }]
        },
        {
          id: 2, suite: "SUITE 02", title: "Distributed Core API", role: "Backend Architect", emp: "Specialist 02",
          desc: "Scaling distributed event queue and PostgreSQL read replicas.", metric: "p99 Latency: 12ms", color: "#445963",
          logs: [{ time: "10:00 AM", task: "Partitioned Kafka event queues across 8 clusters.", status: "BENCHMARKED", tag: "#445963" }],
          todos: [
            { text: "Profile database slow query logs (<15ms)", done: true, tag: "DB" },
            { text: "Deploy Redis cluster connection pooling", done: false, tag: "CACHE" }
          ],
          schedule: [{ time: "04:00 PM", plan: "Architecture review for v4.3 release." }]
        },
        {
          id: 3, suite: "SUITE 03", title: "Canvas UI Engine", role: "Frontend Specialist", emp: "Specialist 03",
          desc: "Profiling 60 FPS animation loop and zero layout shift states.", metric: "60 FPS Verified", color: "#944530",
          logs: [{ time: "11:15 AM", task: "Migrated animation loop to OffscreenCanvas.", status: "RESOLVED", tag: "#3C5C48" }],
          todos: [
            { text: "Eliminate layout repaints on sprite hover", done: true, tag: "PERF" },
            { text: "Unit test character state machine transitions", done: false, tag: "TESTS" }
          ],
          schedule: [{ time: "03:00 PM", plan: "Code review with lead engineer." }]
        },
        {
          id: 4, suite: "SUITE 04", title: "Canary Deploy Edge", role: "DevOps Specialist", emp: "Specialist 04",
          desc: "Pushing automated zero-downtime canary release to edge clusters.", metric: "248 Tests Passed", color: "#3c5c48",
          logs: [{ time: "01:00 PM", task: "Executed 248 integration tests (100% pass).", status: "PASSED", tag: "#3C5C48" }],
          todos: [
            { text: "Deploy canary release to edge servers", done: true, tag: "CANARY" },
            { text: "Monitor error rate telemetry for 30 minutes", done: false, tag: "MONITOR" }
          ],
          schedule: [{ time: "05:00 PM", plan: "Promote canary build to 100% production traffic." }]
        }
      ]
    }
  };

  let currentKey = 'seo';
  let activeScreenRoleId = 1;
  let activeTab = 'logs';

  const grid = document.getElementById('roleCardsGrid');
  const consoleBox = document.getElementById('consoleContent');
  const domainSelect = document.getElementById('businessDomainSelect');
  const themeToggle = document.getElementById('themeToggleBtn');

  // Modal OS elements
  const modal = document.getElementById('computerScreenModal');
  const screenClose = document.getElementById('screenCloseBtn');
  const screenSysInfo = document.getElementById('screenSysInfo');
  const screenBody = document.getElementById('screenBodyContent');

  function renderDomain(key) {
    currentKey = key;
    const d = domainData[key] || domainData.seo;
    if (window.switchNixelBusinessDomain) window.switchNixelBusinessDomain(key);

    grid.innerHTML = d.roles.map(r => `
      <div class="room-card ${r.id === 1 ? 'active' : ''}" data-role-id="${r.id}" style="--border-focus:${r.color};">
        <span class="card-room-badge" style="background:${r.color}22; color:${r.color};">${r.suite}</span>
        <div class="card-title">${r.title}</div>
        <div class="card-text">${r.desc}</div>
        <div class="card-actions">
          <span class="card-role-label">${r.emp.toUpperCase()}</span>
          <button class="btn-open-screen" onclick="event.stopPropagation(); window.openComputerScreen(${r.id})">
            💻 Screen OS
          </button>
        </div>
      </div>
    `).join('');

    document.querySelectorAll('.room-card').forEach(card => {
      card.addEventListener('click', () => {
        document.querySelectorAll('.room-card').forEach(c => c.classList.remove('active'));
        card.classList.add('active');
        const rid = card.getAttribute('data-role-id');
        if (window.setNixelActiveRole) window.setNixelActiveRole(rid);
      });
    });

    consoleBox.innerHTML = d.roles.map(r => `<div>[${r.suite}] ${r.emp} active on ${r.title} (${r.metric})</div>`).join('');
  }

  // Workstation Computer Screen OS Modal Controller
  window.openComputerScreen = function (roleId) {
    activeScreenRoleId = Number(roleId);
    const d = domainData[currentKey] || domainData.seo;
    const r = d.roles.find(x => x.id === activeScreenRoleId) || d.roles[0];

    screenSysInfo.innerText = `${r.suite} · ${r.emp.toUpperCase()} (${r.role.toUpperCase()}) — WORKSTATION SCREEN`;
    renderTabContent();
    modal.classList.add('open');
  };

  window.switchScreenTab = function (tabName) {
    activeTab = tabName;
    document.querySelectorAll('.screen-tab-btn').forEach(btn => {
      btn.classList.toggle('active', btn.getAttribute('data-tab') === tabName);
    });
    renderTabContent();
  };

  function renderTabContent() {
    const d = domainData[currentKey] || domainData.seo;
    const r = d.roles.find(x => x.id === activeScreenRoleId) || d.roles[0];

    if (activeTab === 'logs') {
      screenBody.innerHTML = `
        <div class="screen-timeline">
          ${r.logs.map(log => `
            <div class="timeline-item">
              <div class="tl-dot" style="background:${log.tag}22; color:${log.tag};">✓</div>
              <div style="flex-grow:1;">
                <div class="tl-time">${log.time}</div>
                <div class="tl-text">${log.task}</div>
                <span style="display:inline-block; font-size:10px; font-family:'JetBrains Mono',monospace; padding:2px 6px; border-radius:4px; margin-top:4px; background:${log.tag}22; color:${log.tag}; font-weight:700;">
                  ${log.status}
                </span>
              </div>
            </div>
          `).join('')}
        </div>
      `;
    } else if (activeTab === 'todos') {
      screenBody.innerHTML = `
        <div class="todo-group">
          <div style="font-size:11px; font-family:'JetBrains Mono',monospace; color:#8F96A3; margin-bottom:4px;">
            WORKFLOW TASK CHECKLIST (TODO PROGRESS: ${r.todos.filter(t => t.done).length}/${r.todos.length})
          </div>
          ${r.todos.map(t => `
            <div class="todo-row">
              <div class="todo-check ${t.done ? 'done' : ''}">
                ${t.done ? '✓' : ''}
              </div>
              <span class="todo-label ${t.done ? 'completed' : ''}">${t.text}</span>
              <span class="todo-tag" style="color:${t.done ? 'var(--accent-sage)' : '#EBCB8B'};">${t.tag}</span>
            </div>
          `).join('')}
        </div>
      `;
    } else if (activeTab === 'schedule') {
      screenBody.innerHTML = `
        <div class="todo-group">
          <div style="font-size:11px; font-family:'JetBrains Mono',monospace; color:#8F96A3; margin-bottom:4px;">
            UPCOMING SCHEDULE &amp; BACKLOG QUEUE
          </div>
          ${r.schedule.map(s => `
            <div class="todo-row" style="background:#20242B;">
              <span style="font-family:'JetBrains Mono',monospace; font-size:11px; color:var(--accent-ochre); font-weight:700;">
                ⏰ ${s.time}
              </span>
              <span class="todo-label">${s.plan}</span>
              <span class="todo-tag">SCHEDULED</span>
            </div>
          `).join('')}
        </div>
      `;
    }
  }

  screenClose.addEventListener('click', () => modal.classList.remove('open'));
  modal.addEventListener('click', e => { if (e.target === modal) modal.classList.remove('open'); });

  domainSelect.addEventListener('change', e => renderDomain(e.target.value));

  themeToggle.addEventListener('click', () => {
    const isDark = document.documentElement.getAttribute('data-theme') === 'dark';
    if (isDark) {
      document.documentElement.removeAttribute('data-theme');
      themeToggle.innerHTML = '<span>🌙 Dark Mode</span>';
    } else {
      document.documentElement.setAttribute('data-theme', 'dark');
      themeToggle.innerHTML = '<span>☀️ Warm Cream</span>';
    }
  });

  // Simulation
  let simTimer = null;
  window.simulateOfficeWork = function () {
    if (simTimer) clearInterval(simTimer);
    let cur = 1;
    function next() {
      const cards = document.querySelectorAll('.room-card');
      cards.forEach(c => c.classList.remove('active'));
      const activeCard = document.querySelector(`.room-card[data-role-id="${cur}"]`);
      if (activeCard) activeCard.classList.add('active');
      if (window.setNixelActiveRole) window.setNixelActiveRole(cur);
      cur = (cur % 4) + 1;
    }
    next();
    simTimer = setInterval(next, 4500);
  };

  renderDomain('seo');
})();
