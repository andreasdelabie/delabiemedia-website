gsap.registerPlugin(ScrollTrigger);


const timeline = gsap.timeline()
timeline
    .from('.logo', {duration: 1, delay: '.5', opacity: 0, ease: 'power1.in'})
    .from('header', {duration: 1, delay: '.5', y: '-100%', ease: 'power3.out'})