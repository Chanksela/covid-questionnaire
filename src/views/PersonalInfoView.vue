<template>
  <QuestionareLayoutVue page="1/4" :submit="onSubmit">
    <template v-slot:input>
      <div>
        <div class="mb-20">
          <div class="mb-2">
            <label for="first_name" class="font-semibold">სახელი*</label>
          </div>
          <Field
            class="w-field h-field border border-[#232323] p-4"
            id="first_name"
            name="first_name"
            type="text"
            placeholder="იოსებ"
            rules="required|alpha|length: სახელი, 3, 255"
            v-model="this.$store.state.first_name"
          />
          <div class="mt-[6px]">
            <ErrorMessage class="text-red-500 ml-4" name="first_name" />
          </div>
        </div>
        <div class="mb-20">
          <div class="mb-2">
            <label for="last_name" class="font-semibold">გვარი*</label>
          </div>
          <Field
            class="w-field h-field border border-[#232323] p-4"
            id="last_name"
            name="last_name"
            type="text"
            placeholder="ჯუღაშვილი"
            rules="required|alpha|length: გვარი, 3, 255"
            v-model="this.$store.state.last_name"
          />
          <div class="mt-[6px]">
            <ErrorMessage class="text-red-500 ml-4" name="last_name" />
          </div>
        </div>
        <div class="mb-20">
          <div class="mb-2">
            <label for="email" class="font-semibold">მეილი*</label>
          </div>
          <Field
            class="w-field h-field border border-[#232323] p-4"
            id="email"
            name="email"
            type="text"
            placeholder="fbi@redberry.ge"
            rules="required|email"
            v-model="this.$store.state.email"
          />
          <div class="mt-[6px]">
            <ErrorMessage class="text-red-500 ml-4" name="email" />
          </div>
        </div>
      </div>
      <div class="w-64">
        <hr class="border-gray-400" />
        <p class="text-gray-400">*-ით მონიშნული ველების შევსება სავალდებულოა</p>
      </div>
    </template>
    <template v-slot:poster>
      <PersonalInfoPoster />
    </template>
    <template v-slot:footer>
      <button>
        <ForwardButton />
      </button>
    </template>
  </QuestionareLayoutVue>
</template>
<script>
import QuestionareLayoutVue from "../components/layout/QuestionareLayout.vue";
import PersonalInfoPoster from "../components/slots/posters/PersonalInfoPoster.vue";
import { Field, ErrorMessage } from "vee-validate";

import ForwardButton from "../components/slots/buttons/ForwardButton.vue";
export default {
  components: {
    Field,
    ErrorMessage,
    QuestionareLayoutVue,
    PersonalInfoPoster,
    ForwardButton,
  },
  methods: {
    onSubmit() {
      this.$router.push({ name: "second-page" });
    },
  },
};
</script>
