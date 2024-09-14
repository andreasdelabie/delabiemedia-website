// Show menu animation
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


// Close menu animation
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


// Button hover animation
const buttons = document.querySelectorAll('button');

buttons.forEach(button => {
    const buttonMousePosition = (event) => {
        const rect = button.getBoundingClientRect();

        const x = event.clientX - rect.left;
        const y = event.clientY - rect.top;
        
        if(event.type === 'mouseenter') {
            button.style.setProperty('--mouse-enter-x', `${x}px`)
            button.style.setProperty('--mouse-enter-y', `${y}px`)
        } else if (event.type === 'mouseleave') {
            button.style.setProperty('--mouse-leave-x', `${x}px`)
            button.style.setProperty('--mouse-leave-y', `${y}px`)
        }
    }
    
    button.addEventListener('mouseenter', buttonMousePosition)
    button.addEventListener('mouseleave', buttonMousePosition)
})