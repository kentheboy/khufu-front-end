<template>
  <footer class="footer">
    <div class="footer__content">
      <div class="sites">
        <div class="logo-container">
          <img alt="" src="/images/class-logo3-1@2x.png" :onClick="onCLASSLogo31Click" />
        </div>
        <a href="/company">会社概要</a>
        <a href="/terms">貸渡約款</a>
        <a href="/files/privacy_policy.pdf" target="_blank">プライバシーポリシー</a>
        <a href="https://column.class-rental-car.com/" target="_blank">コラムサイト <i class="pi pi-external-link"></i></a>
      </div>
      <div class="footer__content--postal-code">
        〒901-0203　沖縄県豊見城市長堂67
      </div>
      <div class="footer__content--contact">
        <div class="sns-links">
          <a class="instagram" href="https://www.instagram.com/class_rentalcar" target="_blank">
            <i class="pi pi-instagram"></i>
          </a>
          <a class="line" href="https://lin.ee/w5vv7ng" target="_blank">
            <img src="/images/icons/line.png" alt="" />
          </a>
        </div>
        <div class="hours">
          営業時間　{{ businessHours.open }}:00-{{
            businessHours.close
          }}:00
        </div>
        <a href="tel:098-996-7266">098-996-7266</a>
      </div>
    </div>
  </footer>
</template>
<script>
export default {
  name: "Footer",
  computed: {
    businessHours() {
      return this.$store.state.businessHours
    }
  }
};
</script>
<style lang="scss">
.footer {
  width: 100%;
  text-align: left;
  background-color: var(--color-skyblue);
  font-size: var(--font-size-5xs);
  color: var(--color-white);
  font-family: var(--font-noto-sans);
  font-optical-sizing: var(--font-default-optical-sizing);
  font-style: var(--font-default-style);
  overflow: hidden;
  padding: 1.9rem 0;

  .sns-links {
    float: right;

    a {
      margin-left: 1rem;

      &.instagram i {
        font-size: 2rem;
      }

      &.line {
        img {
          height: 2rem;
        }
      }
    }
  }

  &__content {
    margin: 0 7rem;
    font-size: 0.9rem;

    @media screen and (max-width: 390px) {
      margin: 0 3rem;
    }

    .sites {
      display: flex;
      margin-bottom: 1.8rem;
      align-items: center;
      flex-wrap: wrap;

      a {
        margin-left: 2rem;
        border-left: 0.18rem solid var(--color-white);
        padding-left: 2rem;
        height: fit-content;
        i {
          font-size: .8rem;
        }
      }
    }

    @media screen and (max-width: 390px) {
      .sites {
        .logo-container {
          flex-basis: 100%;
          margin-bottom: 1rem;
        }
        a {
          margin-left: initial;
          border-left: initial;
          padding-left: initial;
          height: 1.6rem;
          width: 50%;
        }
      }
    }

    &--postal-code {
      margin-bottom: 1rem;
    }

    &--contact {
      margin-bottom: 1.8rem;

      @media screen and (max-width: 390px) {
        flex-direction: column;
      }

      .phone-number {
        margin-left: 2rem;

        @media screen and (max-width: 390px) {
          margin-left: initial;
        }
      }
    }
  }
}
</style>
