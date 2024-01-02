<template>
    <section class="section__information">
        <div class="section__information--title">
            <h1>BOOKING INFORMATION</h1>
            <h3>ご予約内容</h3>
        </div>
        <div class="section__information--car-info">
            <h4>■車両情報 <span v-if="isExample">（例）</span></h4>
            <h5>{{ reservationInfo.title }}</h5>
            <CarInfo></CarInfo>
            <div class="info-detail-area">
                <div class="row-content">
                    <div class="title">■貸出日程</div>
                    <div class="detail">
                        <p>{{ reservationInfo.start_at }} ~ {{ reservationInfo.end_at }}</p>
                    </div>
                </div>
                <div class="row-content">
                    <div class="title">■料金</div>
                    <div class="detail">
                        <p>¥{{ addCommas(reservationInfo.totalFee) }}</p>
                        <hr>
                        <div class="price-detail">
                            <div class="basic-price-title">基本料金</div>
                            <div class="basic-price">¥20,000</div>
                            <div class="insurance-price-title">補償制度</div>
                            <div class="insurance-price">¥3,000</div>
                            <!-- <div class="insurance-price-help">
                                <img class="insurance-price-help-icon" alt="" src="/images/@2x.png">
                                <div class="">補償制度を詳しく</div>
                            </div> -->
                        </div>
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
                            <dt>メールアドレス</dt>
                            <dd>{{ reservationInfo.customerEmail }}</dd>
                            <dt>電話番号</dt>
                            <dd>{{ reservationInfo.customerPhoneNumber }}</dd>
                            <dt>免許証番号</dt>
                            <dd>{{ reservationInfo.licenseNumber }}</dd>
                            <dt>空港お出迎え</dt>
                            <dd>{{ reservationInfo.airportPickup ? reservationInfo.airportPickup : "なし" }}</dd>
                            <dt>空港お見送り</dt>
                            <dd>{{ reservationInfo.airportDropoff ? reservationInfo.airportDropoff : "なし" }}</dd>
                        </dl>
                    </div>
                </div>
            </div>
            <p v-if="isExample">※これは予約例です</p>
        </div>
    </section>
</template>
<script>
import CarInfo from "/src/components/common/CarInfo";
export default {
    name: 'Information',
    components: {
        CarInfo
    },
    props: {
        reservationInfo: {
            type: Object,
            default: () => ({
                title: "TOYOTA　アルファード",
                start_at: "2023/1/1 10:00",
                end_at: "2023/1/2 18:00",
                totalFee: 30000,
                customerName: "山田太郎",
                customerEmail: "example@class.okinawa",
                customerPhoneNumber: "080-0000-0000",
                licenseNumber: "1234567890",
                dob: "",
                airportPickup: false,
                airportDropoff: true,
            })
        },
        isExample: {
            type: Boolean,
            default: false
        }
    },
    methods: {
        addCommas(num) {
            let str = num.toString();
            let result = '';
            let insertComma = false;

            for (let i = str.length - 1; i >= 0; i--) {
                if (insertComma) {
                    result += ',';
                    insertComma = false;
                }
                result += str[i];
                if ((str.length - i) % 3 === 0 && i > 0) {
                    insertComma = true;
                }
            }
            return result.split('').reverse().join('');
        }
    }
}
</script>
<style lang="scss" scoped>
.section__information {
    text-align: center;
    color: var(--color-steelblue);
    
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
                .price-detail {
                    position: relative;
                    width: 100%;
                    height: 3rem;
                    @media screen and (max-width: 390px) {
                        height: 4rem
                    }
                    .basic-price-title {
                        position: absolute;
                        top: 0;
                        left: 0;
                    }
                    .basic-price {
                        position: absolute;
                        top: 0;
                        left: 5rem;
                    }
                    .insurance-price-title {
                        position: absolute;
                        top: 1.2rem;
                        left: 0rem;
                    }
                    .insurance-price {
                        position: absolute;
                        top: 1.2rem;
                        left: 5rem;
                    }
                    .insurance-price-help {
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
                        .insurance-price-help-icon {
                            height: 0.9rem
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
                    dt, dd {
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
    h5 {
        font-size: 0.8rem;
        letter-spacing: 0.15em;
        font-weight: initial;
        margin: 0rem;  
    }
}
</style>
