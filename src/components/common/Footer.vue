<template>
    <footer class="footer">
        <div class="footer__content">
            <img class="logo" alt="" src="/images/class-logo3-1@2x.png" :onClick="onCLASSLogo31Click" />
            <div class="footer__content--postal-code">〒901-0203　沖縄県豊見城市長堂67</div>
            <div class="footer__content--contact">
                <div class="sns-links">
                    <a class="instagram" href="https://www.instagram.com/class_rentalcar" target="_blank">
                        <i class="pi pi-instagram"></i>
                    </a>
                    <a class="line" href="https://lin.ee/w5vv7ng" target="_blank">
                        <img src="/images/icons/line.png" alt="">
                    </a>
                </div>
                <div class="hours">営業時間　8:00-18:00</div>
                <a href="tel:098-996-7266">098-996-7266</a>
            </div>
        </div>
    </footer>
</template>
<script>
export default {
    name: 'Footer',
}
</script>
<style lang="scss">
.footer {
    width: 100%;
    text-align: left;
    background-color: var(--color-skyblue);
    font-size: var(--font-size-5xs);
    color: var(--color-white);
    font-family: var(--font-istok-web);
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
        font-size: .9rem;
        @media screen and (max-width: 390px) {
            margin: 0 3rem;
        }
        .logo {
            margin-bottom: 1.8rem;
        }
        &--postal-code {
            margin-bottom: 1.8rem;
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
