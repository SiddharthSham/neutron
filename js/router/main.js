import Highway from '@dogstudio/highway';
import DefaultTransition from './transitions/default'

export const H = new Highway.Core({
    transitions: {
        default: DefaultTransition
    }
});

