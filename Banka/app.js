
// localStorage.setItem("bakiye", 9000000000);
let bakiye = localStorage.getItem("bakiye");



$(".kytBtn").click(function (e) {
    e.preventDefault();
    let kadi = $("#kytkadi").val();
    let sifre = $("#kytsifre").val();
    localStorage.setItem("kullanici", kadi);
    localStorage.setItem("sifre", sifre);
    window.location.href = "giris.html"
});

$(".grsBtn").click(function (e) {
    e.preventDefault();
    let Kadi = $("#grskadi").val();
    let sifre = $("#grssifre").val();
    let grsKadi = localStorage.getItem("kullanici");
    let grsSifre = localStorage.getItem("sifre");
    if (Kadi == grsKadi && sifre == grsSifre) {
        window.location.href = "anasayfa.html";
    }
    else {
        $(".grshata").html("Kullanıcı adı veya şifre hatalı");
    }

});

$(".bakiye").html(`<h2>Bakiye: ${bakiye}  </h2>`);

$(".cek").click(function (e) { 
    e.preventDefault();
    $(".anah2").hide();
    $("#bakiyeInp").show();
    $(".cek").hide();
    $(".gonder").hide();
    $(".islemyap").show();
    $(".geriBtn").show();
    $(".anah1").hide();
});


$(".islemyap").click(function (e) { 
    e.preventDefault();
    let tutar = + $("#bakiyeInp").val();
    let sonuc = localStorage.getItem("bakiye") - tutar;

    if (bakiye > tutar && sonuc > 0 && tutar > 0) {
        $(".hatabakiye").html("İşlem Başarılı");
        localStorage.setItem("bakiye", sonuc);
        let bakiye = localStorage.getItem("bakiye");
        $(".bakiye").html(`<h2>Bakiye: ${bakiye}  </h2>`);
    }
    else{
        $(".hatabakiye").html("Yetersiz Bakiye");
    }
});

$(".gonder").click(function (e) { 
    e.preventDefault();
    $(".anah2").hide();
    $("#bakiyeInp").show();
    $(".cek").hide();
    $(".gonder").hide();
    $(".islemyap").hide();
    $(".geriBtn").show();
    $(".anah1").hide();
    $("#ibanInp").show();
    $(".ibanBtn").show();
});


$(".geriBtn").click(function (e) { 
    e.preventDefault();
    window.location.href = "anasayfa.html"
});

$(".ibanBtn").click(function (e) { 
    e.preventDefault();
    let tutar = + $("#bakiyeInp").val();
    let iban = $("#ibanInp").val();
    let sonuc = localStorage.getItem("bakiye") - tutar
    
    if (iban.length == 26) {
        if (bakiye > tutar && sonuc > 0 && tutar > 0) {
            $(".hatabakiye").html("İşlem başarılı");
            localStorage.setItem("bakiye", sonuc)
            $(".bakiye").html(`<h2>Bakiye: ${sonuc}  </h2>`);
        }
        else{
            $(".hatabakiye").html("Yetersiz bakiye");
        }
    }
    else{
        $(".hatabakiye").html("İban no hatalı");
    }
});

$("#hesapolustur").click(function (e) { 
    e.preventDefault();
    window.location.href = "yenihesap.html"
});


$("#geriBtn").click(function (e) { 
    e.preventDefault();
    window.location.href ="yenihesap.html"
});

$(".vadesiz").click(function (e) { 
    e.preventDefault();
    window.location.href = "vadesiz.html"
});
$("#anageriBtn").click(function (e) { 
    e.preventDefault();
    window.location.href = "anasayfa.html"
});

$("#hesapbakiye").attr("placeholder", bakiye);

$("#olustur").click(function (e) { 
    e.preventDefault();
    let hesapadi = $("#hesapadi").val();
    let hesapbakiye = $("#hesapbakiye").val();
    let sonuc = bakiye - hesapbakiye
    
    if (bakiye > sonuc && hesapbakiye > 0 && sonuc > 0) {
        localStorage.setItem(hesapadi, hesapbakiye)
        localStorage.setItem("bakiye", sonuc)
        $(".info").html("Hesap oluşturuldu Anasayfaya yönlendiriliyorsunuz");
        setInterval(() => {
            window.location.href = "anasayfa.html"
            
        }, 4000);
    }
    else{
        $(".info").html("İşlem Başarısız");
    }
});

