export const fadeInOnScroll = (delay, duration) => ({
    hidden: { opacity: 0 }, // initial state: fully transparent
    visible: {
        opacity: 1, // fade in to fully visible
        transition: {
            delay: delay, // small delay before starting the animation
            duration: duration, // duration of the fade-in effect
            ease: [0.42, 0, 0.58, 1], // custom cubic-bezier for smooth ease-in-out effect
        },
    },
});

export const fadeInUpSpring = (delay, duration) => ({
    hidden: { opacity: 0, y: 60, scale: 0.8 }, // initial state: fully transparent, positioned lower (y: 60), and scaled down
    visible: {
        opacity: 1, // fade in to fully visible
        y: 0, // move to original position
        scale: 1, // scale up to original size
        transition: {
            delay: delay, // small delay before starting the animation
            duration: duration, // duration of the fade-in effect
            ease: [0.6, -0.05, 0.01, 0.99], // custom cubic-bezier easing for a smoother effect
            type: "spring", // spring animation for a bouncy effect
            stiffness: 100, // stiffness of the spring effect
        },
    },
});
