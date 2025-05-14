const { createApp, ref } = Vue;
createApp({
  setup() {
    const ad = ref("");
    const soyad = ref("");
    const email = ref("");
    const telefon_numarasi = ref("");
    const sehir = ref("0");
    const cinsiyet = ref("");
    const dogum_tarihi = ref("");
    const konu = ref("");
    const form_onay = ref(false);
    const secilenDosya = ref(null);
    const gonderButonuDisabled = ref(true);

    const dosyaSec = (event) => {
      secilenDosya.value = event.target.files[0];
    };

    // Email doğrulama fonksiyonu
    const validateEmail = (email) => {
      const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return re.test(email);
    };

    // Telefon numarası doğrulama fonksiyonu
    const validatePhone = (phone) => {
      const regex = /^05\d{9}$/;
      return regex.test(phone);
    };
    const validateName = (name) => {
      const regex = /^[a-zA-ZğüşıöçĞÜŞİÖÇ\s]+$/;
      return regex.test(name);
    };
    const Kontrol = () => {
      // Gerekli alanların dolu olup olmadığını kontrol ettim
      if (
        ad.value === "" ||
        soyad.value === "" ||
        email.value === "" ||
        telefon_numarasi.value === "" ||
        dogum_tarihi.value === "" ||
        konu.value === "" ||
        sehir.value === "0" ||
        !secilenDosya.value ||
        !form_onay.value
      ) {
        alert("Lütfen tüm alanları doldurun! (Vue.js uyarısı)");
        return false;
      }
      if (!cinsiyet.value) {
        alert("Lütfen cinsiyetinizi seçiniz! (Vue.js uyarısı)");
        gonderButonuDisabled.value = true;
        return false;
      }
      // İsim kontrolü
      if (!validateName(ad.value)) {
        alert("İsim alanında rakam veya geçersiz karakter kullanılamaz!");
        gonderButonuDisabled.value = true;
        return false;
      }
      // Soyisim kontrolü
      if (!validateName(soyad.value)) {
        alert("Soyisim alanında rakam veya geçersiz karakter kullanılamaz!");
        gonderButonuDisabled.value = true;
        return false;
      }
      if (!validateEmail(email.value)) {
        alert("Lütfen geçerli bir e-mail adresi giriniz! (Vue.js uyarısı)");
        gonderButonuDisabled.value = true;
        return false;
      }
      if (!validatePhone(telefon_numarasi.value)) {
        alert("Lütfen geçerli bir telefon numarası giriniz! (Vue.js uyarısı)");
        gonderButonuDisabled.value = true;
        return false;
      }
      gonderButonuDisabled.value = false;
      alert("Form Vue.js tarafından başarıyla kontrol edildi!");
      return true;
    };
    const formuGonder = () => {
      if (Kontrol()) {
        console.log("Form gönderilebilir.");
      }
    };
    return {
      ad,
      soyad,
      email,
      telefon_numarasi,
      sehir,
      cinsiyet,
      dogum_tarihi,
      konu,
      form_onay,
      secilenDosya,
      gonderButonuDisabled,
      dosyaSec,
      Kontrol,
      formuGonder,
    };
  },
}).mount("#iletisim_formu");
