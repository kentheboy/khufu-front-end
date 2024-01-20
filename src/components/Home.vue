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
      <Information
        :isExample=true
      ></Information>
      <div>
        <section class="section__form" id="searchAndReservation">
          <div class="section__form--title">
            <h1>SCHEDULE</h1>
            <h3>旅行日程で探す</h3>
          </div>
          <div class="datetimepicker">
            <div class="datetimepicker-selector">
              <label>出発日時</label>
              <input
                type="date"
                name="startDate"
                v-model="search.departDate.value"
                @update:modelValue="isValidSearch('departDate')"
                :min="today"
              >
              <input
                type="time"
                name="startTime"
                v-model="search.departTime"
                @update:modelValue="isValidSearch('departTime')"
              >
            </div>
            <div class="datetimepicker-selector">
              <label>返却日時</label>
              <input
                type="date"
                name="endDate"
                v-model="search.returnDate.value"
                @update:modelValue="isValidSearch('returnDate')"
                :min="search.departDate.value?search.departDate.value:today"
              >
              <input
                type="time"
                name="endTime"
                v-model="search.returnTime"
                @update:modelValue="isValidSearch('returnTime')"
              >
            </div>
          </div>
          <Button
            icon="pi pi-search"
            class="p-ripple"
            label="空き状況を検索"
            :disabled="!isReadyToSearch"
            @click="searchAvailability"
          ></Button>
          <p 
            v-if="availableCar.length <= 0 && isSearched"
            class="no-available-car">
            大変申し訳ございません。<br>
            現在、ご指定された時間にご利用可能の車両がありません。<br>
            お手数ですが、再度別の時間帯で検索を行うか、店舗スタッフへお問合せください。
          </p>
          <Products
            v-else
            :products="availableCar"
            @selected="opneReservationForm"
          >
          </Products>
          <Dialog
            v-model:visible="openReservationForm"
            maximizable
            header=""
            class="reservation-form"
            :modal="true"
            @after-hide="closeReservationForm"
          >
            <div class="reservation-form__statuses">
              <div :class="`reservation-form__status ${reservationFormStatus==='entry'?'active':''}`">入力</div>
              <div :class="`reservation-form__status ${reservationFormStatus==='confirm'?'active':''}`">確認</div>
              <div :class="`reservation-form__status ${reservationFormStatus==='done'?'active':''}`">完了</div>
            </div>
            <section
              class="section__form"
              style="margin-bottom: 0;"
              v-if="reservationFormStatus==='entry'"
            >
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
                  <div class="section__form--content-input-area">
                    <Input
                      type="radio"
                      label="赤嶺駅貸出"
                      name="akamine-station-delivery"
                      :options='[{"name": "akamineStaDelivery", "label": "希望しない", "value": 0}, {"name": "akamineStaDelivery", "label": "希望する", "value": 1}]'
                      v-model="scheduleInfo.akamineStaDelivery"
                    ></Input>
                    <span class="input-description">追加料 ¥3,000</span>
                  </div>
                  <div class="section__form--content-input-area">
                    <Input
                      type="radio"
                      label="お子様用シート"
                      name="use-of-chiled-sheet"
                      classes="display-block"
                      :options='[{"name": "useOfChiledSheet", "label": "希望しない", "value": 0}, {"name": "useOfChiledSheet", "label": "ベビシート", "value": 1}, {"name": "useOfChiledSheet", "label": "ジュニアシート", "value": 2}]'
                      v-model="scheduleInfo.useOfChiledSheet"
                    ></Input>
                    <span class="input-description">ベビーシート（目安0歳〜3歳位向け）¥1,000</span>
                    <span class="input-description">ジュニアシート（3歳位〜向け）¥5000</span>
                  </div>
                </div>
            </section>
            <Information
              v-if="reservationFormStatus==='confirm'"
              :isExample=false
              :reservationInfo="confirmationInfo"
            ></Information>
            <div 
              v-if="reservationFormStatus==='done'"
              class="reservation-form__completed"
            >
              <img class="reservation-form__completed-img" src="/images/icons/mail.png">
              <p>
                予約が完了しました。<br />
                ご入力いただいたメールアドレス宛に担当者から確認の連絡を差し上げます。
                今しばらくお待ちください。
                （このウィンドウは10秒後に自動で閉じられます。）
              </p>
            </div>
            <div class="reservation-form__button">
              <Button
                class="p-ripple"
                v-if="reservationFormStatus==='entry'"
                label="予約確認へ"
                :disabled="!isValidScheduleInfo"
                @click="confirmForm"
              ></Button>
              <Button
                class="p-ripple"
                v-if="reservationFormStatus==='confirm'"
                label="内容を修正する"
                severity="secondary"
                @click="reservationFormStatus='entry'"
              ></Button>
              <Button
                class="p-ripple"
                v-if="reservationFormStatus==='confirm'"
                icon="pi pi-send"
                label="予約する"
                :loading="reservationLoading"
                @click="submitForm"
              ></Button>
            </div>
          </Dialog>
        </section>
      </div>
      <ScrollTop />
    </main>
    <Footer></Footer>
  </div>
</template>
  
<script>
import Header from "/src/components/common/Header";
import ImageSlider from "/src/components/common/ImageSlider";
import Input from "/src/components/common/form/Input";
import Products from "/src/components/common/Products";
import Information from "/src/components/common/Information";
import Footer from "/src/components/common/Footer";
import Button from "primevue/button";
import Dialog from 'primevue/dialog';
import ScrollTop from 'primevue/scrolltop';
import axios from "axios";
export default {
  name: 'Home',
  components: {
    Header,
    ImageSlider,
    Input,
    Products,
    Information,
    Footer,
    Button,
    Dialog,
    ScrollTop
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
      today: null,
      search: {
        departDate: {
          value: null,
          isValid: false
        },
        departTime: '00:00',
        returnDate: {
          value: null,
          isValid: false
        },
        returnTime: '00:00',
      },
      isSearched: false,
      availableCar: [],
      comingSoonHeight: null,
      formEntryStart: false,
      reservationFormStatus: null,
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
        useOfChiledSheet: 0,
        akamineStaDelivery: 0
      },
      totalFeeHolder: null,
      openReservationForm: false,
      confirmationInfo: null,
      reservationLoading: false
    }
  },
  async created() {
    this.today = new Date().toISOString().slice(0, 10);
  },
  computed: {
    cssVars() {
      return {
        '--comingSoon-height': this.comingSoonHeight
      }
    },
    backendDomain() {
      return process.env.VUE_APP_BACKEND_DOMAIN;
    },
    isReadyToSearch() {
      if (this.search.departDate.isValid && this.search.returnDate.isValid) {
        return true;
      } else {
        return false;
      }
    },
    isValidScheduleInfo() {
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
        return true;
      } else {
        return false;
      }
    }
  },
  methods: {
    isValidSearch(inputName) {
      switch(inputName) {
        case "departDate":
          if (this.search.departDate.value) {
            this.search.departDate.isValid = true;
          } else {
            this.search.departDate.isValid = false;
          }
          break;
        case "returnDate":
          if (this.search.returnDate.value) {
            this.search.returnDate.isValid = true;
          } else {
            this.search.returnDate.isValid = false;
          }
          break;
      }
    },
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
          }
          break;
        case "email":
          if (!emailRegex.test(this.scheduleInfo.customerEmail.value)) {
            this.scheduleInfo.customerEmail.isValid = false;
          } else {
            this.scheduleInfo.customerEmail.isValid  = true;
          }
          break;
        case "phone":
          if (phoneRegex.test(this.scheduleInfo.customerPhoneNumber.value)) {
            this.scheduleInfo.customerPhoneNumber.isValid = true;
          } else {
            this.scheduleInfo.customerPhoneNumber.isValid = false;
          }
          break;
        case "licenseNumber":
          if(this.scheduleInfo.licenseNumber.value.length < 1) {
            this.scheduleInfo.licenseNumber.isValid = false;
          } else {
            this.scheduleInfo.licenseNumber.isValid = true;
          }
          break;
        case "dob":
          if(this.scheduleInfo.dob.value.length < 1) {
            this.scheduleInfo.dob.isValid = false;
          } else {
            this.scheduleInfo.dob.isValid = true;
          }
          break;
        case "airportPickup":
          if (this.scheduleInfo.airportPickup.value.length < 1) {
            this.scheduleInfo.airportPickup.isValid = false;
          } else {
            this.scheduleInfo.airportPickup.isValid = true;
          }
          break;
        case "airportDropoff":
          if (this.scheduleInfo.airportDropoff.value.length < 1) {
            this.scheduleInfo.airportDropoff.isValid = false;
          } else {
            this.scheduleInfo.airportDropoff.isValid = true;
          }
          break;
        default:
          break;
      }
    },
    async searchAvailability() {
      const param = {
        "params": {
          "start_at": `${this.search.departDate.value} ${this.search.departTime}`,
          "end_at": `${this.search.returnDate.value} ${this.search.returnTime}`,
        }
      };

      await axios.get(`${this.backendDomain}/api/schedule/search`, param).then((response) => {
        let tmpProducts = response.data.data;
        for (let i in tmpProducts) {
          tmpProducts[i].main_image = tmpProducts[i].images[0];
          let customfields = JSON.parse(tmpProducts[i].customfields);
          tmpProducts[i].isSmokingAllowed = customfields.isSmokingAllowed;
          tmpProducts[i].passenger = customfields.passenger;
          delete tmpProducts[i].customfields;
        }
        this.availableCar = tmpProducts;
        this.isSearched = true;
      })
    },
    async submitForm() {
      this.reservationLoading = true;
      await setTimeout(() => {
      // this timeOut add loading effect for minimum 3 sec
      }, 3000)
  
      const customfields = JSON.stringify({
        'licenseNumber': this.scheduleInfo.licenseNumber.value,
        'dob': this.scheduleInfo.dob.value,
        'airportPickup': this.scheduleInfo.airportPickup.value,
        'airportDropoff': this.scheduleInfo.airportDropoff.value,
        'akamineStaDelivery': this.scheduleInfoakamineStaDelivery,
        'useOfChiledSheet': this.scheduleInfo.useOfChiledSheet
      });
      const data = {
        'product_id': this.scheduleInfo.reservationCarId,
        'name': this.scheduleInfo.customerName.value,
        'email': this.scheduleInfo.customerEmail.value,
        'tel': this.scheduleInfo.customerPhoneNumber.value,
        'start_at': this.scheduleInfo.start_at,
        'end_at': this.scheduleInfo.end_at,
        'total_fee': this.totalFeeHolder,
        'customfields': customfields
      };
      await axios.post(`${this.backendDomain}/api/schedule/create`, data).then((response) => {
        this.reservationFormStatus = 'done';
        console.log(response);
        setTimeout(() => {
          this.reservationLoading = false;
          this.closeReservationForm();
        }, 10000)
      })
      
    },
    opneReservationForm(carId) {
      this.scheduleInfo.reservationCarId = carId;

      // calculate basic totalFee (fees without options)
      this.scheduleInfo.totalFee = this.calculateTotalFeeByRentalSpan(`${this.search.departDate.value} ${this.search.departTime}`, `${this.search.returnDate.value} ${this.search.returnTime}`, this.availableCar.find(car => car.id === this.scheduleInfo.reservationCarId).price) 

      this.scheduleInfo.start_at = `${this.search.departDate.value} ${this.search.departTime}`;
      this.scheduleInfo.end_at = `${this.search.returnDate.value} ${this.search.returnTime}`;
      this.openReservationForm = true;
      this.reservationFormStatus = "entry";
    },
    confirmForm() {
      let selectedCarInfo = this.availableCar.find(car => car.id === this.scheduleInfo.reservationCarId)
      
      // add basic totalFee inside temporal variable holder
      this.totalFeeHolder = this.scheduleInfo.totalFee;
      // if akamineStaDelivery is requested, charge extra 3000yen
      if(this.scheduleInfo.akamineStaDelivery) {
        this.totalFeeHolder += 3000;
      }
      // if any childSheet requested, charge extra fee depending on the sheet type
      switch(this.scheduleInfo.useOfChiledSheet) {
        case 1:
          this.totalFeeHolder += 1000;
          break;
        case 2:
          this.totalFeeHolder += 500;
          break;
        default:
          break;
      }
      
      this.confirmationInfo = {
        title: selectedCarInfo.title,
        start_at: this.scheduleInfo.start_at,
        end_at: this.scheduleInfo.end_at,
        totalFee: this.totalFeeHolder,
        customerName: this.scheduleInfo.customerName.value,
        customerEmail: this.scheduleInfo.customerEmail.value,
        customerPhoneNumber: this.scheduleInfo.customerPhoneNumber.value,
        licenseNumber: this.scheduleInfo.licenseNumber.value,
        dob: this.scheduleInfo.dob.value,
        airportPickup: this.scheduleInfo.airportPickup.value,
        airportDropoff: this.scheduleInfo.airportDropoff.value,
        carInfos: {
          main_image: selectedCarInfo.main_image,
          images: selectedCarInfo.images,
          maxmumPassenger: selectedCarInfo.passenger,
          isSmokingAllowed: selectedCarInfo.isSmokingAllowed
        }
      };
      this.reservationFormStatus = "confirm";
    },
    dateDifference(startDate, endDate) {
      let date1 = new Date(startDate);
      let date2 = new Date(endDate);
      let timeDiff = Math.abs(date2.getTime() - date1.getTime());
      let diffDays = Math.ceil(timeDiff / (1000 * 3600 * 24)); 
      return diffDays;
    },
    closeReservationForm() {
      this.openReservationForm = false;
      this.resetForm();
      // reset search result area by displaying latest available cars with pre-search conditions
      this.searchAvailability();
    },
    resetForm() {
      this.scheduleInfo = {
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
      };
      this.confirmationInfo = null;
    },
    calculateTotalFeeByRentalSpan(startDateTime, endDateTime, pricePerDay) {
      const startDateTimeObj = new Date(startDateTime);
      const endDateTimeObj = new Date(endDateTime);

      const diffInMilliseconds = endDateTimeObj - startDateTimeObj;
      const retalSpanInHours = diffInMilliseconds / 3600000;
      const RoundedDate = Math.floor(retalSpanInHours / 24);
      let totalFee = RoundedDate > 1 ? (RoundedDate * pricePerDay) : pricePerDay;

      const unrandedRemainingHours = retalSpanInHours % 24;
      if (RoundedDate > 1 && unrandedRemainingHours > 0) {
        if (unrandedRemainingHours > 10) {
          // if unrandedRemainingHours is more than 10hr, add extra fullday price
          totalFee += pricePerDay;
        } else {
          // if unrandedRemainingHours is less than 10hr, add extra 2000yen per hour
          totalFee += unrandedRemainingHours * 2000;
        }
      }
      return Math.ceil(totalFee);
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
        color: var(--color-steelblue);
        letter-spacing: 0.15em;
        font-size: 2rem;
        font-family: var(--font-istok-web);
        font-weight: normal;
        margin: unset;
      }

      h3 {
        color: var(--color-steelblue);
        letter-spacing: 0.15em;
        font-size: 1rem;
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
          &.display-block {
            display: block;
          }
        }
        .error-msg {
          color: red
        }
        .input-description {
          display: block;
          font-size: .8rem;
          font-weight: bold;
        }
      }
    }

    &--submit {
      text-align: center;
    }
  }
}
.reservation-form {
  section {
    margin: 0rem 2.4rem 
  }

  &__statuses {
    display: flex;
    justify-content: space-around;
    margin-top: 1.6rem;
  }

  &__status {
    width: 8rem;
    text-align: center;
    font-size: 1.1rem;
    color: gray;
    height: 4rem;
    padding: 1rem;
    &.active {
      font-weight: bold;
      color: #428eb8;
      border-bottom: 1px solid;
    }
  }

  &__completed {
    margin: 3rem auto 0;
    max-width: 31rem;
    min-height: 30rem;
    padding: inherit;
    text-align: center;
    &-img {
      width: 5rem;
    }
  }

  &__button {
    text-align: center;
    display: flex
  }
}
.datetimepicker {
  display: flex;
  flex-direction: column;
  align-items: center;

  &-selector {
    font-size: 1rem;
    display: inline-flex;
    width: 21.5rem;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 0.6rem;
    flex-direction: initial;

    input[type=date] {
      border-radius: 24.94px;
      background-color: var(--color-aliceblue);
      box-shadow: 2px 2px 2px rgba(0, 0, 0, 0.25);
      width: 9.73rem;
      height: 2rem;
      border: none;
      padding: 0 0.7rem;
    }

    input[type=time] {
      border-radius: 24.94px;
      background-color: var(--color-aliceblue);
      box-shadow: 2px 2px 2px rgba(0, 0, 0, 0.25);
      width: 7rem;
      height: 2rem;
      border: none;
      padding: 0 0.7rem;
    }
  }

  &-deselector {
    display: flex;
    align-items: flex-start;
    color: var(--color-steelblue);
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
  