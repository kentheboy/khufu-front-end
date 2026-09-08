<template>
  <div class="home">
    <Header></Header>
    <main :class="['main', $i18n.locale]">
      <section class="section__heroImageArea">
        <ImageSlider :images="isSmartPhone() ? heroImagesSp : heroImages"></ImageSlider>
      </section>
      <div>
        <section class="section__form section__form--line" id="searchAndReservation">
          <div class="section__form--title">
            <h1>SCHEDULE</h1>
            <h3>{{ $t('home.Search by dates') }}</h3>
          </div>
          <div class="line-reservation">
            <img class="line-reservation__icon" src="/images/icons/line.png" alt="LINE" />
            <p class="line-reservation__text">{{ $t('home.Reserve on LINE lead text') }}</p>
            <a
              class="line-reservation__button"
              :href="lineUrl"
              target="_blank"
              rel="noopener"
            >
              <i class="pi pi-comment"></i>
              <span>{{ $t('home.Reserve via LINE') }}</span>
            </a>
          </div>
        </section>
      </div>
      <div>
        <section class="section__products">
          <div class="section__products--title">
            <h1>VEHICLE LIST</h1>
            <h3>{{ $t('home.Car list') }}</h3>
          </div>
          <div class="section__products--lists">
            <ProductCard :product="vehicle_list[0]" @click="carDetailOpener(0)"></ProductCard>
            <ProductCard :product="vehicle_list[1]" @click="carDetailOpener(1)"></ProductCard>
            <ProductCard :product="vehicle_list[2]" @click="carDetailOpener(2)"></ProductCard>
            <ProductCard :product="vehicle_list[3]" @click="carDetailOpener(3)"></ProductCard>
          </div>
          <Dialog v-model:visible="openCarDetail" maximizable :modal="true">
            <section class="section__products--detail">
              <div class="section__products--title">
                <h1>{{ vehicle_list[carDetailIndex].title }}</h1>
              </div>
              <div class="section__products--detail--images">  
                <Galleria
                  :value="vehicle_list[carDetailIndex].detail.images" 
                  :responsiveOptions="responsiveOptions" 
                  :numVisible="5" 
                  containerStyle="max-width: 640px" 
                  :circular="true" 
                  :autoPlay="true" 
                  :transitionInterval="3000"
                  :showThumbnails="true"
                >
                  <template #item="slotProps">
                    <transition name="fade">
                      <img
                        :key="slotProps.item.itemImageSrc"
                        :src="slotProps.item.itemImageSrc"
                        :alt="slotProps.item.alt"
                        style="width: 100%" 
                        class="galleria-image"
                      />
                  </transition>
                  </template>
                  <template #thumbnail="slotProps">
                    <img :src="slotProps.item.thumbnailImageSrc" :alt="slotProps.item.alt" />
                  </template>
                </Galleria>
              </div>
              <div class="section__products--detail--features">
                <div 
                  v-for="(feature, index) in vehicle_list[carDetailIndex].detail.features" 
                  :key="index"
                  class="features__item"
                >
                  <p class="step-title">{{ feature }}</p>
                </div>
              </div>
              <div class="section__products--detail--datatable">
                <table border="0" cellspacing="0" cellpadding="0">
                  <tbody>
                    <tr 
                      v-for="(data, index) in vehicle_list[carDetailIndex].detail.datatable" 
                      :key="index"
                    >
                      <th>{{ data.title }}</th>
                      <td>{{ data.value }}</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div class="section__products--detail--description">
                <p 
                  v-for="(attention, index) in vehicle_list[carDetailIndex].detail.attention"
                  :key="index"
                  class="attention"
                >
                  {{ attention }}
                </p>
              </div>
            </section>
          </Dialog>
        </section>
      </div>
      <section class="section__features">
        <div class="section__features--title">
          <h3>{{ $t('home.feature') }}</h3>
          <h1>FEATURE</h1>
        </div>
        <div class="section__features--contents">
          <div class="section__features--content">
            <div class="ellipse-parent">
              <div class="ellipseDiv">
                <div class="ellipseInside-number">01</div>
                <h1 class="ellipseInside-text">
                  <p class="p">{{ $t('home.with no complicated procedures') }}</p>
                  <p class="p">{{ $t('home.depart immediately') }}</p>
                </h1>
              </div>
            </div>
            <div class="subtext">
              <h1>
                <p class="p">
                  {{ $t('home.required documents are sent by e-mail') }} </p>
                <p class="p">{{ $t('home.The procedure is easy to complete') }}
                </p>
              </h1>
            </div>
          </div>
          <div class="section__features--content">
            <div class="ellipse-parent">
              <div class="ellipseDiv">
                <div class="ellipseInside-number">02</div>
                <h1 class="ellipseInside-text">
                  <p class="p">{{ $t('home.located close to the highway') }}</p>
                  <p class="p">{{ $t('home.which is less crowded, so its easy to get around') }}</p>
                </h1>
              </div>
            </div>
            <div class="subtext">
              <h1>
                <p class="p">
                  {{ $t('home.to uncrowded interchanges') }}</p>
                <p class="p">{{ $t('home.shortest possible access') }}
                </p>
              </h1>
              <h3>
                <p class="p">
                  {{ $t('home.The interchanges used in the vicinity of the airport overlap,') }}</p>
                <p class="p">{{ $t('home.resulting in frequent traffic jams') }}
                </p>
              </h3>
            </div>
          </div>
          <div class="section__features--content">
            <div class="ellipse-parent">
              <div class="ellipseDiv">
                <div class="ellipseInside-number">03</div>
                <h1 class="ellipseInside-text singleLine">
                  <p class="p">{{ $t('home.pay smartly!') }}</p>
                </h1>
              </div>
            </div>
            <div class="subtext">
              <h1>
                <p class="p">
                  {{ $t('home.indemnity coverage included') }}</p>
                <p class="p">{{ $t('home.with no extra options,') }}</p>
                <p class="p">{{ $t('home.with no redundant coverages') }}
                </p>
              </h1>
            </div>
          </div>
        </div>
      </section>
      <ScrollTop />
    </main>
    <Footer></Footer>
  </div>
</template>

<script>
import Header from "/src/components/common/Header";
import ImageSlider from "/src/components/common/ImageSlider";
import Galleria from 'primevue/galleria';
import ProductCard from "/src/components/common/ProductCard";
import Footer from "/src/components/common/Footer";
import Dialog from "primevue/dialog";
import ScrollTop from "primevue/scrolltop";
export default {
  name: "Home",
  components: {
    Header,
    ImageSlider,
    Galleria,
    ProductCard,
    Footer,
    Dialog,
    ScrollTop,
  },
  props: {
    msg: {
      type: String,
      default: "Hello world",
    },
  },
  data() {
    return {
      heroImages: [
        "/images/hero-images/image1.jpg",
        "/images/hero-images/image2.jpg",
        "/images/hero-images/image3.jpg",
        "/images/hero-images/image4.png",
        "/images/hero-images/image5.jpg",
        "/images/hero-images/image6.jpg",
      ],
      heroImagesSp: [
        "/images/hero-images/sp/image1.jpg",
        "/images/hero-images/sp/image2.jpg",
        "/images/hero-images/sp/image3.jpg",
        "/images/hero-images/sp/image4.jpg",
        "/images/hero-images/sp/image5.jpg",
        "/images/hero-images/sp/image6.png",
      ],
      additionalDriverRadio: [
        { name: "additional-driver-radio", value: "yes", label: "あり" },
        { name: "additional-driver-radio", value: "no", label: "なし" },
      ],
      signUp: [
        { name: "sign-up", value: "yes", label: "希望する" },
        { name: "sign-up", value: "no", label: "希望しない" },
      ],
      vehicle_list: [],
      lineUrl: 'https://lin.ee/w5vv7ng',
      openCarDetail: false,
      carDetailIndex: 0,
      responsiveOptions: [
        {
          breakpoint: '1300px',
          numVisible: 4
        },
        {
          breakpoint: '575px',
          numVisible: 1
        }
      ]
    };
  },
  async created() {
    // load vehicle list from json file
    var lang = 'ja';
    lang = localStorage.getItem('lang') || 'ja';
    fetch(`/files/${lang}/data.json`)
      .then((response) => response.json())
      .then((data) => {
        this.vehicle_list = data;
      })
      .catch((error) => {
        console.error('Error loading JSON:', error);
      });
  },
  watch: {
    '$i18n.locale'(newLocale) {
      // switch vehicle file data when the language changes
      fetch(`/files/${newLocale}/data.json`)
      .then((response) => response.json())
      .then((data) => {
        this.vehicle_list = data;
      })
      .catch((error) => {
        console.error('Error loading JSON:', error);
      });
    }
  },
  methods: {
    isSmartPhone() {
      const ua = navigator.userAgent || navigator.vendor || window.opera;

      // Check common smartphone indicators in the user agent string
      const isMobileUA = /android|iphone|ipod|blackberry|windows phone|opera mini|mobile/i.test(ua);

      // Check if screen width is within typical smartphone range
      const isSmallScreen = window.innerWidth <= 768;

      // Return true only if both indicators suggest a smartphone
      return isMobileUA || isSmallScreen;
    },
    carDetailOpener(carId) {
      this.carDetailIndex = carId;
      this.openCarDetail = true;
    },
  },
};
</script>
<style lang="scss" scoped>
.home {
  text-align: left;
  font-size: 1rem;
  color: var(--color-black);
  font-family: var(--font-noto-sans);
  font-optical-sizing: var(--font-default-optical-sizing);
  font-style: var(--font-default-style);
}

section {
  margin: 8rem 2.4rem;
}

.section {
  &__heroImageArea {
    margin: 0 0 1.2rem 0;
  }

  &__features {
    text-align: center;
    font-size: var(--font-size-base);
    color: var(--color-white);
    margin: 0 6% 8rem;

    &--title {
      h3 {
        margin: 0;
        font-size: 1rem;
        letter-spacing: 0.2em;
        font-family: var(--font-noto-sans);
        font-optical-sizing: var(--font-default-optical-sizing);
        font-style: var(--font-default-style);
        color: var(--color-steelblue);
        text-align: left;
      }

      h1 {
        margin: 0;
        font-size: 2rem;
        letter-spacing: 0.2em;
        font-family: var(--font-noto-sans);
        font-optical-sizing: var(--font-default-optical-sizing);
        font-style: var(--font-default-style);
        color: var(--color-steelblue);
        text-align: left;
        line-height: 3rem;
      }
    }

    &--content {
      position: relative;
      margin: 4rem;

      .ellipse-parent {
        display: flex;
        justify-content: space-around;

        .ellipseDiv {
          position: relative;
          border-radius: 50%;
          background-color: var(--color-skyblue);
          width: 27.48rem;
          height: 27.48rem;

          @media screen and (max-width: 720px) {
            width: 61vw;
            height: 61vw;

            @media screen and (max-width: 380px) {
              width: 55vw;
              height: 55vw;
            }
          }

          .ellipseInside {
            &-number {
              position: absolute;
              right: 0;
              bottom: -1.1rem;
              font-size: var(--font-size-52xl-5);
              letter-spacing: 0.1em;
              text-align: left;
              text-shadow: 4.46875px 8.9375px 8.94px rgba(0, 0, 0, 0.5);

              @media screen and (max-width: 720px) {
                font-size: 16vw;
                // bottom: -1.9rem;
              }
            }

            &-text {
              margin: 11rem 0;
              font-size: var(--font-size-xl);
              letter-spacing: 0.2em;
              font-weight: 700;
              font-family: inherit;

              @media screen and (max-width: 720px) {
                font-size: 4.49vw;
                margin-top: 24.39vw;
              }

              &.singleLine {
                margin-top: 12rem;

                @media screen and (max-width: 720px) {
                  margin-top: 26.66vw;
                }
              }
            }
          }
        }
      }

      .subtext {
        margin: 4rem 0;

        h1 {
          font-size: inherit;
          letter-spacing: 0.2em;
          font-weight: 400;
          font-family: inherit;
          color: var(--color-steelblue);

          @media screen and (max-width: 720px) {
            font-size: 3.55vw;
          }
        }

        h3 {
          font-size: var(--font-size-xs);
          letter-spacing: 0.2em;
          font-weight: 400;
          font-family: inherit;
          color: var(--color-steelblue);

          @media screen and (max-width: 720px) {
            font-size: 2.67vw;
          }
        }
      }
    }
  }

  &__form {
    text-align: center;
    margin: 0 2.4rem 5rem;

    &--title {
      text-align: center;
      margin: 2.3rem 0;
      border-bottom: 2px solid var(--color-steelblue);

      h1 {
        color: var(--color-steelblue);
        letter-spacing: 0.15em;
        font-size: 2rem;
        font-family: var(--font-noto-sans);
        font-optical-sizing: var(--font-default-optical-sizing);
        font-style: var(--font-default-style);
        margin: unset;
      }

      h3 {
        color: var(--color-steelblue);
        letter-spacing: 0.15em;
        font-size: 1rem;
        font-family: var(--font-noto-sans);
        font-optical-sizing: var(--font-default-optical-sizing);
        font-style: var(--font-default-style);
        margin: unset;
        margin-bottom: 0.8rem;

        @media screen and (max-width: 430px) {
          font-size: 0.8rem;
        }
      }
    }

    &--content {
      margin-left: auto;
      margin-right: auto;
      width: fit-content;
      text-align: left;

      @media screen and (max-width: 430px) {
        width: 100%;
      }

      &-input-area {
        margin-bottom: 2rem;

        &::v-deep .input-area {
          margin-bottom: initial;

          &.display-block {
            display: block;
          }
        }

        .input-description {
          display: block;
          font-size: 0.8rem;
          font-weight: bold;
          margin-bottom: 0.3rem
        }
      }
    }

    &--submit {
      text-align: center;
    }
  }

  &__form--line {
    .line-reservation {
      display: flex;
      flex-direction: column;
      align-items: center;
      max-width: 32rem;
      margin: 0 auto;

      &__icon {
        width: 4rem;
        height: 4rem;
        margin-bottom: 1.2rem;
      }

      &__text {
        margin: 0 0 1.6rem;
        color: var(--color-black);
        line-height: 1.7;
      }

      &__button {
        display: inline-flex;
        align-items: center;
        justify-content: center;
        gap: 0.6rem;
        width: auto;
        background-color: #06c755;
        color: var(--color-white);
        font-size: 1rem;
        font-weight: bold;
        letter-spacing: 0.05em;
        padding: 0.9rem 2.4rem;
        border-radius: 2rem;
        white-space: nowrap;
        text-decoration: none;
        box-shadow: 2px 2px 2px rgba(0, 0, 0, 0.25);
        cursor: pointer;

        i {
          font-size: 1.1rem;
        }

        &:hover {
          background-color: #05b34c;
        }

        @media screen and (max-width: 430px) {
          padding: 0.9rem 1.4rem;
          font-size: 0.9rem;
        }
      }
    }
  }

  &__products {
    margin: 0 2.4rem 5rem;

    &--title {
      text-align: center;
      margin: 2.3rem 0;
      border-bottom: 2px solid var(--color-steelblue);

      h1 {
        color: var(--color-steelblue);
        letter-spacing: 0.15em;
        font-size: 2rem;
        font-family: var(--font-noto-sans);
        font-optical-sizing: var(--font-default-optical-sizing);
        font-style: var(--font-default-style);
        margin: unset;
      }

      h3 {
        color: var(--color-steelblue);
        letter-spacing: 0.15em;
        font-size: 1rem;
        font-family: var(--font-noto-sans);
        font-optical-sizing: var(--font-default-optical-sizing);
        font-style: var(--font-default-style);
        margin: unset;
        margin-bottom: 0.8rem;

        @media screen and (max-width: 430px) {
          font-size: 0.8rem;
        }
      }
    }

    &--lists {
      display: flex;
      justify-content: center;
      flex-wrap: wrap;

      @media screen and (max-width: 720px) {
        flex-direction: column;
      }

      @media screen and (max-width: 430px) {
        flex-direction: column;
      }
    }

    &--detail {
      margin: 3rem 2.4rem 8rem;
      &--images {
        display: flex;
        justify-content: center;
      }

      &--features {
        display: flex;
        justify-content: space-around;
        margin: 3rem auto;
        flex-wrap: wrap;

        .features__item {
          width: 24%;
          padding: 20px 10px;
          box-sizing: border-box;
          line-height: 1.2;
          margin-bottom: 10px;
          text-align: center;
          background-color: var(--color-skyblue);
          color: var(--color-white);
          font-family: var(--font-noto-sans);
          font-optical-sizing: var(--font-default-optical-sizing);
          font-style: var(--font-default-style);
          border-radius: 1rem;
          font-weight: bold;

          @media screen and (max-width: 720px) {
            width: 48%;
          }
        }
      }

      &--datatable {
        table {
          margin: 0 auto 50px;
          width: 80%;

          @media screen and (max-width: 720px) {
            width: 90%;
          }

          tr {
            width: 50%;
            padding: 15px 15px 15px 20%;
            line-height: 2.5rem;

            &:nth-child(2n-1) {
              background-color: var(--color-lightblue);
            }

            th,
            td {
              width: 50%;
            }
          }
        }
      }

      &--description {
        .attention {
          color: #F47A00
        }
      }
    }
  }
}

.sp {
  display: none;

  @media screen and (max-width: 430px) {
    display: initial;
  }
}

</style>
