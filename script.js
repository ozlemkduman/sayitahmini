// var kullanma, let ve const kullan
// algoritma çıkar
// kullanıcı arayüzü nasıl çalışcak bunu da adım adım belirt

// ekranda oyunu başlatma butonu olsun.
// butona tıklayınca oyun ekranı gelsin
// oyun ekranında oyun sorusu, sayı tahmin inputu, tahmin yapma butonu ve sonuç bölümlerinin olduğu 3 alan olsun.
// kullanıcının 5 hakkı olsun
// bilirse ekranda kazandınız yazsın ve oyun başlat ekranına dönsün
// bilemezse 1 hakkı gitsin ve sonuç bölümünde bilemediniz yazsın. kalan hakkı göstersin
// 5 hakkı biterse sonuç bölümünde kazanamadınız yazsın ve ekranda ana ekrana dön butonu belirsin.

// input tahminButonu sonuç başlatmaButonu oyunSorusu rastgeleSayi hak
// sadece başlatmaButonu görünür
// başlatmaButonu'na tıklanınca oyun ekranı görünür
// oyun başladığında
  // rastgeleSayi 0-100 arası bir sayıya eşitlenir
  // oyunSorusu "0-100 arası bir sayı seçin, {hak} hakkınız var" yazısını gösterir
  // tahminButonuna basılırsa
    // input boşsa
        //<24>
    // input doluysa
        // negatif yazabilir
            // 0 ile 100 arasında yazın uyarısı gelicek, sonuç ekranında
            // inputu boşalt
        // pozitif yazabilir
            //hak kontrol
                 //hak yeterliyse
                    //rastgele sayı ile input karşılaştır
                        //tahmin doğru ise sonuç ekraında  kazandınız yazsın ve < oyun bittiğinde> çalışsın
                        //tahmin yanlış ise hak -1 azalsın ve sonuç ekraında bilemediniz {hak} kaldı yazsın
                //hak yeterli değilse
                        //sonuç bölümünde hakkınız kalmamıştır yazsın ve <oyun bittiğinde> çalışsın
  
// oyun bittiğinde
  //ekranda başlatma butonu belirsin.

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
