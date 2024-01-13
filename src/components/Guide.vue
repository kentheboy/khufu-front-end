<template>
    <div class="home">
        <Header></Header>
        <main class="main">
            <section class="section__guide">
                <div class="section__guide--title">
                  <h1>Guide</h1>
                  <h3>ご利用ガイド</h3>
                </div>
                <div class="section__guide--content">
                    <div class="steps__diagram">
                        <div class="steps__diagram--card">
                            <div class="step-number">01</div>
                            <hr>
                            <p class="step-title">ご予約</p>
                        </div>
                        <div class="steps__diagram--arrow">
                            <i class="pi pi-angle-right"></i>
                        </div>
                        <div class="steps__diagram--card">
                            <div class="step-number">02</div>
                            <hr>
                            <p class="step-title">ご来店</p>
                        </div>
                        <div class="steps__diagram--arrow">
                            <i class="pi pi-angle-right"></i>
                        </div>
                        <div class="steps__diagram--card">
                            <div class="step-number">03</div>
                            <hr>
                            <p class="step-title">ご出発</p>
                        </div>
                        <div class="steps__diagram--arrow">
                            <i class="pi pi-angle-right"></i>
                        </div>
                        <div class="steps__diagram--card">
                            <div class="step-number">04</div>
                            <hr>
                            <p class="step-title">ご返却</p>
                        </div>
                    </div>
                    <div class="steps__descriptions">
                        <div class="step__description">
                            <div class="step__description--number">
                                01
                            </div>
                            <div class="step__description--text">
                                <h3 class="step-title">ご予約</h3>
                                <p class="step-description">
                                    予約後に、予約完了通知メールとご案内<br>
                                    （LINE公式アカウントまたはカカオトークのQRコード）を送付いたしますので、<br>
                                    空港送迎時間やホテル送迎時間等を<br>
                                    LINE公式アカウントまたはカカオトークにてお知らせくださいませ。<br>
                                    ※メールでのお問い合わせは行なっておりません。
                                </p>
                            </div>
                        </div>
                        <div class="step__description">
                            <div class="step__description--number">
                                02
                            </div>
                            <div class="step__description--text">
                                <h3 class="step-title">ご来店</h3>
                                <p class="step-description">
                                    ご予約いただいた店舗にご来店いただき、<br>
                                    下記必要なものをご掲示頂いた後、『貸渡契約書』にサイン頂きます。<br>
                                    <br>
                                    必要なもの<br>
                                    ・運転免許証<br>
                                    ・免許証以外の現住所が確認できるもの（クレジットカード決済の場合は不要）<br>
                                </p>
                            </div>
                        </div>
                        <div class="step__description">
                            <div class="step__description--number">
                                03
                            </div>
                            <div class="step__description--text">
                                <h3 class="step-title">ご出発</h3>
                                <p class="step-description">
                                    ご出発前に、店舗スタッフからの『注意事項、事故補償説明』をお受けください。<br>
                                    車両操作の説明並びに車体チェック終了後、ご出発いただきます。
                                </p>
                            </div>
                        </div>
                        <div class="step__description">
                            <div class="step__description--number">
                                04
                            </div>
                            <div class="step__description--text">
                                <h3 class="step-title">ご返却</h3>
                                <p class="step-description">
                                    ご契約の時間までにご返却ください。<br>
                                    ご返却店舗付近のガソリンスタンドで燃料を満タンにした上、ご返却ください。
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </main>
        <Footer></Footer>
    </div>
</template>
<script>
import Header from "/src/components/common/Header";
import Footer from "/src/components/common/Footer";
export default {
  name: 'Guide',
  components: {
    Header,
    Footer
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
                font-family: var(--font-istok-web);
                font-weight: normal;
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
                    font-size: 2rem;
                    margin-top: 3.7rem;
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