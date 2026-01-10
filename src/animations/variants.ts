const prefersReducedMotion = typeof window !== 'undefined'
    ? window.matchMedia('(prefers-reduced-motion: reduce)').matches
    : false;

export const fadeInUp = {
    initial: {
        opacity: prefersReducedMotion ? 1 : 0,
        y: prefersReducedMotion ? 0 : 20
    },
    animate: {
        opacity: 1,
        y: 0,
        transition: {
            duration: prefersReducedMotion ? 0 : 0.5,
            ease: [0.16, 1, 0.3, 1]
        }
    }
};

export const fadeIn = {
    initial: {
        opacity: prefersReducedMotion ? 1 : 0
    },
    animate: {
        opacity: 1,
        transition: {
            duration: prefersReducedMotion ? 0 : 0.5,
            ease: [0.16, 1, 0.3, 1]
        }
    }
};

export const staggerContainer = {
    initial: {},
    animate: {
        transition: {
            staggerChildren: prefersReducedMotion ? 0 : 0.1,
            delayChildren: prefersReducedMotion ? 0 : 0.2
        }
    }
};

export const scaleIn = {
    initial: {
        opacity: prefersReducedMotion ? 1 : 0,
        scale: prefersReducedMotion ? 1 : 0.9
    },
    animate: {
        opacity: 1,
        scale: 1,
        transition: {
            duration: prefersReducedMotion ? 0 : 0.5,
            ease: [0.16, 1, 0.3, 1]
        }
    }
};

export const slideInFromLeft = {
    initial: {
        opacity: prefersReducedMotion ? 1 : 0,
        x: prefersReducedMotion ? 0 : -50
    },
    animate: {
        opacity: 1,
        x: 0,
        transition: {
            duration: prefersReducedMotion ? 0 : 0.5,
            ease: [0.16, 1, 0.3, 1]
        }
    }
};

export const slideInFromRight = {
    initial: {
        opacity: prefersReducedMotion ? 1 : 0,
        x: prefersReducedMotion ? 0 : 50
    },
    animate: {
        opacity: 1,
        x: 0,
        transition: {
            duration: prefersReducedMotion ? 0 : 0.5,
            ease: [0.16, 1, 0.3, 1]
        }
    }
};