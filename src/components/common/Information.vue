<template>
  <section :class="['section__information', isValiosaPage ? 'valiosa' : '']">
    <div class="section__information--title">
      <h1>BOOKING INFORMATION</h1>
      <h3>ご予約内容</h3>
    </div>
    <div class="section__information--car-info">
      <h4>■車両情報 <span v-if="isExample">（例）</span></h4>
      <h5>{{ reservationInfo.title }}</h5>
      <h6>{{ reservationInfo.subInfo }}</h6>
      <CarInfo :information="reservationInfo.carInfos"></CarInfo>
      <div class="info-detail-area">
        <div class="row-content">
          <div class="title">■貸出日程</div>
          <div class="detail">
            <p class="total-hours">
              {{ reservationInfo.start_at.replace(/-/g, "/") }} ~
              {{ reservationInfo.end_at.replace(/-/g, "/") }}
            </p>
          </div>
        </div>
        <div class="row-content">
          <div class="title">■料金</div>
          <div class="detail">
            <p class="total-price">
              ¥{{ addCommas(reservationInfo.totalFee) }}
            </p>
            <hr />
            <dl class="price-detail">
              <dt class="basic-price-title">
                基本料金<br class="sp" />(1日あたり)
              </dt>
              <dd class="basic-price">
                ¥{{ addCommas(reservationInfo.carInfos.basicFee) }}
              </dd>
              <dt class="additional-note">
                <i class="pi pi-info-circle"></i>
                <span>補償制度の含まれた金額です</span>
              </dt>
              <dt
                v-if="
                  reservationInfo.additionalService &&
                  reservationInfo.additionalService.deliveryOption == 1
                "
                class="options-price-title"
              >
                赤嶺駅貸出料
              </dt>
              <dd
                v-if="
                  reservationInfo.additionalService &&
                  reservationInfo.additionalService.deliveryOption == 1
                "
                class="options-price"
              >
                ¥3,300
              </dd>
              <dt
                v-if="
                  reservationInfo.additionalService &&
                  reservationInfo.additionalService.deliveryOption == 2
                "
                class="options-price-title"
              >
                那覇市内ホテル貸出
              </dt>
              <dd
                v-if="
                  reservationInfo.additionalService &&
                  reservationInfo.additionalService.deliveryOption == 2
                "
                class="options-price"
              >
                ¥3,300
              </dd>
              <dt
                v-if="
                  reservationInfo.additionalService &&
                  reservationInfo.additionalService.returnOption == 1
                "
                class="options-price-title"
              >
                赤嶺駅返却
              </dt>
              <dd
                v-if="
                  reservationInfo.additionalService &&
                  reservationInfo.additionalService.returnOption == 1
                "
                class="options-price"
              >
                ¥3,300
              </dd>
              <dt
                v-if="
                  reservationInfo.additionalService &&
                  reservationInfo.additionalService.returnOption == 2
                "
                class="options-price-title"
              >
                那覇市内ホテル返却
              </dt>
              <dd
                v-if="
                  reservationInfo.additionalService &&
                  reservationInfo.additionalService.returnOption == 2
                "
                class="options-price"
              >
                ¥3,300
              </dd>
              <dt
                v-if="
                  reservationInfo.additionalService &&
                  reservationInfo.additionalService.useOfBabySheet > 0
                "
                class="options-price-title"
              >
                ベビーシート代
              </dt>
              <dd
                v-if="
                  reservationInfo.additionalService &&
                  reservationInfo.additionalService.useOfBabySheet > 0
                "
                class="options-price"
              >
                ¥{{
                  addCommas(reservationInfo.additionalService.useOfBabySheet)
                }}
              </dd>
              <dt
                v-if="
                  reservationInfo.additionalService &&
                  reservationInfo.additionalService.useOfChildSheet > 0
                "
                class="options-price-title"
              >
                チャイルドシート代
              </dt>
              <dd
                v-if="
                  reservationInfo.additionalService &&
                  reservationInfo.additionalService.useOfChildSheet > 0
                "
                class="options-price"
              >
                ¥{{
                  addCommas(reservationInfo.additionalService.useOfChildSheet)
                }}
              </dd>
              <dt
                v-if="
                  reservationInfo.additionalService &&
                  reservationInfo.additionalService.useOfJuniorSheet > 0
                "
                class="options-price-title"
              >
                ジュニアシート代
              </dt>
              <dd
                v-if="
                  reservationInfo.additionalService &&
                  reservationInfo.additionalService.useOfJuniorSheet > 0
                "
                class="options-price"
              >
                ¥{{
                  addCommas(reservationInfo.additionalService.useOfJuniorSheet)
                }}
              </dd>
              <dt
                v-if="
                  reservationInfo.discount
                "
                class="options-price-title"
              >
                クーポン割引({{ reservationInfo.discount.percentage }}%off)
              </dt>
              <dd
                v-if="
                  reservationInfo.discount
                "
                class="options-price"
              >
                -¥{{
                  addCommas(reservationInfo.discount.price)
                }}
              </dd>
            </dl>
          </div>
        </div>
      </div>
      <div class="info-detail-area">
        <div class="row-content">
          <div class="title">■お客様情報</div>
        </div>
        <div class="row-content">
          <div class="customer-info">
            <dl>
              <dt>お名前</dt>
              <dd>{{ reservationInfo.customerName }}　様</dd>
              <dt>生年月日</dt>
              <dd>{{ reservationInfo.dob.replace(/-/g, "/") }}</dd>
              <dt>メールアドレス</dt>
              <dd>{{ reservationInfo.customerEmail }}</dd>
              <dt>電話番号</dt>
              <dd>{{ reservationInfo.customerPhoneNumber }}</dd>
              <dt>免許証番号</dt>
              <dd>{{ reservationInfo.licenseNumber }}</dd>
              <dt>空港お出迎え</dt>
              <dd>
                {{
                  reservationInfo.airportPickup
                    ? reservationInfo.airportPickup
                    : "なし"
                }}
              </dd>
              <dt>空港お見送り</dt>
              <dd>
                {{
                  reservationInfo.airportDropoff
                    ? reservationInfo.airportDropoff
                    : "なし"
                }}
              </dd>
            </dl>
          </div>
        </div>
      </div>
      <p v-if="isExample">
        ※こちらは予約例です<br />
        ※10時間を超えない延長は1時間あたり2,000円、超える場合は1日あたりの基本料金が加算されます
      </p>
    </div>
  </section>
</template>
<script>
import CarInfo from "/src/components/common/CarInfo";
export default {
  name: "Information",
  components: {
    CarInfo,
  },
  props: {
    reservationInfo: {
      type: Object,
      default: () => ({
        title: "TOYOTA　アルファード",
        subInfo: "沖縄　301 わ　2609",
        start_at: "2023/1/1 10:00",
        end_at: "2023/1/2 18:00",
        totalFee: 41000,
        customerName: "山田太郎",
        customerEmail: "example@class.okinawa",
        customerPhoneNumber: "080-0000-0000",
        licenseNumber: "1234567890",
        dob: "2023/1/1",
        airportPickup: false,
        airportDropoff: "18:00",
        carInfos: {
          main_image: "/images/car-images/main4.png",
          images: [
            "/images/car-images/main1.png",
            "/images/car-images/main2.png",
            "/images/car-images/main3.png",
            "/images/car-images/main4.png",
          ],
          maxmumPassenger: 7,
          isSmokingAllowed: false,
          basicFee: 25000,
        },
      }),
    },
    isExample: {
      type: Boolean,
      default: false,
    },
  },
  methods: {
    addCommas(num) {
      let str = num.toString();
      let result = "";
      let insertComma = false;

      for (let i = str.length - 1; i >= 0; i--) {
        if (insertComma) {
          result += ",";
          insertComma = false;
        }
        result += str[i];
        if ((str.length - i) % 3 === 0 && i > 0) {
          insertComma = true;
        }
      }
      return result.split("").reverse().join("");
    },
  },
  computed: {
    isValiosaPage() {
      let path = this.$router.currentRoute.value.path;
      return path.includes("valiosa");
    },
  },
};
</script>
<style lang="scss" scoped>
.section__information {
  text-align: center;
  color: var(--color-steelblue);

  &.valiosa {
    color: ar(--color-black);
    .section__information {
      &--title {
        border-bottom: 1.5px solid var(--color-black);
        h1 {
          color: var(--color-black);
        }
        h3 {
          color: var(--color-black);
        }
      }
      &--car-info {
        color: var(--color-black);
      }
    }
    .info-detail-area {
      background-color: #b5b5b5;
    }
  }

  &--title {
    text-align: center;
    margin: 2.3rem;
    border-bottom: 1.5px solid var(--color-steelblue);

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
    }
  }

  &--car-info {
    margin-left: auto;
    margin-right: auto;
    width: 34.97rem;
    text-align: left;
    @media screen and (max-width: 390px) {
      width: 20.97rem;
    }
  }

  .info-detail-area {
    border-radius: 2.99px;
    background-color: var(--color-aliceblue);
    min-height: 7.63rem;
    font-size: 0.65rem;
    padding: 1.25rem;
    margin-bottom: 3rem;
    .row-content {
      display: flex;
      justify-content: space-between;
      align-items: baseline;
      font-size: 0.8rem;
      letter-spacing: 0.15em;
      .title {
        width: 11rem;
        @media screen and (max-width: 390px) {
          width: 6rem;
        }
      }
      .detail {
        width: 19rem;
        @media screen and (max-width: 390px) {
          width: 14rem;
        }
        .total-price {
          text-align: right;
        }

        hr {
          height: 1px;
          background-color: var(--color-steelblue);
          border: none;
        }
        
        .price-detail {
          display: flex;
          flex-wrap: wrap;
          align-items: center;
          dt {
            margin: 0;
            width: 60%;
          }
          dd {
            margin: 0;
            padding-left: 1.5rem;
            width: 40%;
            text-align: right;
          }
          .additional-note {
            font-size: 0.7rem;
            width: 100%;
            .pi {
              font-size: 0.7rem;
            }
          }
          .options-price-help {
            position: absolute;
            cursor: pointer;
            display: flex;
            top: 1.5rem;
            left: 12rem;
            height: 0.7rem;
            font-size: 0.6rem;
            @media screen and (max-width: 390px) {
              top: 2.7rem;
              left: 0rem;
            }
            .options-price-help-icon {
              height: 0.9rem;
            }
          }
        }
      }
      .customer-info {
        width: 100%;
        dl {
          display: flex;
          flex-wrap: wrap;
          overflow-wrap: break-word;
          text-decoration: none;
          dt,
          dd {
            width: 40%;
            margin-top: 0.1rem;
            @media screen and (max-width: 390px) {
              width: 42%;
            }
          }
        }
      }
    }
  }

  h4 {
    font-size: 1rem;
    letter-spacing: 0.15em;
    font-weight: initial;
    margin: 0rem;
  }
  h5,
  h6 {
    font-size: 0.8rem;
    letter-spacing: 0.15em;
    font-weight: initial;
    margin: 0rem;
  }
}
.sp {
  display: none;
  @media screen and (max-width: 390px) {
    display: block;
  }
}
</style>
