const btn = document.getElementById('submit-btn')

btn.addEventListener('click', (e) =>{
    e.preventDefault();
    var color = document.getElementById('color-selector').value
    const name = document.getElementById('name').value
    const id = document.getElementById('id').value
    if(id.length == 0){
        alert('Please enter your id!')
    }
    else if(color == 0){
        alert('Please choose a color!')
    }
    else if(name.length == 0){
        alert('Please enter your name!')
    }
    else{
        var qrcode = new QRCode(document.getElementById("qrcode-2"), {
            text: `${name}+${id}`,
            width: 128,
            height: 128,
            colorDark : `${color}`,
            colorLight : "#ffffff",
            correctLevel : QRCode.CorrectLevel.H
        });
    }
}
)
