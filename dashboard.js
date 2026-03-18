/* ============================================================
   DASHBOARD — CSS
   ============================================================ */

*, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

:root {
  --color-open-bg:       #e1f5ee;
  --color-open-text:     #0f6e56;
  --color-open-border:   #1d9e75;
  --color-closed-bg:     #fcebeb;
  --color-closed-text:   #a32d2d;
  --color-closed-border: #e24b4a;
  --color-accent:        #185fa5;
  --color-accent-text:   #e6f1fb;
  --color-bg:            #ffffff;
  --color-bg-secondary:  #f5f5f4;
  --color-text-primary:   #1a1a1a;
  --color-text-secondary: #6b6b6b;
  --color-text-tertiary:  #9d9d9d;
  --color-border:        rgba(0,0,0,0.10);
  --color-border-medium: rgba(0,0,0,0.20);
  --radius-md:   8px;
  --radius-lg:   12px;
  --radius-xl:   16px;
  --radius-full: 9999px;
}

body {
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
  background: var(--color-bg);
  color: var(--color-text-primary);
  min-height: 100vh;
}

/* HEADER */
.header {
  padding: 1rem 1.25rem;
  border-bottom: 0.5px solid var(--color-border);
  display: flex; align-items: center;
  justify-content: space-between;
  flex-wrap: wrap; gap: 8px;
}
.header h1 { font-size: 17px; font-weight: 500; }
.header p  { font-size: 12px; color: var(--color-text-secondary); margin-top: 2px; }

/* STATS */
.stats { display: flex; gap: 6px; flex-wrap: wrap; }
.stat  { font-size: 12px; font-weight: 500; padding: 4px 10px; border-radius: var(--radius-md); }
.stat-open   { background: var(--color-open-bg);      color: var(--color-open-text); }
.stat-closed { background: var(--color-closed-bg);    color: var(--color-closed-text); }
.stat-total  { background: var(--color-bg-secondary); color: var(--color-text-secondary); }

/* TOOLBAR */
.toolbar {
  padding: 0.75rem 1.25rem;
  border-bottom: 0.5px solid var(--color-border);
  display: flex; gap: 8px; flex-wrap: wrap; align-items: center;
}
#search {
  flex: 1; min-width: 140px; height: 34px;
  padding: 6px 10px; font-size: 14px;
  border: 0.5px solid var(--color-border-medium);
  border-radius: var(--radius-md);
  background: var(--color-bg); color: var(--color-text-primary);
  outline: none;
}
#search:focus { border-color: var(--color-accent); }

.f-btn {
  height: 34px; padding: 0 12px; font-size: 13px;
  border-radius: var(--radius-md);
  border: 0.5px solid var(--color-border-medium);
  background: transparent; color: var(--color-text-secondary);
  cursor: pointer; transition: background 0.12s, color 0.12s;
}
.f-btn.a-all    { background: var(--color-bg-secondary); color: var(--color-text-primary);  border-color: transparent; }
.f-btn.a-open   { background: var(--color-open-bg);      color: var(--color-open-text);     border-color: transparent; }
.f-btn.a-closed { background: var(--color-closed-bg);    color: var(--color-closed-text);   border-color: transparent; }

/* GRID */
.grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(180px, 1fr));
  gap: 8px; padding: 1rem 1.25rem;
}

/* CARD */
.card {
  background: var(--color-bg);
  border: 0.5px solid var(--color-border);
  border-radius: var(--radius-lg);
  padding: 12px; cursor: pointer;
  display: flex; flex-direction: column; gap: 5px;
  user-select: none; transition: background 0.12s;
}
.card:hover  { background: var(--color-bg-secondary); }
.card.open   { border-left: 3px solid var(--color-open-border); }
.card.closed { border-left: 3px solid var(--color-closed-border); }

.c-num     { font-size: 11px; font-weight: 500; color: var(--color-text-tertiary); }
.c-name    { font-size: 13px; font-weight: 500; line-height: 1.3; }
.c-adresse { font-size: 11px; color: var(--color-text-secondary); line-height: 1.4; }

.c-badge {
  display: inline-flex; align-items: center; gap: 4px;
  font-size: 12px; font-weight: 500;
  padding: 3px 8px; border-radius: var(--radius-full); width: fit-content;
  margin-top: 2px;
}
.c-badge.open   { background: var(--color-open-bg);   color: var(--color-open-text); }
.c-badge.closed { background: var(--color-closed-bg); color: var(--color-closed-text); }
.c-dot { width: 6px; height: 6px; border-radius: 50%; flex-shrink: 0; }
.c-dot.open   { background: var(--color-open-border); }
.c-dot.closed { background: var(--color-closed-border); }
.c-time { font-size: 11px; color: var(--color-text-tertiary); }
.empty  { padding: 2rem; text-align: center; color: var(--color-text-tertiary); font-size: 14px; grid-column: 1/-1; }

/* OVERLAY */
.overlay {
  display: none; position: fixed; inset: 0;
  background: rgba(0,0,0,0.35);
  align-items: flex-end; justify-content: center;
  z-index: 100;
}
.overlay.visible { display: flex; }

/* MODAL */
.modal {
  background: var(--color-bg);
  border-radius: var(--radius-xl) var(--radius-xl) 0 0;
  border: 0.5px solid var(--color-border);
  padding: 1.5rem 1.25rem;
  width: 100%; max-width: 480px;
  display: flex; flex-direction: column; gap: 1.25rem;
}
.modal-handle {
  width: 36px; height: 4px;
  background: var(--color-border-medium);
  border-radius: var(--radius-full);
  margin: 0 auto -0.25rem;
}
.modal-head {
  display: flex; align-items: flex-start;
  justify-content: space-between; gap: 8px;
}
#modal-title   { font-size: 16px; font-weight: 500; }
#modal-sub     { font-size: 13px; color: var(--color-text-secondary); margin-top: 3px; }
#modal-adresse { font-size: 12px; color: var(--color-text-tertiary); margin-top: 2px; }

#modal-current {
  display: inline-flex; align-items: center; gap: 5px;
  font-size: 12px; font-weight: 500;
  padding: 4px 10px; border-radius: var(--radius-full); white-space: nowrap;
  flex-shrink: 0;
}
#modal-current.open   { background: var(--color-open-bg);   color: var(--color-open-text); }
#modal-current.closed { background: var(--color-closed-bg); color: var(--color-closed-text); }
#modal-dot { width: 6px; height: 6px; border-radius: 50%; }
#modal-dot.open   { background: var(--color-open-border); }
#modal-dot.closed { background: var(--color-closed-border); }

/* BTN GROUP */
.btn-group { display: flex; gap: 10px; }
.btn-status {
  flex: 1; padding: 16px 12px;
  border-radius: var(--radius-lg);
  border: 1.5px solid var(--color-border);
  background: var(--color-bg-secondary);
  font-size: 15px; font-weight: 500; cursor: pointer;
  display: flex; flex-direction: column; align-items: center; gap: 8px;
  color: var(--color-text-secondary); transition: all 0.15s;
}
.btn-icon {
  width: 36px; height: 36px; border-radius: 50%;
  display: flex; align-items: center; justify-content: center;
  background: var(--color-bg);
}
.btn-status.sel-open   { background: var(--color-open-bg);   border-color: var(--color-open-border);   color: var(--color-open-text); }
.btn-status.sel-closed { background: var(--color-closed-bg); border-color: var(--color-closed-border); color: var(--color-closed-text); }
.btn-status.sel-open   .btn-icon { background: #eaf3de; }
.btn-status.sel-closed .btn-icon { background: #fcebeb; }

/* ROW ACTIONS */
.row-actions { display: flex; gap: 8px; }
.btn-cancel {
  flex: 1; padding: 13px;
  border-radius: var(--radius-lg);
  border: 0.5px solid var(--color-border-medium);
  background: transparent; font-size: 14px;
  color: var(--color-text-secondary); cursor: pointer;
  transition: background 0.12s;
}
.btn-cancel:hover { background: var(--color-bg-secondary); }
#btn-confirm {
  flex: 2; padding: 13px;
  border-radius: var(--radius-lg);
  border: none; background: var(--color-accent);
  color: var(--color-accent-text);
  font-size: 14px; font-weight: 500; cursor: pointer;
  transition: opacity 0.15s;
}
#btn-confirm:hover:not(:disabled) { opacity: 0.88; }
#btn-confirm:disabled { opacity: 0.3; cursor: default; }

/* TOAST */
.toast {
  position: fixed; bottom: 1.5rem; left: 50%;
  transform: translateX(-50%) translateY(60px);
  background: #2c2c2a; color: #f1efe8;
  padding: 10px 18px; border-radius: var(--radius-full);
  font-size: 13px; pointer-events: none;
  transition: transform 0.3s cubic-bezier(0.34,1.56,0.64,1);
  z-index: 200; white-space: nowrap;
}
.toast.show { transform: translateX(-50%) translateY(0); }

/* RESPONSIVE */
@media (max-width: 640px) {
  .grid { grid-template-columns: repeat(auto-fill, minmax(150px, 1fr)); gap: 6px; padding: 0.75rem 1rem; }
  .header, .toolbar { padding: 0.75rem 1rem; }
}
@media (max-width: 400px) {
  .grid { grid-template-columns: repeat(2, 1fr); }
  .btn-group, .row-actions { flex-direction: column; }
}
