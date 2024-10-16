let img = document.getElementById("main-image");
let pics = ["03.jpg", "02.jpg", "01.jpg", "04.jpg", "05.jpg", "06.jpg"];
let count = pics.length - 1;

function slider(value) {
    img.classList.add('hidden');
    setTimeout(function() {
        if (count > (pics.length - 1) || count < 0) {
            count = pics.length - 1;
        }
        img.setAttribute("src", pics[count]);

        img.classList.remove('hidden'); 
        img.classList.add('show'); 

        if (value === '++') {
            count++;
        } else if (count === 0 && value === '--') {
            count = pics.length - 1;
        } else {
            count--;
        }
    }, 500); 
}
setInterval(slider, 2000);