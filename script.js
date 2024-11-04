function loading() {
    tl = gsap.timeline();
    tl.to("#yellow1", {
        y: "-100%",
        duration: .7,
        ease: "expo.o",
        delay: .5
    })

    tl.from("#yellow2", {
        y: "100%",
        duration: .7,
        ease: "expo.o",
        delay: .5
    }, "anim")
    tl.to("#loader h1", {
        delay: .2,
        duration: .7,
        color: "black"
    }, "anim");

    tl.to("#loader",
        {
            opacity: 0

        })
    tl.to("#loader",
        {
            display: "none"

        })
}
loading();


const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true
});
document.querySelector("#footer h2").addEventListener("click", () => {
    scroll.scrollTo(0)
})

var image = document.querySelectorAll(".elem");
var page2 = document.querySelector("#page2");
image.forEach((ele) => {
    ele.addEventListener("mouseenter", () => {
        var bgimg = ele.getAttribute("data-img");
        page2.style.backgroundImage = `url(${bgimg})`
    })

})
