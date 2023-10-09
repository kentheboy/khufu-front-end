<template>
    <div class="input-area">
        <label v-if="label">{{label}}</label>
        <input
            :type="type"
            :name="name"
            :placeholder="placeholder"
        >
    </div>
</template>
<script>
export default {
    name: 'Input',
    props: {
        type: {
            type: String,
            default: "text",
            required: true
        },
        name: {
            type: String,
            default: "text",
            required: true
        },
        label: {
            type: String
        },
        placeholder: {
            type: String,
            default: null
        }
    }
}
</script>
<style lang="scss" scoped>
.input-area {
    width: 24.4rem;
    text-align: start;
    margin-bottom: 2rem;
    label {
      display: block;
      margin-bottom: 0.3rem;
    }
    input {
      border: none;
      background-color: var(--color-aliceblue);
      border-radius: 24.94px;
      box-shadow: 2px 2px 2px rgba(0, 0, 0, 0.25);
      width: 100%;
      box-sizing: border-box;
      height: 2.09rem;
      padding-left: 1.25rem;
      padding-right: 1.25rem;
    }
  }
</style>
