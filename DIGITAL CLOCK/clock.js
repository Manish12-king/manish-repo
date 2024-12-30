const $ =(selector) => {
    return document.querySelector(selector);
}

const colon = $('.colon' );
//const active = $("#active");
const hour =$('.hour');
const min= $('.min');
const days =$('.days');
const sec= $('.sec');
const dot= $('.dot');
let showDot =true;

function update() {
    showDot =!showDot;
    const now = new Date();

    if(showDot) {
        colon.classList.add('invsible');
        dot.classList.add('invsible');

    }else {
        colon.classList.remove('invsible');
        dot.classList.remove('invsible');

    }
    hour.textContent =String(now.getHours()).padStart(2, '0'); //(length, if null then put 0)
    min.textContent = String(now.getMinutes()).padStart(2, '0');
    sec.textContent =String(now.getSeconds()).padStart(2,0);


    Array.from(days.children).forEach(
        (ele) => {
            ele.classList.remove('active');
        }
    );

    days.children[now.getDay()].classList.add('active');
};
setInterval(update,500);
