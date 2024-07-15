gsap.registerPlugin(ScrollTrigger);


const timeline = gsap.timeline()
timeline
    .to('.logo', {duration: 1, opacity: 1, ease: 'power1.in'})
    .to('header', {duration: 1, delay: '.5', y: '0%', ease: 'power3.out'})


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