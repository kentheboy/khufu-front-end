<template>
    <div v-if="type==='address'" class="input-area">
        <label>住所</label>
        <span>〒</span>
        <input type="text" name="postalcode">
        <br>
        <select>
            <option>北海道</option>
            <option>東京都</option>
        </select>
        <input type="text" name="addressline">
    </div>
    <div v-else-if="type==='airport-timpicker'" class="input-area airport-timpicker">
        <div class="airport-timpicker__headline">
            <label v-if="label">{{ label }}</label>
            <div class="airport-timpicker__headline--pickup">
                <input type="radio" name="airport-pickup" value="yes">あり
                <input type="radio" name="airport-pickup" value="no">なし
            </div>
        </div>
        <input type="time" :name="name" :placeholder="placeholder">
    </div>
    <div v-else class="input-area">
        <label v-if="label">{{ label }}</label>
        <input :type="type" :name="name" :placeholder="placeholder">
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

        &[name=postalcode] {
            width: 6.8rem;
            margin-left: .5rem;
        }

        &[name=addressline] {
            width: 16.6rem;
            margin-left: .5rem;
            display: inline-block;
        }
    }

    select {
        display: inline-block;
        border: none;
        background-color: var(--color-aliceblue);
        border-radius: 24.94px;
        box-shadow: 2px 2px 2px rgba(0, 0, 0, 0.25);
        width: 7rem;
        box-sizing: border-box;
        height: 2.09rem;
        padding-left: 1.25rem;
        padding-right: 1.25rem;
        margin-top: .3rem;
    }
}
.airport-timpicker {
    &__headline {
        display: flex;
        justify-content: space-between;
        width: 12.5rem;
        &--pickup {
            input[type=radio] {
                width: auto;
                box-shadow: initial;
                margin: 0.1rem 0.3rem;
                height: 0.9rem;
            }
        }
    }
    input[type=time] {
        width: 7.8rem;
    }
}
</style>
