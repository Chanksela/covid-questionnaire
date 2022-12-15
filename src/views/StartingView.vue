<template>
  <div class="h-screen flex justify-center items-center">
    <div class="h-1/2 w-1/2 flex flex-col justify-evenly items-center">
      <IconSVG width="80" height="80" class="animate-flyin" />

      <router-link
        :to="{ name: 'first-page' }"
        class="text-center text-3xl font-bold hover:cursor-pointer"
      >
        <p>
          კითხვარის <br />
          დაწყება
        </p>
      </router-link>
    </div>
  </div>
</template>
<script>
import IconSVG from "../components/svg/IconSVG.vue";
export default {
  components: {
    IconSVG,
  },
};
</script>
<style scoped>
p:hover {
  text-shadow: 5px 0px rgb(179, 177, 177);
}
</style>
