import { createStore } from "vuex";
import mutations from "./mutations";
const store = createStore({
  state() {
    return {
      // covid status page data
      covidStatus: false,
      covidDateInfo: false,
      antiBodyTestInfo: false,
      //   vaccine info page data
      vaccineStage: false,
      waiting: false,
      vaccineStageLink: false,
      waitingAndPlanningLink: false,
      waitingLinkNotPlanning: false,
      // data to POST
      first_name: "",
      last_name: "",
      email: "",
      had_covid: "",
      had_antibody_test: "",
      covid_sickness_date: "",
      antibodies: { test_date: "", number: "" },
      had_vaccine: "",
      vaccination_stage: "",
      i_am_waiting: "",
      non_formal_meetings: "",
      number_of_days_from_office: "",
      what_about_meetings_in_live: "",
      tell_us_your_opinion_about_us: "",
    };
  },
  mutations: mutations,
});
export default store;
