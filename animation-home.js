gsap.registerPlugin(ScrollTrigger);


const timeline = gsap.timeline()
timeline
    .to('.logo', {duration: 1, delay: '.5', opacity: 1, ease: 'power1.in'})
    .to('header', {duration: 1, delay: '.5', y: '0%', ease: 'power3.out'})