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
      <div class="comingSoon" ref="comingSoon">
        <div id="myModal" class="comingSoon__notice custom-modal">
          <div class="modal-content">
              <p>現在、下記の電話にて<br>予約を承っております。</p>
              <a class="button" href="tel:098-996-7266">098-996-7266</a>
          </div>
        </div>
        <div class="comingSoon__notice bigText" id="comingSoon1">
          <div class="bigText-content">
            <span>Coming</span>
            <span>Soon...</span>
          </div>
        </div>
        <div class="comingSoon__notice bigText" id="comingSoon2">
          <div class="bigText-content">
            <span>Coming</span>
            <span>Soon...</span>
          </div>
        </div>
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
              <Input type="text" label="お名前" name="name" placeholder="山田太郎"></Input>
              <Input type="text" label="お名前(かな)" name="kana-name" placeholder="やまだたろう"></Input>
              <Input type="email" label="メールアドレス" name="email" placeholder="example@class.okinawa"></Input>
              <Input type="tel" label="電話番号" name="phonenumber" placeholder="080-0000-0000"></Input>
              <Input type="number" label="免許番号" name="license-number" placeholder="1234567890"></Input>
              <Input type="date" label="生年月日" name="dob"></Input>
              <Input type="address"></Input>
              <Input type="airport-timpicker" label="空港お出迎え" name="airport-pickup"></Input>
              <Input type="airport-timpicker" label="空港お見送り" name="airport-dropoff"></Input>
              <CreditCardInfo></CreditCardInfo>
              <p class="label">本人確認書類アップロード</p>
              <Input type="file" label="画像1" name="image1"></Input>
              <Input type="radio" label="追加運転者" :options="additionalDriverRadio"></Input>
              <Input type="file" label="画像1" name="additionalDriverImage1"></Input>
              <Input type="textarea" label="備考" name="memos"  :value="comingSoonHeight"></Input>
              <Input type="password" label="パスワード" name="newPassword"></Input>
              <Input type="password" label="パスワード（確認）" name="newPasswordConfirmation"></Input>
              <Input type="radio" label="会員登録" :options="signUp"></Input>
              <div class="section__form--submit">
                <Button label="予約確認"></Button>
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
import CreditCardInfo from "/src/components/common/form/CreditCardInfo";
import Input from "/src/components/common/form/Input";
import Products from "/src/components/common/Products";
import Information from "/src/components/common/Information";
import Footer from "/src/components/common/Footer";
import Button from "primevue/button";
export default {
  name: 'Home',
  components: {
    Header,
    ImageSlider,
    DateTimePicker,
    CreditCardInfo,
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
        "/images/hero-image1-v2.jpg",
        "https://cdn.pixabay.com/photo/2015/12/12/15/24/amsterdam-1089646_1280.jpg",
        "https://cdn.pixabay.com/photo/2016/12/04/19/30/berlin-cathedral-1882397_1280.jpg"
      ],
      additionalDriverRadio: [
        { name: "additional-driver-radio", value: "yes", label: "あり"},
        { name: "additional-driver-radio", value: "no", label: "なし"},
      ],
      signUp: [
        { name: "sign-up", value: "yes", label: "希望する"},
        { name: "sign-up", value: "no", label: "希望しない"},
      ],
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
    height: 2793px;
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
      //padding: 0 5rem;
    }
  }
  #comingSoon2 {
    margin: 50% 0%;
    @media screen and (max-width: 390px) {
      margin: 197% 0%;
      //padding: 0 5rem;
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
  