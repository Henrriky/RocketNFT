//OR https://animate.style

ScrollReveal({
    origin: 'left',
    distance: '1000px',
    duration: 2000
}).reveal(`
#animateCard
`)

ScrollReveal({
    origin: 'top',
    distance: '1000px',
    duration: 500
}).reveal(`
#animateCard,
#animateHeader
`)

ScrollReveal({
    origin: 'left',
    distance: '1000px',
    duration: 800
}).reveal(`
#animateCardShort
`)

ScrollReveal({
    origin: 'right',
    distance: '1000px',
    duration: 800
}).reveal(`
#animateCardShortRight
`)

ScrollReveal({
    origin: 'bottom',
    distance: '1000px',
    duration: 500
}).reveal(`
.animateCardShortBottom
`)