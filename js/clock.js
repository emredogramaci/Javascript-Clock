let guestName = prompt(`Lütfen kullanıcı adınızı girin!`)
if (guestName.length > 0) {
    myName.innerHTML = `${guestName}`;
}else{
    alert("Hatalı Giriş!")
    location.reload();
}

let saat = document.querySelector(`#saat`)
let dakika = document.querySelector(`#dakika`)
let saniye = document.querySelector(`#saniye`)
 
function showTime(){
    const days = ["Pazar","Pazartesi","Salı","Çarşamba","Perşembe","Cuma","Cumartesi"];
    let today = new Date();
    let hour = today.getHours();
    let min = today.getMinutes();
    let sec = today.getSeconds();
    let day = days[today.getDay()];
    min = checkTime(min);
    sec = checkTime(sec);

    document.querySelector("#myClock").innerHTML = `${hour}: ${min}: ${sec}  ${day}`;
    setTimeout(showTime, 1000);
}
setInterval(showTime, 1000);
showTime();

function checkTime(i){
    if(i<10){
        i = "0"+i
    }
    return i;
}