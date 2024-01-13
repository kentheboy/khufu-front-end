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
            <Button icon="pi pi-align-justify" @click="openSideNav = true" />
          </div>
          <Sidebar v-model:visible="openSideNav" header="Right Sidebar" position="right">
            <Menu :model="items" />
          </Sidebar>
        </div>
      </header>
</template>
<script>
import Button from "primevue/button";
import Sidebar from 'primevue/sidebar';
import Menu from 'primevue/menu';
export default {
  name: 'Header',
  components: {
    Button,
    Sidebar,
    Menu
  },
  data() {
    return {
      openSideNav: false,
      items: [
        { label: 'Top', icon: 'pi pi-home' },
        { label: 'ご予約', icon: 'pi pi-pencil' },
        { label: '会社概要', icon: 'pi pi-folder-open' },
        { label: 'ガイド', icon: 'pi pi-car' },
        { label: 'プライバシーポリシー', icon: 'pi pi-link' }
      ]
    }
  },
}
</script>
<style lang="scss" scoped>
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
      button.p-button {
        margin: inherit;
        background-color: inherit;
        padding: initial;
        width: initial;
        border-radius: 0.1rem;
        &::v-deep span.p-button-icon.pi {
          font-size: 2rem;
          line-height: 3.5rem;
        }
      }
    }
    .logo{
      position: absolute;
      top: 2.8rem;
      left: 2.4rem;
      width: 11rem;
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