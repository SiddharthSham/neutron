import { passwordCheck } from "../views/auth/register";
import { blogMount } from "../views/blog/read";
import { dashboardMount } from "../views/dashboard";

export const hooks = {
  login: {
    mounted: () => console.log("hello from login"),
    unmount: () => console.log("bye from login"),
  },
  register: {
    mounted: passwordCheck,
    unmount: () => console.log("bye from register"),
  },
  blogRead: {
    mounted: blogMount,
    unmount: () => console.log("bye from blog read")
  },
  dashboard: {
      mounted: dashboardMount,
      unmount: () => console.log("bye from dashboard")
  }
};
