<template>
    <header class="header" header>
        <div class="headerChild">
          <img
            class="logo"
            alt=""
            src="/images/class-logo-main@2x.png"
            :onClick="onCLASSLogo311Click"
          />
          <div class="hamburgerMenu">
            <a href="#">menu 1</a>
            <a href="#">menu 2</a>
            <a href="#">menu 3</a>
          </div>
          <button class="button">予約する</button>
        </div>
      </header>
</template>
<script>
export default {
    name: 'Header',
}
</script>
<style lang="scss">
  .header {
    height: 7.6rem;
    background-color: var(--color-skyblue);
    overflow: hidden;
    
    .hamburgerMenu {
        content: "";
        position: absolute;
        right: 3.9rem;
        display: block;
        width: 1.5rem;
        top: 2rem;
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
      width: 18%;
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
      box-shadow: 0.9974358677864075px 1.994871735572815px 1.99px rgba(0, 0, 0, 0.25);
      font-size: 0.59rem;
      letter-spacing: 0.1em;
      font-family: var(--font-istok-web);
      color: var(--color-skyblue);
      font-weight: bold;
    }
  }
</style>