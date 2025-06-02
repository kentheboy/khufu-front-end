<template>
  <div class="home">
    <Header></Header>
    <main :class="['main', $i18n.locale]">
      <section class="section__heroImageArea">
        <ImageSlider :images="heroImages"></ImageSlider>
      </section>
      <div>
        <section class="section__form" id="searchAndReservation">
          <div class="section__form--title">
            <h1>SCHEDULE</h1>
            <h3>{{ $t('home.Search by dates') }}</h3>
          </div>
          <div class="datetimepicker">
            <div class="datetimepicker-selector">
              <label>{{ $t('home.Depature') }}</label>
              <Calendar type="date" name="startDate" showIcon showTime hourFormat="12" :stepMinute="30" iconDisplay="input" dateFormat="yy/mm/dd" v-model="search.departDate.rawValue" @update:modelValue="isValidSearch('departDate')" :minDate="minDate" />
            </div>
            <div class="datetimepicker-selector">
              <label>{{ $t('home.Returning') }}</label>
              <Calendar type="date" name="endDate" showIcon showTime hourFormat="12" :stepMinute="30" iconDisplay="input" dateFormat="yy/mm/dd" v-model="search.returnDate.rawValue" @update:modelValue="isValidSearch('returnDate')" :minDate="search.departDate.rawValue
                ? search.departDate.rawValue
                : minDate
                " />
            </div>
            <div class="datetimepicker-rule">
              <span>※{{ $t('home.Business hours notice', { open: businessHours.open, close: businessHours.close }) }}</span>
            </div>
          </div>
          <Button icon="pi pi-search" class="p-ripple" id="searchAvailability" :label="$t('home.Search availability')" :disabled="!isReadyToSearch" @click="searchAvailability"></Button>
          <p v-if="availableCar.length <= 0 && isSearched" class="no-available-car">
            {{ $t('home.We are very sorry') }}<br />
            {{ $t('home.There are currently no vehicles available at the time you have specified') }}<br />
            {{ $t('home.Please try searching again at a different time or contact the store staff') }}
          </p>
          <Products v-else :products="availableCar" @selected="opneReservationForm">
          </Products>
          <Dialog v-model:visible="openReservationForm" maximizable header="" class="reservation-form" :modal="true" @after-hide="closeReservationForm">
            <div class="reservation-form__statuses">
              <div :class="`reservation-form__status ${reservationFormStatus === 'entry' ? 'active' : ''
                }`">
                {{ $t('home.Entry') }}
              </div>
              <div :class="`reservation-form__status ${reservationFormStatus === 'confirm' ? 'active' : ''
                }`">
                {{ $t('home.Confirm') }}
              </div>
              <div :class="`reservation-form__status ${reservationFormStatus === 'done' ? 'active' : ''
                }`">
                {{ $t('home.Complete') }}
              </div>
            </div>
            <section class="section__form" style="margin-bottom: 0" v-if="reservationFormStatus === 'entry'">
              <div class="section__form--title">
                <h1>YOUR INFORMATION</h1>
                <h3>{{ $t('home.Your Information') }}</h3>
              </div>
              <div class="section__form--content">
                <div class="section__form--content-input-area">
                  <Input type="text" :label="$t('home.Name')" name="name" :placeholder="$t('home.Taro Yamada')" required v-model="scheduleInfo.customerName"></Input>
                </div>
                <div class="section__form--content-input-area">
                  <Input type="email" :label="$t('home.Email')" name="email" placeholder="example@class.okinawa" required v-model="scheduleInfo.customerEmail"></Input>
                </div>
                <div class="section__form--content-input-area">
                  <Input type="tel" :label="$t('home.Phone number')" name="phonenumber" placeholder="08000000000" required v-model="scheduleInfo.customerPhoneNumber"></Input>
                </div>
                <div class="section__form--content-input-area">
                  <Input type="number" :label="$t('home.Amt of passanger')" name="passenger" placeholder="1" required v-model="scheduleInfo.passenger"></Input>
                </div>
                <div class="section__form--content-input-area">
                  <Input type="number" :label="$t('home.License number')" name="license-number" placeholder="1234567890" v-model="scheduleInfo.licenseNumber"></Input>
                </div>
                <div class="section__form--content-input-area">
                  <Input type="date" :label="$t('home.Date of birth')" name="dob" v-model="scheduleInfo.dob"></Input>
                </div>
                <div class="section__form--content-input-area">
                  <Input type="radio" :label="$t('home.Airport Pickup')" name="airport-pickup" v-model="scheduleInfo.airportPickup" :options="[
                    { name: 'airport-pickup needed', label: $t('home.needed'), value: true },
                    { name: 'airport-pickup not needed', label: $t('home.not needed'), value: false },
                  ]"></Input>
                  <Input v-if="scheduleInfo.airportPickup" type="time" :label="$t('home.Airport Pickup time')" name="airport-pickup-time" v-model="scheduleInfo.airportPickupTime"></Input>
                  <span v-if="scheduleInfo.airportPickup" class="input-description">{{ $t('home.Airport pick-up hours notation') }}</span>
                  <Input type="text" :label="$t('home.Arrival flight number')" name="arrival-flight-number" v-model="scheduleInfo.arrivalFlightNumber"></Input>
                </div>
                <div class="section__form--content-input-area">
                  <Input type="radio" :label="$t('home.Airport Dropoff')" name="airport-dropoff" v-model="scheduleInfo.airportDropoff" :options="[
                    { name: 'airport-dropoff needed', label: $t('home.needed'), value: true },
                    { name: 'airport-dropoff not needed', label: $t('home.not needed'), value: false },
                  ]"></Input>
                  <Input v-if="scheduleInfo.airportDropoff" type="time" :label="$t('home.Airport Dropoff time')" name="airport-dropoff-time" v-model="scheduleInfo.airportDropoffTime"></Input>
                  <span v-if="scheduleInfo.airportDropoff" class="input-description">{{ $t('home.Airport pick-up hours notation') }}</span>
                  <Input type="text" :label="$t('home.Departure flight number')" name="departure-flight-number" v-model="scheduleInfo.departureFlightNumber"></Input>
                </div>
                <div class="section__form--content-input-area">
                  <Input type="selectbox" :label="$t('home.Lending option')" name="return-option" :options="[
                    { name: 'none', label: $t('home.none'), value: 0 },
                    {
                      name: 'akamineStaDelivery',
                      label: $t('home.Rental at Akamine Sta'),
                      value: 1,
                    },
                    {
                      name: 'nahaHotelDelivery',
                      label: $t('home.Rental at Hotel(Hotels in Naha City)'),
                      value: 2,
                    },
                  ]" v-model="scheduleInfo.deliveryOption"></Input>
                  <span class="input-description">{{ $t('home.Additional fee ¥2,200') }}</span>
                </div>
                <div class="section__form--content-input-area">
                  <Input type="selectbox" :label="$t('home.Return option')" name="return-option" :options="[
                    { name: 'none', label: $t('home.none'), value: 0 },
                    {
                      name: 'akamineStaReturn',
                      label: $t('home.Return at Akamine Sta'),
                      value: 1,
                    },
                    {
                      name: 'nahaHotelReturn',
                      label: $t('home.Return at Hotel(Hotels in Naha City)'),
                      value: 2,
                    },
                  ]" v-model="scheduleInfo.returnOption"></Input>
                  <span class="input-description">{{ $t('home.Additional fee ¥2,200') }}</span>
                </div>
                <div class="section__form--content-input-area">
                  <Input type="selectbox" :label="$t('home.Return without refueling option')" name="return-without-refueling" :options="[
                    { name: 'return-with-refueled', label: $t('home.Return with refueled'), value: 0 },
                    {
                      name: 'return-without-refueled',
                      label: $t('home.Return without refueled'),
                      value: 1,
                    },
                  ]" v-model="scheduleInfo.returnWithoutRefueling"></Input>
                  <span class="input-description">{{ $t('home.Return without refueling option cost extra ￥8,800') }}</span>
                </div>
                <div class="section__form--content-input-area">
                  <Input type="selectbox" :label="$t('home.Number of baby seats (0~2 year old and under)')" name="use-of-baby-sheet" classes="display-block" :options="[
                    { name: 'useOfBabySheet', label: $t('home.none'), value: 0 },
                    { name: 'useOfBabySheet', label: '1', value: 1 },
                    { name: 'useOfBabySheet', label: '2', value: 2 },
                    { name: 'useOfBabySheet', label: '3', value: 3 },
                  ]" v-model="scheduleInfo.useOfBabySheet"></Input>
                </div>
                <div class="section__form--content-input-area">
                  <Input type="selectbox" :label="$t('home.Number of child seats (0~5 year old and under)')" name="use-of-child-sheet" classes="display-block" :options="[
                    { name: 'useOfChildSheet', label: $t('home.none'), value: 0 },
                    { name: 'useOfChildSheet', label: '1', value: 1 },
                    { name: 'useOfChildSheet', label: '2', value: 2 },
                    { name: 'useOfChildSheet', label: '3', value: 3 },
                  ]" v-model="scheduleInfo.useOfChildSheet"></Input>
                </div>
                <div class="section__form--content-input-area">
                  <Input type="selectbox" :label="$t('home.Number of Junior seats (5~10 year old and under)')" name="use-of-junior-sheet" classes="display-block" :options="[
                    { name: 'useOfJuniorSheet', label: $t('home.none'), value: 0 },
                    { name: 'useOfJuniorSheet', label: '1', value: 1 },
                    { name: 'useOfJuniorSheet', label: '2', value: 2 },
                    { name: 'useOfBabySheet', label: '3', value: 3 },
                  ]" v-model="scheduleInfo.useOfJuniorSheet"></Input>
                  <span class="input-description">{{ $t('home.Additional fee per seat ¥1,100 (flat rate)') }}</span>
                </div>
                <div class="section__form--content-input-area">
                  <Input type="text" :label="$t('home.Coupon Codes')" name="name" v-model="scheduleInfo.couponCode"></Input>
                  <span class="input-description">
                    {{ $t('home.If the coupon is not correct, you will not proceed to the confirmation screen') }}<br>
                    {{ $t('home.Please double check the code again when entering') }}
                  </span>
                </div>

              </div>
            </section>
            <Information v-if="reservationFormStatus === 'confirm'" :isExample="false" :reservationInfo="confirmationInfo"></Information>
            <div v-if="reservationFormStatus === 'done'" class="reservation-form__completed">
              <img class="reservation-form__completed-img" src="/images/icons/mail.png" />
              <p>
                {{ $t('home.Reservation completed') }}<br />
                {{ $t('home.A representative will contact you at the e-mail address you provided to confirm your application') }}<br />
                {{ $t('home.Please wait a moment') }}<br />
                {{ $t('home.(This window will close automatically after 10 seconds)') }}
              </p>
            </div>
            <div class="reservation-form__button">
              <Button class="p-ripple" v-if="reservationFormStatus === 'entry'" :label="$t('home.Confirm reservation')" :disabled="!isValidScheduleInfo" @click="confirmForm"></Button>
              <Button class="p-ripple" v-if="reservationFormStatus === 'confirm'" :label="$t('home.Modify')" severity="secondary" @click="reservationFormStatus = 'entry'"></Button>
              <Button class="p-ripple" v-if="reservationFormStatus === 'confirm'" icon="pi pi-send" :label="$t('home.reserve')" :loading="reservationLoading" @click="submitForm"></Button>
            </div>
          </Dialog>
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
  name: "Home",
  components: {
    Header,
    ImageSlider,
    Galleria,
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
      heroImages: [
        "/images/hero-images/image1.png",
        "/images/hero-images/image2.jpg",
        "/images/hero-images/image3.jpg",
        "/images/hero-images/image4.jpg",
        "/images/hero-images/image5.jpg",
        "/images/hero-images/image6.jpg",
        "/images/hero-images/image7.jpg",
        "/images/hero-images/image8.png",
      ],
      additionalDriverRadio: [
        { name: "additional-driver-radio", value: "yes", label: "あり" },
        { name: "additional-driver-radio", value: "no", label: "なし" },
      ],
      signUp: [
        { name: "sign-up", value: "yes", label: "希望する" },
        { name: "sign-up", value: "no", label: "希望しない" },
      ],
      minDate: null,
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
      vehicle_list: [],
      isSearched: false,
      availableCar: [],
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
        airportPickupTime: "",
        arrivalFlightNumber: "",
        airportDropoff: false,
        airportDropoffTime: "",
        departureFlightNumber: "",
        useOfBabySheet: 0,
        useOfChildSheet: 0,
        useOfJuniorSheet: 0,
        deliveryOption: 0,
        returnWithoutRefueling: 0,
        returnOption: 0,
        passenger: 1,
        couponCode: null
      },
      totalFeeHolder: null,
      openReservationForm: false,
      confirmationInfo: null,
      reservationLoading: false,
      // Fee consts
      availableCouponCodes: {
        "CLASSFB10": {
          discountPercentage: 10
        },
        "CLASSIG10": {
          discountPercentage: 10
        }
      },
      deriveryReturnFee: 2200,
      generalChildSheetFee: 1100,
      returnWithoutRefuelingFee: 8800,
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

    // load business hours from store
    this.minDate = new Date();
    if (this.minDate.getHours() > 17) {
      this.minDate.setDate(this.minDate.getDate() + 2);
    } else {
      this.minDate.setDate(this.minDate.getDate() + 1);
    }
    this.minDate.setHours(this.$store.state.businessHours.open);
    this.minDate.setMinutes(0);
  },
  computed: {
    backendDomain() {
      return process.env.VUE_APP_BACKEND_DOMAIN;
    },
    businessHours() {
      return this.$store.state.businessHours;
    },
    isReadyToSearch() {
      if (this.search.departDate.isValid && this.search.returnDate.isValid) {
        return true;
      } else {
        return false;
      }
    },
    isValidScheduleInfo() {
      if (this.scheduleInfo.couponCode) {
        if (!Object.prototype.hasOwnProperty.call(this.availableCouponCodes, this.scheduleInfo.couponCode)) {
          return false;
        }
      }
      const emailRegex = /^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/;
      const phoneRegex = /^[+-]?[0-9]{7,13}$/;
      if (
        this.scheduleInfo.customerName.length > 0 &&
        emailRegex.test(this.scheduleInfo.customerEmail) &&
        phoneRegex.test(this.scheduleInfo.customerPhoneNumber) &&
        this.scheduleInfo.passenger
      ) {
        if (this.scheduleInfo.airportPickup) {
          var pickupTime = new Date(
            `${this.search.departDate.value.slice(0, 10)} ${this.scheduleInfo.airportPickupTime
            }`
          );
          console.log(pickupTime);
          var minPickupTime = new Date(
            `${this.search.departDate.value.slice(0, 10)} ${parseInt(this.businessHours.open) + 1
            }:00`
          );
          console.log(minPickupTime);
          var maxPickupTime = new Date(
            `${this.search.departDate.value.slice(0, 10)} ${parseInt(this.businessHours.close) - 1
            }:00`
          );
          if (pickupTime <= minPickupTime || pickupTime >= maxPickupTime) {
            return false;
          }
        }
        if (this.scheduleInfo.airportDropoff) {
          var dropoffTime = new Date(
            `${this.search.returnDate.value.slice(0, 10)} ${this.scheduleInfo.airportDropoffTime
            }`
          );
          // console.log(dropoffTime);
          var minDropoffTime = new Date(
            `${this.search.returnDate.value.slice(0, 10)} ${parseInt(this.businessHours.open) + 1
            }:00`
          );
          var maxDropoffTime = new Date(
            `${this.search.returnDate.value.slice(0, 10)} ${parseInt(this.businessHours.close) - 1
            }:00`
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
    isValidSearch(inputName) {
      let salesStartTime = `${this.businessHours.open}:00`; //9:00 AM
      let salesEndTime = `${this.businessHours.close}:00`; //6:00 PM
      switch (inputName) {
        case "departDate":
          if (this.search.departDate.rawValue) {
            let departTime = new Date(this.search.departDate.rawValue);
            let departTimeStr = departTime.toString().slice(16, 21);
            if (
              departTimeStr >= salesStartTime &&
              departTimeStr <= salesEndTime
            ) {
              this.search.departDate.isValid = true;
              this.search.departDate.value =
                departTime.toISOString().slice(0, 10) + " " + departTimeStr;
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
            let returnTimeStr = returnTime.toString().slice(16, 21);
            if (
              returnTimeStr >= salesStartTime &&
              returnTimeStr <= salesEndTime
            ) {
              this.search.returnDate.isValid = true;
              this.search.returnDate.value =
                returnTime.toISOString().slice(0, 10) + " " + returnTimeStr;
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
            tmpProducts[i].subInfo = customfields.licenseNumber;
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

      let memos = "";
      if (this.scheduleInfo.couponCode) {
        memos += `クーポン適応中: ${this.scheduleInfo.couponCode}\n`;
      }

      const customfields = JSON.stringify({
        passengerNumber: this.scheduleInfo.passenger,
        licenseNumber: this.scheduleInfo.licenseNumber,
        dob: this.scheduleInfo.dob,
        airportPickup: this.scheduleInfo.airportPickupTime,
        arrivalFlightNumber: this.scheduleInfo.arrivalFlightNumber,
        airportDropoff: this.scheduleInfo.airportDropoffTime,
        departureFlightNumber: this.scheduleInfo.departureFlightNumber,
        deliveryOption: this.scheduleInfo.deliveryOption,
        returnOption: this.scheduleInfo.returnOption,
        useOfBabySheet: this.scheduleInfo.useOfBabySheet,
        useOfChildSheet: this.scheduleInfo.useOfChildSheet,
        useOfJuniorSheet: this.scheduleInfo.useOfJuniorSheet,
        returnWithoutRefueling: this.scheduleInfo.returnWithoutRefueling,
        memos: memos
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

      // add basic totalFee inside temporal variable holder
      this.totalFeeHolder = this.scheduleInfo.totalFee;
      // if any delivery/return area is requested, charge extra 3000yen
      if (this.scheduleInfo.deliveryOption) {
        this.totalFeeHolder += this.deriveryReturnFee;
      }
      if (this.scheduleInfo.returnOption) {
        this.totalFeeHolder += this.deriveryReturnFee;
      }
      // if any childSheet requested, charge extra fee depending on the sheet type
      if (this.scheduleInfo.useOfBabySheet) {
        this.totalFeeHolder +=
          this.scheduleInfo.useOfBabySheet * this.generalChildSheetFee;
      }
      if (this.scheduleInfo.useOfChildSheet) {
        this.totalFeeHolder +=
          this.scheduleInfo.useOfChildSheet * this.generalChildSheetFee;
      }
      if (this.scheduleInfo.useOfJuniorSheet) {
        this.totalFeeHolder +=
          this.scheduleInfo.useOfJuniorSheet * this.generalChildSheetFee;
      }
      if (this.scheduleInfo.returnWithoutRefueling) {
        this.totalFeeHolder += this.returnWithoutRefuelingFee;
      }

      let discount = null;
      if (this.scheduleInfo.couponCode) {
        // console.log(this.scheduleInfo.couponCode)
        const discountPercentage = this.availableCouponCodes[this.scheduleInfo.couponCode].discountPercentage;
        const discountPrice = this.totalFeeHolder * (discountPercentage * 0.01);
        this.totalFeeHolder = this.totalFeeHolder - discountPrice;
        discount = {
          percentage: discountPercentage,
          price: discountPrice
        };
      }

      this.confirmationInfo = {
        title: selectedCarInfo.title,
        subInfo: selectedCarInfo.subInfo,
        start_at: this.scheduleInfo.start_at,
        end_at: this.scheduleInfo.end_at,
        totalFee: this.totalFeeHolder,
        customerName: this.scheduleInfo.customerName,
        customerEmail: this.scheduleInfo.customerEmail,
        customerPhoneNumber: this.scheduleInfo.customerPhoneNumber,
        licenseNumber: this.scheduleInfo.licenseNumber,
        dob: this.scheduleInfo.dob,
        airportPickup: this.scheduleInfo.airportPickupTime,
        arrivalFlightNumber: this.scheduleInfo.arrivalFlightNumber,
        airportDropoff: this.scheduleInfo.airportDropoffTime,
        departureFlightNumber: this.scheduleInfo.departureFlightNumber,
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
            this.scheduleInfo.useOfBabySheet * this.generalChildSheetFee,
          useOfChildSheet:
            this.scheduleInfo.useOfChildSheet * this.generalChildSheetFee,
          useOfJuniorSheet:
            this.scheduleInfo.useOfJuniorSheet * this.generalChildSheetFee,
          returnWithoutRefueling: this.scheduleInfo.returnWithoutRefueling,
        },
        discount: discount
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
        returnWithoutRefueling: 0,
        returnOption: 0,
        couponCode: null
      };
      this.totalFeeHolder = null;
      this.confirmationInfo = null;
      this.reservationLoading = false;
    },
    calculateTotalFeeByRentalSpan(startDateTime, endDateTime, pricePerDay) {
      // Normalize to just the date part
      var start = new Date(startDateTime.split(" ")[0]);
      var end = new Date(endDateTime.split(" ")[0]);

      // Calculate difference in milliseconds and convert to days
      var diffDays = Math.floor((end - start) / (1000 * 60 * 60 * 24)) + 1;

      return diffDays * pricePerDay;
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

    #searchAvailability {
      width: 12rem;
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
    color: var(--color-steelblue);
  }
}

.sp {
  display: none;

  @media screen and (max-width: 430px) {
    display: initial;
  }
}

.cmn_hant {
  .datetimepicker-selector {
    font-size: .95rem;
    width: 22.5rem;
  }
}
</style>
