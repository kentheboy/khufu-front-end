<template>
    <div
        class="products"
        v-if="products"
    >
        <div 
            class="product__card"
            v-for="(product, index) in products"
            v-bind:key="index"
        >
            <img :src="product.main_image">
            <div class="product__card--description">
                <div class="product__card--description-title">{{product.title}}</div>
                <div class="product__card--description-passenger">乗車定員　{{ product.passenger }}人</div>
                <hr>
                <div class="product__card--description-price">¥{{ addCommas(product.price) }}~/1day</div>
                <div class="product__card--description-icons">
                    <img 
                        class="product__card--description-icon"
                        :src="`/images/icons/smoking_${product.isSmokingAllowed ? 'allowed' : 'unallowed'}.png`"
                        alt="喫煙可（電子タバコのみ）"
                    >
                </div>
                <div class="product__card--description-select-buttons">
                    <Button
                        text="すぐ予約する"
                        @click="selected(product.id)"
                    ></Button>
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
    },
    props: {
        products: {
            type: Array,
            default: () => (
                [
                    {
                        title: "ALPHARD",
                        main_image: "/img/main5@3x.fb64a8f0.png",
                        passenger: 7,
                        price: 25000,
                        isSmokingAllowed: false
                    },
                    {
                        title: "ALPHARD",
                        main_image: "/img/main5@3x.fb64a8f0.png",
                        passenger: 7,
                        price: 25000,
                        isSmokingAllowed: true
                    }
                ]
            )
        }
    },
    methods: {
        selected(selcetedProductId) {
            this.$emit("selected", selcetedProductId);
        },
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
.products {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    @media screen and (max-width: 390px) {
        flex-direction: column;
    }

    .product__card {
        border-radius: 3.49px;
        background-color: var(--color-lightblue);
        box-shadow: 4px 4px 8px rgba(0, 0, 0, 0.25);
        width: 18.15rem;
        height: 24.39rem;
        display: inline-block;
        margin: 1rem 2rem;

        img {
            width: 18.15rem;
            height: 14.06rem;
            &.product__card--description-icon {
                width: 1rem;
                height: auto;
            }
        }

        &--description {
            position: relative;
            height: 8rem;

            &-title {
                position: absolute;
                top: 0;
                left: 1rem;
                font-size: 1.4rem;
                letter-spacing: 0.1em;
                color: var(--color-black);
                font-weight: bold;
            }

            &-passenger {
                position: absolute;
                top: 0.71rem;
                right: 1rem;
                letter-spacing: 0.05em;
                display: inline-block;
                width: 6.6rem;
                height: 1.1rem;
                color: var(--color-black);
                font-weight: bold;
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
                letter-spacing: 0.05em;
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
                top: 6.5rem;

                &::v-deep button {
                    width: 7rem;
                    font-size: var(--font-size-5xs);
                    letter-spacing: 0.1em;
                    margin: 0;
                    box-shadow: 0.9974358678px 1.9948717356px 1.99px rgba(0, 0, 0, 0.25);
                    cursor: pointer;
                }
            }

            &-icons {
                position: absolute;
                top: 4.8rem;
                right: 1rem;
            }
        }
    }
}
</style>
