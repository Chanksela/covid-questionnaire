<template>
  <QuestionareLayout page="3/4" :submit="onSubmit">
    <template v-slot:input>
      <div class="space-y-12">
        <div class="space-y-4">
          <p class="font-semibold">უკვე აცრილი ხარ?*</p>
          <div class="flex flex-col space-y-6">
            <div class="space-x-2">
              <Field
                type="radio"
                id="question-1-a"
                rules="required"
                @click="getVaccineInfo"
                name="had_vaccine"
                value="true"
              />
              <label for="question-1-a">კი</label>
            </div>
            <div class="space-x-2">
              <Field
                type="radio"
                id="question-1-b"
                rules="required"
                @click="getVaccineInfo"
                name="had_vaccine"
                value="false"
              />
              <label for="question-1-b">არა</label>
            </div>
          </div>
        </div>
        <div v-if="this.$store.state.vaccineStage" class="space-y-4">
          <p class="font-semibold">აირჩიე რა ეტაპზე ხარ?*</p>
          <div class="flex flex-col space-y-6">
            <div class="space-x-2">
              <Field
                type="radio"
                id="question-2-a"
                rules="required"
                @click="getLinkInfo"
                name="vaccination_stage"
                value="first_dosage_and_registered_on_the_second"
                v-model="this.$store.state.vaccination_stage"
              />
              <label for="question-2-a"
                >პირველი დოზა და დარეგისტრირებული ვარ მეორეზე</label
              >
            </div>
            <div class="space-x-2">
              <Field
                type="radio"
                id="question-2-b"
                rules="required"
                @click="getLinkInfo"
                name="vaccination_stage"
                value="fully_vaccinated"
                v-model="this.$store.state.vaccination_stage"
              />
              <label for="question-2-b">სრულად აცრილი ვარ</label>
            </div>
            <div class="space-x-2">
              <Field
                type="radio"
                id="question-2-c"
                rules="required"
                @click="getLinkInfo"
                name="vaccination_stage"
                value="first_dosage_and_not_registered_yet"
                v-model="this.$store.state.vaccination_stage"
              />
              <label for="question-2-c"
                >პირველი დოზა და არ დავრეგისტრირებულვარ მეორეზე</label
              >
            </div>
          </div>
        </div>
        <div v-if="this.$store.state.waiting" class="space-y-4">
          <p class="font-semibold">რას ელოდები?*</p>
          <div class="flex flex-col space-y-6">
            <div class="space-x-2">
              <Field
                type="radio"
                id="question-3-a"
                rules="required"
                @click="getLinkInfo"
                name="i_am_waiting"
                value="registered_and_waiting"
                v-model="this.$store.state.i_am_waiting"
              />
              <label for="question-3-a"
                >დარეგისტრირებული ვარ და ველოდები რიცხვს</label
              >
            </div>
            <div class="space-x-2">
              <Field
                type="radio"
                id="question-3-b"
                rules="required"
                @click="getLinkInfo"
                name="i_am_waiting"
                value="not_planning"
                v-model="this.$store.state.i_am_waiting"
              />
              <label for="question-3-b">არ ვგეგმავ</label>
            </div>
            <div class="space-x-2">
              <Field
                type="radio"
                id="question-3-c"
                rules="required"
                @click="getLinkInfo"
                name="i_am_waiting"
                value="had_vocid_and_planning_to_vaccine"
                v-model="this.$store.state.i_am_waiting"
              />
              <label for="question-3-c"
                >გადატანილი მაქვს და ვგეგმავ აცრას</label
              >
            </div>
          </div>
        </div>
        <div v-if="this.$store.state.vaccineStageLink" class="w-60 ml-4">
          <p>რომ არ გადადო, ბარემ ახლავე დარეგისტრირდი</p>
          <a href="https://booking.moh.gov.ge/" class="text-[#1289AE]"
            >https://booking.moh.gov.ge/</a
          >
        </div>
        <div v-if="this.$store.state.waitingAndNotPlanningLink">
          <p>
            👉
            <a href="https://booking.moh.gov.ge/" class="text-[#1289AE]"
              >https://booking.moh.gov.ge/</a
            >
          </p>
        </div>
        <div
          v-if="this.$store.state.waitingAndPlanningLink"
          class="w-3/4 ml-4 space-y-4"
        >
          <div>
            ახალი პროტოკოლით კოვიდის გადატანიდან 1 თვის შემდეგ შეგიძლიათ
            ვაქცინის გაკეთება.
          </div>
          <div>
            👉 რეგისტრაციის ბმული
            <a href="https://booking.moh.gov.ge/" class="text-[#1289AE]"
              >https://booking.moh.gov.ge/</a
            >
          </div>
        </div>
      </div>
    </template>
    <template v-slot:poster><VaccinatedInfoPoster /></template>
    <template v-slot:footer>
      <div class="w-16 flex justify-between">
        <router-link :to="{ name: 'second-page' }"><BackButton /></router-link>
        <ForwardButton class="w-auto" />
      </div>
    </template>
  </QuestionareLayout>
</template>
<script>
import QuestionareLayout from "../components/layout/QuestionareLayout.vue";
import VaccinatedInfoPoster from "../components/slots/posters/VaccinatedInfoPoster.vue";
import BackButton from "../components/slots/buttons/BackButton.vue";
import ForwardButton from "../components/slots/buttons/ForwardButton.vue";
import { Field } from "vee-validate";
import { RouterLink } from "vue-router";
export default {
  components: {
    QuestionareLayout,
    VaccinatedInfoPoster,
    Field,
    BackButton,
    ForwardButton,
    RouterLink,
  },
  methods: {
    onSubmit() {
      this.$router.push({ name: "fourth-page" });
    },
    getVaccineInfo(event) {
      this.$store.commit("getVaccineInfo", { event: event.target.value });
    },
    getLinkInfo(event) {
      this.$store.commit("getLinkInfo", { event: event.target.value });
    },
  },
};
</script>
