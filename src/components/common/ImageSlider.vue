<template>
    <div class="image-slider">
      <div class="logo">
        <img src="/images/hero-mage-logo.png"/>
      </div>
      <transition-group name="fade" tag="div">
        <div v-for="i in [currentIndex]" :key="i" class="image-slider__image-parent">
          <img :src="currentImg" />
        </div>
      </transition-group>
      <a class="prev" @click="prev" href="#">&#10094;</a>
      <a class="next" @click="next" href="#">&#10095;</a>
    </div>
  </template>
<script>
export default {
  name: "ImageSlider",
  data() {
    return {
      timer: null,
      currentIndex: 0
    };
  },
  props: {
    images: {
      type: Array,
      default: () => {
        return [
          "https://cdn.pixabay.com/photo/2015/12/12/15/24/amsterdam-1089646_1280.jpg",
          "https://cdn.pixabay.com/photo/2016/02/17/23/03/usa-1206240_1280.jpg",
          "https://cdn.pixabay.com/photo/2016/12/04/19/30/berlin-cathedral-1882397_1280.jpg"
        ]
      }
    }
  },
  mounted: function() {
    this.startSlide();
  },
  methods: {
    startSlide: function() {
      this.timer = setInterval(this.next, 4000);
    },
    next: function() {
      this.currentIndex += 1;
    },
    prev: function() {
      this.currentIndex -= 1;
    }
  },
  computed: {
    currentImg: function() {
      return this.images[Math.abs(this.currentIndex) % this.images.length];
    }
  }
};
</script>
<style lang="scss" scoped>
.image-slider {
  height: 45rem;
  position: relative;

  .logo {
    position: absolute;
    margin: 3rem auto;
    width: 100%;
    text-align: center;
    z-index: 2;
    img {
      max-width: 25rem;
    }
  }

  &__image-parent {
    display: flex;
    justify-content: space-around;
    overflow: hidden;

    img {
      height:600px;
    }

    &:nth-child(2) {
      z-index: -1;
    }
  }

  .fade-enter-active,
  .fade-leave-active {
    transition: all 1s ease;
    overflow: hidden;
    visibility: visible;
    position: absolute;
    width:100%;
    opacity: 1;
  }
  
  .fade-enter,
  .fade-leave-to {
    visibility: hidden;
    width:100%;
    opacity: 0;
  }
  
  .prev, .next {
    cursor: pointer;
    position: absolute;
    top: 40%;
    width: auto;
    padding: 16px;
    color: white;
    font-weight: bold;
    font-size: 18px;
    transition: 0.7s ease;
    text-decoration: none;
    user-select: none;
    background-color: #c5c5c5;
  }
  
  .next {
    right: 0;
    border-radius: 4px 0 0 4px;
  }
  
  .prev {
    left: 0;
    border-radius: 0 4px 4px 0;
  }
}
</style>
