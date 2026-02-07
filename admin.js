const admin = document.getElementById("admin");
let DATA = getData();

admin.innerHTML = `
  <div class="card">
    <h2>Admin Login</h2>
    <input id="pass" placeholder="Passcode" />
    <button onclick="login()">Enter</button>
  </div>`;

function login() {
  if (document.getElementById("pass").value !== "STARMOB")
    return alert("Wrong passcode");
  renderAdmin();
}

function renderAdmin() {
  admin.innerHTML = `
    <div class="card">
      <h2>Rates (GHS)</h2>
      ${Object.keys(DATA.rates).map(c => `
        <input value="${DATA.rates[c].buy}" onchange="DATA.rates.${c}.buy=this.value" />
        <input value="${DATA.rates[c].sell}" onchange="DATA.rates.${c}.sell=this.value" />
      `).join("")}
      <button onclick="save()">Save</button>
    </div>`;
}

function save() {
  saveData(DATA);
  alert("Saved");
}
