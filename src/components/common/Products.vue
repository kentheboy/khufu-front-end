<template>
    <div class="products">
        <div class="product__card">
            <img src="/img/main5@3x.fb64a8f0.png">
            <div class="product__card--description">
                <div class="product__card--description-title">ALPHARD</div>
                <div class="product__card--description-passenger">乗車定員　7人</div>
                <hr>
                <div class="product__card--description-price">¥25,000~/24h</div>
                <div class="product__card--description-select-buttons">
                    <Button text="会員の方"></Button>
                    <Button text="はじめての方"></Button>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import Button from "/src/components/common/Button";
export default {
    name: 'Products',
    components: {
        Button
    }
}
</script>
<style lang="scss" scoped>
.products {
    display: flex;
    justify-content: center;

    .product__card {
        border-radius: 3.49px;
        background-color: var(--color-lightblue);
        box-shadow: 4px 4px 8px rgba(0, 0, 0, 0.25);
        width: 18.15rem;
        height: 23.39rem;
        display: inline-block;

        img {
            width: 18.15rem;
            height: 14.06rem;
        }

        &--description {
            position: relative;
            height: 8rem;

            &-title {
                position: absolute;
                top: 0;
                left: 1rem;
                font-size: var(--font-size-base);
                letter-spacing: 0.1em;
                color: var(--color-black);
            }

            &-passenger {
                position: absolute;
                top: 0.71rem;
                right: 1rem;
                letter-spacing: 0.15em;
                display: inline-block;
                width: 6.3rem;
                height: 1.1rem;
                color: var(--color-black);
            }

            hr {
                position: absolute;
                top: 1.7rem;
                left: 6.5rem;
                width: 30%;
                border: solid 0.1px #c4cfd5;
            }

            &-price {
                font-size: 1.2rem;
                letter-spacing: 0.15em;
                position: absolute;
                top: 2.8rem;
                right: 1rem;
                color: var(--color-black);
            }

            &-select-buttons {
                display: flex;
                padding: 0 1.5rem;
                justify-content: space-around;
                position: relative;
                top: 5.5rem;

                &::v-deep button {
                    width: 7rem;
                    font-size: var(--font-size-5xs);
                    letter-spacing: 0.1em;
                    margin: 0;
                    box-shadow: 0.9974358678px 1.9948717356px 1.99px rgba(0, 0, 0, 0.25);
                    cursor: pointer;
                }
            }
        }
    }
}
</style>
