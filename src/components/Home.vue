<template>
  <div class="home">
    <Header></Header>
    <main class="main">
      <section class="section__heroImageArea">
        <ImageSlider :images="heroImages"></ImageSlider>
      </section>
      <section class="section__features">
        <div class="section__features--title">
          <h3>特徴</h3>
          <h1>FEATURE</h1>
        </div>
        <div class="section__features--contents">
          <div class="section__features--content">
            <div class="ellipse-parent">
              <div class="ellipseDiv">
                <div class="ellipseInside-number">01</div>
                <h1 class="ellipseInside-text">
                  <p class="p">難しい手続きなしで</p>
                  <p class="p">すぐご出発</p>
                </h1>
              </div>
            </div>
            <div class="subtext">
              <h1>
                <p class="p">必要書類はメールにて送信。<br class="sp">かんたんに手続きが済みます。</p>
              </h1>
            </div>
          </div>
          <div class="section__features--content">
            <div class="ellipse-parent">
              <div class="ellipseDiv">
                <div class="ellipseInside-number">02</div>
                <h1 class="ellipseInside-text">
                  <p class="p">混みにくい高速道路の</p>
                  <p class="p">近くだからスイスイ</p>
                </h1>
              </div>
            </div>
            <div class="subtext">
              <h1>
                <p class="p">混みにくいインターチェンジへ<br class="sp">最短アクセスが可能です。</p>
              </h1>
              <h3>
                <p class="p">※空港近辺では使用インターが重なり、<br class="sp">度々渋滞になります。</p>
              </h3>
            </div>
          </div>
          <div class="section__features--content">
            <div class="ellipse-parent">
              <div class="ellipseDiv">
                <div class="ellipseInside-number">03</div>
                <h1 class="ellipseInside-text singleLine">
                  <p class="p">支払いもスマートに</p>
                </h1>
              </div>
            </div>
            <div class="subtext">
              <h1>
                <p class="p">免責補償込みで予約可能。<br class="sp">余計なオプションも、<br class="sp">追加保険料も必要なし。</p>
              </h1>
            </div>
          </div>
        </div>
      </section>
      <Information></Information>
      <div>
        <section class="section__form">
          <div class="section__form--title">
            <h1>SCHEDULE</h1>
            <h3>旅行日程で探す</h3>
          </div>
          <DateTimePicker></DateTimePicker>
          <Button label="空き状況を検索"></Button>
          <Products></Products>
        </section>
        <section class="section__form" style="margin-bottom: 0;">
            <div class="section__form--title">
              <h1>YOUR INFORMATION</h1>
              <h3>お客様情報入力</h3>
            </div>
            <div class="section__form--content">
              <div class="section__form--content-input-area">
                <Input
                  type="text"
                  label="お名前"
                  name="name"
                  placeholder="山田太郎"
                  v-model="scheduleInfo.customerName.value"
                  @update:modelValue="isValid('name')"
                ></Input>
                <span class="error-msg" v-if="!scheduleInfo.customerName.isValid && formEntryStart">※必須</span>
              </div>
              <div class="section__form--content-input-area">
                <Input
                  type="email"
                  label="メールアドレス"
                  name="email"
                  placeholder="example@class.okinawa"
                  v-model="scheduleInfo.customerEmail.value"
                  @update:modelValue="isValid('email')"
                ></Input>
                <span class="error-msg" v-if="!scheduleInfo.customerEmail.isValid && formEntryStart">※必須：正しいメールアドレスを入力してください</span>
              </div>
              <div class="section__form--content-input-area">
                <Input
                  type="tel"
                  label="電話番号"
                  name="phonenumber"
                  placeholder="08000000000"
                  v-model="scheduleInfo.customerPhoneNumber.value"
                  @update:modelValue="isValid('phone')"
                ></Input>
                <span class="error-msg" v-if="!scheduleInfo.customerPhoneNumber.isValid && formEntryStart">※必須：正しい電話番号を入力してください</span>
              </div>
              <div class="section__form--content-input-area">
                <Input
                  type="number"
                  label="免許番号"
                  name="license-number"
                  placeholder="1234567890"
                  v-model="scheduleInfo.licenseNumber.value"
                  @update:modelValue="isValid('licenseNumber')"
                ></Input>
                <span class="error-msg" v-if="!scheduleInfo.licenseNumber.isValid && formEntryStart">※必須</span>
              </div>
              <div class="section__form--content-input-area">
                <Input
                  type="date"
                  label="生年月日"
                  name="dob"
                  v-model="scheduleInfo.dob.value"
                  @update:modelValue="isValid('dob')"
                ></Input>
                <span class="error-msg" v-if="!scheduleInfo.dob.isValid && formEntryStart">※必須</span>
              </div>
              <div class="section__form--content-input-area">
                <Input
                  type="airport-timpicker"
                  label="空港お出迎え"
                  name="airport-pickup"
                  v-model="scheduleInfo.airportPickup.value"
                  @update:modelValue="isValid('airportPickup')"
                ></Input>
                <span class="error-msg" v-if="!scheduleInfo.airportPickup.isValid && formEntryStart">※必須</span>
              </div>
              <div class="section__form--content-input-area">
                <Input
                  type="airport-timpicker"
                  label="空港お見送り"
                  name="airport-dropoff"
                  v-model="scheduleInfo.airportDropoff.value"
                  @update:modelValue="isValid('airportDropoff')"
                ></Input>
                <span class="error-msg" v-if="!scheduleInfo.airportDropoff.isValid && formEntryStart">※必須</span>
              </div>
              <div class="section__form--submit">
                <Button
                  label="予約確認"
                  :disabled="!isValidScheduleInfo"
                ></Button>
              </div>
            </div>
        </section>
      </div>
    </main>
    <Footer></Footer>
  </div>
</template>
  
<script>
import Header from "/src/components/common/Header";
import ImageSlider from "/src/components/common/ImageSlider";
import DateTimePicker from "/src/components/common/form/DateTimePicker";
import Input from "/src/components/common/form/Input";
import Products from "/src/components/common/Products";
import Information from "/src/components/common/Information";
import Footer from "/src/components/common/Footer";
import Button from "primevue/button";
// import axios from "axios";
export default {
  name: 'Home',
  components: {
    Header,
    ImageSlider,
    DateTimePicker,
    Input,
    Products,
    Information,
    Footer,
    Button
  },
  props: {
    msg: {
      type: String,
      default: "Hello world",
    }
  },
  data() {
    return {
      heroImages: [
        "/images/car-images/hero-image1.jpg",
        "/images/car-images/hero-image2.png",
        "/images/car-images/hero-image3.png"
      ],
      additionalDriverRadio: [
        { name: "additional-driver-radio", value: "yes", label: "あり"},
        { name: "additional-driver-radio", value: "no", label: "なし"},
      ],
      signUp: [
        { name: "sign-up", value: "yes", label: "希望する"},
        { name: "sign-up", value: "no", label: "希望しない"},
      ],
      comingSoonHeight: null,
      formEntryStart: false,
      scheduleInfo: {
        reservationCarId: null,
        start_at: null,
        end_at: null,
        totalFee: null,
        customerName: {
          value: "",
          isValid: true
        },
        customerEmail: {
          value: "",
          isValid: true
        },
        customerPhoneNumber: {
          value: "",
          isValid: true
        },
        licenseNumber: {
          value: "",
          isValid: true
        },
        dob: {
          value: "",
          isValid: true
        },
        airportPickup: {
          value: false,
          isValid: true
        },
        airportDropoff: {
          value: false,
          isValid: true
        },
      },
      isValidScheduleInfo: false
    }
  },
  async created() {
  },
  computed: {
    cssVars() {
      return {
        '--comingSoon-height': this.comingSoonHeight
      }
    },
    envVariable() {
      return this.$store.state.envVariable;
    }
  },
  methods: {
    isValid(inputName) {
      this.formEntryStart = true;
      const emailRegex = /^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/;
      const phoneRegex = /^[+-]?[0-9]{7,13}$/;
      switch(inputName){
        case "name":
          if(this.scheduleInfo.customerName.value.length < 1) {
            this.scheduleInfo.customerName.isValid = false;
          } else {
            this.scheduleInfo.customerName.isValid = true;
            this.isReadyToBeSubmited();
          }
          break;
        case "email":
          if (!emailRegex.test(this.scheduleInfo.customerEmail.value)) {
            this.scheduleInfo.customerEmail.isValid = false;
          } else {
            this.scheduleInfo.customerEmail.isValid  = true;
            this.isReadyToBeSubmited();
          }
          break;
        case "phone":
          if (phoneRegex.test(this.scheduleInfo.customerPhoneNumber.value)) {
            this.scheduleInfo.customerPhoneNumber.isValid = true;
          } else {
            this.scheduleInfo.customerPhoneNumber.isValid = false;
            this.isReadyToBeSubmited();
          }
          break;
        case "licenseNumber":
          if(this.scheduleInfo.licenseNumber.value.length < 1) {
            this.scheduleInfo.licenseNumber.isValid = false;
          } else {
            this.scheduleInfo.licenseNumber.isValid = true;
            this.isReadyToBeSubmited();
          }
          break;
        case "dob":
          if(this.scheduleInfo.dob.value.length < 1) {
            this.scheduleInfo.dob.isValid = false;
          } else {
            this.scheduleInfo.dob.isValid = true;
            this.isReadyToBeSubmited();
          }
          break;
        case "airportPickup":
          if (this.scheduleInfo.airportPickup.value.length < 1) {
            this.scheduleInfo.airportPickup.isValid = false;
          } else {
            this.scheduleInfo.airportPickup.isValid = true;
            this.isReadyToBeSubmited();
          }
          break;
        case "airportDropoff":
          if (this.scheduleInfo.airportDropoff.value.length < 1) {
            this.scheduleInfo.airportDropoff.isValid = false;
          } else {
            this.scheduleInfo.airportDropoff.isValid = true;
            this.isReadyToBeSubmited();
          }
          break;
        default:
          break;
      }
    },
    isReadyToBeSubmited() {
      if (
        this.formEntryStart &&
        this.scheduleInfo.customerName.isValid &&
        this.scheduleInfo.customerEmail.isValid &&
        this.scheduleInfo.customerPhoneNumber.isValid &&
        this.scheduleInfo.licenseNumber.isValid &&
        this.scheduleInfo.dob.isValid &&
        this.scheduleInfo.airportPickup.isValid &&
        this.scheduleInfo.airportDropoff.isValid
      ) {
        this.isValidScheduleInfo = true;
      } else {
        this.isValidScheduleInfo = false;
      }
    }
  }
}
</script>
<style lang="scss" scoped>
.home {
  text-align: left;
  font-size: 1rem;
  color: var(--color-black);
  font-family: var(--font-istok-web);
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
    font-family: var(--font-istok-web);
    margin: 0 6%;

    &--title {
      h3 {
        margin: 0;
        font-size: var(--font-size-xs);
        letter-spacing: 0.2em;
        font-weight: 400;
        font-family: inherit;
        color: var(--color-steelblue);
        text-align: left;
      }

      h1 {
        margin: 0;
        font-size: 3.2rem;
        letter-spacing: 0.2em;
        font-weight: 400;
        font-family: inherit;
        color: var(--color-steelblue);
        text-align: left;
        line-height: 3rem;
      }
    }

    &--content {
      position: relative;
      margin: 4rem;

      @media screen and (max-width: 390px) {
        margin: 4rem 1rem;
      }

      .ellipse-parent {
        display: flex;
        justify-content: space-around;

        .ellipseDiv {
          position: relative;
          border-radius: 50%;
          background-color: var(--color-skyblue);
          width: 27.48rem;
          height: 27.48rem;

          @media screen and (max-width: 390px) {
            height: 22.48rem;
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

              @media screen and (max-width: 390px) {
                bottom: -1.9rem;
              }
            }

            &-text {
              margin: 11rem 0;
              font-size: var(--font-size-xl);
              letter-spacing: 0.2em;
              font-weight: 700;
              font-family: inherit;

              @media screen and (max-width: 390px) {
                font-size: 1.6rem;
                top: 8.4rem;
                margin: 9rem 0;
              }

              &.singleLine {
                margin-top: 12rem;
                @media screen and (max-width: 390px) {
                  margin-top: 10rem;
                }
              }
            }
          }
        }
      }

      .subtext {
        margin: 4rem;
        @media screen and (max-width: 390px) {
          margin: 4rem 0;
        }

        h1 {
          font-size: inherit;
          letter-spacing: 0.2em;
          font-weight: 400;
          font-family: inherit;
          color: var(--color-steelblue);

          @media screen and (max-width: 390px) {
            font-size: 1.3rem;
          }
        }

        h3 {
          font-size: var(--font-size-xs);
          letter-spacing: 0.2em;
          font-weight: 400;
          font-family: inherit;
          color: var(--color-steelblue);

          @media screen and (max-width: 390px) {
            font-size: 1rem;
          }
        }
      }
    }
  }

  &__form {
    text-align: center;
    margin-bottom: 5rem;

    &--title {
      text-align: center;
      margin: 2.3rem;
      border-bottom: 1.5px solid var(--color-steelblue);

      h1 {
        letter-spacing: 0.15em;
        font-size: 2rem;
        font-family: var(--font-istok-web);
        font-weight: normal;
        margin: unset;
      }

      h3 {
        letter-spacing: 0.15em;
        font-family: var(--font-istok-web);
        font-weight: normal;
        margin: unset;
      }
    }

    &--content {
      margin-left: auto;
      margin-right: auto;
      width: fit-content;
      text-align: left;
      @media screen and (max-width: 390px) {
        width: 100%;
      }
      &-input-area {
        margin-bottom: 2rem;
        &::v-deep .input-area {
          margin-bottom: initial;
        }
        .error-msg {
          color: red
        }
      }
    }

    &--submit {
      text-align: center;
    }
  }
}
.comingSoon {
  position: relative;
  &:before {
    content: "";
    position: absolute;
    left: 0;
    width: 100%;
    height: var(--comingSoon-height);
    background-color: rgba(0, 0, 0, 0.4);
    z-index: 1;
    @media screen and (max-width: 390px) {
      height: 2902px;
    }
  }
  &__notice {
    position: absolute;
  }
  .custom-modal {
    z-index: 1;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    overflow: auto;
    .modal-content {
      background-color: #fefefe;
      margin: 15% auto;
      padding: 20px;
      width: 25rem;
      border-radius: 3.49px;
      border: none;
      text-align: center;
      font-size: 1rem;
      .button {
        display: inline-block;
      }
    }
  }

  .bigText {
    font-size: 4rem;
    font-weight: bolder;
    color: var(--color-white);
    width: 100%;
    text-align: center;
    z-index: 2;
    &-content {
      display: flex;
      flex-direction: column;
      justify-content: flex-start;
      width: 20rem;
      &:nth-child(1) {
        margin: 1% auto;
        @media screen and (max-width: 390px) {
          margin: 15% auto;
        }
      }
      &:nth-child(2) {
        margin: 1% auto;
        @media screen and (max-width: 390px) {
          margin: 15% auto;
        }
      }
    }
    span {
      line-height: 4rem;
      &:nth-child(1){
        margin: 0 auto auto 0;
      }
      &:nth-child(2){
        margin: auto 0 0 auto;
      }
    }
  }
  #comingSoon1 {
    margin: 28% 0%;
    @media screen and (max-width: 390px) {
      margin: 80% 0%;
    }
  }
  #comingSoon2 {
    margin: 50% 0%;
    @media screen and (max-width: 390px) {
      margin: 197% 0%;
    }
  }
}
.sp {
  display: none;
  @media screen and (max-width: 390px) {
    display: initial;
  }
}
</style>
  