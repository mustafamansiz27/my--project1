// 'use strict';


// let secretNumber =math.trunc(math.random() *20) + 1;
// let score = 20;
// let highscore = 0;

// const displayMessage = function (message){
//     document.querySelector('.message').textContent =message;
// }
// document.querySelector('.check').addEventListener('click',function(){  

//     const guess = Number (document.querySelector('.guess)').value);
//     console.log(guess,typeof guess );
//     console.log(secretNumber, typeof secretNumber);
// });


//odev-1)soru:
    // Bir sayıAl(); fonksiyonu yapalım.
    // Fonksiyonu çağırdığımızda:
    // Kullanıcıdan sayı alsın
    // ve
    // kullanicinin girdigi sayilarin toplami 500'u gecerse
        // "çok oldu, toplam .... oldu" yazsin




       function sayiAl(input){
           let  toplam = 0;
           let mesaj;  
           for(var i=1; i<=input; i++){
               toplam+=i    
               if(toplam>500){
                mesaj ="fazla sayı girdiniz";
               }else{
                mesaj ="tebrikler";
               }
           };
           alert(mesaj);
          return sayiAl;
           
                  };    
       let input= Number(prompt("birsayı giriniz"));
        sayiAl(input);

        
      

        
        
       
       
       










 
    // let sayi=Number(prompt("Lütfen Bir sayi giriniz"));
    // let toplam=0;
    //   mesaj="";

    //     for(var i=0; i<=sayi ; i++ ){
      
    //     toplam+=i;
    //     if(toplam>500){
    
    //         mesaj="Çok oldu Sınırı Aştınız"
    //     }  else{
    //         mesaj = toplam;
    //     }
        
         

    // }




    //     console.log(mesaj);
    //     console.log(toplam);

        
    