function showMenu() {
    gsap.to('.menu', {
        duration: 0.5,
        x: '0%'
    })
}

function closeMenu() {
    gsap.to('.menu', {
        duration: 0.5,
        x: '-100%'
    })
}