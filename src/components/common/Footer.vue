<template>
    <footer class="footer">
        <div class="footer__content">
            <img class="logo" alt="" src="/images/class-logo3-1@2x.png" :onClick="onCLASSLogo31Click" />
            <div class="footer__content--postal-code">〒901-0203　沖縄県豊見城市長堂67</div>
            <div class="footer__content--contact">
                <div class="hours">営業時間　8:00-18:00</div>
                <div class="phone-number">問合せ　080-0000-0000</div>
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
    position: initial;
    width: 100%;
    height: 11.3rem;
    text-align: left;
    background-color: var(--color-skyblue);
    font-size: var(--font-size-5xs);
    color: var(--color-white);
    font-family: var(--font-istok-web);
    overflow: hidden;
    padding: 1.9rem 0;
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
            display: flex;
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
