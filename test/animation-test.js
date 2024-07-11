gsap.registerPlugin(ScrollTrigger);

gsap.to('.after1', {
    scrollTrigger: {
        trigger: '.breakdown1',
        scrub: true,
        pin: '.breakdown1'
    },
    opacity: 1
})

gsap.to('.after2', {
    scrollTrigger: {
        trigger: '.breakdown2',
        scrub: true,
        pin: '.breakdown2'
    },
    opacity: 1
})