<template>
    <div class="credit-card-info">
        <Input type="text" label="クレジットカード番号" name="credit-card-number" placeholder="1234567890"></Input>
        <div class="expiration">
            <label>有効期限</label>
            <div class="expiration-inputs">
                <input type="number" min="1" max="12"/>
                <span>/</span>
                <input type="number" min="2023" max="2099" step="1" value="2023"/>
            </div>
        </div>
        <Input type="text" label="セキュリティコード" name="credit-card-number" placeholder="123"></Input>
    </div>
</template>
<script>
import Input from "/src/components/common/form/Input";
export default {
    name: CreditCardInfo,
    component: {
        Input
    }
}
</script>
<style lang="scss" scoped>
.credit-card-info {
    .expiration {
        width: 24.4rem;
        text-align: start;
        margin-bottom: 2rem;
    }
}
</style>
