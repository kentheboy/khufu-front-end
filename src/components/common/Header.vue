<template>
    <header class="header" header>
        <div class="headerChild">
          <a href="/">
            <img
              class="logo"
              alt=""
              src="/images/class-logo-main@2x.png"
            />
          </a>
          <div class="toReservation">
            <Button label="今すぐ予約する" @click="scrollToEearchAndReservation"/>
          </div>
          <div class="hamburgerMenu">
            <Button icon="pi pi-align-justify" @click="openSideNav = true" />
          </div>
          <Sidebar v-model:visible="openSideNav" header="" position="right">
            <Menu :model="items">
              <template #item="{ item, props }">
                <router-link v-if="item.route" v-slot="{ href, navigate }" :to="item.route" custom>
                  <a :href="href" v-bind="props.action" @click="navigate" :class="href === $router.currentRoute.value.path ? 'active' : ''">
                    <span :class="item.icon" />
                    <span class="label">{{ item.label }}</span>
                  </a>
                </router-link>
                <a v-else :href="item.url" :target="item.target" v-bind="props.action">
                  <span :class="item.icon" />
                  <span class="label">{{ item.label }}</span>
                </a>
              </template>
            </Menu>
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
        { 
          label: 'Top', 
          icon: 'pi pi-home',
          route: '/'
        },
        { 
          label: 'ご予約',
          icon: 'pi pi-pencil',
          command: () => {
            if(this.$router.currentRoute.value.path !== "/") {
              this.$router.push({name: "Home"})
              setTimeout(() => {
                this.openSideNav = false;
                window.scrollTo({
                  top: document.getElementById('searchAndReservation').offsetTop,
                  behavior: 'smooth'
                });
              }, 100);
            } else {
              this.openSideNav = false;
              window.scrollTo({
                top: document.getElementById('searchAndReservation').offsetTop,
                behavior: 'smooth'
              });
            }
          }
        },
        { 
          label: '料金表',
          icon: 'pi pi-dollar',
          url: "./files/prices.pdf",
          target: "_blank"
        },
        { 
          label: 'ご利用ガイド',
          icon: 'pi pi-car',
          route: '/guide'
        },
        { 
          label: '会社概要',
          icon: 'pi pi-folder-open',
          route: '/company'
        },
        { 
          label: '貸渡約款',
          icon: 'pi pi-book',
          route: '/terms'
        },
        { 
          label: 'プライバシーポリシー',
          icon: 'pi pi-link',
          url: "./files/privacy_policy.pdf",
          target: "_blank"
        }
      ]
    }
  },
  methods: {
    scrollToEearchAndReservation() {
      if(this.$router.currentRoute.value.path !== "/") {
        this.$router.push({name: "Home"})
        setTimeout(() => {
          this.openSideNav = false;
          window.scrollTo({
            top: document.getElementById('searchAndReservation').offsetTop,
            behavior: 'smooth'
          });
        }, 100);
      } else {
        this.openSideNav = false;
        window.scrollTo({
          top: document.getElementById('searchAndReservation').offsetTop,
          behavior: 'smooth'
        });
      }
    }
  }
}
</script>
<style lang="scss" scoped>
  .header {
    height: 7.6rem;
    background-color: var(--color-skyblue);
    overflow: hidden;
    
    .toReservation {
      position: absolute;
      right: 7rem;
      top: 1.2rem;
      button.p-button {
        height: 2.2rem;
        padding: unset;
        font-size: .9rem;
        font-weight: bold;
        background-color: white;
        color: var(--color-steelblue);
        box-shadow: 2px 2px 2px rgba(0, 0, 0, 0.25);
      }
      @media screen and (max-width: 390px) {
        display: none;
      }
    }
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