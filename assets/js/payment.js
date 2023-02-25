const generateString = length => {
    const characters ='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let result = ' ';
    const charactersLength = characters.length;
    for ( let i = 0; i < length; i++ ) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
}

const jadwalBreaker = () => window.innerWidth <= 430 ? 5 : 8;

const daySwiper = new Swiper(".daySwiper", {
    slidesPerView: jadwalBreaker(),
    grabCursor: true,
    spaceBetween: 10,
});

const jadwal = document.getElementById("jadwal");
const sesi = document.getElementById("sesi");
const via = document.getElementById("via");
const purchase = document.getElementById("purchase");
const elementInject = [jadwal, sesi, via, purchase];

for (let a=0; a<elementInject.length; a++) {
    const label = elementInject[a].querySelectorAll("label");
    for (let i=0; i<label.length; i++) {
        let randomString = generateString(6);
        elementInject[a].querySelectorAll("input")[i].setAttribute("id", randomString);
        label[i].setAttribute("for", elementInject[a].querySelectorAll("input")[i].getAttribute("id"));
        if (a==0) {
            label[i].innerText = i+12;
        };
    }
}