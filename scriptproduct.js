const quantityinput = document.getElementById("quantityinput");
const stockinfo = document.getElementById("stockinfo");
const maxstock = 69;

stockinfo.innerText = `Meme stock = ${maxstock}`;

quantityinput.addEventListener("input", function() {
    let value = parseInt(quantityinput.value);
    if (value < 1){
        quantityinput.value = 1;
    }
    if (value > maxstock){
        quantityinput.value = maxstock;
        alert(`Bro, we have ${maxstock} memes in stock! Blud stupid?`);
    }
});
let colorinput = document.querySelectorAll(".color input");

colorinput.forEach((input) => {
    input.addEventListener("change", function() {
        if (this.checked) {
            productImg.src = this.getAttribute("data-image");
        }
    });
});