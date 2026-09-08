<template>
  <header class="header" header>
    <div class="headerChild">
      <a href="/">
        <img class="logo" alt="" src="/images/class-logo-main@2x.png" />
      </a>
      <div class="toReservation">
        <Button as="a" :href="lineUrl" target="_blank" rel="noopener" class="line-button" icon="pi pi-comment" :label="$t('home.Reserve via LINE')" />
      </div>
      <div class="laguageMenu" v-if="!isValiosaPage">
        <Button class="language" icon="pi pi-globe" severity="info" text raised rounded aria-label="language" @click="toggleLaguageMenu" />
        <Menu ref="openLaguageMenu" id="overlay_menu" :model="languages" :popup="true" />
      </div>
      <div class="hamburgerMenu">
        <Button icon="pi pi-align-justify" @click="openSideNav = true" />
      </div>
      <Sidebar v-model:visible="openSideNav" header="" position="right">
        <Menu :model="isValiosaPage ? valiosaItems : items">
          <template #item="{ item, props }">
            <router-link v-if="item.route" v-slot="{ href, navigate }" :to="item.route" custom>
              <a :href="href" v-bind="props.action" @click="navigate" :class="href === $router.currentRoute.value.path ? 'active' : ''">
                <span :class="item.icon" />
                <span class="label">{{ item.label }}</span>
              </a>
            </router-link>
            <a v-else :href="item.url" :target="item.target" v-bind="props.action">
              <span :class="item.icon" />
              <span class="label" :class="item.labelClass">{{ item.label }}</span>
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
    Menu,
  },
  data() {
    return {
      openSideNav: false,
      lineUrl: 'https://lin.ee/w5vv7ng',
      items: [
        {
          label: 'Top',
          icon: 'pi pi-home',
          route: '/'
        },
        {
          label: this.$t('home.reservation') + '(LINE)',
          icon: 'pi pi-pencil',
          labelClass: 'label--line',
          command: () => {
            this.openSideNav = false;
            window.open(this.lineUrl, '_blank', 'noopener');
          }
        },
        {
          label: this.$t('home.Fees'),
          icon: 'pi pi-dollar',
          url: "/files/" + this.$i18n.locale + "/prices.pdf",
          target: "_blank"
        },
        {
          label: this.$t('home.Guid'),
          icon: 'pi pi-car',
          route: '/guide'
        },
        {
          label: this.$t('home.Company info'),
          icon: 'pi pi-folder-open',
          route: '/company'
        },
        {
          label: this.$t('home.Terms and Conditions of Lease'),
          icon: 'pi pi-book',
          route: '/terms'
        },
        {
          label: this.$t('home.Privacy Policy'),
          icon: 'pi pi-link',
          url: "/files/" + this.$i18n.locale + "/privacy_policy.pdf",
          target: "_blank"
        },
        {
          label: this.$t('home.Articles'),
          icon: 'pi pi-image',
          url: "https://column.class-rental-car.com/",
          target: "_blank"
        }
      ],
      valiosaItems: [
        {
          label: 'ご予約',
          icon: 'pi pi-pencil',
          command: () => {
            this.openSideNav = false;
            window.scrollTo({
              top: document.getElementById('searchAndReservation').offsetTop,
              behavior: 'smooth'
            });
          }
        },
        {
          label: '料金表',
          icon: 'pi pi-dollar',
          url: "/files/prices.pdf",
          target: "_blank"
        },
        {
          label: '特徴',
          icon: 'pi pi-star',
          command: () => {
            this.openSideNav = false;
            window.scrollTo({
              top: document.getElementById('features').offsetTop,
              behavior: 'smooth'
            });
          }
        },
        {
          label: 'ご利用ガイド',
          icon: 'pi pi-car',
          command: () => {
            this.openSideNav = false;
            window.scrollTo({
              top: document.getElementById('guide').offsetTop,
              behavior: 'smooth'
            });
          }
        },
        {
          label: '本体サイト',
          icon: 'pi pi-arrow-up-right',
          route: '/'
        },
        {
          label: 'コラムサイト',
          icon: 'pi pi-image',
          url: "https://column.class-rental-car.com/",
          target: "_blank"
        }
      ],
      languages: [
        {
          label: '日本語',
          command: () => {
            this.$i18n.locale = 'ja';
            localStorage.setItem('lang', 'ja');
            this.switchMenuLanguage();
          }
        },
        {
          label: '한국어',
          command: () => {
            this.$i18n.locale = 'ko';
            localStorage.setItem('lang', 'ko');
            this.switchMenuLanguage();
          }
        },
        {
          label: '中文繁體（廣東話）',
          command: () => {
            this.$i18n.locale = 'cmn_hant';
            localStorage.setItem('lang', 'cmn_hant');
            this.switchMenuLanguage();
          }
        },
        {
          label: '简体中文',
          command: () => {
            this.$i18n.locale = 'cmn_hans';
            localStorage.setItem('lang', 'cmn_hans');
            this.switchMenuLanguage();
          }
        },
        // {
        //   label: 'English(Coming...)',
        // }
      ]
    }
  },
  async created() {
    var lang = 'ja';
    if (!this.$router.currentRoute.value.path.includes("valiosa")) {
      lang = localStorage.getItem('lang') || 'ja';
    }
    this.$i18n.locale = lang;
    this.switchMenuLanguage();
  },
  methods: {
    toggleLaguageMenu(event) {
      this.$refs.openLaguageMenu.toggle(event);
    },
    switchMenuLanguage() {
      this.items[1].label = this.$t('home.reservation') + '(LINE)';
      this.items[2].label = this.$t('home.Fees');
      this.items[2].url = "/files/" + this.$i18n.locale + "/prices.pdf";
      this.items[3].label = this.$t('home.Guid');
      this.items[4].label = this.$t('home.Company info');
      this.items[5].label = this.$t('home.Terms and Conditions of Lease');
      this.items[6].label = this.$t('home.Privacy Policy');
      this.items[6].url = "/files/" + this.$i18n.locale + "/privacy_policy.pdf";
      this.items[7].label = this.$t('home.Articles');
    }
  },
  computed: {
    isValiosaPage() {
      let path = this.$router.currentRoute.value.path
      return path.includes("valiosa")
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
    right: 10rem;
    top: 1.2rem;

    button.p-button {
      height: 2.2rem;
      padding: 0 1rem;
      font-size: .9rem;
      font-weight: bold;
      background-color: #06c755;
      border-color: #06c755;
      color: var(--color-white);
      box-shadow: 2px 2px 2px rgba(0, 0, 0, 0.25);
      white-space: nowrap;

      &:hover {
        background-color: #05b34c !important;
        border-color: #05b34c !important;
      }

      &::v-deep .p-button-label {
        white-space: nowrap;
      }

      @media screen and (max-width: 630px) {
        width: auto;
        padding: 0 0.7rem;
        font-size: .8rem;
      }
    }

    @media screen and (max-width: 545px) {
      display: none;
    }
  }

  button.language.p-button-icon-only {
    position: absolute;
    right: 7.4rem;
    top: 2.5rem;
    padding: initial;
    background-color: initial;
    color: white;
    box-shadow: initial;
    width: 2rem;
    margin: 0 -0.4rem 0 1rem;

    &::v-deep span.p-button-icon {
      font-size: 1.5rem;
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

  .logo {
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
    font-family: var(--font-noto-sans);
    font-optical-sizing: var(--font-default-optical-sizing);
    font-style: var(--font-default-style);
    color: var(--color-skyblue);
    font-weight: bold;
  }
}

// The sidebar/menu content is teleported outside .header in the DOM,
// so this rule stays unnested to still match it.
.label--line {
  color: #06c755 !important;
  font-weight: bold;
}
</style>
