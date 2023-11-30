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
                    <img class="product-list__table--image-column" alt="画像がありません" :src=slotProps.data.main_image />
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
                        <Button icon="pi pi-pencil" class="p-button-rounded p-button-success p-mr-2 icon_only" severity="info" text rounded @click="editProduct(slotProps.data.id)"></Button>
                        <Button icon="pi pi-trash" class="p-button-rounded p-button-warning icon_only" @click="deleteProduct(slotProps.data.id)"></Button>
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
                <h3>車両情報{{submitMode==='create'?'追加':'更新'}}</h3>
            </div>
            <div class="product-edit__content">
                <Input
                    type="text"
                    label="車両名"
                    name="name"
                    placeholder="アルファード１"
                    v-model="submitData.name"
                ></Input>
                <Input
                    type="number"
                    label="金額（日当たり）"
                    name="price"
                    placeholder="20000"
                    v-model="submitData.price"
                ></Input>
                <Input 
                    type="text"
                    label="車両情報"
                    name="licenseNumber"
                    placeholder="沖縄　301 わ　2609"
                    v-model="submitData.licenseNumber"
                ></Input>
                <Input
                    type="date"
                    label="車検期限"
                    name="syakenDate"
                    v-model="submitData.syakenDate"
                ></Input>
                <Input
                    type="date"
                    label="点検期限"
                    name="tenkenDate"
                    v-model="submitData.tenkenDate"
                ></Input>
                <Input 
                    type="radio"
                    label="喫煙（電子タバコのみ）"
                    :options="isSmokingAllowedOption"
                    v-model="submitData.isSmokingAllowed"
                >
                </Input>
                <Input
                    type="file"
                    label="画像1"
                    name="image1"
                    :dataUrl="submitData.image1"
                    @update:dataUrl="(event) => {submitData.image1 = event}"
                ></Input>
                <Input
                    type="file"
                    label="画像2"
                    name="image2"
                    :dataUrl="submitData.image2"
                    @update:dataUrl="(event) => {submitData.image2 = event}"
                ></Input>
                <Input
                    type="file"
                    label="画像3"
                    name="image3"
                    :dataUrl="submitData.image3"
                    @update:dataUrl="(event) => {submitData.image3 = event}"
                ></Input>
                <Input
                    type="file"
                    label="画像4"
                    name="image4"
                    :dataUrl="submitData.image4"
                    @update:dataUrl="(event) => {submitData.image4 = event}"
                ></Input>
            </div>
            <template #footer>
                <Button 
                    :label="submitMode==='create'?'追加':'更新'" 
                    @click="submitProduct"
                    autofocus
                />
            </template>
        </Dialog>
        <Dialog
            v-model:visible="deleteProductDialog"
            :style="{width: '450px'}" 
            header=""
            :modal="true"
        >
            <div class="confirmation-content">
                <span><b>{{ products.find(product =>  product.id == deleteProductId ).name }}</b>の車両情報を削除します。よろしいですか?</span>
            </div>
            <template #footer>
                <Button label="いいえ" icon="pi pi-times" class="p-button-text" @click="deleteProductDialog = false"></Button>
                <Button label="削除" icon="pi pi-check" class="p-button-text" severity="danger" @click="sendDeleteProcudct" autofocus></Button>
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
                id: null,
                name: "test",
                price: 0,
                image1: null,
                image2: null,
                image3: null,
                image4: null,
                description: "",
                licenseNumber: "",
                syakenDate: "",
                tenkenDate: "",
                isSmokingAllowed: false
            },
            products: [],
            deleteProductId: null,
            productStatus: ["利用可","車検中","点検中"],
            productDialog: false,
            deleteProductDialog: false,
            selectedProduct: null,
            validationErrors: {},
            statuses: [
                {label: 'Available', value: 'Available'},
                {label: 'Unavailable', value: 'Unavailable'},
            ],
            isSmokingAllowedOption: [
                { name: "isSmokingAllowed", value: true, label: "喫煙可"},
                { name: "isSmokingAllowed", value: false, label: "喫煙不可"},
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
        test(event) {
            console.log(event);
        },
        getProducts() {
            axios.get(`${this.backendDomain}/api/products`).then(response => {
                response.data.forEach(product => {
                    if (product.customfields) {
                        Object.assign(product, JSON.parse(product.customfields));
                    }
                })
                this.products = response.data;
            })
        },
        getProduct(id) {
            axios.get(`${this.backendDomain}/api/products/${id}`).then(response => {
                const productData = response.data;
                const customfields = JSON.parse(productData.customfields);
                const images = JSON.parse(productData.images);
                this.submitData.name = productData.name;
                this.submitData.price = productData.price;
                this.submitData.description = productData.description;
                this.submitData.licenseNumber = customfields.licenseNumber;
                this.submitData.syakenDate = customfields.syakenDate;
                this.submitData.tenkenDate = customfields.tenkenDate;
                this.submitData.isSmokingAllowed = customfields.isSmokingAllowed;
                if(images) {
                    this.submitData.image1 = images[0];
                    this.submitData.image2 = images[1];
                    this.submitData.image3 = images[2];
                    this.submitData.image4 = images[3];
                }
            })
        },
        openCreateModal(){
            this.productDialog = true;
            this.submitMode = "create";
            this.submitData.id = null;
        },
        editProduct(productId) {
            this.productDialog = true;
            this.submitMode = "update";
            this.submitData.id = productId;
            this.getProduct(productId)
        },
        deleteProduct(productId){
            this.deleteProductDialog = true;
            this.deleteProductId = productId;
        },
        submitProduct() {
            if(this.submitMode === "create") {
                this.sendNewProduct();
            }
        },
        async sendNewProduct() {
            let customfields = {
                "licenseNumber": this.submitData.licenseNumber,
                "syakenDate": this.submitData.syakenDate,
                "tenkenDate": this.submitData.tenkenDate,
                "isSmokingAllowed": this.submitData.isSmokingAllowed
            };
            let images = [
                this.submitData.image1,
                this.submitData.image2,
                this.submitData.image3,
                this.submitData.image4
            ];

            const data = {
                "name": this.submitData.name,
                "description": this.submitData.description,
                "price": this.submitData.price,
                "customfields": JSON.stringify(customfields),
                "images": JSON.stringify(images)
            }

            await axios.post(`${this.backendDomain}/api/products/create`, data).then(() => {
            })
        },
        async sendDeleteProcudct() {
            await axios.delete(`${this.backendDomain}/api/products/${this.deleteProductId}`).then(() => {
                this.deleteProductDialog = false;
            });
            this.getProducts();
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