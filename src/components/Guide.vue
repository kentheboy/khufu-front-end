<template>
    <div class="home">
        <Header></Header>
        <main class="main">
            <section class="section__guide">
                <div class="section__guide--title">
                  <h1>GUIDE</h1>
                  <h3>{{ $t('guide.GUIDE') }}</h3>
                </div>
                <div class="section__guide--content">
                    <div class="steps__diagram">
                        <div class="steps__diagram--card">
                            <div class="step-number">01</div>
                            <hr>
                            <p class="step-title">{{ $t('guide.Reservation') }}</p>
                        </div>
                        <div class="steps__diagram--arrow">
                            <i class="pi pi-angle-right"></i>
                        </div>
                        <div class="steps__diagram--card">
                            <div class="step-number">02</div>
                            <hr>
                            <p class="step-title">{{ $t('guide.Meet At Store') }}</p>
                        </div>
                        <div class="steps__diagram--arrow">
                            <i class="pi pi-angle-right"></i>
                        </div>
                        <div class="steps__diagram--card">
                            <div class="step-number">03</div>
                            <hr>
                            <p class="step-title">{{ $t('guide.Departure') }}</p>
                        </div>
                        <div class="steps__diagram--arrow">
                            <i class="pi pi-angle-right"></i>
                        </div>
                        <div class="steps__diagram--card">
                            <div class="step-number">04</div>
                            <hr>
                            <p class="step-title">{{ $t('guide.Return') }}</p>
                        </div>
                    </div>
                    <div class="steps__descriptions">
                        <div class="step__description">
                            <div class="step__description--number">
                                01
                            </div>
                            <div class="step__description--text">
                                <h3 class="step-title">{{ $t('guide.Reservation') }}</h3>
                                <p class="step-description">
                                    {{ $t('guide.After making a reservation, we will send you a reservation completion notification e-mail and information (official LINE account or KakaoTalk QR code), so please let us know the airport pick-up time, hotel pick-up time, etc via the official LINE account or KakaoTalk Please let us know the airport pick-up and drop-off times, hotel pick-up and drop-off times, etc via our official LINE account or KakaoTalk') }}
                                </p>
                            </div>
                        </div>
                        <div class="step__description">
                            <div class="step__description--number">
                                02
                            </div>
                            <div class="step__description--text">
                                <h3 class="step-title">{{ $t('guide.Meet At Store') }}</h3>
                                <p class="step-description">
                                    {{ $t('guide.Please come to the store where you made your reservation, After showing the following items, you will be asked to sign a “Rental Agreement”') }}
                                </p>
                                <p class="step-description">
                                    {{ $t('guide.What you need') }}<br>
                                    ・{{ $t("guide.Drivers license") }}<br>
                                    ・{{ $t('guide.Proof of current address other than drivers license (not required for credit card payment)') }}<br>
                                </p>
                            </div>
                        </div>
                        <div class="step__description">
                            <div class="step__description--number">
                                03
                            </div>
                            <div class="step__description--text">
                                <h3 class="step-title">{{ $t('guide.Departure') }}</h3>
                                <p class="step-description">
                                    {{ $t('guide.Before departure, please receive “precautions and accident compensation explanation” from the store staff After the explanation of vehicle operation and vehicle check, please depart') }} }}
                                </p>
                            </div>
                        </div>
                        <div class="step__description">
                            <div class="step__description--number">
                                04
                            </div>
                            <div class="step__description--text">
                                <h3 class="step-title">{{ $t('guide.Return') }}</h3>
                                <p class="step-description">
                                    {{ $t('guide.Please return the car before the contracted time after filling up the fuel tank at a gas station near the return store') }}
                                </p>
                            </div>
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
import ScrollTop from 'primevue/scrolltop';
import Footer from "/src/components/common/Footer";
export default {
  name: 'Guide',
  components: {
    Header,
    ScrollTop,
    Footer
  }
}
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
    &:first-child {
        margin: 4rem 2.4rem 8rem;
    }
}
.section {
    &__guide {
        text-align: center;
        font-size: var(--font-size-base);
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
                background-color: var(--color-skyblue);
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
                    color: var(--color-black)
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
                    border-left: 0.3rem solid var(--color-skyblue);
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

        
    }
}
@media screen and (max-width: 390px) {
    .section {
        &__guide {

            &--title {
                h3 {
                    font-size: .8rem;
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


}
</style>
