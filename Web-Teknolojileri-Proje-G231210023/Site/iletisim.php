<!DOCTYPE html>
<html lang="tr">

    <head>
        <meta charset="UTF-8">
        <title>Form Sonuçları</title>
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet">
    </head>

    <body class="bg-light">
        <div class="container mt-5">
            <div class="card shadow-sm">
                <div class="card-header bg-primary text-white">
                    <h5 class="mb-0">Form Bilgileri</h5>
                </div>
                <div class="card-body">
                    <p><strong>Ad-Soyad:</strong> <?= $_POST["ad"] . " " . $_POST["soyad"] ?></p>
                    <p><strong>E-mail Adresi:</strong> <?= $_POST["email"] ?></p>
                    <p><strong>Telefon Numarası:</strong> <?= $_POST["telefon-numarasi"] ?></p>
                    <?php
                    $sehirler = array(
                        1 => "Adana",
                        "Adıyaman",
                        "Ağrı",
                        "Aksaray",
                        "Amasya",
                        "Ankara",
                        "Antalya",
                        "Ardahan",
                        "Artvin",
                        "Aydın",
                        "Balıkesir",
                        "Bartın",
                        "Batman",
                        "Bayburt",
                        "Bilecik",
                        "Bingöl",
                        "Bitlis",
                        "Burdur",
                        "Bursa",
                        "Çanakkale",
                        "Çankırı",
                        "Çorum",
                        "Denizli",
                        "Diyarbakır",
                        "Düzce",
                        "Edirne",
                        "Elazığ",
                        "Erzincan",
                        "Erzurum",
                        "Eskişehir",
                        "Gaziantep",
                        "Giresun",
                        "Gümüşhane",
                        "Hakkâri",
                        "Hatay",
                        "Iğdır",
                        "Isparta",
                        "İstanbul",
                        "İzmir",
                        "Kahramanmaraş",
                        "Karabük",
                        "Karaman",
                        "Kars",
                        "Kastamonu",
                        "Kayseri",
                        "Kilis",
                        "Kırıkkale",
                        "Kırklareli",
                        "Kırşehir",
                        "Kocaeli",
                        "Konya",
                        "Kütahya",
                        "Malatya",
                        "Manisa",
                        "Mardin",
                        "Mersin",
                        "Muğla",
                        "Muş",
                        "Nevşehir",
                        "Niğde",
                        "Ordu",
                        "Osmaniye",
                        "Rize",
                        "Sakarya",
                        "Samsun",
                        "Şanlıurfa",
                        "Siirt",
                        "Sinop",
                        "Sivas",
                        "Şırnak",
                        "Tekirdağ",
                        "Tokat",
                        "Trabzon",
                        "Tunceli",
                        "Uşak",
                        "Van",
                        "Yalova",
                        "Yozgat",
                        "Zonguldak"
                    );
                    $cinsiyetler = array(1 => "Erkek", "Kadın");
                    $secilenSehir = $_POST['sehir'];
                    $secilenSehirAdi = $sehirler[$secilenSehir];
                    $cinsiyet = $cinsiyetler[$_POST["cinsiyet"]];
                    ?>
                    <p><strong>Yaşadığı Şehir:</strong> <?= $secilenSehirAdi ?></p>
                    <p><strong>Cinsiyet:</strong> <?= $cinsiyet ?></p>
                    <p><strong>Doğum Tarihi:</strong> <?= $_POST['dogum-tarihi'] ?></p>
                    <p><strong>Profil Fotoğrafı:</strong></p>
                    <?php
                    $geciciYol = $_FILES['pp_dosya']['tmp_name'];
                    if (!empty($geciciYol)) {
                        $mimeTipi = mime_content_type($geciciYol);
                        if (strpos($mimeTipi, 'image/') === 0) {
                            $veri = base64_encode(file_get_contents($geciciYol));
                            echo '<img src="data:' . $mimeTipi . ';base64,' . $veri . '" class="img-thumbnail mb-3" style="max-width: 200px;">';
                        } else {
                            echo '<div class="alert alert-warning">Bu bir resim dosyası değil!</div>';
                        }
                    } else {
                        echo '<div class="alert alert-danger">Geçici dosya yolu boş geldi!</div>';
                    }
                    ?>
                    <p><strong>Konu:</strong> <?= $_POST['konu'] ?></p>
                    <div class="alert alert-success mt-4">
                        Form bilgilerinin gönderilmesi onaylanmıştır...
                    </div>
                </div>
            </div>
        </div>

    </body>

</html>