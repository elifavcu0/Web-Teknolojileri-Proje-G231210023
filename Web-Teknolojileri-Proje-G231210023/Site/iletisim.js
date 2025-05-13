document.addEventListener("DOMContentLoaded", function () {
  setTimeout(function () {
    document.getElementById("JS-butonu").addEventListener("click", function () {
      var ad = document.getElementById("ad");
      var soyad = document.getElementById("soyad");
      var email = document.getElementById("email");
      var telefon = document.getElementById("telefon-numarasi");
      var sehir = document.getElementById("sehir");
      var erkek = document.getElementById("erkek");
      var kadin = document.getElementById("kadin");
      var dgunu = document.getElementById("dogum-tarihi");
      var pp_dosya = document.getElementById("pp-dosya");
      var konu = document.getElementById("konu");
      var form_onay = document.getElementById("form-onay");
      var gonder_butonu = document.getElementById("gonder-butonu");

      gonder_butonu.disabled = true;

      function validateEmail(email) {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(email);
      }
      const validateName = (name) => {
        const regex = /^[a-zA-ZğüşıöçĞÜŞİÖÇ\s]+$/;
        return regex.test(name);
      };
      function Kontrol() {
        const telGirisi = telefon.value;
        const regex = /^05\d{9}$/;
        if (
          ad.value === "" ||
          soyad.value === "" ||
          email.value === "" ||
          telefon.value === "" ||
          dgunu.value === "" ||
          konu.value === "" ||
          sehir.value == "0" ||
          pp_dosya.files.length === 0 ||
          !form_onay.checked
        ) {
          alert("Lütfen tüm alanları doldurun!");
          gonder_butonu.disabled = true;
          return false;
        }
        if (!erkek.checked && !kadin.checked) {
          alert("Lütfen cinsiyetinizi seçiniz!");
          gonder_butonu.disabled = true;
          return false;
        }
        if (!validateName(ad.value)) {
          alert("İsim alanında rakam veya geçersiz karakter kullanılamaz!");
          gonderButonuDisabled.value = true;
          return false;
        }
        if (!validateName(soyad.value)) {
          alert("Soyisim alanında rakam veya geçersiz karakter kullanılamaz!");
          gonderButonuDisabled.value = true;
          return false;
        }
        if (ad.value.length < 3) {
          alert("İsim minimum 3 karakterden oluşmalıdır!");
          gonder_butonu.disabled = true;
          return false;
        }
        if (soyad.value.length < 2) {
          alert("Soyisim minimum 2 karakterden oluşmalıdır!");
          gonder_butonu.disabled = true;
          return false;
        }
        if (!validateEmail(email.value)) {
          alert("Lütfen geçerli bir e-mail adresi giriniz!");
          email.focus();
          gonder_butonu.disabled = true;
          return false;
        }
        if (!regex.test(telGirisi)) {
          alert("Lütfen geçerli bir telefon numarası giriniz!");
          telefon.focus();
          gonder_butonu.disabled = true;
          return false;
        }
        alert("Form JS tarafından başarıyla kontrol edildi!");
        gonder_butonu.disabled = false;
        return true;
      }
      Kontrol();
    });
  }, 500);
});
