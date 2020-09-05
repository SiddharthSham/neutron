import H from './main';
import {
    hooks
} from './hooks'


H.on('NAVIGATE_IN', ({
    to,
    trigger,
    location
}) => {
    if (to.view.dataset.script) {
        if (hooks[to.view.dataset.script].mounted) {
            hooks[to.view.dataset.script].mounted()
        }
    }
})

H.on('NAVIGATE_OUT', ({
    from,
    trigger,
    location
}) => {
    if (from.view.dataset.script) {
        if (hooks[from.view.dataset.script].unmount) {
            hooks[from.view.dataset.script].unmount()
        }
    }
});