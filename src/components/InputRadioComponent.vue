<template>
  <div>
    <input type="radio" :name="name" :id="id" :value="value" />
    <label :for="id" class="ml-4">{{ text }}</label>
  </div>
</template>
<script>
export default { props: ["name", "id", "value", "text"] };
</script>
