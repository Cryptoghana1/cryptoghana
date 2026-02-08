const admin = document.getElementById("admin");
let DATA = getData();

/* Ensure default data is saved once */
if (!localStorage.getItem("DATA")) {
  saveData(DATA);
}

admin.innerHTML = `
  <div class="card">
    <h2>Admin Login</h2>
    <input id="pass" placeholder="Passcode" />
    <button onclick="login()">Enter</button>
  </div>
`;

function login() {
  if (document.getElementById("pass").value !== "STARMOB") {
    return alert("Wrong passcode");
  }
  renderAdmin();
}

function renderAdmin() {
  admin.innerHTML = `
    <div class="card">
      <h2>Rates (GHS)</h2>

      ${Object.keys(DATA.rates).map(c => `
        <strong>${c}</strong>
        <input
          value="${DATA.rates[c].buy}"
          onchange="DATA.rates['${c}'].buy = this.value"
          placeholder="Buy rate"
        />
        <input
          value="${DATA.rates[c].sell}"
          onchange="DATA.rates['${c}'].sell = this.value"
          placeholder="Sell rate"
        />
      `).join("")}

      <h2>Wallet Addresses</h2>

      ${Object.keys(DATA.wallets).map(c => `
        <strong>${c}</strong>
        <input
          value="${DATA.wallets[c]}"
          onchange="DATA.wallets['${c}'] = this.value"
          placeholder="${c} wallet address"
        />
      `).join("")}

      <h2>Payment Details</h2>

      <strong>MTN MoMo</strong>
      <input
        value="${DATA.payments.momo.number}"
        onchange="DATA.payments.momo.number = this.value"
        placeholder="MoMo Number"
      />
      <input
        value="${DATA.payments.momo.name}"
        onchange="DATA.payments.momo.name = this.value"
        placeholder="MoMo Name"
      />

      <strong>Vodafone Cash</strong>
      <input
        value="${DATA.payments.vodafone.number}"
        onchange="DATA.payments.vodafone.number = this.value"
        placeholder="Vodafone Number"
      />
      <input
        value="${DATA.payments.vodafone.name}"
        onchange="DATA.payments.vodafone.name = this.value"
        placeholder="Vodafone Name"
      />

      <strong>Bank</strong>
      <input
        value="${DATA.payments.bank.bank}"
        onchange="DATA.payments.bank.bank = this.value"
        placeholder="Bank Name"
      />
      <input
        value="${DATA.payments.bank.name}"
        onchange="DATA.payments.bank.name = this.value"
        placeholder="Account Name"
      />
      <input
        value="${DATA.payments.bank.number}"
        onchange="DATA.payments.bank.number = this.value"
        placeholder="Account Number"
      />

      <button onclick="save()">Save</button>
    </div>
  `;
}

function save() {
  saveData(DATA);
  alert("Saved");
}
