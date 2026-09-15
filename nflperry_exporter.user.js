// ==UserScript==
// @name         NFLPerry NBA Live Database Exporter
// @namespace    nflperry-helper
// @version      1.0
// @description  One-click export of the NBA bestSeason database used by NFLPerry.
// @match        https://nflperry.com/*
// @grant        none
// ==/UserScript==

(function () {
  "use strict";

  const API = "https://api.nflperry.com/players/nba-fantasy?mode=bestSeason";

  function download(name, text) {
    const a = document.createElement("a");
    a.href = URL.createObjectURL(new Blob([text], {type:"application/json"}));
    a.download = name;
    a.click();
    setTimeout(() => URL.revokeObjectURL(a.href), 1000);
  }

  const btn = document.createElement("button");
  btn.textContent = "Export NBA DB";
  Object.assign(btn.style, {
    position:"fixed", right:"16px", bottom:"16px", zIndex:"2147483647",
    padding:"12px 16px", border:"0", borderRadius:"12px",
    background:"#ff8a2a", color:"#111", fontWeight:"800",
    boxShadow:"0 8px 30px rgba(0,0,0,.35)", cursor:"pointer"
  });

  btn.onclick = async () => {
    const old = btn.textContent;
    btn.textContent = "Loading…";
    btn.disabled = true;
    try {
      const r = await fetch(API, {credentials:"include"});
      if (!r.ok) throw new Error("HTTP " + r.status);
      const data = await r.json();
      if (!Array.isArray(data)) throw new Error("Unexpected response");
      download(
        `nflperry-nba-live-${new Date().toISOString().slice(0,10)}.json`,
        JSON.stringify(data, null, 2)
      );
      btn.textContent = `Exported ${data.length}`;
      setTimeout(()=>btn.textContent=old, 2500);
    } catch (e) {
      alert("NFLPerry export failed: " + e.message);
      btn.textContent = old;
    } finally {
      btn.disabled = false;
    }
  };

  document.documentElement.appendChild(btn);
})();