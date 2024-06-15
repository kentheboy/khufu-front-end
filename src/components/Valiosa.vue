<template>
  <div class="home valiosa">
    <Header></Header>
    <main class="main">
      <section class="section__valiosaImageArea">
        <ImageSlider
          :images="valiosaImages"
          :mainLogo="specialLog"
        ></ImageSlider>
      </section>
      <section class="section__features" id="features">
        <div class="section__features--title">
          <h3>特徴</h3>
          <h1>FEATURE</h1>
        </div>
        <div class="section__features--contents">
          <div class="section__features--content">
            <div class="ellipse-parent">
              <div class="ellipseDiv">
                <div class="ellipseInside-number">01</div>
              </div>
            </div>
            <div class="subtext">
              <h1 class="title">VALIOSAの特典</h1>
              <h1>
                <p class="p">
                  CLASSレンタカーご利用者様限定で<br />レイトチェックアウトとスキンケアセット<br />がついてきます。
                </p>
              </h1>
            </div>
          </div>
          <div class="section__features--content">
            <div class="ellipse-parent">
              <div class="ellipseDiv">
                <div class="ellipseInside-number">02</div>
              </div>
            </div>
            <div class="subtext">
              <h1 class="title">フルカバー補償付き</h1>
              <h1>
                <p class="p">
                  免責補償も、NOCも<br />すべて込みのフルカバープランで<br />ご用意させていただきます。
                </p>
              </h1>
            </div>
          </div>
          <div class="section__features--content">
            <div class="ellipse-parent">
              <div class="ellipseDiv">
                <div class="ellipseInside-number">03</div>
              </div>
            </div>
            <div class="subtext">
              <h1 class="title">車種・装備指定可能</h1>
              <h1>
                <p class="p">お車の車種・装備・色の指定が可能です。</p>
              </h1>
              <h3>
                <p class="p">
                  ※空き状況によって、<br
                    class="sp"
                  />ご指定できない場合がございます。
                </p>
              </h3>
            </div>
          </div>
        </div>
      </section>
      <section class="section__guide" id="guide">
        <div class="section__guide--title">
          <h1>GUIDE</h1>
          <h3>ご利用ガイド</h3>
        </div>
        <div class="section__guide--content">
          <div class="steps__diagram">
            <div class="steps__diagram--card">
              <div class="step-number">01</div>
              <hr />
              <p class="step-title">ご予約</p>
            </div>
            <div class="steps__diagram--arrow">
              <i class="pi pi-angle-right"></i>
            </div>
            <div class="steps__diagram--card">
              <div class="step-number">02</div>
              <hr />
              <p class="step-title">ご来店</p>
            </div>
            <div class="steps__diagram--arrow">
              <i class="pi pi-angle-right"></i>
            </div>
            <div class="steps__diagram--card">
              <div class="step-number">03</div>
              <hr />
              <p class="step-title">ご出発</p>
            </div>
            <div class="steps__diagram--arrow">
              <i class="pi pi-angle-right"></i>
            </div>
            <div class="steps__diagram--card">
              <div class="step-number">04</div>
              <hr />
              <p class="step-title">ご返却</p>
            </div>
          </div>
          <div class="steps__descriptions">
            <div class="step__description">
              <div class="step__description--number">01</div>
              <div class="step__description--text">
                <h3 class="step-title">宿泊予約・レンタカー予約</h3>
                <p class="step-description">
                  ご利用前日までに、VALIOSAをご予約ください。
                </p>
              </div>
            </div>
            <div class="step__description">
              <div class="step__description--number">02</div>
              <div class="step__description--text">
                <h3 class="step-title">ご来店</h3>
                <p class="step-description">
                  ご予約いただいた店舗にご来店いただき、<br />
                  下記必要なものをご掲示頂いた後、『貸渡契約書』にサイン頂きます。<br />
                  <br />
                  必要なもの<br />
                  ・運転免許証<br />
                  ・VALIOSAの宿泊予約情報<br />
                </p>
              </div>
            </div>
            <div class="step__description">
              <div class="step__description--number">03</div>
              <div class="step__description--text">
                <h3 class="step-title">ご出発</h3>
                <p class="step-description">
                  ご出発前に、店舗スタッフからの『注意事項、事故補償説明』をお受けください。車両操作の説明並びに車体チェック終了後、ご出発いただきます。<br />
                  ※VALIOSAの受付にて、CLASSレンタカーの車の鍵の印字をご提示ください。
                </p>
              </div>
            </div>
            <div class="step__description">
              <div class="step__description--number">04</div>
              <div class="step__description--text">
                <h3 class="step-title">ご返却</h3>
                <p class="step-description">
                  ご契約の時間までにご返却ください。<br />
                  ご返却店舗付近のガソリンスタンドで燃料を満タンにした上、ご返却ください。<br />
                  ※ガソリンを入れなくてもよい、距離計算も受け付けております。
                  　その際は、直接ご返却していただいて構いません。
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div>
        <section class="section__form" id="searchAndReservation">
          <div class="section__form--title">
            <h1>SCHEDULE</h1>
            <h3>旅行日程で探す</h3>
          </div>
          <div class="datetimepicker">
            <div class="datetimepicker-selector">
              <label>出発日時</label>
              <Calendar
                type="date"
                name="startDate"
                showIcon
                showTime
                hourFormat="12"
                :stepMinute="30"
                iconDisplay="input"
                dateFormat="yy/mm/dd"
                v-model="search.departDate.rawValue"
                @update:modelValue="isValidSearch('departDate')"
                :minDate="today"
              />
            </div>
            <div class="datetimepicker-selector">
              <label>返却日時</label>
              <Calendar
                type="date"
                name="endDate"
                showIcon
                showTime
                hourFormat="12"
                :stepMinute="30"
                iconDisplay="input"
                dateFormat="yy/mm/dd"
                v-model="search.returnDate.rawValue"
                @update:modelValue="isValidSearch('returnDate')"
                :minDate="
                  search.departDate.rawValue
                    ? search.departDate.rawValue
                    : today
                "
              />
            </div>
            <div class="datetimepicker-rule">
              <span
                >※営業時間(予約可能時間)は{{ businessHours.open }}:00 -
                {{ businessHours.close }}:00となっております。</span
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
            class="no-available-car"
          >
            大変申し訳ございません。<br />
            現在、ご指定された時間にご利用可能の車両がありません。<br />
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
            class="reservation-form valiosa"
            :modal="true"
            @after-hide="closeReservationForm"
          >
            <div class="reservation-form__statuses">
              <div
                :class="`reservation-form__status ${
                  reservationFormStatus === 'entry' ? 'active' : ''
                }`"
              >
                入力
              </div>
              <div
                :class="`reservation-form__status ${
                  reservationFormStatus === 'confirm' ? 'active' : ''
                }`"
              >
                確認
              </div>
              <div
                :class="`reservation-form__status ${
                  reservationFormStatus === 'done' ? 'active' : ''
                }`"
              >
                完了
              </div>
            </div>
            <section
              class="section__form"
              style="margin-bottom: 0"
              v-if="reservationFormStatus === 'entry'"
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
                    required
                    v-model="scheduleInfo.customerName"
                  ></Input>
                </div>
                <div class="section__form--content-input-area">
                  <Input
                    type="email"
                    label="メールアドレス"
                    name="email"
                    placeholder="example@class.okinawa"
                    required
                    v-model="scheduleInfo.customerEmail"
                  ></Input>
                </div>
                <div class="section__form--content-input-area">
                  <Input
                    type="tel"
                    label="電話番号"
                    name="phonenumber"
                    placeholder="08000000000"
                    required
                    v-model="scheduleInfo.customerPhoneNumber"
                  ></Input>
                </div>
                <div class="section__form--content-input-area">
                  <Input
                    type="number"
                    label="免許番号"
                    name="license-number"
                    placeholder="1234567890"
                    v-model="scheduleInfo.licenseNumber"
                  ></Input>
                </div>
                <div class="section__form--content-input-area">
                  <Input
                    type="date"
                    label="生年月日"
                    name="dob"
                    v-model="scheduleInfo.dob"
                  ></Input>
                </div>
                <div class="section__form--content-input-area">
                  <Input
                    type="airport-timpicker"
                    label="空港お出迎え"
                    name="airport-pickup"
                    v-model="scheduleInfo.airportPickup"
                  ></Input>
                </div>
                <div class="section__form--content-input-area">
                  <Input
                    type="airport-timpicker"
                    label="空港お見送り"
                    name="airport-dropoff"
                    v-model="scheduleInfo.airportDropoff"
                  ></Input>
                  <span class="input-description"
                    >空港送迎時間は午前9:00 - 午後5:00となっております。</span
                  >
                </div>
                <div class="section__form--content-input-area">
                  <Input
                    type="selectbox"
                    label="貸出オプション"
                    name="return-option"
                    :options="[
                      { name: 'none', label: '特になし', value: 0 },
                      {
                        name: 'akamineStaDelivery',
                        label: '赤嶺駅貸出',
                        value: 1,
                      },
                      {
                        name: 'nahaHotelDelivery',
                        label: '那覇市内ホテル貸出',
                        value: 2,
                      },
                    ]"
                    v-model="scheduleInfo.deliveryOption"
                  ></Input>
                  <span class="input-description">追加料 ¥3,300</span>
                </div>
                <div class="section__form--content-input-area">
                  <Input
                    type="selectbox"
                    label="返却オプション"
                    name="return-option"
                    :options="[
                      { name: 'none', label: '特になし', value: 0 },
                      {
                        name: 'akamineStaReturn',
                        label: '赤嶺駅返却',
                        value: 1,
                      },
                      {
                        name: 'nahaHotelReturn',
                        label: '那覇市内ホテル返却',
                        value: 2,
                      },
                    ]"
                    v-model="scheduleInfo.returnOption"
                  ></Input>
                  <span class="input-description">追加料 ¥3,300</span>
                </div>
                <div class="section__form--content-input-area">
                  <Input
                    type="selectbox"
                    label="ベビーシート数(0~1歳以下)"
                    name="use-of-baby-sheet"
                    classes="display-block"
                    :options="[
                      { name: 'useOfBabySheet', label: '希望しない', value: 0 },
                      { name: 'useOfBabySheet', label: '1台', value: 1 },
                      { name: 'useOfBabySheet', label: '2台', value: 2 },
                      { name: 'useOfBabySheet', label: '3台', value: 3 },
                    ]"
                    v-model="scheduleInfo.useOfBabySheet"
                  ></Input>
                </div>
                <div class="section__form--content-input-area">
                  <Input
                    type="selectbox"
                    label="チャイルドシート(0~4歳以下)"
                    name="use-of-child-sheet"
                    classes="display-block"
                    :options="[
                      {
                        name: 'useOfChildSheet',
                        label: '希望しない',
                        value: 0,
                      },
                      { name: 'useOfChildSheet', label: '1台', value: 1 },
                      { name: 'useOfChildSheet', label: '2台', value: 2 },
                      { name: 'useOfChildSheet', label: '3台', value: 3 },
                    ]"
                    v-model="scheduleInfo.useOfChildSheet"
                  ></Input>
                </div>
                <div class="section__form--content-input-area">
                  <Input
                    type="selectbox"
                    label="ジュニアシート数(4歳以上~10歳以下)"
                    name="use-of-junior-sheet"
                    classes="display-block"
                    :options="[
                      {
                        name: 'useOfJuniorSheet',
                        label: '希望しない',
                        value: 0,
                      },
                      { name: 'useOfJuniorSheet', label: '1台', value: 1 },
                      { name: 'useOfJuniorSheet', label: '2台', value: 2 },
                      { name: 'useOfBabySheet', label: '3台', value: 3 },
                    ]"
                    v-model="scheduleInfo.useOfJuniorSheet"
                  ></Input>
                  <span class="input-description"
                    >各種シート1台あたり追加料 ¥1,100（一律）</span
                  >
                </div>
              </div>
            </section>
            <Information
              v-if="reservationFormStatus === 'confirm'"
              :isExample="false"
              :reservationInfo="confirmationInfo"
            >
            </Information>
            <div
              v-if="reservationFormStatus === 'done'"
              class="reservation-form__completed"
            >
              <img
                class="reservation-form__completed-img"
                src="/images/icons/mail.png"
              />
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
                v-if="reservationFormStatus === 'entry'"
                label="予約確認へ"
                :disabled="!isValidScheduleInfo"
                @click="confirmForm"
              ></Button>
              <Button
                class="p-ripple"
                v-if="reservationFormStatus === 'confirm'"
                label="内容を修正する"
                severity="secondary"
                @click="reservationFormStatus = 'entry'"
              ></Button>
              <Button
                class="p-ripple"
                v-if="reservationFormStatus === 'confirm'"
                icon="pi pi-send"
                label="予約する"
                :loading="reservationLoading"
                @click="submitForm"
              ></Button>
            </div>
          </Dialog>
        </section>
      </div>
      <div>
        <section class="section__products">
          <div class="section__products--title">
            <h1>VEHICLE LIST</h1>
            <h3>車両一覧</h3>
          </div>
          <div class="section__products--lists">
            <ProductCard :product="vehicle_list[0]"></ProductCard>
            <ProductCard :product="vehicle_list[1]"></ProductCard>
            <ProductCard :product="vehicle_list[2]"></ProductCard>
            <ProductCard :product="vehicle_list[3]"></ProductCard>
          </div>
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
import Calendar from "primevue/calendar";
import Products from "/src/components/common/Products";
import ProductCard from "/src/components/common/ProductCard";
import Information from "/src/components/common/Information";
import Footer from "/src/components/common/Footer";
import Button from "primevue/button";
import Dialog from "primevue/dialog";
import ScrollTop from "primevue/scrolltop";
import axios from "axios";
export default {
  name: "Valiosa",
  components: {
    Header,
    ImageSlider,
    Input,
    Calendar,
    Products,
    ProductCard,
    Information,
    Footer,
    Button,
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
      valiosaImages: [
        "/images/valiosa-images/image1.jpeg",
        "/images/valiosa-images/image2.jpeg",
        "/images/valiosa-images/image3.jpeg",
        "/images/valiosa-images/image4.jpeg",
      ],
      specialLog: "/images/valiosa-images/special_logo.png",
      additionalDriverRadio: [
        { name: "additional-driver-radio", value: "yes", label: "あり" },
        { name: "additional-driver-radio", value: "no", label: "なし" },
      ],
      signUp: [
        { name: "sign-up", value: "yes", label: "希望する" },
        { name: "sign-up", value: "no", label: "希望しない" },
      ],
      today: null,
      search: {
        departDate: {
          rawValue: null,
          value: null,
          isValid: false,
        },
        returnDate: {
          rawValue: null,
          value: null,
          isValid: false,
        },
      },
      vehicle_list: [
        {
          title: "ALPHARD",
          main_image: "/images/car-images/ALPHARD-1.jpg",
          passenger: 7,
          stock: 7,
        },
        {
          title: "ALPHARD",
          main_image: "/images/car-images/ALPHARD-2.jpg",
          passenger: 8,
          stock: 2,
        },
        {
          title: "VELLFIRE",
          main_image: "/images/car-images/VELLFIRE.jpg",
          passenger: 8,
          stock: 1,
        },
        {
          title: "HIACE",
          main_image: "/images/car-images/HIACE.jpg",
          passenger: 10,
          stock: 2,
        },
      ],
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
        customerName: "",
        customerEmail: "",
        customerPhoneNumber: "",
        licenseNumber: "",
        dob: "",
        airportPickup: false,
        airportDropoff: false,
        useOfBabySheet: 0,
        useOfChildSheet: 0,
        useOfJuniorSheet: 0,
        deliveryOption: 0,
        returnOption: 0,
      },
      totalFeeHolder: null,
      openReservationForm: false,
      confirmationInfo: null,
      reservationLoading: false,
    };
  },
  async created() {
    this.today = new Date();
  },
  computed: {
    cssVars() {
      return {
        "--comingSoon-height": this.comingSoonHeight,
      };
    },
    backendDomain() {
      return process.env.VUE_APP_BACKEND_DOMAIN;
    },
    businessHours() {
      return this.$store.state.businessHours
    },
    isReadyToSearch() {
      if (this.search.departDate.isValid && this.search.returnDate.isValid) {
        return true;
      } else {
        return false;
      }
    },
    isValidScheduleInfo() {
      const emailRegex = /^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/;
      const phoneRegex = /^[+-]?[0-9]{7,13}$/;
      if (
        this.scheduleInfo.customerName.length > 0 &&
        emailRegex.test(this.scheduleInfo.customerEmail) &&
        phoneRegex.test(this.scheduleInfo.customerPhoneNumber)
      ) {
        if (this.scheduleInfo.airportPickup) {
          var pickupTime = new Date(
            `${this.search.departDate.value.slice(0, 10)} ${
              this.scheduleInfo.airportPickup
            }`
          );
          console.log(pickupTime);
          var minPickupTime = new Date(
            `${this.search.departDate.value.slice(0, 10)} ${this.businessHours.open + 1}:00`
          );
          var maxPickupTime = new Date(
            `${this.search.departDate.value.slice(0, 10)} ${this.businessHours.close - 1}:00`
          );
          if (pickupTime <= minPickupTime || pickupTime >= maxPickupTime) {
            return false;
          }
        }
        if (this.scheduleInfo.airportDropoff) {
          var dropoffTime = new Date(
            `${this.search.returnDate.value.slice(0, 10)} ${
              this.scheduleInfo.airportDropoff
            }`
          );
          console.log(dropoffTime);
          var minDropoffTime = new Date(
            `${this.search.returnDate.value.slice(0, 10)} ${this.businessHours.open + 1}:00`
          );
          var maxDropoffTime = new Date(
            `${this.search.returnDate.value.slice(0, 10)} ${this.businessHours.close - 1}:00`
          );
          if (dropoffTime <= minDropoffTime || dropoffTime >= maxDropoffTime) {
            return false;
          }
        }
        return true;
      } else {
        return false;
      }
    },
  },
  methods: {
    isValidSearch(inputName) {
      let salesStartTime = this.businessHours.open; //9:00 AM
      let salesEndTime = this.businessHours.close; //6:00 PM
      switch (inputName) {
        case "departDate":
          if (this.search.departDate.rawValue) {
            let departTime = new Date(this.search.departDate.rawValue);
            if (
              departTime.getHours() >= salesStartTime &&
              departTime.getHours() <= salesEndTime
            ) {
              this.search.departDate.isValid = true;
              this.search.departDate.value =
                departTime.toISOString().slice(0, 10) +
                " " +
                departTime.toString().slice(16, 21);
            } else {
              this.search.departDate.isValid = false;
            }
          } else {
            this.search.departDate.isValid = false;
          }
          break;
        case "returnDate":
          if (this.search.returnDate.rawValue) {
            let returnTime = new Date(this.search.returnDate.rawValue);
            if (
              returnTime.getHours() >= salesStartTime &&
              returnTime.getHours() <= salesEndTime &&
              returnTime.getMinutes() == 0
            ) {
              this.search.returnDate.isValid = true;
              this.search.returnDate.value =
                returnTime.toISOString().slice(0, 10) +
                " " +
                returnTime.toString().slice(16, 21);
            } else {
              this.search.returnDate.isValid = false;
            }
          } else {
            this.search.returnDate.isValid = false;
          }
          break;
      }
    },
    async searchAvailability() {
      const param = {
        params: {
          start_at: `${this.search.departDate.value}`,
          end_at: `${this.search.returnDate.value}`,
        },
      };

      await axios
        .get(`${this.backendDomain}/api/schedule/search`, param)
        .then((response) => {
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
        });
    },
    async submitForm() {
      this.reservationLoading = true;
      await setTimeout(() => {
        // this timeOut add loading effect for minimum 3 sec
      }, 3000);

      const customfields = JSON.stringify({
        licenseNumber: this.scheduleInfo.licenseNumber,
        dob: this.scheduleInfo.dob,
        airportPickup: this.scheduleInfo.airportPickup,
        airportDropoff: this.scheduleInfo.airportDropoff,
        deliveryOption: this.scheduleInfo.deliveryOption,
        returnOption: this.scheduleInfo.returnOption,
        useOfBabySheet: this.scheduleInfo.useOfBabySheet,
        useOfChildSheet: this.scheduleInfo.useOfChildSheet,
        useOfJuniorSheet: this.scheduleInfo.useOfJuniorSheet,
      });
      const data = {
        product_id: this.scheduleInfo.reservationCarId,
        name: this.scheduleInfo.customerName,
        email: this.scheduleInfo.customerEmail,
        tel: this.scheduleInfo.customerPhoneNumber,
        start_at: this.scheduleInfo.start_at,
        end_at: this.scheduleInfo.end_at,
        total_fee: this.totalFeeHolder,
        customfields: customfields,
      };
      await axios
        .post(`${this.backendDomain}/api/schedule/create`, data)
        .then((response) => {
          this.reservationFormStatus = "done";
          console.log(response);
          setTimeout(() => {
            this.reservationLoading = false;
            this.closeReservationForm();
          }, 10000);
        });
    },
    opneReservationForm(carId) {
      this.scheduleInfo.reservationCarId = carId;

      // calculate basic totalFee (fees without options)
      this.scheduleInfo.totalFee = this.calculateTotalFeeByRentalSpan(
        `${this.search.departDate.value}`,
        `${this.search.returnDate.value}`,
        this.availableCar.find(
          (car) => car.id === this.scheduleInfo.reservationCarId
        ).price
      );

      this.scheduleInfo.start_at = `${this.search.departDate.value}`;
      this.scheduleInfo.end_at = `${this.search.returnDate.value}`;
      this.openReservationForm = true;
      this.reservationFormStatus = "entry";
    },
    confirmForm() {
      let selectedCarInfo = this.availableCar.find(
        (car) => car.id === this.scheduleInfo.reservationCarId
      );
      const deriveryReturnFee = 3300;
      const generalChildSheetFee = 1100;

      // add basic totalFee inside temporal variable holder
      this.totalFeeHolder = this.scheduleInfo.totalFee;
      // if any delivery/return area is requested, charge extra 3000yen
      if (this.scheduleInfo.deliveryOption) {
        this.totalFeeHolder += deriveryReturnFee;
      }
      if (this.scheduleInfo.returnOption) {
        this.totalFeeHolder += deriveryReturnFee;
      }
      // if any childSheet requested, charge extra fee depending on the sheet type
      if (this.scheduleInfo.useOfBabySheet) {
        this.totalFeeHolder +=
          this.scheduleInfo.useOfBabySheet * generalChildSheetFee;
      }
      if (this.scheduleInfo.useOfChildSheet) {
        this.totalFeeHolder +=
          this.scheduleInfo.useOfChildSheet * generalChildSheetFee;
      }
      if (this.scheduleInfo.useOfJuniorSheet) {
        this.totalFeeHolder +=
          this.scheduleInfo.useOfJuniorSheet * generalChildSheetFee;
      }

      this.confirmationInfo = {
        title: selectedCarInfo.title,
        start_at: this.scheduleInfo.start_at,
        end_at: this.scheduleInfo.end_at,
        totalFee: this.totalFeeHolder,
        customerName: this.scheduleInfo.customerName,
        customerEmail: this.scheduleInfo.customerEmail,
        customerPhoneNumber: this.scheduleInfo.customerPhoneNumber,
        licenseNumber: this.scheduleInfo.licenseNumber,
        dob: this.scheduleInfo.dob,
        airportPickup: this.scheduleInfo.airportPickup,
        airportDropoff: this.scheduleInfo.airportDropoff,
        carInfos: {
          main_image: selectedCarInfo.main_image,
          images: selectedCarInfo.images,
          maxmumPassenger: selectedCarInfo.passenger,
          isSmokingAllowed: selectedCarInfo.isSmokingAllowed,
          basicFee: selectedCarInfo.price,
        },
        additionalService: {
          deliveryOption: this.scheduleInfo.deliveryOption,
          returnOption: this.scheduleInfo.returnOption,
          useOfBabySheet:
            this.scheduleInfo.useOfBabySheet * generalChildSheetFee,
          useOfChildSheet:
            this.scheduleInfo.useOfChildSheet * generalChildSheetFee,
          useOfJuniorSheet:
            this.scheduleInfo.useOfJuniorSheet * generalChildSheetFee,
        },
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
        customerName: "",
        customerEmail: "",
        customerPhoneNumber: "",
        licenseNumber: "",
        dob: "",
        airportPickup: false,
        airportDropoff: false,
        useOfBabySheet: 0,
        useOfChildSheet: 0,
        useOfJuniorSheet: 0,
        deliveryOption: 0,
        returnOption: 0,
      };
      this.totalFeeHolder = null;
      this.confirmationInfo = null;
      this.reservationLoading = false;
    },
    calculateTotalFeeByRentalSpan(startDateTime, endDateTime, pricePerDay) {
      // Calculate the difference in days and add 1 to include both start and end dates
      let diffInDays =
        (new Date(endDateTime) - new Date(startDateTime)) / (1000 * 60 * 60 * 24);

      if (diffInDays < 1) {
        // if less than one full-day
        diffInDays = 1;
      } else if (diffInDays % 1 == 0) {
        // if exactly one(or multiple) full-day (=returned on the next day the same time)
        diffInDays = diffInDays + 1;
      } else {
        diffInDays = Math.ceil(diffInDays);
      }

      return diffInDays * pricePerDay;
    },
    scrollToEearchAndReservation() {
      window.scrollTo({
        top: document.getElementById("searchAndReservation").offsetTop,
        behavior: "smooth",
      });
    },
  },
};
</script>
<style lang="scss" scoped>
.home.valosa {
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
  &__valiosaImageArea {
    margin: 0 0 1.2rem 0;
  }

  &__features {
    text-align: center;
    font-size: var(--font-size-base);
    color: var(--color-white);
    margin: initial;
    padding: 8rem 6% 8rem;
    background: no-repeat url(../../public/images/valiosa-images/half-bg.png);
    background-size: 50% 100%;

    &--title {
      h3 {
        margin: 0;
        font-size: 1rem;
        letter-spacing: 0.2em;
        font-family: var(--font-noto-sans);
        font-optical-sizing: var(--font-default-optical-sizing);
        font-style: var(--font-default-style);
        color: var(--color-black);
        text-align: left;
      }

      h1 {
        margin: 0;
        font-size: 2rem;
        letter-spacing: 0.2em;
        font-family: var(--font-noto-sans);
        font-optical-sizing: var(--font-default-optical-sizing);
        font-style: var(--font-default-style);
        color: var(--color-black);
        text-align: left;
        line-height: 3rem;
      }
    }

    &--content {
      position: relative;
      margin: 4rem;

      @media screen and (max-width: 390px) {
        margin: 4rem 0.5rem;
      }

      .ellipse-parent {
        display: flex;
        justify-content: space-around;

        .ellipseDiv {
          position: relative;
          border-radius: 50%;
          width: 27.48rem;
          height: 27.48rem;

          @media screen and (max-width: 390px) {
            height: 82vw;
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
          color: var(--color-black);

          @media screen and (max-width: 390px) {
            font-size: 1rem;
          }
          &.title {
            font-size: 1.8rem;
            font-weight: 500;
          }
        }

        h3 {
          font-size: var(--font-size-xs);
          letter-spacing: 0.2em;
          font-weight: 400;
          font-family: inherit;
          color: var(--color-black);

          @media screen and (max-width: 390px) {
            font-size: 1rem;
          }
        }
      }

      &:nth-child(1) {
        .ellipseDiv {
          background: no-repeat
            url(../../public/images/valiosa-images/feature1.jpeg);
          background-size: 155%;
          background-position-y: center;
          background-position-x: 50%;
        }
      }
      &:nth-child(2) {
        .ellipseDiv {
          background: no-repeat
            url(../../public/images/valiosa-images/feature2.jpg);
          background-size: 156%;
          background-position-y: center;
          background-position-x: 43%;
        }
      }
      &:nth-child(3) {
        .ellipseDiv {
          background: no-repeat
            url(../../public/images/valiosa-images/feature3.png);
          background-size: 100%;
          background-position-y: center;
          background-position-x: 50%;
        }
      }
    }
  }

  &__guide {
    text-align: center;
    font-size: var(--font-size-base);

    &:first-child {
      margin: 4rem 2.4rem 8rem;
    }

    &--title {
      text-align: center;
      margin: 2.3rem 0;
      border-bottom: 2px solid var(--color-black);

      h1 {
        color: var(--color-black);
        letter-spacing: 0.15em;
        font-size: 2rem;
        font-family: var(--font-noto-sans);
        font-optical-sizing: var(--font-default-optical-sizing);
        font-style: var(--font-default-style);
        margin: unset;
      }

      h3 {
        color: var(--color-black);
        letter-spacing: 0.15em;
        font-size: 1rem;
        font-family: var(--font-noto-sans);
        font-optical-sizing: var(--font-default-optical-sizing);
        font-style: var(--font-default-style);
        margin: unset;
        margin-bottom: 0.8rem;
      }
    }

    &--content {
      margin: 3rem auto 0;
      width: 75%;
    }

    .steps__diagram {
      display: flex;
      justify-content: space-between;
      margin: 7rem auto;

      &--card {
        width: 8rem;
        height: 8rem;
        background-color: var(--color-black);
        color: var(--color-white);
        font-family: var(--font-noto-sans);
        font-optical-sizing: var(--font-default-optical-sizing);
        font-style: var(--font-default-style);
        border-radius: 1rem;
        padding: 1rem;

        .step-number {
          font-size: 2.5rem;
        }

        hr {
          margin: 0 auto;
          border-bottom: 2px solid var(--color-white);
          border-top: none;
        }

        .step-title {
          font-size: 1.17rem;
          margin-top: 0.5rem;
        }
      }

      &--arrow {
        width: 3rem;

        .pi {
          font-size: 3rem;
          margin-top: 2.7rem;
          color: var(--color-black);
        }
      }
    }

    .steps__descriptions {
      margin: 3rem auto 0;
      display: flex;
      flex-direction: column;

      .step__description {
        display: flex;
        margin-top: 3rem;

        &--number {
          height: 8rem;
          font-size: 2.5rem;
          border-left: 0.3rem solid var(--color-black);
          color: var(--color-black);
          padding: 0 0.5rem;
          margin-right: 4rem;
        }

        &--text {
          color: var(--color-black);
          text-align: left;

          h3 {
            margin-top: 0;
          }

          p {
            font-size: 1rem;
          }
        }
      }
    }

    @media screen and (max-width: 390px) {
      &--title {
        h3 {
          font-size: 0.8rem;
        }
      }

      &--content {
        margin: initial;
        width: initial;
      }

      .steps__diagram {
        display: none;
      }

      .steps__descriptions {
        .step__description {
          &--number {
            margin-right: 1rem;
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
      border-bottom: 2px solid var(--color-black);

      h1 {
        color: var(--color-black);
        letter-spacing: 0.15em;
        font-size: 2rem;
        font-family: var(--font-noto-sans);
        font-optical-sizing: var(--font-default-optical-sizing);
        font-style: var(--font-default-style);
        margin: unset;
      }

      h3 {
        color: var(--color-black);
        letter-spacing: 0.15em;
        font-size: 1rem;
        font-family: var(--font-noto-sans);
        font-optical-sizing: var(--font-default-optical-sizing);
        font-style: var(--font-default-style);
        margin: unset;
        margin-bottom: 0.8rem;

        @media screen and (max-width: 390px) {
          font-size: 0.8rem;
        }
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

          input,
          select {
            background-color: #b5b5b5;
          }
        }

        .input-description {
          display: block;
          font-size: 0.8rem;
          font-weight: bold;
        }
      }
    }

    &--submit {
      text-align: center;
    }
  }

  &__products {
    margin: 0 2.4rem 5rem;

    &--title {
      text-align: center;
      margin: 2.3rem 0;
      border-bottom: 2px solid var(--color-black);

      h1 {
        color: var(--color-black);
        letter-spacing: 0.15em;
        font-size: 2rem;
        font-family: var(--font-noto-sans);
        font-optical-sizing: var(--font-default-optical-sizing);
        font-style: var(--font-default-style);
        margin: unset;
      }

      h3 {
        color: var(--color-black);
        letter-spacing: 0.15em;
        font-size: 1rem;
        font-family: var(--font-noto-sans);
        font-optical-sizing: var(--font-default-optical-sizing);
        font-style: var(--font-default-style);
        margin: unset;
        margin-bottom: 0.8rem;

        @media screen and (max-width: 390px) {
          font-size: 0.8rem;
        }
      }
    }

    &--lists {
      display: flex;
      justify-content: center;
      flex-wrap: wrap;

      @media screen and (max-width: 390px) {
        flex-direction: column;
      }
    }
  }
}

.reservation-form {
  section {
    margin: 0rem 2.4rem;
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
      color: var(--color-black);
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
    display: flex;
  }
}

.datetimepicker {
  display: flex;
  flex-direction: column;
  align-items: center;

  &-selector {
    font-size: 1rem;
    letter-spacing: 0.05em;
    display: inline-flex;
    width: 21.5rem;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 0.6rem;
    flex-direction: initial;

    input[type="date"] {
      border-radius: 24.94px;
      background-color: var(--color-aliceblue);
      box-shadow: 2px 2px 2px rgba(0, 0, 0, 0.25);
      width: 9.73rem;
      height: 2rem;
      border: none;
      padding: 0 0.7rem;
      letter-spacing: 0.05em;
    }

    input[type="time"] {
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
    color: var(--color-black);
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

      &:nth-child(1) {
        margin: 0 auto auto 0;
      }

      &:nth-child(2) {
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
