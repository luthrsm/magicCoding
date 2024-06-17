//modal

const modal = document.querySelector('.container');

function onOpen() {
    modal.classList.add('active');
}

function onClose() {
    modal.classList.remove('active');
}

//contagem regressiva
function startTime(){
    var today = new Date();
    var h = today.getHours();
    var m = today.getMinutes();
    var s = today.getSeconds();

    m = checkTime(m);
    s = checkTime(s);
    document.querySelector('.regressiva').innerHTML = h + ":" + m + ":" + s;
    t = setTimeout('startTime()', 500);

}

function checkTime(i){
    if(i<10){
        i = "0" + i;
    }
    return i;
}

document.write(startTime());

/*slide depoimentos*/

var slide = document.querySelector('.slideshow');
var images = [
    './src/img/depoimento1.png',
    './src/img/depoimento2.png',
    './src/img/depoimento3.png'
];

var time = 7000;
var count = 0;

function moveSlideShow() {
    slide.src = images[count];

    if (count < images.length - 1) {
        count++;
    }
    else {
        count = 0;
    }

    setTimeout("moveSlideShow()", time)
}

window.onload = moveSlideShow;