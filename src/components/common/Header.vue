<template>
    <header class="header" header>
        <div class="headerChild" />
        <div class="hamburgerMenu">
          <a href="#">menu 1</a>
          <a href="#">menu 2</a>
          <a href="#">menu 3</a>
        </div>
        <img
          class="logo"
          alt=""
          src="/images/class-logo-main@2x.png"
          :onClick="onCLASSLogo311Click"
        />
        <button class="button">予約する</button>
      </header>
</template>
<script>
export default {
    name: 'Header',
}
</script>
<style lang="scss">
  .header {
    .hamburgerMenu {
        content: "";
        position: absolute;
        right: 3.9rem;
        display: block;
        width: 1.5rem;
        top: 2.35rem;
        height: 0;
        box-shadow: 0 14.5px 0 0.1rem #fff, 0 24.5px 0 0.1rem #fff, 0 34.9px 0 0.1rem #fff;
        
        a {
          display: none;
        }
    
    }
    .logo{
      position: absolute;
      top: 2.8rem;
      left: 2.4rem;
      width: 7.7rem;
      height: 1.9rem;
      -o-object-fit: cover;
      object-fit: cover;
      cursor: pointer;
    }
    .button {
      cursor: pointer;
      border: none;
      padding: 0;
      border-radius: 9.33px;
      background-color: var(--color-white);
      position: absolute;
      top: 3.01rem;
      right: 7.4rem;
      left: initial;
      width: 6.4rem;
      height: 1.72rem;
      font-size: 0.59rem;
      letter-spacing: 0.1em;
      font-family: var(--font-istok-web);
      color: var(--color-skyblue);
      font-weight: bold;
    }
  }
</style>