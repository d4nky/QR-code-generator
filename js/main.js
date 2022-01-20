const btn = document.getElementById('submit-btn')


btn.addEventListener('click', (e) =>{
    e.preventDefault();
    var dateColor = document.getElementById('date-color-selector').value
    var qrColor = document.getElementById('qr-color-selector').value
    const name = document.getElementById('name').value
    const id = document.getElementById('id').value
    const passportInput = document.getElementById('passport-input').value
    const passport = document.getElementById('passport')
    if(name.length == 0){
        alert('Please enter your id!')
    }
    else if(id.length == 0){
        alert('Please enter your name!')
    }
    else if(passport.length == 0){
        alert('Please enter your passport!')
    }
    else{
        passport.innerHTML = `${passportInput}`
        var qrcode = new QRCode(document.getElementById("qrcode"), {
            text: `${id}_${name}`,
            width: 128,
            height: 128,
            colorDark : `${qrColor}`,
            colorLight : "#ffffff",
            correctLevel : QRCode.CorrectLevel.H
        });
        date.style.color = dateColor
    }
}
)

var date = document.getElementById('date')
function timer(){
var today = new Date();
var dd = String(today.getDate()).padStart(2, '0');
var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
var h = today.getHours();
var min = today.getMinutes();
var sec = today.getSeconds();

today = `${mm}-${dd} ${h}:${min}:${sec}`;
date.textContent = today;
setTimeout(timer, 1000)
}
timer();