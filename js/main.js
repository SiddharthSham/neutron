import H from './router/main';
import './components/aside-bar';
import './components/card-box';
import './router/manager';
import {hooks} from './router/hooks'

window.addEventListener('load', () => {
    console.log(`[APP LOADED]`)
    const view = document.querySelector('[data-router-wrapper]').querySelector(`[data-router-view]`).dataset.routerView
    try {
        hooks[view].mounted()
    } catch (e) {
        console.warn(`[On mount hook failed]:`, e)
    }
})