// var kullanma, let ve const kullan
// algoritma çıkar
// kullanıcı arayüzü nasıl çalışcak bunu da adım adım belirt

// ekranda oyunu başlatma butonu olsun.  +
// butona tıklayınca oyun ekranı gelsin  +
// oyun ekranında oyun sorusu, sayı tahmin inputu, tahmin yapma butonu ve sonuç bölümlerinin olduğu 3 alan olsun.  +
// kullanıcının 5 hakkı olsun  +
// sadece sayı girebilsin - type "number"  +
// bilirse ekranda kazandınız yazsın ve oyun başlat ekranına dönsün  +
// bilemezse 1 hakkı gitsin ve sonuç bölümünde bilemediniz yazsın. kalan hakkı göstersin +
// 5 hakkı biterse sonuç bölümünde kazanamadınız yazsın ve ekranda ana ekrana dön butonu belirsin.  +

// input tahminButonu sonuç baslatmaButonu oyunSorusu rastgeleSayi hak

//oyun başladığında 

    //baslatmaButonu
        //rastgeleSayı belirlenir
        //hak tanımlanır
        //ekranda oyunSorusu görünür
        // input
            //yazı yazabilir
                //type=number ile engelle
            //sayı yazabilir
                //negatif yazabilir
                    //<21>
                    //inputu boşalt
                //pozitif yazabilir
                    //24
        
    //hak
            //hak yeterliyse
                //tahminButonu aktif
            //hak yetersizse
                //tahminButonu pasif
                //(50)        
    //tahminButonu
        //rastgele sayı ile tahmin karşılaştır
            //doğruysa
                //<48>
            //yanlışsa
                // hak -1 azalsın, ekranda malesef bilemediniz tekrar deneyin  {hak} kaldı yazsın. 
                // <32>

//oyun bittiğinde
    //kazandıysa
        //ekranda tebrikler kazandınız yazsın ve baslatma butonu gözüksün
    //kaybettiyse
        //ekranda malesef kazanamadınız yazsın ve baslatma butonu görünsün


        let rastgeleSayi;
        let hak;
        let input=document.getElementById("inputid");
        let inputValue;
function baslatmaButonu(){
    document.getElementsByClassName("answer")[0].innerHTML="";
    rastgeleSayi=Math.floor(Math.random()*10);
    input.value="";
    hak=5;
    document.getElementsByClassName("container")[0].style.display="flex";
    document.getElementById("basla").style.display="none";
    console.log(rastgeleSayi);
    document.getElementsByClassName("oyunSorusu")[0].innerHTML="1 ile 10 arası bir sayı tahmin ediniz..";
    input.addEventListener("change", function(){
        inputValue=input.value;
    })

     
}
let submitid = document.getElementById("submitid");

submitid.addEventListener("click", function tahminButonu(){
    
    if(rastgeleSayi==inputValue){
        console.log("doğru");
        document.getElementsByClassName("answer")[0].innerHTML="tebrikler Kazandınız";
        setTimeout(function(){ document.getElementsByClassName("container")[0].style.display="none";
        document.getElementById("basla").style.display="Block"; }, 2000);
    }else if(hak>1){
        hak--;
        console.log("yanlış");
        document.getElementsByClassName("answer")[0].innerHTML=`malesef bilemediniz ${hak} hakkınız kaldı`;
    }else if (hak==1){
        document.getElementsByClassName("answer")[0].innerHTML="Bilemediniz.Hakkınız Kalmadı. Oyunu Tekrar başlatın";
        setTimeout(function(){ document.getElementsByClassName("container")[0].style.display="none";
        document.getElementById("basla").style.display="Block"; }, 2000);
    }
});


