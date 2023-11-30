<template>
    <div class="product-list">
        <div class="product-list__header">
            <h2>車種一覧</h2>
            <Button class="product-list__header--create-btn" icon="pi pi-plus" label="新規作成" @click="openCreateModal" rounded />
        </div>
        <DataTable :value="products" responsiveLayout="scroll" class="product-list__table">
            <Column field="id" header="ID" :sortable="true"></Column>
            <Column field="name" header="車両名" :sortable="true"></Column>
            <Column field="image" header="画像">
                <template #body="slotProps">
                    <img class="product-list__table--image-column" alt="画像がありません" :src=slotProps.data.image />
                </template>
            </Column>
            <Column field="licenseNumber" header="車両情報" :sortable="true"></Column>
            <Column field="syakenDate" header="車検期限" :sortable="true"></Column>
            <Column field="tenkenDate" header="点検期限" :sortable="true"></Column>
            <Column field="status" header="ステータス" :sortable="true">
                <template #body="slotProps">
                    <Badge 
                        :value="slotProps.data.status==0?'貸出不可':slotProps.data.status==1?'貸出可':'貸出中'" 
                        :severity="slotProps.data.status==0?'danger':slotProps.data.status==1?'info':'warning'">
                    </Badge>
                </template>
            </Column>
            <Column>
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
                <Input
                    type="text"
                    label="車両名"
                    name="name"
                    placeholder="アルファード１"
                    v-model="submitData.name"
                ></Input>
                <Input type="text" label="車両情報" name="licenseNumber" placeholder="沖縄　301 わ　2609"></Input>
                <Input type="selectbox" label="ステータス" name="status" :options=productStatus></Input>
                <Input type="date" label="車検期限" name="syakenDate"></Input>
                <Input type="date" label="点検期限" name="tenkenDate"></Input>
                <Input type="file" label="画像1" name="additionalDriverImage1"></Input>
                <Input type="file" label="画像2" name="additionalDriverImage2"></Input>
                <Input type="file" label="画像3" name="additionalDriverImage3"></Input>
                <Input type="file" label="画像4" name="additionalDriverImage4"></Input>
            </div>
            <template #footer>
                <Button 
                    :label="submitMode==='create'?'追加':'更新'" 
                    @click="submitNewProduct"
                    autofocus
                />
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
import Badge from 'primevue/badge';
import Input from "/src/components/common/form/Input";
import axios from 'axios';

export default {
    components: {
        DataTable,
        Column,
        Dialog,
        Button,
        Badge,
        Input
    },
    data() {
        return {
            submitMode: null,
            submitData: {
                name: "test",
                image1: null,
                image2: null,
                image3: null,
                image4: null,
                description: "",
                price: "",
                licenseNumber: "",
                syakenDate: "",
                tenkenDate: "",
                isSmokingAllowed: null
            },
            products: [],
            productStatus: ["利用可","車検中","点検中"],
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
        backendDomain() {
            return process.env.VUE_APP_BACKEND_DOMAIN;
        },
        envVariable() {
            return this.$store.state.envVariable;
        },
    },
    methods: {
        getProducts() {
            console.log(this.backendDomain);
            axios.get(`${this.backendDomain}/api/products`).then(response => {
                response.data.forEach(product => {
                    if (product.customfields) {
                        Object.assign(product, JSON.parse(product.customfields));
                    }
                })
                this.products = response.data;
            })
        },
        openCreateModal(){
            console.log('create!')
            this.productDialog = true;
            this.submitMode = "create";
        },
        editProduct(product) {
            this.selectedProduct = {...product};
            this.productDialog = true;
            this.submitMode = "update";
        },
        submitNewProduct() {
            let customfields = {
                "licenseNumber": "301 2609",
                "syakenDate": "2024/12/31",
                "tenkenDate": "2024/12/31",
                "isSmokingAllowed": 1
            };
            const data = {
                "name": "アルファード",
                "description": "This is my first product!",
                "price": "333333",
                "customfields": JSON.stringify(customfields)
            }

            axios.post(`${this.backendDomain}/api/products/create`, data).then(response => {
                console.log(response);
            })
        }
    },
    created() {
        this.getProducts();
    }
}
</script>

<style lang="scss" scoped>
.product-list {
    &__header{
        display: flex;
        justify-content: space-between;
        &--create-btn{
            margin: 1rem;
            width: initial;
        }
    }
    &__table{
        &--action_buttons {
            display: flex;
            justify-content: space-between;
        }
        &--image-column {
            max-height: 10rem;
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