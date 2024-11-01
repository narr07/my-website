<template>
  <div>
    <NavBar />
    <NuxtPage />
  </div>
</template>

<style>
.page-enter-active,
.page-leave-active {
  transition: all 0.1s;
}
.page-enter-from,
.page-leave-to {
transform: translateY(1rem);
  /* filter: blur(1rem); */
}
</style>
