

export const revealBottomToTop = {
    hidden : {opacity : 0 , y:30},
    visible : {
      opacity : 1,
      y:0,
      transition: {
        duration:1,
        delayChildren: 1,
        staggerChildren: 0.5
      }
    }
  }


  export const revealLeftToRight = {
    hidden : {opacity : 0 , x:-30},
    visible : {
      opacity : 1,
      x:0,
      transition: {
        type:"spring",
        delay:0.5,
        damping:25,
        duration:1,
      }
    }
  }

  export const revealRightToLeft = {
    hidden : {opacity : 0 , x:30},
    visible : {
      opacity : 1,
      x:0,
      transition: {
        delay:0.5,
        type:"spring",
        damping:25,
        duration:1,
      }
    }
  }

  export const revealHidden = {
    hidden : {opacity : 0},
    visible : {
      opacity : 1,
      transition: {
        delay:0.2,
        type:"easeOut",
        duration:1,
        delayChildren: 0.4,
        staggerChildren: 0.5
      }
    }
  }

  export const revealHiddenChildren = {
    hidden : {opacity : 0,x:-20},
    visible : {
      opacity : 1,
      x:0,
      transition: {
        type:"spring",
        damping:25,
      }
    }

  }

  export const fromScaleZero = {
    hidden : {opacity:0},
    visible : {
      opacity : 1,
      transition: {
        delay:0.5,
        type:"easeOut",
        duration:1,
        delayChildren: 0.4,
        staggerChildren: 0.5
      }
    }
  }

  export const fromScaleZeroChildren = {
    hidden : {scale : 0.4},
    visible : {
      scale : 1,
      transition: {
        delay:0.5,
        type:"spring",
        damping:25,
      }
    }

  }