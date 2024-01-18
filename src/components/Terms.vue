<template>
    <div class="home">
        <Header></Header>
        <main class="main">
            <section class="section__terms">
                <div class="section__terms--title">
                  <h1>Terms</h1>
                  <h3>貸渡約款</h3>
                </div>
                <div class="section__terms--content">
                    <div class="terms__chapter">
                        <h2 class="terms__chapter--title">第一章 総則</h2>
                        <div class="terms__chapter--paragraph">
                            <h3 class="terms__chapter--paragraph-title">第一条 (約款の適応)</h3>
                            <ol class="terms__chapter--paragraph-content">
                                <li>
                                    当社はこの約款(以下「約款」という)及び細則の定めるところにより、貸渡自動
                                    車(以下「レンタカー」という)を借受人に貸渡すものとし、借受人はこれを借受
                                    けるものとしますなお、約款及び細則に定めのない事項については、法令又は一
                                    般の習によるものとします。
                                </li>
                                <li>
                                    当社は、約款及び細則の趣旨法令及び一般の慣習に反しない範囲で特約に応ずる
                                    ことがあります。特約した場合には、その特約が約款及び細則に優先するものとし
                                    ます。
                                </li>
                            </ol>
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
  name: 'Terms',
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
    &__terms {
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
    }
}
.terms__chapter {
    text-align: left;
    &--title {
        height: 4rem;
        border-left: 0.3rem solid var(--color-skyblue);
        padding: 0 0.5rem;
        margin-right: 4rem;
    }
    &--paragraph {
        color: var(--color-black);
        &-content {
            font-size: 1rem;
        }
    }
}

@media screen and (max-width: 390px) {
    .section {
        &__terms {
            &--content {
                margin: initial;
                width: initial;
            }
        }
    }
}
</style>