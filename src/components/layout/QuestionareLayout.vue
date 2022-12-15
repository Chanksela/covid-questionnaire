<template>
  <Form @submit="submit" class="overflow-auto">
    <div class="flex flex-wrap h-screen mx-[8%]">
      <div class="w-full h-1/6">
        <div class="flex flex-col justify-around h-full">
          <div
            class="w-full flex justify-between border-b border-solid border-[#232323] divide-y-2"
          >
            <p class="text-[#FE3B1F] text-4xl">
              <img src="../../../public/redberry.svg" alt="" />
            </p>
            <p class="text-2xl font-medium border-none">{{ page }}</p>
          </div>
        </div>
      </div>
      <div class="w-1/2 h-4/6 flex flex-col justify-start items-start">
        <div class="flex flex-col justify-start items-start w-full">
          <slot name="input"></slot>
        </div>
      </div>
      <div class="w-1/2 h-4/6">
        <slot name="poster"></slot>
      </div>
      <div class="w-full h-1/6 flex justify-center items-center z-10">
        <slot name="footer"></slot>
      </div>
    </div>
  </Form>
</template>
<script>
import { Form } from "vee-validate";
export default {
  props: ["page", "submit"],
  components: { Form },
};
</script>
