const DEFAULT_DATA = {
  rates: {
    BTC: { buy: 12.0, sell: 11.1 },
    USDT: { buy: 12.0, sell: 11.1 },
    ETH: { buy: 12.5, sell: 11.5 },
    LTC: { buy: 10.5, sell: 9.5 }
  },
  wallets: {
    BTC: "322tdJgsdighCbPD6WTCU2dJMBiJ7ikE35",
    USDT: "TWW4DuVo1WDpfridVBZCgffsUGipkbcLxb",
    ETH: "0x96e0b73bfbfc4074c480c59868a84aaaf1c19b11",
    LTC: "MBqjeFoLzKqDYcJW4HhT2KrxwxvHzmaWKQ"
  },
  payments: {
    momo: { number: "0554732609", name: "ABDULAI MOHAMMED TAWFIQ" },
    vodafone: { number: "0508579356", name: "Abdulai tawfiq" },
    bank: { bank: "Eco Bank Ghana", name: "ABDULAI TAWFIQ", number: "1441002785650" }
  }
};

function getData() {
  return JSON.parse(localStorage.getItem("DATA")) || DEFAULT_DATA;
}

function saveData(data) {
  localStorage.setItem("DATA", JSON.stringify(data));
}
