import H from "./main";
import { hooks } from "./hooks";

H.on("NAVIGATE_IN", ({ to, trigger, location }) => {
  try {
    hooks[to.view.dataset.routerView].mounted();
  } catch (e) {
    console.warn(`[Transition hook to ${location.pathname} failed]: `, e);
  }
});

H.on("NAVIGATE_OUT", ({ from, trigger, location }) => {
  try {
    hooks[from.view.dataset.routerView].unmount();
  } catch (e) {
    console.warn(`[Transition hook from ${location.pathname} failed]: `, e);
  }
});

export default H;
