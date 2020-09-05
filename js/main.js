import H from './router/main';
import * as components from './components/aside-bar';
import './router/manager';

window.addEventListener('load', () => {
    console.log(`[APP LOADED]`)
})


const anims = {
    always: [],
    positiveThrottle: [],
    negativeThrottle: []
}

// anims.always.push(s)
// anims.always.push(w)
// anims.negativeThrottle.push(o)

let idleExist = ('requestIdleCallback' in window)
let lastFrameTime = 0;
let tolerance = 0.1;
let interval = 1000 / 60;
let throttle = false
const render = elapsedTime => {
    let delta = elapsedTime - (lastFrameTime || 0);
    let nextFrame = requestAnimationFrame(render)
    if (lastFrameTime && (delta <= interval - tolerance)) return
    lastFrameTime = elapsedTime - (delta % interval);
    try {
        anims.always.forEach(anim => {
            anim.update(t)
        })
        throttle = !throttle
        if (throttle) {
            anims.positiveThrottle.forEach(anim => {
                anim.update()
            })
        } else {
            anims.negativeThrottle.forEach(anim => {
                anim.update()
                if (idleExist && anim.idlyUpdate) {
                    requestIdleCallback(() => {
                        anim.idlyUpdate()
                    })
                }
            })
        }
    } catch (e) {
        console.error('[Error in update loop]:', e)
        cancelAnimationFrame(nextFrame)
    }
}

// requestAnimationFrame(render)