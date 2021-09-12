var max768;
gsap.registerPlugin(ScrollTrigger);
// gsap.registerPlugin(TextPlugin);
ScrollTrigger.defaults({
    toggleActions: "play reverse play reverse",
});

// AJAX FOR NETLIFY FORM
$("#form").submit(function(e) {
    e.preventDefault();

    var $form = $(this);
    $.post($form.attr("action"), $form.serialize()).then(function() {
        var form = document.querySelector("form");
        let ftl = gsap.timeline();
        ftl.to(form, 1, { opacity: 0, scale: .5, height: 0 })
    });
});

window.addEventListener('load', () => {
    // LOADING PAGE
    var loadingPage = document.querySelector(".loading-page");
    loadingPage.style.opacity = 0;
    setTimeout(() => {
        loadingPage.style.display = "none";
    }, 3000);
    // LANDING ANIME
    var tl = gsap.timeline({});
    tl.to(".topic span", {
        width: 0,
        duration: 2,
        ease: "steps(27)"
    })
    tl.fromTo("#intro .description", {
        opacity: 0,
        y: 100
    }, {
        opacity: 1,
        y: 0,
        ease: "back",
        duration: .7,
    }, ">+.25");
    tl.fromTo(".name", {
        y: -200
    }, {
        y: 0,
        ease: "back",
        duration: .7
    }, "<");
    tl.fromTo(".email", {
        x: 200,
        opacity: 0
    }, {
        x: 0,
        opacity: 1,
    }, "<");
    tl.fromTo(".top-right", {
        x: 200,
        opacity: 0
    }, {
        x: 0,
        opacity: 1,
    }, "<");
    tl.fromTo(".git-code a", {
        scale: 0,
        opacity: 0
    }, {
        stagger: .15,
        scale: 1,
        opacity: 1,
        ease: "back"
    }, "<");
    console.log("under this is the tl duration for the opening anime");
    console.log(tl.duration());
    tl.fromTo(".modal-container", { display: "none" }, { display: "flex" }, "<")
    tl.fromTo(".projects", { display: "none" }, { display: "block" }, "<")
    tl.to("#intro .topic", {
        opacity: 0,
        x: 100
    }, ">+12");
    tl.to("#intro .description", {
        opacity: 0,
        x: -100
    }, "<")
    tl.to("#intro", {
        display: "none"
    }, ">");
    console.log("THIS IS THE DURATION ---" +
        tl.duration());
    // END LANDING ANIME
    // START OF CAROUSEL ANIME
    var ttl = gsap.timeline({
        delay: 15.75,
        repeat: 2000,
        repeatDelay: 0,
    });
    ttl.to("#inso", { display: "flex" }, ">");
    ttl.fromTo("#inso .left", { x: -100, opacity: 0 }, { x: 0, opacity: 1 }, "<");
    ttl.fromTo("#inso .right", { x: 100, opacity: 0 }, { x: 0, opacity: 1 }, "<");
    ttl.to("#inso .left", { x: -100, opacity: 0 }, ">+8");
    ttl.to("#inso .right", { x: 100, opacity: 0 }, "<");
    ttl.to("#inso", { display: "none" }, ">");
    ttl.to("#taskMan", {
        display: "flex"
    });
    ttl.fromTo("#taskMan .right", {
        opacity: 0,
        x: 100
    }, {
        opacity: 1,
        x: 0
    }, "<");
    ttl.fromTo("#taskMan .left", {
        opacity: 0,
        x: -100
    }, {
        opacity: 1,
        x: 0
    }, "<");
    ttl.to("#taskMan .left", {
        opacity: 0,
        x: -100
    }, ">+8");
    ttl.to("#taskMan .right", {
        opacity: 0,
        x: 100
    }, "<");
    ttl.to("#taskMan", {
        display: "none"
    }, ">");
    // ADD ANOTHER CARD RIGHT UNDER THIS HERE, THIS IS WHERE THE INTRO CARD REPEATS
    ttl.to("#intro", {
        display: "flex"
    }, ">");
    ttl.to("#intro .topic", {
        opacity: 1,
        x: 0
    }, ">");
    ttl.to("#intro .description", {
        opacity: 1,
        x: 0
    }, "<");
    ttl.to("#intro .topic", {
        x: -50,
        rotate: -2,
        opacity: 0
    }, ">+10");
    ttl.to("#intro .description", {
            x: 50,
            rotate: -2,
            opacity: 0
        }, "<")
        // END OF CAROUSEL
        // LIGHTS FLUTTER OUT ANIME -- FIRST SCROLL SCENE
    // var controller = new ScrollMagic.Controller();
    // var fsl = gsap.timeline({});
    // fsl.to(".name", { opacity: 0, ease: "bounce", duration: .3, });
    // fsl.to(".top-right", { opacity: 0, ease: "bounce", duration: .9 }, "<");
    // fsl.to(".git-code", { opacity: 0, ease: "bounce", duration: .6, }, "<");
    // fsl.to(".email", { opacity: 0, ease: "bounce", duration: .3, }, "<")
    // var scene = new ScrollMagic.Scene({
    //         triggerElement: '.top-right',
    //         triggerHook: 0,
    //         duration: "",
    //     })
    //     .addIndicators({
    //         colorTrigger: 'transparent', //transparent
    //         colorStart: 'transparent',
    //         colorEnd: 'transparent',
    //         indent: 5
    //     })
    //     .setTween(fsl)
    //     .addTo(controller);
    // END FIRST SCROLL SCENE
    // gsap trial // scrolltrigger
    setTimeout(() => {
        // FOR TRIANGLE
        // gsap.to(".triangle", {backgroundPositionX:"200px"})
        gsap.to(".triangle", 5, {backgroundPositionX:"-200px", width:"150vw", scrollTrigger:{markers:false,trigger:".projects", scrub:true, start:"-20% 100%"}})
        var projects = document.querySelectorAll(".project");
        // console.log(projects)
        var i;
        for (i = 0; i < projects.length; i++) {
            let f = projects[i].children[0];
            let s = projects[i].children[1];
            gsap.fromTo(f, { opacity: 0, x: -100 }, { opacity: 1, x: 0, scrollTrigger: { trigger: f, markers: 0, start: "20% 80%" } })
            gsap.fromTo(s, { opacity: 0, x: 100 }, { opacity: 1, x: 0, scrollTrigger: { trigger: s, markers: 0, start: "20% 80%" } })
        }
        // FOR SECTION HEADERS ANIME -- SECOND SCROLL SCENE
        var headers = document.querySelectorAll("#section-header");
        for (i = 0; i < headers.length; i++) {
            gsap.fromTo(headers[i], { opacity: 0, scale: .9, y: -100 }, { opacity: 1, scale: 1, y: 0, scrollTrigger: { trigger: headers[i], markers: false, start: "20% 80%" } })
        }
        gsap.fromTo("#contact h1", { opacity: 0, x: -100 }, { opacity: 1, x: 0, scrollTrigger: { trigger: "#contact h1", markers: false, start: "20% 80%" } })
        gsap.fromTo("form", { opacity: 0, y: 100 }, { opacity: 1, y: 0, scrollTrigger: { trigger: "form", markers: false, start: "-20% 80%" } })
        
    }, 3400);
});