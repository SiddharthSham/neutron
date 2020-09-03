import Highway from '@dogstudio/highway';
import anime from 'animejs';

class FadeTransition extends Highway.Transition {
    in ({
        from,
        to,
        done
    }) {
        window.scrollTo(0, 0);
        from.remove();
        anime({
            targets: to,
            opacity: [0, 1],
            duration: 600,
            complete: done,
            easing: 'easeInExpo'
        })
    }

    out({
        from,
        done
    }) {
        anime({
            targets: from,
            duration: 600,
            opacity: [1, 0],
            complete: done,
            easing: 'easeOutExpo'
        })
    }
}

export default FadeTransition;