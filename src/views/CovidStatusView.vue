<template>
  <QuestionareLayout page="2/4" :submit="onSubmit">
    <template v-slot:input>
      <div class="space-y-12">
        <div class="flex flex-col space-y-4">
          <p class="font-semibold">გაქვს გადატანილი Covid-19?*</p>
          <div class="flex flex-col space-y-6">
            <div class="space-x-2">
              <Field
                type="radio"
                id="question-1-a"
                rules="required"
                @click="getCovidInfo"
                name="had_covid"
                value="yes"
                v-model="this.$store.state.had_covid"
              />
              <label for="question-1-a">კი</label>
            </div>
            <div class="space-x-2">
              <Field
                type="radio"
                id="question-1-b"
                @click="getCovidInfo"
                name="had_covid"
                value="no"
                v-model="this.$store.state.had_covid"
              />
              <label for="question-1-b">არა</label>
            </div>
            <div class="space-x-2">
              <Field
                type="radio"
                id="question-1-c"
                @click="getCovidInfo"
                name="had_covid"
                value="have_right_now"
                v-model="this.$store.state.had_covid"
              />
              <label for="question-1-c">ახლა მაქვს </label>
            </div>
          </div>
        </div>
        <div v-if="this.$store.state.covidStatus" class="space-y-4">
          <p class="font-semibold">ანტისხეულების ტესტი გაქვს გაკეთებული?*</p>
          <div class="flex flex-col space-y-6">
            <div class="space-x-2">
              <Field
                type="radio"
                id="question-2-a"
                @click="getAntibodyTestInfo"
                name="had_antibody_test"
                rules="required"
                value="yes"
                v-model="this.$store.state.had_antibody_test"
              />
              <label for="question-2-a">კი</label>
            </div>
            <div class="space-x-2">
              <Field
                type="radio"
                id="question-2-b"
                @click="getAntibodyTestInfo"
                name="had_antibody_test"
                value="no"
                v-model="this.$store.state.had_antibody_test"
              />
              <label for="question-2-b">არა</label>
            </div>
          </div>
        </div>
        <div v-if="this.$store.state.antiBodyTestInfo" class="space-y-4">
          <p class="font-semibold">
            მიუთითე მიახლოებითი პერიოდი (დღე/თვე/წელი) როდის გქონდა Covid-19*
          </p>
          <Field
            class="w-field h-field border border-[#232323] p-4"
            name="covid_date"
            type="date"
            rules="required"
            v-model="this.$store.state.covid_sickness_date"
          />
          <ErrorMessage name="covid_date" />
          <br />
        </div>
        <div v-if="this.$store.state.covidDateInfo" class="space-y-4">
          <p class="font-semibold">
            თუ გახსოვს, გთხოვ მიუთითე ტესტის მიახლოებითი რიცხვი და ანტისხეულების
            რაოდენობა*
          </p>
          <div class="space-y-6">
            <div>
              <Field
                class="w-field h-field border border-[#232323] p-4"
                name="antibody_date"
                type="date"
                rules="required"
                v-model="this.$store.state.antibodies.test_date"
              />
              <ErrorMessage name="antibody_date" />
            </div>
            <div>
              <Field
                class="w-field h-field border border-[#232323] p-4"
                name="antibody_count"
                type="text"
                placeholder="ანტისხეულების რაოდენობა"
                rules="required|numeric"
                v-model="this.$store.state.antibodies.number"
              />
            </div>
          </div>
        </div>
      </div>
    </template>
    <template v-slot:poster>
      <CovidStatusPoster />
    </template>
    <template v-slot:footer>
      <div class="w-16 flex justify-between">
        <router-link :to="{ name: 'first-page' }"> <BackButton /></router-link>
        <ForwardButton />
      </div>
    </template>
  </QuestionareLayout>
</template>
<script>
import QuestionareLayout from "../components/layout/QuestionareLayout.vue";
import CovidStatusPoster from "../components/slots/posters/CovidStatusPoster.vue";
import BackButton from "../components/slots/buttons/BackButton.vue";
import ForwardButton from "../components/slots/buttons/ForwardButton.vue";
import { ErrorMessage, Field } from "vee-validate";

export default {
  components: {
    Field,
    QuestionareLayout,
    CovidStatusPoster,
    ErrorMessage,
    BackButton,
    ForwardButton,
  },
  methods: {
    getCovidInfo(event) {
      this.$store.commit("getCovidInfo", { event: event.target.value });
    },

    getAntibodyTestInfo(event) {
      this.$store.commit("getAntibodyTestInfo", { event: event.target.value });
    },
    onSubmit() {
      this.$router.push({ name: "third-page" });
    },
  },
};
</script>
