<template>
    <div v-if="type==='address'" :class="`input-area ${classes}`">
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
    <div v-else-if="type==='file'" :class="`input-area ${classes}`">
        <input 
            @change="onImageSelector($event)"
            :type="type"
            :name="name"
            :placeholder="placeholder"
            :multiple="false" 
            ref="fileInput"
            accept="image/png, image/jpeg"
        >
        <div class="file-input" @click="openImageSelector()">
            <img v-if="dataURL" :src="dataURL" alt="">
            <span v-if="dataURL" class="file-delete" @click="deleteImage"><img src="/images/icons/cross.png"></span>
            <p v-else>クリックして画像を選択</p>
        </div>
    </div>
    <div v-else :class="`input-area ${classes}`">
        <label v-if="label">{{ label }}</label>
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
        },
        classes: {
            type: String,
            default: null
        },
        value : { 
            type: [String, Number],
            default: ""
        },
    },
    data() {
        return {
            dataURL: null
        }
    },
    methods: {
        openImageSelector() {
            console.log(this.$refs.fileInput);
            let fileInput = this.$refs.fileInput;
            fileInput.click();
        },
        async onImageSelector($event) {
            if ($event.target.files[0]) {
                this.dataURL = await this.convertToBase64($event.target.files[0]);
            }
        },
        convertToBase64(file) {
            // convert to binary image src
            return new Promise((resolve, reject) => {
                const reader = new FileReader()
                reader.readAsDataURL(file)
                reader.onload = () => resolve(reader.result)
                reader.onerror = error => reject(error)
            });
        },
        deleteImage() {
            this.dataURL = null;
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

        &[type=file] {
            display: none;
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
.file-input {
    border: none;
    background-color: var(--color-aliceblue);
    border-radius: 7px;
    box-shadow: 2px 2px 2px rgba(0, 0, 0, 0.25);
    width: 100%;
    box-sizing: border-box;
    height: 12rem;
    text-align: center;
    color: #757575;
    font-size: 1rem;
    padding: 1rem;
    position: relative;
    p {
        position: absolute;
        left: 27%;
        top: 30%;
    }
    img {
        max-width: 21rem;
        max-height: 10rem;
    }
    .file-delete {
        width: fit-content;
        position: absolute;
        top: .25rem;
        right: .25rem;
        cursor: pointer;;
        img {
            width: 1.5rem;
        }
    }
}
</style>
