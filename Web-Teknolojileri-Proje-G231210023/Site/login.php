<?php
$kullanici_adi = $_POST['kullanici_adi'] ?? '';
$sifre = $_POST['sifre'] ?? '';

$mesaj = "";
$yonlendirme = "";
$baslik = "";
$renk = "white";
$arkaplan_renk = "black";

if ($kullanici_adi != "g231210023@sakarya.edu.tr" || $sifre != "g231210023") {
    $mesaj = "Kullanıcı adı veya şifreyi hatalı girdiniz. Tekrar deneyin!";
    $baslik = "Giriş Başarısız";
    $renk = "#C62828";
    $yonlendirme = "Login";
    $arkaplan_renk = "#FFEBEE";

} else {
    $mesaj = "Giriş başarılı! Hoş geldiniz $kullanici_adi";
    $baslik = "Giriş Başarılı";
    $renk = "#2E7D32";
    $yonlendirme = "Hakkımda";
    $arkaplan_renk = "#E8F5E9";
}
?>
<!DOCTYPE html>
<html lang="tr">

    <head>
        <meta charset="UTF-8">
        <title><?= $baslik ?></title>
        <link rel="stylesheet" href="css/Login_style.css" />
        <style>
            .mesaj {
                font-size: 2rem;
                font-weight: bold;
                color:
                    <?= $renk ?>
                ;
            }
            .container {
                display: flex;
                flex-direction: column;
                align-items: center;
                justify-content: center;
                height: 100vh;
                background-color:
                    <?= $arkaplan_renk ?>
                ;
            }
        </style>
    </head>

    <body>
        <div class="container">
            <p class="mesaj"><?php echo $mesaj; ?></p>
            <p class="mesaj"><?= $yonlendirme ?> Sayfasına Yönlendiriliyorsunuz... <span id="sayac">5</span></p>

        </div>
    </body>
    <script>
        let sayac = 5;
        const sayacElement = document.getElementById("sayac");
        const interval = setInterval(() => {
            sayac--;
            sayacElement.textContent = sayac;
            if (sayac <= 0) {
                clearInterval(interval);
            }
        }, 1000);
        setTimeout(function () {
            window.location.href = "<?= $kullanici_adi == "g231210023@sakarya.edu.tr" && $sifre == "g231210023" ? 'hakkimda.html' : 'Login.html' ?>";
        }, 5000);
    </script>
</html>