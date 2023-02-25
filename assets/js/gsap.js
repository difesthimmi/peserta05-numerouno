const getMarkers = (a,b) => window.innerWidth <= 768 ? b+"%" : a+b+"%";
// console.log(getMarkers(100,80));

// let judulUtama = document.querySelector("h1").text();
// const judulPerHuruf = judulUtama.split("");
// console.log(judulUtama);
// const bubble = document.getElementById("bubble");
const imageBubble = bubble.querySelectorAll("div");
const stepByStep = document.querySelectorAll(".step");
const animationGsap = () => {
    gsap.registerPlugin(ScrollTrigger);

    gsap.from("#psikolog h2", {
        yPercent: 120,
        duration: 1.5,
        scrollTrigger: {
            trigger: "#psikolog",
            markers: false,
            start: `${getMarkers(400, 40)}, bottom`,
            end: `${getMarkers(400, 10)}, top`,
            toggleActions: "restart reverse restart reverse"
        },
    })

    gsap.from("#problem img", {
        xPercent: -150,
        duration: 1.5,
        scrollTrigger: {
            trigger: "#problem",
            markers: false,
            start: `${getMarkers(300, 20)}, bottom`,
            end: `${getMarkers(300, 60)}, top`,
            toggleActions: "restart reverse restart reverse"
        },
    })

    for (let i=0; i<stepByStep.length; i++) {
        gsap.from(stepByStep[i], {
            // xPercent: -160*(i+1),
            scale: 0,
            duration: 1,
            scrollTrigger: {
                trigger: "#intruction",
                markers: false,
                start: `${getMarkers(500, 20)}, bottom`,
                end: `${getMarkers(500, 80)}, top`,
                toggleActions: "restart reverse restart reverse"
            },
            delay: i/2,
        })
    }

    for (let i=0; i<imageBubble.length; i++) {
        gsap.from(imageBubble[i], {
            scale: 0,
            duration: 1.5,
            scrollTrigger: {
                trigger: "#trusted",
                markers: false,
                start: `${getMarkers(100, 70)} bottom`,
                end: `${getMarkers(100,70)} top`,
                toggleActions: "restart reverse restart reverse"
            },
            delay: i/5,
        })
    }

    gsap.from("#service img", {
        yPercent: 130,
        duration: 1.5,
        scrollTrigger: {
            trigger: "#service",
            markers: false,
            start: `${getMarkers(200, 70)} bottom`,
            end: `${getMarkers(200,70)}, top`,
            toggleActions: "restart reverse restart reverse"
        },
    })
    gsap.from("header h1", {
        xPercent: -100,
        duration: 1.5,
    })
    gsap.from("#img-teacher-reading-book", {
        xPercent: -150,
        duration: 2.5,
        scrollTrigger: {
            trigger: "#explaination",
            markers: false,
            start: "20% bottom",
            end: "70% top",
            toggleActions: "restart reverse restart reverse"
        },
    })
    gsap.from("#img-question", {
        xPercent: -150,
        duration: 2.5,
        scrollTrigger: {
            trigger: "#explaination",
            markers: false,
            start: "20% bottom",
            end: "70% top",
            toggleActions: "restart reverse restart reverse"
        },
        delay: 1,
    });
}
window.addEventListener("DOMContentLoaded", animationGsap)