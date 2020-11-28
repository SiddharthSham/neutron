import Highway from "@dogstudio/highway";
import anime from "animejs";

class FadeTransition extends Highway.Transition {
  in({ from, to, done }) {
    window.scrollTo(0, 0);
    from.remove();
    anime({
      targets: to,
      opacity: [0, 1],
      duration: 200,
      complete: done,
      easing: "easeInCirc",
    });
  }

  out({ from, done }) {
    anime({
      targets: from,
      duration: 200,
      opacity: [1, 0],
      complete: done,
      easing: "easeOutCirc",
    });
  }
}

export default FadeTransition;
