// var kullanma, let ve const kullan
// algoritma çıkar
// kullanıcı arayüzü nasıl çalışcak bunu da adım adım belirt

// ekranda oyunu başlatma butonu olsun.
// butona tıklayınca oyun ekranı gelsin
// oyun ekranında oyun sorusu, sayı tahmin inputu, ve sonuç bölümlerinin olduğu 3 alan olsun.
// kullanıcının 5 hakkı olsun 
// bilirse ekranda kazandınız yazsın ve oyun başlat ekranına dönsün
// bilemezse 1 hakkı gitsin ve sonuç bölümünde bilemediniz yazsın. kalan hakkı göstersin
// 5 hakkı biterse sonuç bölümünde kazanamadınız yazsın ve ekranda ana ekrana dön butonu belirsin.

let info = document.querySelector(".info");
let answer = document.querySelector(".answer");
let inputla = document.querySelector("#inputid");
let submit = document.querySelector("#submitid");

let hak = 5;
let durum = false;
info.innerHTML = "merhaba Lütfen 0 ile 100 arasında sayı giriniz. 5 hakkınız var";

let rastgele = Math.floor(Math.random() * 101);

function baslat() {
    info.style.display = "block"
    console.log(`rastgele sayı= ${rastgele}`);
    durum = true;
}

function tahminlendi() {
    let tahmin = inputla.value;
    console.log({ tahmin, rastgele });
    if (tahmin == rastgele && durum == true && hak > 0) {
        answer.innerHTML = "tebrikler bildiniz!";
        durum = false;
    } else {
        answer.innerHTML = "malesef bilemedin...";
        hak--;
        console.log(hak);
        if (hak < 1) {
            durum = false;
            info.innerHTML = "Hakkınız bitmiştir. Yeniden oynamak için lütfen başlat butonuna basın";
        }
    }
}
