<template>
  <QuestionareLayout page="4/4" :submit="onSubmit">
    <template v-slot:input>
      <div class="space-y-12">
        <div class="w-2/3 space-y-6">
          <p>
            რედბერის მთავარი ღირებულება ჩვენი გუნდის თითოეული წევრია. გარემო,
            რომელსაც ჩვენი თანამშრომლები ქმნით, ბევრისთვის არის და ყოფილა წლების
            განმავლობაში მიზნებისთვის ერთად ბრძოლის მიზეზი, ბევრისთვის კი —
            ჩვენთან გადმოსვლის.
          </p>
          <p>
            პანდემიის პერიოდში ერთმანეთსაც იშვიათად ვნახულობთ პირისპირ და
            ყოველდღიური კომუნიკაციაც გაიშვიათდა.
          </p>
        </div>
        <div class="space-y-4 w-2/3">
          <p class="font-semibold">
            რა სიხშირით შეიძლება გვქონდეს საერთო არაფორმალური ონლაინ შეხვედრები,
            სადაც ყველა სურვილისამებრ ჩაერთვება?*
          </p>
          <div class="flex flex-col space-y-4">
            <div class="space-x-2">
              <Field
                type="radio"
                id="question-1-a"
                rules="required"
                name="non_formal_meetings"
                value="twice_a_week"
                v-model="this.$store.state.non_formal_meetings"
              />
              <label for="question-1-a">კვირაში ორჯერ</label>
            </div>
            <div class="space-x-2">
              <Field
                type="radio"
                id="question-1-b"
                rules="required"
                name="non_formal_meetings"
                value="once_a_week"
                v-model="this.$store.state.non_formal_meetings"
              />
              <label for="question-1-b">კვირაში ერთხელ</label>
            </div>
            <div class="space-x-2">
              <Field
                type="radio"
                id="question-1-c"
                rules="required"
                name="non_formal_meetings"
                value="once_in_a_two_weeks"
                v-model="this.$store.state.non_formal_meetings"
              />
              <label for="question-1-c">ორ კვირაში ერთხელ</label>
            </div>
            <div class="space-x-2">
              <Field
                type="radio"
                id="question-1-d"
                rules="required"
                name="non_formal_meetings"
                value="once_in_a_month"
                v-model="this.$store.state.non_formal_meetings"
              />
              <label for="question-1-d">თვეში ერთხელ</label>
            </div>
          </div>
        </div>
        <div class="space-y-4">
          <p class="font-semibold">
            კვირაში რამდენი დღე ისურვებდი ოფისიდან მუშაობას?*
          </p>
          <div class="flex flex-col space-y-4">
            <div class="space-x-2">
              <Field
                type="radio"
                id="question-1-a"
                rules="required"
                name="number_of_days_from_office"
                value="0"
                v-model="this.$store.state.number_of_days_from_office"
              />
              <label for="question-1-a">0</label>
            </div>
            <div class="space-x-2">
              <Field
                type="radio"
                id="question-1-a"
                rules="required"
                name="number_of_days_from_office"
                value="1"
                v-model="this.$store.state.number_of_days_from_office"
              />
              <label for="question-1-a">1</label>
            </div>
            <div class="space-x-2">
              <Field
                type="radio"
                id="question-1-b"
                rules="required"
                name="number_of_days_from_office"
                value="2"
                v-model="this.$store.state.number_of_days_from_office"
              />
              <label for="question-1-b">2</label>
            </div>
            <div class="space-x-2">
              <Field
                type="radio"
                id="question-1-c"
                rules="required"
                name="number_of_days_from_office"
                value="3"
                v-model="this.$store.state.number_of_days_from_office"
              />
              <label for="question-1-c">3</label>
            </div>
            <div class="space-x-2">
              <Field
                type="radio"
                id="question-1-d"
                rules="required"
                name="number_of_days_from_office"
                value="4"
                v-model="this.$store.state.number_of_days_from_office"
              />
              <label for="question-1-d">4</label>
            </div>
            <div class="space-x-2">
              <Field
                type="radio"
                id="question-1-e"
                rules="required"
                name="number_of_days_from_office"
                value="5"
                v-model="this.$store.state.number_of_days_from_office"
              />
              <label for="question-1-e">5</label>
            </div>
          </div>
        </div>
        <div class="space-y-4">
          <p class="font-semibold">რას ფიქრობ ფიზიკურ შეკრებებზე?</p>
          <Field
            class="border border-[#232323] p-4 w-2/3 h-[182px]"
            as="textarea"
            name="what_about_meetings_in_live"
            rules="required"
            v-model="this.$store.state.what_about_meetings_in_live"
          />
          <br />
          <ErrorMessage
            class="text-red-500 ml-4"
            name="what_about_meetings_in_live"
          />
        </div>
        <div class="space-y-4">
          <p class="w-2/3 font-semibold">
            რას ფიქრობ არსებულ გარემოზე: რა მოგწონს, რას დაამატებდი, რას
            შეცვლიდი?
          </p>
          <Field
            class="border border-[#232323] p-4 w-2/3 h-[182px]"
            as="textarea"
            name="tell_us_your_opinion_about_us"
            rules="required"
            v-model="this.$store.state.tell_us_your_opinion_about_us"
          />
          <br />
          <ErrorMessage
            class="text-red-500 ml-4"
            name="tell_us_your_opinion_about_us"
          />
        </div>
        <div class="w-2/3 flex justify-end">
          <button
            to="/thank-you"
            class="bg-[#208298] py-3 px-8 rounded-full text-white text-2xl"
          >
            დასრულება
          </button>
        </div>
        <div>
          <router-link :to="{ name: 'third-page' }">
            <BackButton class="flex justify-end" />
          </router-link>
        </div>
      </div>
    </template>
    <template v-slot:poster><CovidPolicyPoster /></template>
  </QuestionareLayout>
</template>
<script>
import QuestionareLayout from "../components/layout/QuestionareLayout.vue";
import CovidPolicyPoster from "../components/slots/posters/CovidPolicyPoster.vue";
import BackButton from "../components/slots/buttons/BackButton.vue";
import { ErrorMessage, Field } from "vee-validate";

export default {
  components: {
    QuestionareLayout,
    CovidPolicyPoster,
    Field,
    ErrorMessage,
    BackButton,
  },

  methods: {
    onSubmit() {
      this.$store.commit("onSubmit");
    },
  },
};
</script>
