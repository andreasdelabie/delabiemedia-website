function showMenu() {
    gsap.to('.menu', {
        x: '0%',
        ease: 'power3.out'
    })
    gsap.from('.close-menu', {
        rotation: -90,
        ease: 'power3.out'
    })
}

function closeMenu() {
    gsap.to('.menu', {
        x: '-100%',
        ease: 'power3.out'
    })
    gsap.from('.close-menu', {
        rotation: 90,
        ease: 'power3.out'
    })
}