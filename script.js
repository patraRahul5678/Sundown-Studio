const scroll = new LocomotiveScroll({
    el: document.querySelector('.container'),
    smooth: true
});


function page3Animation() {
    let container = document.querySelector(".elemcontainer")
    let fixed = document.querySelector(".imagecontainer")

    container.addEventListener("mouseenter", () => {
        fixed.style.display = "block";
    })

    container.addEventListener("mouseleave", () => {
        fixed.style.display = "none";
    })
    let elems = document.querySelectorAll(".elem")
    elems.forEach(choice => {
        choice.addEventListener("mouseover", () => {
            const url = choice.getAttribute("data-image")
            fixed.style.backgroundImage = `url(${url})`
        })
    })
}
page3Animation();


function page3bottomAnimation() {

    let image = document.querySelector(".right3 img")
    let para = document.querySelector(".left3 p")


    let image1 = document.querySelector(".h1");
    image1.addEventListener("click", () => {
        image.setAttribute("src", "11.webp")
        para.innerText = "Our team works with our clients to refine an idea and concept into an executable design. We create a final design that encompasses the brand narrative to bring stories to life and provide end-to-end design solutions from concept, design, and architectural drawings to 3D renderings."
        image1.style.color = "white"
    })
    image1.addEventListener("mouseleave", () => {
        image1.style.color = "rgba(95, 92, 92, 0.907)"
    })

    let image2 = document.querySelector(".h2");
    image2.addEventListener("click", () => {
        image.setAttribute("src", "22.webp")
        para.innerText = "Once we have a design, our production team takes the lead in bringing it to life. We manage all stages of the project, from build specifications and technical drawings to site surveys, vendor management, and 2D & 3D production. We have an extensive network of partners to meet each unique design and project need."
        image2.style.color = "white"
    })
    image2.addEventListener("mouseleave", () => {
        image2.style.color = "rgba(95, 92, 92, 0.907)"
    })

    let image3 = document.querySelector(".h3");
    image3.addEventListener("click", () => {
        image.setAttribute("src", "33.webp")
        para.innerText = "We are with you every step of the way, from the project initiation to launch day. Our production and design teams are onsite to direct and guide the process down to the last point of completion, ensuring success across the built space and experience"
        image3.style.color = "white"
    })
    image3.addEventListener("mouseleave", () => {
        image3.style.color = "rgba(95, 92, 92, 0.907)"
    })
}
page3bottomAnimation()

function swiperAnimation() {
    var swiper = new Swiper(".mySwiper", {
        slidesPerView: "auto",
        centeredSlides: true,
        spaceBetween: 100,
    });
}
swiperAnimation();

function loading() {
    let loader = document.querySelector(".loader")
    setTimeout(() => {
        loader.style.top = "-100%"
    }, 3500);
}

loading();

function menuAnimation() {
    let menu = document.querySelector(".menu")
    let fullscr = document.querySelector(".fullscr")
    let navimg = document.querySelector("nav img")
    let flag = 0;
    menu.addEventListener("click", () => {
        if (flag == 0) {
            fullscr.style.top = "0";
            navimg.style.opacity = "0";
            flag = 1
        }
        else {
            fullscr.style.top = "-100%"
            navimg.style.opacity = "1"
            flag = 0;
        }
    })
}

menuAnimation()


