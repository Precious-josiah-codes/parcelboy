import gsap from 'gsap';

const loadAnimationOne = () => {
    const beforeEnter = (el) => {
        el.style.transform = 'translateY(60px)'
        el.style.opacity = 0
      }
  
      const enter = (el) => {
        gsap.to(el, {
          duration: 0.5,
          y: 0,
          opacity: 1,
          ease: 'ease.in'
        })
      }

      const beforeLeave = (el) => {
        el.style.transform = 'translateY(0)'
        el.style.opacity = 1
        el.style.color = 'red'
        console.log('leaving')
      }

      const leave = (el) => {
        gsap.to(el, {
          duration: 90,
          y: -60,
          opacity: 1,
          ease: 'bounce.out'
        })
        console.log('left')
      }
      
      const beforeEnterTwo = (el) => {
        el.style.transform = 'translateY(60px)'
        el.style.opacity = 0
      }
  
      const enterTwo = (el) => {
        gsap.to(el, {
          duration: 0.7,
          y: 0,
          opacity: 1,
          ease: 'ease.in'
        })
      }

   

    return {       
        beforeEnter, enter, beforeLeave, leave,
        beforeEnterTwo, enterTwo,
       
    }
}

export default loadAnimationOne