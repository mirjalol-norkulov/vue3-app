<script>
export default {
  name: "IntersectionObserver",
  mounted() {
    const observer = new IntersectionObserver(
      (entries, observer) => {
        const [entry] = entries;
        console.log(entry);
        if (entry.isIntersecting) {
          this.$emit("enter");
        }
      },
      {
        threshold: 0.0,
        rootMargin: "200px",
      }
    );

    observer.observe(this.$el);
  },
};
</script>

<template>
  <div>
    <slot />
  </div>
</template>
