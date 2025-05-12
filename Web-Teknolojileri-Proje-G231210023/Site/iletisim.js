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
    return false;
  }
  if (!erkek.checked && !kadin.checked) {
    alert("Lütfen cinsiyetinizi seçiniz!");
    return false;
  }
  if (!validateEmail(email.value)) {
    alert("Lütfen geçerli bir e-mail adresi giriniz!");
    email.focus();
    return false;
  }
  if (!regex.test(telGirisi)) {
    alert("Lütfen geçerli bir telefon numarası giriniz!");
    telefon.focus();
    return false;
  }
  alert("Form kontrol edildi, gönderebilirsiniz!");
  gonder_butonu.disabled = false;
  return true;
}
document.getElementById("JS-butonu").addEventListener("click", Kontrol);
