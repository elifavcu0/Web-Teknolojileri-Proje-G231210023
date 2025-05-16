var kullanici_adi = document.getElementById("kullanici_adi");
var sifre = document.getElementById("sifre");

function GecerliEmail(kullanici_adi) {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(kullanici_adi);
}
function FormKontrol(e) {
  e.preventDefault();
  if (kullanici_adi.value == "" || sifre.value == "") {
    alert("Kullanıcı adı veya şifre boş bırakılamaz!");
    return false;
  }
  if (!GecerliEmail(kullanici_adi.value)) {
    alert("Lütfen geçerli bir e-mail adresi giriniz!");
    kullanici_adi.focus();
    return false;
  }
  e.target.closest("form").submit();
}
document.getElementById("giris_butonu").addEventListener("click", FormKontrol);
