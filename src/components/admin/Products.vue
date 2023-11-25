<template>
    <div class="product-list">
        <h2>車種一覧</h2>
        <DataTable :value="products" responsiveLayout="scroll" class="product-list__table">
            <Column field="id" header="ID" :sortable="true"></Column>
            <Column field="name" header="Name" :sortable="true"></Column>
            <Column field="licenseNumber" header="licenseNumber" :sortable="true"></Column>
            <Column field="syakenDate" header="syakenDate" :sortable="true"></Column>
            <Column field="tenkenDate" header="tenkenDate" :sortable="true"></Column>
            <Column field="status" header="Status" :sortable="true"></Column>
            <Column header="Action">
                <template #body="slotProps">
                    <div class="product-list__table--action_buttons">
                        <Button icon="pi pi-pencil" class="p-button-rounded p-button-success p-mr-2 icon_only" severity="info" text rounded @click="editProduct(slotProps.data)"></Button>
                        <Button icon="pi pi-trash" class="p-button-rounded p-button-warning icon_only" disabled></Button>
                    </div>
                </template>
            </Column>
        </DataTable>
        <Dialog 
            v-model:visible="productDialog"
            maximizable
            header=""
            :modal="true"
            class="p-fluid product-edit"
        >
            <div class="customTitle">
                <h1>CAR INFORMATION</h1>
                <h3>車両情報</h3>
            </div>
            <div class="product-edit__content">
                <Input type="text" label="車両名" name="name" placeholder="アルファード１"></Input>
                <Input type="text" label="車両情報" name="licenseNumber" placeholder="沖縄　301 わ　2609"></Input>
                <Input type="date" label="車検期限" name="syakenDate"></Input>
                <Input type="date" label="点検期限" name="tenkenDate"></Input>
            </div>
            <template #footer>
                <Button label="完了" @click="visible = false" autofocus />
            </template>
        </Dialog>
        <Dialog v-model:visible="deleteProductDialog" :style="{width: '450px'}" header="Confirm" :modal="true">
            <div class="confirmation-content">
                <i class="pi pi-exclamation-triangle p-mr-3" style="font-size: 2rem" />
                <span v-if="selectedProduct">Are you sure you want to delete <b>{{selectedProduct.name}}</b>?</span>
            </div>
            <template #footer>
                <Button label="No" icon="pi pi-times" class="p-button-text" @click="deleteProductDialog = false"></Button>
                <Button label="Yes" icon="pi pi-check" class="p-button-text" @click="deleteProduct" autofocus></Button>
            </template>
        </Dialog>
    </div>
</template>

<script>
import DataTable from 'primevue/datatable';
import Column from 'primevue/column';
import Dialog from 'primevue/dialog';
import Button from "primevue/button";
import Input from "/src/components/common/form/Input";

// import { mapState, mapActions } from 'vuex';
export default {
    components: {
        DataTable,
        Column,
        Dialog,
        Button,
        Input
    },
    data() {
        return {
            products: [
                {
                    id: 1,
                    name: 'アルファード',
                    licenseNumber: '沖縄　301 わ　2609',
                    syakenDate: '2024/12/31',
                    tenkenDate: '2024/12/31',
                    status: 1,
                },
                {
                    id: 2,
                    name: 'ヴェルファイア',
                    licenseNumber: '沖縄　302 わ　2609',
                    syakenDate: '2024/12/30',
                    tenkenDate: '2024/12/31',
                    status: 1,
                },
                {
                    id: 3,
                    name: 'アルファード',
                    licenseNumber: '沖縄　301 わ　2609',
                    syakenDate: '2024/12/31',
                    tenkenDate: '2024/12/31',
                    status: 1,
                },
                {
                    id: 4,
                    name: 'ヴェルファイア',
                    licenseNumber: '沖縄　302 わ　2609',
                    syakenDate: '2024/12/31',
                    tenkenDate: '2024/12/31',
                    status: 1,
                }
            ],
            productDialog: false,
            deleteProductDialog: false,
            selectedProduct: null,
            validationErrors: {},
            statuses: [
                {label: 'Available', value: 'Available'},
                {label: 'Unavailable', value: 'Unavailable'},
            ]
        }
    },
    computed: {
        // ...mapState({
        //     products: state => state.product.products
        // })
    },
    methods: {
        // ...mapActions({
        //     getProducts: 'product/getProducts',
        //     updateProduct: 'product/updateProduct',
        //     deleteProductAction: 'product/deleteProduct'
        // }),
        editProduct(product) {
            this.selectedProduct = {...product};
            this.productDialog = true;
        },
        // confirmDelete(product) {
        //     this.selectedProduct = product;
        //     this.deleteProductDialog = true;
        // },
        // saveProduct() {
        //     this.validationErrors = {};

        //     if (!this.selectedProduct.name) {
        //         this.validationErrors.name = 'Name is required.';
        //     }

        //     if (!this.selectedProduct.category) {
        //         this.validationErrors.category = 'Category is required.';
        //     }

        //     if (!this.selectedProduct.price || this.selectedProduct.price < 0) {
        //         this.validationErrors.price = 'Price is required and must be a positive number.';
        //     }

        //     if (!this.selectedProduct.rating || this.selectedProduct.rating < 0) {
        //         this.validationErrors.rating
    },
    created() {
        // this.getProducts();
    }
}
</script>

<style lang="scss" scoped>
.product-list {
    &__table{
        &--action_buttons{
            display: flex;
            justify-content: space-between;
        }
    }
}
.product-edit {
    &__content {
        display: flex;
        flex-direction: column;
        color: #418EB8;
        &::v-deep .input-area {
            margin: 0 auto 2rem;
        }
    }
}
</style>