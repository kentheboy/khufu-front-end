<template>
    <div class="product__card">
        <img :src="product.main_image">
        <div class="product__card--description">
            <div class="product__card--description-title">{{ product.title }}</div>
            <div class="product__card--description-passenger">乗車定員　{{ product.passenger }}人</div>
        </div>
    </div>
</template>
<script>
export default {
    name: 'ProductCard',
    props: {
        product: {
            type: Object,
            default: () => (
                {
                    title: "ALPHARD",
                    main_image: "/img/main5@3x.fb64a8f0.png",
                    passenger: 7,
                    price: 25000,
                    isSmokingAllowed: false
                }
            )
        }
    }
}
</script>
<style lang="scss" scoped>
.product__card {
    border-radius: 3.49px;
    background-color: var(--color-lightblue);
    box-shadow: 4px 4px 8px rgba(0, 0, 0, 0.25);
    width: 18.15rem;
    height: 20.39rem;
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
        font-weight: bold;

        &-title {
            position: absolute;
            top: 1.8rem;
            left: 1rem;
            font-size: 1.4rem;
            letter-spacing: 0.1em;
            color: var(--color-black);
        }

        &-passenger {
            position: absolute;
            top: 2.2rem;
            right: 1rem;
            letter-spacing: 0.15em;
            display: inline-block;
            width: 6.6rem;
            height: 1.1rem;
            color: var(--color-black);
        }
    }
}
</style>
