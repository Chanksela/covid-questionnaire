import router from "../router";
import moment from "moment";
export default {
  getCovidInfo(state, payload) {
    if (payload.event === "yes") {
      state.covidStatus = true;
    }
    if (payload.event === "no" || payload.event === "have_right_now") {
      state.covidStatus = false;
      state.covidDateInfo = false;
      state.antiBodyTestInfo = false;
      state.had_antibody_test = "";
      state.covid_sickness_date = "";
      state.antibodies.test_date = "";
      state.antibodies.number = "";
    }
  },
  getAntibodyTestInfo(state, payload) {
    if (payload.event === "yes") {
      state.covidDateInfo = true;
      state.antiBodyTestInfo = false;
    }
    if (payload.event === "no" && state.covid_sickness_date !== "") {
      state.covidDateInfo = false;
      state.antiBodyTestInfo = false;
      state.covid_sickness_date = "";
    }
    if (payload.event === "no") {
      state.covidDateInfo = false;
      state.antiBodyTestInfo = true;
    }
    if (
      (payload.event === "yes" && state.antibodies.number !== "") ||
      state.antibodies.test_date !== ""
    ) {
      state.covidDateInfo = false;
      state.antiBodyTestInfo = false;
      state.antibodies.number = "";
      state.antibodies.test_date = "";
    }
  },
  getVaccineInfo(state, payload) {
    if (payload.event === "true") {
      state.had_vaccine = true;
      state.waiting = false;
      state.vaccineStage = true;
      state.vaccineStageLink = false;
      state.waitingAndNotPlanningLink = false;

      state.waitingAndPlanningLink = false;
    }
    if (payload.event === "false" && state.vaccination_stage !== "") {
      state.vaccineStageLink = false;
      state.waitingAndPlanningLink = false;
      state.vaccination_stage = "";
    }
    if (payload.event === "false") {
      state.had_vaccine = false;
      state.waiting = true;
      state.vaccineStage = false;
      state.vaccineStageLink = false;
      state.waitingAndPlanningLink = false;
    }
    if (payload.event === "true" && state.i_am_waiting !== "") {
      state.i_am_waiting = "";
      state.vaccineStageLink = false;
      state.waitingAndPlanningLink = false;
    }
  },
  getLinkInfo(state, payload) {
    if (payload.event === "first_dosage_and_not_registered_yet") {
      state.vaccineStageLink = true;
      state.waitingAndPlanningLink = false;
      state.waitingAndNotPlanningLink = false;
    }
    if (payload.event === "registered_and_waiting") {
      state.waitingAndNotPlanningLink = false;
      state.vaccineStageLink = false;
      state.waitingAndPlanningLink = false;
    }
    if (payload.event === "not_planning") {
      state.waitingAndNotPlanningLink = true;
      state.vaccineStageLink = false;
      state.waitingAndPlanningLink = false;
    }
    if (payload.event === "had_vocid_and_planning_to_vaccine") {
      state.vaccineStageLink = false;
      state.waitingAndPlanningLink = true;
      state.waitingAndNotPlanningLink = false;
    }
    if (
      payload.event !== "first_dosage_and_not_registered_yet" &&
      payload.event !== "had_vocid_and_planning_to_vaccine"
    ) {
      state.vaccineStageLink = false;
      state.waitingAndPlanningLink = false;
    }
  },
  onSubmit(state) {
    const data = {
      first_name: state.first_name,
      last_name: state.last_name,
      email: state.email,
      had_covid: state.had_covid,
      had_antibody_test: state.had_antibody_test,
      covid_sickness_date:
        state.covid_sickness_date.length > 0
          ? moment(state.covid_sickness_date).format("DD/MM/YY")
          : state.covid_sickness_date,
      antibodies: {
        test_date: moment(state.antibodies.test_date).format("DD/MM/YY"),
        number: state.antibodies.number,
      },
      had_vaccine: state.had_vaccine,
      vaccination_stage: state.vaccination_stage,
      i_am_waiting: state.i_am_waiting,
      non_formal_meetings: state.non_formal_meetings,
      number_of_days_from_office: state.number_of_days_from_office,
      what_about_meetings_in_live: state.what_about_meetings_in_live,
      tell_us_your_opinion_about_us: state.tell_us_your_opinion_about_us,
    };

    let test = {};
    Object.keys(data).forEach(function (key) {
      if (typeof data[key] == "object") {
        if (Object.keys(data[key]).filter((val) => val.length < 1)) {
          delete data[key];
        }
      }
      if (data[key] !== "") {
        test[key] = data[key];
      }
    });

    fetch("https://covid19.devtest.ge/api/create", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(test),
    })
      .then((response) => response)
      .then((data) => {
        data.status === 201
          ? router.push({ name: "thank-you" })
          : router.push({ name: "welcome" });
      })
      .catch((error) => {
        error && router.push({ name: "welcome" });
      });
  },
};
