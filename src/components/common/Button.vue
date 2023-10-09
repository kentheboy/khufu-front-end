<template>
    <button>
        {{ text }}
    </button>
</template>
<script>
export default {
    name: 'Button',
    props: {
        text: {
            type: String,
            required: true
        }
    }
}
</script>
<style lang="scss">
button {
    font-size: 1rem;
    margin-bottom: 1.5rem;
    background-color: #418EB8;
    border: none;
    color: white;
    padding: 0.6rem;
    width: 10rem;
    border-radius: 2rem;
    cursor: pointer;
}
</style>
