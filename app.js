const STORAGE_KEY = "fanta-auction-v1";
const saved = JSON.parse(localStorage.getItem(STORAGE_KEY) || '{"taken":{},"notes":{}}');
let state = {
  taken: saved.taken || {},
  notes: saved.notes || {}
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

function render(){
  const list=filtered();
  body.innerHTML="";
  if(!list.length){
    body.innerHTML='<tr><td colspan="7" class="empty">Nessun giocatore trovato.</td></tr>';
  }else{
    for(const p of list){
      const tr=document.createElement("tr");
      if(state.taken[p.id]) tr.classList.add("taken");
      tr.innerHTML=`
        <td class="checkbox-cell">
          <input class="take-box" type="checkbox" aria-label="Segna ${escapeHtml(p.name)} come preso" ${state.taken[p.id]?"checked":""} data-id="${p.id}">
        </td>
        <td><div class="player">${escapeHtml(p.name)}</div></td>
        <td><div class="team">${escapeHtml(p.team)}</div></td>
        <td class="num">${p.xpv}</td>
        <td class="num">${p.pca}</td>
        <td class="num">${p.pma}</td>
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
