gsap.registerPlugin(ScrollTrigger);


// Homepage logo & header loading animation
const timeline = gsap.timeline()
timeline
    .to('.logo', {duration: 1, opacity: 1, ease: 'power1.in'})
    .to('main-header', {duration: 1, delay: '.5', y: '0%', ease: 'power3.out'})


// Breakdown scroll animations
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


// Fixing stupid element with absolute positioning that positions wrong on load for a second...
window.onload = function() {
    var element = document.querySelectorAll('#breakdown-description');
    for (var i = 0, max = element.length; i < max; i++) { // Repeats function for each stupid element
        element[i].style.display = 'block';
    }
}