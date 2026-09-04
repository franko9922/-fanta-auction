const STORAGE_KEY = "fanta-auction-v1";
const saved = JSON.parse(localStorage.getItem(STORAGE_KEY) || '{"taken":{},"notes":{},"saved":{}}');
let state = {
  taken: saved.taken || {},
  notes: saved.notes || {},
  saved: saved.saved || {}
};
let currentFilter = "all";
let searchTerm = "";
let currentRole = "attaccanti";
let sortKey = "originalIndex";
let sortDir = 1;

const body = document.getElementById("playerBody");
const search = document.getElementById("search");
const clearSearch = document.getElementById("clearSearch");
const visibleCount = document.getElementById("visibleCount");
const takenCount = document.getElementById("takenCount");
const saveState = document.getElementById("saveState");

function save(){
  localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
  saveState.textContent = "Salvato";
  clearTimeout(save._t);
  save._t = setTimeout(()=>saveState.textContent="Salvataggio automatico", 900);
}

function filtered(){
  const term = searchTerm.trim().toLowerCase();
  return PLAYER_DATA.filter(p=>{
    if(p.role !== currentRole) return false;
    const matchesSearch = !term || p.name.toLowerCase().includes(term) || p.team.toLowerCase().includes(term);
    const isTaken = !!state.taken[p.id];
    const matchesFilter = currentFilter==="all" || (currentFilter==="taken" ? isTaken : !isTaken);
    return matchesSearch && matchesFilter;
  }).sort((a,b)=>{
    if(sortKey==="originalIndex") return a.originalIndex-b.originalIndex;
    const va=a[sortKey], vb=b[sortKey];
    if(typeof va === "number") return (va-vb)*sortDir || a.originalIndex-b.originalIndex;
    return va.localeCompare(vb,"it")*sortDir || a.originalIndex-b.originalIndex;
  });
}


// Annotatione provenienti esclusivamente dal riferimento fornito dall'utente.
const PLAYER_MARKS = {
  "14": [
    "🥅"
  ],
  "346": [
    "🥅",
    "🎯",
    "🚩",
    "🩹 22-set"
  ],
  "36": [
    "🥅"
  ],
  "364": [
    "🥅"
  ],
  "15": [
    "🥅"
  ],
  "385": [
    "🥅",
    "🎯",
    "🚩"
  ],
  "27": [
    "🥅"
  ],
  "341": [
    "🥅",
    "🎯",
    "🚩"
  ],
  "3": [
    "🥅"
  ],
  "348": [
    "🥅",
    "🎯",
    "🚩"
  ],
  "53": [
    "🥅"
  ],
  "4": [
    "🥅"
  ],
  "32": [
    "🥅"
  ],
  "345": [
    "🥅",
    "🎯",
    "🚩"
  ],
  "41": [
    "🥅"
  ],
  "1": [
    "🥅"
  ],
  "12": [
    "🥅",
    "🎯",
    "🚩"
  ],
  "355": [
    "🥅",
    "🎯",
    "🚩"
  ],
  "11": [
    "🥅"
  ],
  "411": [
    "🥅",
    "🎯",
    "🚩"
  ],
  "17": [
    "🥅2️⃣"
  ],
  "369": [
    "🥅2️⃣"
  ],
  "64": [
    "🥅2️⃣"
  ],
  "8": [
    "🥅2️⃣"
  ],
  "25": [
    "🥅2️⃣"
  ],
  "395": [
    "🥅2️⃣"
  ],
  "172": [
    "🥅2️⃣"
  ],
  "357": [
    "🥅2️⃣"
  ],
  "7": [
    "🥅2️⃣"
  ],
  "18": [
    "🥅2️⃣"
  ],
  "61": [
    "🥅2️⃣"
  ],
  "343": [
    "🥅2️⃣"
  ],
  "31": [
    "🥅2️⃣"
  ],
  "6": [
    "🥅2️⃣"
  ],
  "203": [
    "🥅2️⃣"
  ],
  "10": [
    "🥅2️⃣",
    "🎯",
    "🚩"
  ],
  "43": [
    "🥅2️⃣"
  ],
  "16": [
    "🥅2️⃣"
  ],
  "159": [
    "🥅2️⃣"
  ],
  "33": [
    "🥅2️⃣"
  ],
  "359": [
    "🎯",
    "🚩"
  ],
  "62": [
    "🎯"
  ],
  "342": [
    "🎯"
  ],
  "361": [
    "🎯",
    "🚩"
  ],
  "382": [
    "🎯"
  ],
  "24": [
    "🎯",
    "🚩",
    "🩹 26-nov"
  ],
  "478": [
    "🎯",
    "🚩"
  ],
  "373": [
    "🎯",
    "🚩"
  ],
  "384": [
    "🎯"
  ],
  "403": [
    "🎯",
    "🚩",
    "🩹 05-set"
  ],
  "350": [
    "🎯",
    "🚩",
    "🩹 01-ott"
  ],
  "405": [
    "🚩"
  ],
  "379": [
    "🚩"
  ],
  "256": [
    "🚩"
  ],
  "477": [
    "🚩",
    "🩹 28-ott"
  ],
  "93": [
    "🧤"
  ],
  "98": [
    "🧤"
  ],
  "96": [
    "🧤"
  ],
  "92": [
    "🧤",
    "🔄"
  ],
  "100": [
    "🧤"
  ],
  "104": [
    "🧤"
  ],
  "102": [
    "🧤"
  ],
  "91": [
    "🧤"
  ],
  "88": [
    "🧤"
  ],
  "94": [
    "🧤"
  ],
  "95": [
    "🧤"
  ],
  "89": [
    "🧤"
  ],
  "147": [
    "🧤"
  ],
  "90": [
    "🧤"
  ],
  "107": [
    "🧤"
  ],
  "87": [
    "🧤"
  ],
  "101": [
    "🧤"
  ],
  "124": [
    "🧤"
  ],
  "99": [
    "🧤"
  ],
  "105": [
    "🧤"
  ],
  "109": [
    "🔄"
  ],
  "251": [
    "🩹 11-ott"
  ],
  "76": [
    "🩹 11-ott"
  ],
  "515": [
    "🩹 12-ott"
  ],
  "516": [
    "🩹 24-set"
  ],
  "296": [
    "🩹 11-ott"
  ],
  "457": [
    "🩹 11-ott"
  ],
  "289": [
    "🩹 01-nov"
  ],
  "517": [
    "🩹 04-set"
  ],
  "77": [
    "🩹 dalla 4ª giornata"
  ],
  "47": [
    "🩹 02-nov"
  ],
  "360": [
    "🩹 04-set"
  ],
  "391": [
    "🩹 01-gen"
  ],
  "431": [
    "🩹 16-set"
  ],
  "396": [
    "🩹 17-set"
  ],
  "244": [
    "🩹 16-set"
  ],
  "323": [
    "🩹 da valutare"
  ],
  "451": [
    "🩹 19-set"
  ],
  "479": [
    "🩹 07-set"
  ],
  "481": [
    "🩹 04-set"
  ],
  "179": [
    "🩹 30-set"
  ],
  "70": [
    "🩹 11-ott"
  ],
  "331": [
    "🩹 11-ott"
  ],
  "349": [
    "🩹 11-ott"
  ],
  "507": [
    "🩹 04-set"
  ],
  "470": [
    "🩹 04-set"
  ],
  "435": [
    "🩹 04-set"
  ],
  "223": [
    "🩹 15-set"
  ],
  "442": [
    "🩹 17-gen"
  ],
  "308": [
    "🩹 04-set"
  ],
  "269": [
    "🩹 da metà settembre"
  ],
  "287": [
    "🩹 22-set"
  ],
  "228": [
    "🩹 11-set"
  ],
  "80": [
    "🩹 17-ott"
  ],
  "276": [
    "🩹 04-set"
  ],
  "241": [
    "🩹 17-ott"
  ]
};
function playerDisplayName(p){
  const marks = PLAYER_MARKS[p.id] || [];
  return `${escapeHtml(p.name)}${marks.length ? ' <span class="player-mark">'+marks.map(escapeHtml).join(' ')+'</span>' : ''}`;
}

function render(){
  const list=filtered();
  body.innerHTML="";
  if(!list.length){
    body.innerHTML='<tr><td colspan="8" class="empty">Nessun giocatore trovato.</td></tr>';
  }else{
    for(const p of list){
      const tr=document.createElement("tr");
      if(state.taken[p.id]) tr.classList.add("taken");
      if(state.saved[p.id]) tr.classList.add("saved-row");
      tr.innerHTML=`
        <td class="checkbox-cell">
          <input class="take-box" type="checkbox" aria-label="Segna ${escapeHtml(p.name)} come preso" ${state.taken[p.id]?"checked":""} data-id="${p.id}">
        </td>
        <td><div class="player">${playerDisplayName(p)}</div></td>
        <td><div class="team">${escapeHtml(p.team)}</div></td>
        <td class="num">${p.xpv}</td>
        <td class="num pca-cell">${p.pca}</td>
        <td class="num pma-cell">${p.pma}</td>
        <td class="saved-cell">
          <input class="saved-box" type="checkbox" aria-label="Segna ${escapeHtml(p.name)} come salvato" ${state.saved[p.id]?"checked":""} data-saved-id="${p.id}">
        </td>
        <td><input class="note-input" type="text" maxlength="200" placeholder="Nota..." value="${escapeAttr(state.notes[p.id]||"")}" data-note-id="${p.id}"></td>`;
      body.appendChild(tr);
    }
  }
  const taken=PLAYER_DATA.filter(p=>state.taken[p.id]).length;
  takenCount.textContent=taken;
  visibleCount.textContent=`${list.length} ${list.length===1?"giocatore":"giocatori"}`;
  document.querySelectorAll("thead th[data-sort]").forEach(th=>{
    const key=th.dataset.sort;
    const ind=th.querySelector(".sort-indicator");
    if(key==="pca" && sortKey==="originalIndex"){
      ind.textContent="↓";
      ind.classList.add("active-sort");
    } else if(key===sortKey){
      ind.textContent=sortDir===1?"↑":"↓"; ind.classList.add("active-sort");
    } else {ind.textContent=""; ind.classList.remove("active-sort")}
  });
  clearSearch.hidden=!searchTerm;
}

function escapeHtml(s){return String(s).replace(/[&<>"']/g,m=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#039;"}[m]))}
function escapeAttr(s){return escapeHtml(s)}

body.addEventListener("change",(e)=>{
  if(e.target.matches(".saved-box")){
    const id=e.target.dataset.savedId;
    state.saved[id]=e.target.checked;
    save(); render();
    return;
  }
  if(e.target.matches(".take-box")){
    const id=e.target.dataset.id;
    state.taken[id]=e.target.checked;
    save(); render();
  }
});
body.addEventListener("input",(e)=>{
  if(e.target.matches(".note-input")){
    const id=e.target.dataset.noteId;
    state.notes[id]=e.target.value;
    localStorage.setItem(STORAGE_KEY,JSON.stringify(state));
    saveState.textContent="Salvato";
  }
});
document.querySelectorAll(".role").forEach(btn=>btn.addEventListener("click",()=>{
  currentRole=btn.dataset.role;
  search.value=""; searchTerm=""; currentFilter="all";
  sortKey="originalIndex"; sortDir=1;
  document.querySelectorAll(".role").forEach(b=>b.classList.toggle("active",b===btn));
  document.querySelectorAll(".filter").forEach(b=>b.classList.toggle("active",b.dataset.filter==="all"));
  render();
}));
document.querySelectorAll(".filter").forEach(btn=>btn.addEventListener("click",()=>{
  currentFilter=btn.dataset.filter;
  document.querySelectorAll(".filter").forEach(b=>b.classList.toggle("active",b===btn));
  render();
}));
document.querySelectorAll("thead th[data-sort]").forEach(th=>th.addEventListener("click",()=>{
  const key=th.dataset.sort;
  if(sortKey===key) sortDir*=-1;
  else {sortKey=key; sortDir=1;}
  render();
}));
search.addEventListener("input",()=>{searchTerm=search.value;render()});
clearSearch.addEventListener("click",()=>{search.value="";searchTerm="";render();search.focus()});
document.getElementById("resetView").addEventListener("click",()=>{
  search.value=""; searchTerm=""; currentFilter="all";
  sortKey="originalIndex"; sortDir=1;
  document.querySelectorAll(".filter").forEach(b=>b.classList.toggle("active",b.dataset.filter==="all"));
  render();
});

render();

if("serviceWorker" in navigator){
  window.addEventListener("load",()=>navigator.serviceWorker.register("sw.js").catch(()=>{}));
}
