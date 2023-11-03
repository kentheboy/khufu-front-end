<template>
    <div class="credit-card-info">
        <Input type="text" label="クレジットカード番号" name="credit-card-number" placeholder="1234567890"></Input>
        <div class="expiration">
            <label>カード有効期限</label>
            <div class="expiration-inputs">
                <Input type="number" min="1" max="12"/>
                <span>/</span>
                <Input type="number" min="2023" max="2099" step="1" value="2023"/>
            </div>
        </div>
        <Input type="text" label="セキュリティコード" name="credit-card-cvv" placeholder="123" classes="credit-card-cvv"></Input>
    </div>
</template>
<script>
import Input from "/src/components/common/form/Input";
export default {
    name: 'CreditCardInfo',
    components: {
        Input
    }
}
</script>
<style lang="scss" scoped>
.credit-card-info {
    .expiration {
        width: 24.4rem;
        text-align: start;
        label {
            display: block;
            margin-bottom: 0.3rem;
        }
        .expiration-inputs {
            display: flex;
            ::v-deep .input-area {
                width: 5.2rem;
                display: block;
            }
            span {
                display: block;
                margin: 0.5rem;
                color: initial;
                font-size: 1rem;
            }
        }
    }
    ::v-deep .input-area.credit-card-cvv{
        input {
            width: 5.2rem;
        }
    }
}
</style>
