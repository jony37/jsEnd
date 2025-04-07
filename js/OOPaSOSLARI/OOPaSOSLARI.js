// OOP yaratish usullari

// #1. Literal obyektlar orqali (Oddiy usul):
const inson = {
  ism: "Ali",
  salomBer() {
    console.log(`Salom, mening ismim ${this.ism}`);
  },
};

inson.salomBer();

// #2. Konstruktor funksiyalar yordamida (ES5 usuli):
function Mashina(model) {
  this.model = model;
}

Mashina.prototype.yurish = function () {
  console.log(`${this.model} yurmoqda`);
};

const m = new Mashina("BMW");
m.yurish();

// #3. ES6 klasslar yordamida (Zamonaviy OOP):
class Hayvon {
  constructor(nomi) {
    this.nomi = nomi;
  }

  ovoz() {
    console.log(`${this.nomi} ovoz chiqaryapti`);
  }
}

const mushuk = new Hayvon("Mushuk");
mushuk.ovoz();
