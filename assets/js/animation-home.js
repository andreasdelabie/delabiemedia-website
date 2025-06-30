gsap.registerPlugin(ScrollTrigger);


// Homepage loading animation
const timeline = gsap.timeline()
timeline
    .to('.logo', {duration: 1, opacity: 1, ease: 'power1.in'})
    .to('header', {duration: 1, delay: 0.5, y: '0%', ease: 'power3.out'})
    .to('#arrow', {duration: 1, opacity: 0.25, y: '50%', ease: 'power3.out'})


// Arrow scroll animation
gsap.to('#arrow-icon', {
    scrollTrigger: {
        trigger: '.welcome',
        start: 'top top',
        end: '+=200',
        scrub: 0.5,
    },
    opacity: 0,
    y: '-50%'
})


// Breakdown scroll animations
gsap.to('.after1', {
    scrollTrigger: {
        trigger: '.breakdown1',
        scrub: true,
        pin: '.breakdown1',
        pinType: 'fixed',
    },
    opacity: 1
})

gsap.to('.after2', {
    scrollTrigger: {
        trigger: '.breakdown2',
        scrub: true,
        pin: '.breakdown2',
        pinType: 'fixed'
    },
    opacity: 1
})


// Fixing stupid element with absolute positioning that positions wrong on load for a second...
window.onload = function() {
    var element = document.querySelectorAll('#breakdown-description');
    for (var i = 0, max = element.length; i < max; i++) { // Repeats function for each stupid element
        element[i].style.display = 'block';
    }
}