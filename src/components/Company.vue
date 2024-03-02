<template>
    <div class="home">
        <Header></Header>
        <main class="main">
            <section class="section__company">
                <div class="section__company--title">
                  <h1>COMPANY</h1>
                  <h3>会社概要</h3>
                </div>
                <div class="section__company--content">
                    <dl>
                        <dt>会社名</dt>
                        <dd>株式会社ACCELE SPEED</dd>

                        <dt>住所</dt>
                        <dd>埼玉県川口市青木2-6-43</dd>

                        <dt>電話番号</dt>
                        <dd>048-240-3840</dd>

                        <dt>代表者名</dt>
                        <dd>松橋望</dd>

                        <dt>主な事業内容</dt>
                        <dd>中古車販売、レンタカー</dd>

                        <dt>設立年月日</dt>
                        <dd>2017/10/25</dd>
                    </dl>
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
  name: 'COMPANY',
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
    &__company {
        text-align: center;
        font-size: var(--font-size-base);
        &--title {
            text-align: center;
            margin: 2.3rem 0;
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
              font-size: .8rem;
              font-family: var(--font-istok-web);
              font-weight: normal;
              margin: unset;
              margin-bottom: 0.8rem;
            }
        }

        dl {
            width: 50rem;
            margin: auto;
            @media screen and (max-width: 390px) {
                width: inherit;
            }
        }
        dt {
            text-align: start;
            margin-top: 0.5rem;
        }
        dd {
            text-align: end;
            margin-bottom: 0.5em;
            border-bottom: 1px solid;
            margin-left: 0;
        }
    }
}
@media screen and (max-width: 390px) {
    .section {
        &__company {

            &--title {
                border-bottom: 2px solid var(--color-steelblue);
            }
        }
    }
}
</style>