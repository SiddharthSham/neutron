import Highway from '@dogstudio/highway';

class DefaultTransition extends Highway.Transition {
    in ({
        from,
        to,
        trigger,
        done
    }) {
        from.remove();
        done();
    }

    out({
        from,
        trigger,
        done
    }) {
        done();
    }
}

export default DefaultTransition;