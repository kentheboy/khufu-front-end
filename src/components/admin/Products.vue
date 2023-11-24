<template>
    <div class="product-list">
        <h2>Products</h2>
        <DataTable :value="products" responsiveLayout="scroll">
            <Column field="id" header="ID" :sortable="true"></Column>
            <Column field="name" header="Name" :sortable="true"></Column>
            <Column field="licenseNumber" header="licenseNumber" :sortable="true"></Column>
            <Column field="syakenDate" header="syakenDate" :sortable="true"></Column>
            <Column field="tenkenDate" header="tenkenDate" :sortable="true"></Column>
            <Column field="status" header="Status" :sortable="true"></Column>
            <Column header="Action">
                <template #body="slotProps">
                    <Button icon="pi pi-pencil" class="p-button-rounded p-button-success p-mr-2" @click="editProduct(slotProps.data)"></Button>
                    <Button icon="pi pi-trash" class="p-button-rounded p-button-warning" @click="confirmDelete(slotProps.data)"></Button>
                </template>
            </Column>
        </DataTable>
        <Dialog v-model:visible="productDialog" :style="{width: '450px'}" header="Product Details" :modal="true" class="p-fluid">
            <img :src="selectedProduct.image" :alt="selectedProduct.name" class="product-image" v-if="selectedProduct.image" />
            <div class="p-field">
                <label for="name">Name</label>
                <InputText id="name" v-model="selectedProduct.name" required="true" autofocus :class="{'p-invalid': validationErrors.name}" />
                <small class="p-invalid" v-if="validationErrors.name">{{validationErrors.name}}</small>
            </div>
            <div class="p-field">
                <label for="category">Category</label>
                <InputText id="category" v-model="selectedProduct.category" required="true" autofocus :class="{'p-invalid': validationErrors.category}" />
                <small class="p-invalid" v-if="validationErrors.category">{{validationErrors.category}}</small>
            </div>
            <div class="p-field">
                <label for="price">Price</label>
                <InputNumber id="price" v-model="selectedProduct.price" mode="currency" currency="USD" locale="en-US" :class="{'p-invalid': validationErrors.price}" />
                <small class="p-invalid" v-if="validationErrors.price">{{validationErrors.price}}</small>
            </div>
            <div class="p-field">
                <label for="rating">Rating</label>
                <InputNumber id="rating" v-model="selectedProduct.rating" :class="{'p-invalid': validationErrors.rating}" />
                <small class="p-invalid" v-if="validationErrors.rating">{{validationErrors.rating}}</small>
            </div>
            <div class="p-field">
                <label for="status">Status</label>
                <Dropdown id="status" v-model="selectedProduct.status" :options="statuses" optionLabel="label" optionValue="value" :class="{'p-invalid': validationErrors.status}" />
                <small class="p-invalid" v-if="validationErrors.status">{{validationErrors.status}}</small>
            </div>
            <template #footer>
                <Button label="Cancel" icon="pi pi-times" class="p-button-text" @click="hideDialog"></Button>
                <Button label="Save" icon="pi pi-check" class="p-button-text" @click="saveProduct"></Button>
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

// import { mapState, mapActions } from 'vuex';
export default {
    components: {
        DataTable,
        Column,
        Dialog
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
        // editProduct(product) {
        //     this.selectedProduct = {...product};
        //     this.productDialog = true;
        // },
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
.product-list {}

</style>