<template>
  <div class="login-container">
    <div class="form">
      <h3>FORM</h3>
      <div class="row">
        <label for="name">Name</label>
        <p class="red">*{{ nameError }}</p>
      </div>
      <input
        class="field"
        name="name"
        type="text"
        v-model="name"
        @focus="checkName"
        placeholder="Enter your Name"
      />

      <div class="row">
        <label for="name">Surname</label>
        <p class="red">*{{ surnameError }}</p>
      </div>
      <input
        class="field"
        name="surname"
        type="text"
        v-model="surname"
        @focus="checkSurname"
        placeholder="Enter your Surname"
      />

      <div class="row">
        <label for="name">Email</label>
        <p class="red">*{{ emailError }}</p>
      </div>
      <input
        class="field"
        name="email"
        type="text"
        v-model="email"
        @focus="checkEmail"
        placeholder="e.g. example@email.com"
      />

      <div class="row">
        <label for="name">Phone</label>
        <p class="red">*{{ phoneError }}</p>
      </div>
      <input
        class="field"
        name="phone"
        type="text"
        v-model="phone"
        @focus="checkPhone"
        placeholder="e.g. +90 xxx xxx xxxx"
      />

      <div class="row">
        <label class="label" for="name">City</label>
        <p class="red">*{{ cityError }}</p>
      </div>
      <select
        class="field select-city"
        name="city"
        v-model="city"
        @focus="checkCity"
      >
        <option v-for="(item, index) in cities" :key="index">{{ item }}</option>
      </select>

      <div class="row">
        <label for="name">Address</label>
        <p class="red">*{{ addressError }}</p>
      </div>
      <textarea
        class="field textarea"
        name="address"
        rows="3"
        v-model="address"
        @focus="checkAddress"
        placeholder="Enter your Address"
      ></textarea>
      <button class="btn" @click="sendForm">SUBMIT</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "HomeView",
  data: () => ({
    name: "",
    surname: "",
    city: "",
    address: "",
    phone: "",
    email: "",
    cities: {
      1: "ADANA",
      2: "ADIYAMAN",
      3: "AFYONKARAHİSAR",
      4: "AĞRI",
      5: "AMASYA",
      6: "ANKARA",
      7: "ANTALYA",
      8: "ARTVİN",
      9: "AYDIN",
      10: "BALIKESİR",
      11: "BİLECİKK",
      12: "BİNGÖL",
      13: "BİTLİS",
      14: "BOLU",
      15: "BURDUR",
      16: "BURSA",
      17: "ÇANAKKALE",
      18: "ÇANKIRI",
      19: "ÇORUM",
      20: "DENİZLİ",
      21: "DİYARBAKIR",
      22: "EDİRNE",
      23: "ELAZIĞ",
      24: "ERZİNCAN",
      25: "ERZURUM",
      26: "ESKİŞEHİR",
      27: "GAZİANTEP",
      28: "GİRESUN",
      29: "GÜMÜŞHANE",
      30: "HAKKARİ",
      31: "HATAY",
      32: "ISPARTA",
      33: "MERSİN",
      34: "İSTANBUL",
      35: "İZMİR",
      36: "KARS",
      37: "KASTAMONU",
      38: "KAYSERİ",
      39: "KIRKLARELİ",
      40: "KIRŞEHİR",
      41: "KOCAELİ",
      42: "KONYA",
      43: "KÜTAHYA",
      44: "MALATYA",
      45: "MANİSA",
      46: "KAHRAMANMARAŞ",
      47: "MARDİN",
      48: "MUĞLA",
      49: "MUŞ",
      50: "NEVŞEHİR",
      51: "NİĞDE",
      52: "ORDU",
      53: "RİZE",
      54: "SAKARYA",
      55: "SAMSUN",
      56: "SİİRT",
      57: "SİNOP",
      58: "SİVAS",
      59: "TEKİRDAĞ",
      60: "TOKAT",
      61: "TRABZON",
      62: "TUNCELİ",
      63: "ŞANLIURFA",
      64: "UŞAK",
      65: "VAN",
      66: "YOZGAT",
      67: "ZONGULDAK",
      68: "AKSARAY",
      69: "BAYBURT",
      70: "KARAMAN",
      71: "KIRIKKALE",
      72: "BATMAN",
      73: "ŞIRNAK",
      74: "BARTIN",
      75: "ARDAHAN",
      76: "IĞDIR",
      77: "YALOVA",
      78: "KARABüK",
      79: "KİLİS",
      80: "OSMANİYE",
      81: "DÜZCE",
    },
    nameError: "",
    surnameError: "",
    cityError: "",
    addressError: "",
    phoneError: "",
    emailError: "",
  }),
  watch: {
    surname() {
      this.checkSurname();
    },
    name() {
      this.checkName();
    },
    city() {
      this.checkCity();
    },
    address() {
      this.checkAddress();
    },
    phone() {
      this.checkPhone();
    },
    email() {
      this.checkEmail();
    },
  },
  methods: {
    sendForm: function () {
      this.checkName();
      this.checkSurname();
      this.checkCity();
      this.checkAddress();
      this.checkPhone();
      this.checkEmail();
      if (
        this.nameError.length == 0 &&
        this.surnameError.length == 0 &&
        this.cityError.length == 0 &&
        this.addressError.length == 0 &&
        this.phoneError.length == 0 &&
        this.emailError.length == 0
      ) {
        alert("submit is successful!");
      }
    },
    checkName: function () {
      if (this.name.length == 0) {
        this.nameError = "Name cannot be empty!";
        return;
      }
      this.nameError = "";
    },
    checkSurname: function () {
      if (this.surname.length == 0) {
        this.surnameError = "Surname cannot be empty!";
        return;
      }
      this.surnameError = "";
    },
    checkCity: function () {
      if (this.city.length == 0) {
        this.cityError = "City cannot be empty!";
        return;
      }
      this.cityError = "";
    },
    checkAddress: function () {
      if (this.address.length == 0) {
        this.addressError = "Address cannot be empty!";
        return;
      }
      this.addressError = "";
    },
    checkPhone: function () {
      var phoneno =
        /^\+(90)?[-. ]?([0-9]{3})[-. ]??([0-9]{3})[-. ]?([0-9]{4})$/;
      let phoneRegex = RegExp(phoneno);
      if (this.phone.length == 0) {
        this.phoneError = "Phone cannot be empty!";
        return;
      }
      if (!phoneRegex.test(this.phone)) {
        this.phoneError = "invalid phone format!";
        return;
      }
      this.phoneError = "";
    },
    checkEmail: function () {
      let emailRegex = RegExp(
        "^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\\.[a-zA-Z0-9-.]+$"
      );
      if (this.email.length == 0) {
        this.emailError = "Email cannot be empty!";
        return;
      }
      if (!emailRegex.test(this.email)) {
        this.emailError = "invalid email format!";
        return;
      }
      this.emailError = "";
    },
  },
};
</script>
<style>
.login-container {
  width: 1240px;
  align-items: center;
}
.form {
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  width: 40%;
  gap: 12px;
  border: 1px solid #c4baba;
  padding: 20px 0;
}
.row {
  display: flex;
  flex-direction: row;
  align-items: flex-end;
  width: 83%;
  text-align: left;
}
.red {
  color: red;
  font-size: 13px;
  margin: 0;
}

.field {
  border: 1px solid #c4baba;
  height: 30px !important;
  width: 80%;
  padding-left: 10px;
}
.field:focus {
  outline: none !important;
  border: 2px solid #1491c2 !important;
}
.select-city {
  padding-left: 0;
  height: 30px;
  width: 83%;
}
.field .textarea {
  height: auto;
}
.btn {
  margin-top: 8px;
  height: 40px;
  width: 80%;
  background-image: linear-gradient(to right, #1491c2, #143dc2);
  border: none;
  border-radius: 5px;
  color: white;
}
.btn:hover {
  background-image: linear-gradient(to right, #1425c2, #7414c2);
}
</style>
