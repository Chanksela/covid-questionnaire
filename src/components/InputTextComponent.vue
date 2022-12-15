<template>
  <div class="my-8 w-full flex flex-col">
    <label :for="name" class="text-2xl mb-4">{{ title }}</label>
    <input
      type="text"
      :id="name"
      :placeholder="placeholder"
      class="px-4 py-2 w-4/6"
    />
    <p v-if="errorMessage != ''" class="text-red-500 text-lg">
      {{ errorMessage }}
    </p>
  </div>
</template>
<script>
export default {
  props: ["title", "name", "placeholder", "errorMessage"],
};
</script>
