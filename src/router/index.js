import { createRouter, createWebHistory } from "vue-router";
import StartingView from "../views/StartingView.vue";
import PersonalInfoView from "../views/PersonalInfoView.vue";
import CovidStatusView from "../views/CovidStatusView.vue";
import VaccinatedInfoView from "../views/VaccinatedInfoView.vue";
import CovidPolicyView from "../views/CovidPolicyView.vue";
import ThankYouView from "../views/ThankYouView.vue";
const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      name: "welcome",
      component: StartingView,
    },
    {
      path: "/personal-info",
      name: "first-page",
      component: PersonalInfoView,
      meta: {
        transition: "animate-pagefadein",
      },
    },
    {
      path: "/covid-status",
      name: "second-page",
      component: CovidStatusView,
      meta: {
        transition: "animate-pagefadein",
      },
    },
    {
      path: "/vaccine-info",
      name: "third-page",
      component: VaccinatedInfoView,
      meta: {
        transition: "animate-pagefadein",
      },
    },
    {
      path: "/covid-policy",
      name: "fourth-page",
      component: CovidPolicyView,
      meta: {
        transition: "animate-pagefadein",
      },
    },
    { path: "/thank-you", name: "thank-you", component: ThankYouView },
  ],
});
export default router;
