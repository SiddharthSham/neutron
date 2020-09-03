import Highway from '@dogstudio/highway';
import FadeTransition from './transitions/fade'
import DefaultTransition from './transitions/default'

const H = new Highway.Core({
    transitions: {
        default: FadeTransition
    }
});

export default H