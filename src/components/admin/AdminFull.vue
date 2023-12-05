<template>
    <div class="admin">
      <Header></Header>
      <main class="main">
        <router-view></router-view>
      </main>
    </div>
</template>

<script>
import Header from "/src/components/admin/common/Header";
export default {
  name: 'Home',
  components: {
    Header,
  }
}
</script>
<style lang="scss" scoped>
.admin {
    text-align: left;
    font-size: 1rem;
    color: var(--color-black);
    font-family: var(--font-istok-web);
}
.main {
    width: auto;
    margin: 0 6%;
}
</style>
