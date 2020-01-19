var info=document.querySelector(".info");
var answer=document.querySelector(".answer");
var inputla=document.querySelector("#inputid");
var submit=document.querySelector("#submitid");




var hak=5;
var durum=false;
info.innerHTML="merhaba Lütfen 0 ile 100 arasında sayı giriniz. 5 hakınız var";


var rastgele=Math.floor(Math.random()*101);


function baslat(){
    console.log("blabla");
    console.log(`rastgele sayı= ${rastgele}`);
    durum=true;
}


function tahminlendi(){
    var tahmin=inputla.value;
    console.log({tahmin,rastgele});

    if(tahmin==rastgele && durum==true && hak>0){
        answer.innerHTML="tebrikler bildiniz!";
        durum=false;
    }else {
        answer.innerHTML="malesef kazanamadınız...";
        hak--;
        console.log(hak);
        if(hak<1){
            durum=false;
            info.innerHTML="Hakkınız bitmiştir. Yeniden oynamak için lütfen başlat butonuna basın";

        }
    }

}
