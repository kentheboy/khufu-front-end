<template>
    <div class="section__information--car-images">
        <div class="main-image">
            <img :src="information.main_image" alt="">
            <div class="info-logos">
                <div class="div29 passenger-info">
                    <img class="vectorIcon1" alt="" src="/images/vector.svg" />
                    <img class="vectorIcon2" alt="" src="/images/vector1.svg" />
                    <img class="vectorIcon3" alt="" src="/images/vector2.svg" />
                    <img class="vectorIcon4" alt="" src="/images/vector3.svg" />
                    <div class="passenger-number">{{ information.maxmumPassenger }}人</div>
                </div>
                <div class="mode">
                    <div class="at">AT</div>
                </div>
                <img
                    class="no-smoking"
                    alt=""
                    :src="`/images/icons/smoking_${information.isSmokingAllowed ? 'allowed' : 'unallowed'}.png`" 
                />
            </div>
        </div>
        <div class="sub-images">
            <img :src="information.images[0]" alt="">
            <img
                v-if="information.images[1]"
                :src="information.images[1]"
            >
            <img
                v-if="information.images[2]"
                :src="information.images[2]"
            >
            <img
                v-if="information.images[3]"
                :src="information.images[3]"
            >
        </div>
    </div>
</template>
<script>
export default {
    name: 'CarInfo',
    props: {
        information: {
            type: Object,
            default: () => {
                return {
                    main_image: "/images/car-images/main4.png",
                    images: [
                        "/images/car-images/main1.png",
                        "/images/car-images/main2.png",
                        "/images/car-images/main3.png",
                        "/images/car-images/main4.png"
                    ],
                    maxmumPassenger: 7,
                    isSmokingAllowed: false
                }
            }
        }
    }
}
</script>
<style lang="scss">
.section__information {
    &--car-images {
        display: flex;
        justify-content: space-between;
        margin-bottom: 3rem;

        .main-image {
            width: 15.16rem;
            display: flex;
            flex-direction: column;
            @media screen and (max-width: 390px) {
                width: 10.16rem;
            }

            img {
                width: 100%;
            }

            .info-logos {
                position: relative;

                .passenger-info {
                    position: absolute;
                    top: 0.7rem;
                    left: 0rem;
                    width: 3.16rem;
                    height: 1.1rem;
                    color: var(--color-steelblue);

                    .vectorIcon1 {
                        position: absolute;
                        top: 0.5rem;
                        left: 0.79rem;
                        width: 0.32rem;
                        height: 0.35rem;
                    }

                    .vectorIcon2 {
                        position: absolute;
                        top: 0.04rem;
                        left: 0.2rem;
                        width: 0.41rem;
                        height: 0.41rem;
                    }

                    .vectorIcon3 {
                        position: absolute;
                        top: 0.04rem;
                        left: 0.64rem;
                        width: 0.27rem;
                        height: 0.41rem;
                    }

                    .vectorIcon4 {
                        position: absolute;
                        top: 0.49rem;
                        left: 0rem;
                        width: 0.81rem;
                        height: 0.35rem;
                    }

                    .passenger-number {
                        font-size: smaller;
                        position: absolute;
                        top: 0rem;
                        left: 1.36rem;
                        letter-spacing: 0.15em;
                        display: inline-block;
                        width: 1.8rem;
                        height: 1.1rem;
                    }
                }

                .mode {
                    position: absolute;
                    top: 0.7rem;
                    left: 3.25rem;
                    border-radius: 2.49px;
                    background-color: var(--color-steelblue);
                    width: 1.5rem;
                    height: 1rem;

                    .at,
                    .mn {
                        position: absolute;
                        font-size: smaller;
                        top: 0rem;
                        left: 0.21rem;
                        letter-spacing: 0.15em;
                        display: inline-block;
                        width: 1.2rem;
                        height: 1rem;
                        color: #fff;
                        background: none;
                    }
                }

                .no-smoking {
                    position: absolute;
                    top: 0.5rem;
                    left: 5.63rem;
                    width: 1.07rem;
                    height: 1.07rem;
                    -o-object-fit: cover;
                    object-fit: cover;
                }
            }
        }

        .sub-images {
            display: flex;
            flex-wrap: wrap;
            width: 15.16rem;
            @media screen and (max-width: 390px) {
                width: 9.16rem;
            }

            img {
                width: 7.58rem;
                height: 6.86rem;
                @media screen and (max-width: 390px) {
                    width: 4.28rem;
                    height: auto;
                }
            }
        }
    }
}</style>