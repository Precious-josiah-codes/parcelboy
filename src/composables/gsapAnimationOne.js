import gsap from 'gsap';

const loadAnimationOne = () => {
    const beforeEnterOne = (el) => {
        el.style.opacity = 0
        el.style.transform = 'translateY(100px)'
    }

    const enterOne = (el) => {
        gsap.to(el, {
           opacity: 1,
            y: 0,
            duration: 0.3,
            delay: 0.3,

        })
    }

    const beforeEnterTwo = (el) => {
        el.style.opacity = 0
        el.style.transform = 'translateY(200px)'
    }


    const enterTwo = (el) => {
        gsap.to(el, {
           opacity: 1,
            y: 0,
            duration: 0.2,
            delay: 0.4,

        })
    }

    const beforeEnterThree = (el) => {
        el.style.opacity = 0
        el.style.transform = 'translateY(100px)'
    }

    const enterThree = (el) => {
         gsap.to(el, {
             opacity: 1,
             y: 0,
             duration: 0.3,
             delay: 0.4,

         })
     }

    const beforeEnterFour = (el) => {
        el.style.opacity = 0
        el.style.transform = 'translateY(100px)'
    }

    const enterFour = (el) => {
         gsap.to(el, {
             opacity: 1,
             y: 0,
             duration: 0.3,
             delay: 0.4,

         })
     }

    const beforeEnterFive = (el) => {
        el.style.opacity = 0
        el.style.transform = 'translateY(200px)'
    }

    const enterFive = (el) => {
         gsap.to(el, {
             opacity: 1,
             y: 0,
             duration: 0.2,
             delay: 0.4,

         })
     }

    const beforeEnterSix = (el) => {
        el.style.opacity = 0
        el.style.transform = 'translateY(100px)'
    }

    const enterSix = (el) => {
         gsap.to(el, {
             opacity: 1,
             y: 0,
             duration: 0.4,
             delay: 0.4,

         })
     }

    const beforeEnterSeven = (el) => {
        el.style.opacity = 0
        el.style.transform = 'translateY(100px)'
    }

    const enterSeven = (el) => {
         gsap.to(el, {
             opacity: 1,
             y: 0,
             duration: 0.3,
             delay: 0.5,

         })
     }
    
     const beforeEnterEight = (el) => {
        el.style.opacity = 0
        el.style.transform = 'translateY(-100px)'
    }

    const enterEight = (el) => {
         gsap.to(el, {
             opacity: 1,
             y: 0,
             duration: 0.3,
             delay: 0.5,

         })
     }

   

    return {       
        beforeEnterOne, enterOne,
        beforeEnterTwo, enterTwo,
        beforeEnterThree, enterThree,
        beforeEnterFour, enterFour,
        beforeEnterFive, enterFive,
        beforeEnterSix, enterSix,
        beforeEnterSeven, enterSeven,
        beforeEnterEight, enterEight,
       
    }
}

export default loadAnimationOne