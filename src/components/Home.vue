<template>
  <div class="topLp">
    <Header></Header>
    <main class="main">
      <section class="section__heroImageArea">
        <ImageSlider :images="heroImages"></ImageSlider>
      </section>
      <section class="section__features">
        <div class="section__features--title">
          <h3>特徴</h3>
          <h1>FETURE</h1>
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
                <p class="p">必要書類はメールにて送信。かんたんに手続きが済みます。</p>
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
                <p class="p">混みにくいインターチェンジへ最短アクセスが可能です。</p>
              </h1>
              <h3>
                <p class="p">※空港近辺では使用インターが重なり、度々渋滞になります。</p>
              </h3>
            </div>
          </div>
          <div class="section__features--content">
            <div class="ellipse-parent">
              <div class="ellipseDiv">
                <div class="ellipseInside-number">03</div>
                <h1 class="ellipseInside-text">
                  <p class="p">全車ゆとりのある</p>
                  <p class="p">アルファード</p>
                </h1>
              </div>
            </div>
            <div class="subtext">
              <h1>
                <p class="p">広々過ごせるアルファードでゆとりのある快適なご旅行をサポートいたします。</p>
              </h1>
            </div>
          </div>
        </div>
      </section>
      <section class="section__form">
        <div class="section__form--title">
          <h1>SCHEDULE</h1>
          <h3>旅行日程で探す</h3>
        </div>
        <DateTimePicker></DateTimePicker>
        <Button text="空き状況を検索"></Button>
        <Products></Products>
      </section>
      <section class="section__form">
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
          <Input type="file" label="画像2" name="image2"></Input>
          <Input type="file" label="画像3" name="image3"></Input>
          <Input type="file" label="画像4" name="image4"></Input>
          <Input type="radio" label="追加運転者" :options="additionalDriverRadio"></Input>
          <Input type="file" label="画像1" name="additionalDriverImage1"></Input>
          <Input type="file" label="画像2" name="additionalDriverImage2"></Input>
          <Input type="file" label="画像3" name="additionalDriverImage3"></Input>
          <Input type="file" label="画像4" name="additionalDriverImage4"></Input>
          <Input type="textarea" label="備考" name="memos"></Input>
          <Input type="password" label="パスワード" name="newPassword"></Input>
          <Input type="password" label="パスワード（確認）" name="newPasswordConfirmation"></Input>
          <Input type="radio" label="会員登録" :options="signUp"></Input>
          <div class="section__form--submit">
            <Button text="予約確認"></Button>
          </div>
        </div>
      </section>
      <section class="section__information">
        <div class="section__information--title">
          <h1>BOOKING INFORMATION</h1>
          <h3>ご予約内容</h3>
        </div>
        <div class="section__information--car-info">
          <h4>■車両情報</h4>
          <h5>TOYOTA　アルファード</h5>
          <div class="section__information--car-images">
            <div class="main-image">
              <img src="/images/car-images/main4.png" alt="">
              <div class="info-logos">
                <div class="div29 passenger-info">
                  <img class="vectorIcon1" alt="" src="/images/vector.svg" />
                  <img class="vectorIcon2" alt="" src="/images/vector1.svg" />
                  <img class="vectorIcon3" alt="" src="/images/vector2.svg" />
                  <img class="vectorIcon4" alt="" src="/images/vector3.svg" />
                  <div class="passenger-number">7人</div>
                </div>
                <div class="mode">
                  <div class="at">AT</div>
                </div>
                <img class="no-smoking" alt="" src="/images/mask-group@2x.png" />
              </div>
            </div>
            <div class="sub-images">
              <img src="/images/car-images/main1.png" alt="404">
              <img src="/images/car-images/main2.png" alt="404">
              <img src="/images/car-images/main3.png" alt="404">
              <img src="/images/car-images/main3.png" alt="404">
            </div>
          </div>
        </div>
      </section>
      <div class="div3">
        <div class="div17">
          <img class="inner" alt="" src="/images/vector-1.svg" />
          <div class="div18">
            <img class="icon" alt="" src="/images/@2x.png" />
            <div class="div19">補償制度を詳しく</div>
          </div>
          <div class="exampleclassokinawa">基本料金</div>
          <div class="div21">¥20,000</div>
          <div class="div22">補償制度</div>
          <div class="div23">¥3,000</div>
          <div class="div24">¥30,000</div>
          <div class="div25">2023/1/1 10:00 ~ 20231/2 18:00</div>
          <div class="div26">■料金</div>
          <div class="div27">■貸出日程</div>
        </div>
        <div class="div6">
          <div class="div7">■お客様情報</div>
          <div class="div8">お名前</div>
          <div class="div9">メールアドレス</div>
          <div class="div10">電話番号</div>
          <div class="div11">080-0000-0000</div>
          <div class="div12">空港お出迎え</div>
          <div class="div13">空港お見送り</div>
          <div class="div14">18:00</div>
          <div class="div15">なし</div>
          <div class="exampleclassokinawa">example@class.okinawa</div>
          <div class="div16">山田太郎　様</div>
        </div>
        <button class="button1">
          <div class="child" />
          <div class="div4">オンライン決済</div>
        </button>
        <button class="button">
          <div class="child" />
          <div class="div4">　 現金決済</div>
        </button>
      </div>
    </main>
    <footer class="footer">
      <div class="div">〒901-0203　沖縄県豊見城市長堂67</div>
      <div class="div1">営業時間　8:00-18:00</div>
      <div class="div2">問合せ　080-0000-0000</div>
      <img class="classLogo31" alt="" src="/images/class-logo3-1@2x.png" :onClick="onCLASSLogo31Click" />
      <img class="footerChild" alt="" src="/images/images/group-2@2x.png" />
    </footer>
    <div class="div192">お客様画面</div>
  </div>
</template>
  
<script>
import Header from "/src/components/common/Header";
import ImageSlider from "/src/components/common/ImageSlider";
import DateTimePicker from "/src/components/common/form/DateTimePicker";
import CreditCardInfo from "/src/components/common/form/CreditCardInfo";
import Input from "/src/components/common/form/Input";
import Button from "/src/components/common/Button";
import Products from "/src/components/common/Products";
export default {
  name: 'Home',
  components: {
    Header,
    ImageSlider,
    DateTimePicker,
    CreditCardInfo,
    Input,
    Button,
    Products
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
      ]
    }
  }
}
</script>
<style lang="scss" scoped>
section {
  margin: 0 2.4rem;
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
            }
          }
        }
      }

      .subtext {
        margin: 4rem;

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
    }

    &--submit {
      text-align: center;
    }
  }

  &__information {
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

    &--car-info {
      margin-left: auto;
      margin-right: auto;
      width: 34.97rem;
      text-align: left;
    }

    &--car-images {
      display: flex;
      justify-content: space-between;
      .main-image {
        width: 15.16rem;
        display: flex;
        flex-direction: column;
        img {
          width: 100%;
        }
        .info-logos {
          position: relative;
          .passenger-info {
            position: absolute;
            top: 0.7rem;
            left: 0rem;
            width: 3.16rem;
            height: 1.1rem;
            color: var(--color-steelblue);
            .vectorIcon1 {
              position: absolute;
              top: 0.5rem;
              left: 0.79rem;
              width: 0.32rem;
              height: 0.35rem;
            }
            .vectorIcon2 {
              position: absolute;
              top: 0.04rem;
              left: 0.2rem;
              width: 0.41rem;
              height: 0.41rem;
            }
            .vectorIcon3 {
              position: absolute;
              top: 0.04rem;
              left: 0.64rem;
              width: 0.27rem;
              height: 0.41rem;
            }
            .vectorIcon4 {
              position: absolute;
              top: 0.49rem;
              left: 0rem;
              width: 0.81rem;
              height: 0.35rem;
            }
            .passenger-number {
              position: absolute;
              top: 0rem;
              left: 1.36rem;
              letter-spacing: 0.15em;
              display: inline-block;
              width: 1.8rem;
              height: 1.1rem;
            }
          }
          .mode {
            position: absolute;
            top: 0.7rem;
            left: 3.25rem;
            border-radius: 2.49px;
            background-color: var(--color-steelblue);
            width: 1.46rem;
            height: 0.89rem;
            .at, .mn {
              position: absolute;
              top: -0.1rem;
              left: 0.21rem;
              letter-spacing: 0.15em;
              display: inline-block;
              width: 1.2rem;
              height: 1rem;
              color: #fff;
              background: none;
            }
          }
          .no-smoking {
            position: absolute;
            top: 0.7rem;
            left: 5.63rem;
            width: 1.07rem;
            height: 1.07rem;
            -o-object-fit: cover;
            object-fit: cover;
          }
        }
      }
      .sub-images {
        display: flex;
        flex-wrap: wrap;
        width: 15.16rem;
        img {
          width: 7.58rem;
          height: 6.86rem;
        }
      }
    }

    h4 {
      font-size: 1rem;
      letter-spacing: 0.15em;
      font-weight: initial;   
      margin: 0rem;
    }
    h5 {
      font-size: 0.8rem;
      letter-spacing: 0.15em;
      font-weight: initial;
      margin: 0rem;  
    }
  }
}
</style>
  