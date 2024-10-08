<template>
  <div class="product-list">
    <div class="product-list__header">
      <h2>車種一覧</h2>
      <Button
        class="product-list__header--create-btn"
        icon="pi pi-plus"
        label="新規作成"
        @click="openCreateModal"
        rounded
      />
    </div>
    <DataTable
      :value="products"
      responsiveLayout="scroll"
      class="product-list__table"
    >
      <Column field="id" header="ID" :sortable="true"></Column>
      <Column field="name" header="車両名" :sortable="true"></Column>
      <Column field="image" header="画像">
        <template #body="slotProps">
          <img
            class="product-list__table--image-column"
            alt="画像がありません"
            :src="slotProps.data.main_image"
          />
        </template>
      </Column>
      <Column field="licenseNumber" header="車両情報" :sortable="true"></Column>
      <Column field="syakenDate" header="車検期限" :sortable="true"></Column>
      <Column field="tenkenDate" header="点検期限" :sortable="true"></Column>
      <Column field="startDate" header="貸出開始日" :sortable="true"></Column>
      <Column field="endDate" header="貸出終了日" :sortable="true"></Column>
      <Column field="status" header="ステータス" :sortable="true">
        <template #body="slotProps">
          <ToggleButton
            v-model="slotProps.data.status"
            :class="`${slotProps.data.status ? 'published' : ''}`"
            onLabel="公開中"
            offLabel="非公開中"
            @change="toggleStatus(slotProps.data.id)"
          />
        </template>
      </Column>
      <Column>
        <template #body="slotProps">
          <div class="product-list__table--action_buttons">
            <Button
              icon="pi pi-pencil"
              class="p-button-rounded p-button-success p-mr-2 icon_only"
              severity="info"
              text
              rounded
              @click="editProduct(slotProps.data.id)"
            ></Button>
            <Button
              icon="pi pi-trash"
              class="p-button-rounded p-button-warning icon_only"
              @click="deleteProduct(slotProps.data.id)"
            ></Button>
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
        <h3>車両情報{{ submitMode === "create" ? "追加" : "更新" }}</h3>
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
          type="number"
          label="乗車定員"
          name="passenger"
          v-model="submitData.passenger"
        ></Input>
        <Input
          type="date"
          label="貸出開始日"
          name="lendingStartDate"
          v-model="submitData.startDate"
        ></Input>
        <Input
          type="date"
          label="貸出終了日"
          name="lendingEndDate"
          v-model="submitData.endDate"
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
          label="メイン画像"
          name="main-image"
          :dataUrl="submitData.images[0]"
          @update:dataUrl="
            (event) => {
              updateImage(event, 0);
            }
          "
        ></Input>
        <Input
          type="file"
          label="サブ画像1"
          name="sub-image1"
          :dataUrl="submitData.images[1]"
          @update:dataUrl="
            (event) => {
              updateImage(event, 1);
            }
          "
        ></Input>
        <Input
          type="file"
          label="サブ画像2"
          name="sub-image2"
          :dataUrl="submitData.images[2]"
          @update:dataUrl="
            (event) => {
              updateImage(event, 2);
            }
          "
        ></Input>
        <Input
          type="file"
          label="サブ画像3"
          name="sub-image3"
          :dataUrl="submitData.images[3]"
          @update:dataUrl="
            (event) => {
              updateImage(event, 3);
            }
          "
        ></Input>
        <Input
          type="file"
          label="サブ画像4"
          name="sub-image4"
          :dataUrl="submitData.images[4]"
          @update:dataUrl="
            (event) => {
              updateImage(event, 4);
            }
          "
        ></Input>
      </div>
      <template #footer>
        <Button
          :label="submitMode === 'create' ? '追加' : '更新'"
          @click="submitProduct"
          autofocus
        />
      </template>
    </Dialog>
    <Dialog
      v-model:visible="deleteProductDialog"
      :style="{ width: '450px' }"
      header=""
      :modal="true"
    >
      <div class="confirmation-content">
        <span
          ><b>{{
            products.find((product) => product.id == deleteProductId).name
          }}</b
          >の車両情報を削除します。よろしいですか?</span
        >
      </div>
      <template #footer>
        <Button
          label="いいえ"
          icon="pi pi-times"
          class="p-button-text"
          @click="deleteProductDialog = false"
        ></Button>
        <Button
          label="削除"
          icon="pi pi-check"
          class="p-button-text"
          severity="danger"
          @click="sendDeleteProcudct"
          autofocus
        ></Button>
      </template>
    </Dialog>
    <Toast />
  </div>
</template>

<script>
import DataTable from "primevue/datatable";
import Column from "primevue/column";
import Dialog from "primevue/dialog";
import Button from "primevue/button";
import ToggleButton from "primevue/togglebutton";
import Input from "/src/components/common/form/Input";
import Toast from "primevue/toast";
import { useToast } from "primevue/usetoast";
import axios from "axios";

export default {
  components: {
    DataTable,
    Column,
    Dialog,
    Button,
    ToggleButton,
    Input,
    Toast,
  },
  data() {
    return {
      submitMode: null,
      submitData: {
        id: null,
        name: "",
        price: 20000,
        passenger: 7,
        startDate: null,
        endDate: null,
        images: [],
        description: "",
        licenseNumber: "",
        syakenDate: "",
        tenkenDate: "",
        isSmokingAllowed: false,
        updatedImages: [],
      },
      products: [],
      deleteProductId: null,
      productStatus: ["非公開中", "公開中", "車検中", "点検中"],
      productStatusColor: ["danger", "info", "warning"],
      productDialog: false,
      deleteProductDialog: false,
      selectedProduct: null,
      validationErrors: {},
      statuses: [
        { label: "Available", value: "Available" },
        { label: "Unavailable", value: "Unavailable" },
      ],
      isSmokingAllowedOption: [
        { name: "isSmokingAllowed", value: true, label: "喫煙可" },
        { name: "isSmokingAllowed", value: false, label: "喫煙不可" },
      ],
    };
  },
  setup() {
    const toast = useToast();

    const showToastMeassage = (severity, summary, detail) => {
      toast.add({
        severity: severity,
        summary: summary,
        detail: detail,
        life: 3000,
      });
    };
    return { showToastMeassage };
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
      axios.get(`${this.backendDomain}/api/products`).then((response) => {
        response.data.data.forEach((product) => {
          if (product.customfields) {
            Object.assign(product, JSON.parse(product.customfields));
          }
        });
        this.products = response.data.data;
      });
    },
    getProduct(id) {
      axios.get(`${this.backendDomain}/api/products/${id}`).then((response) => {
        const productData = response.data;
        const customfields = JSON.parse(productData.customfields);
        const images = JSON.parse(productData.images);
        this.submitData.name = productData.name;
        this.submitData.price = productData.price;
        this.submitData.startDate = productData.start_at;
        this.submitData.endDate = productData.end_at;
        this.submitData.passenger = customfields.passenger;
        this.submitData.description = productData.description;
        this.submitData.licenseNumber = customfields.licenseNumber;
        this.submitData.syakenDate = customfields.syakenDate;
        this.submitData.tenkenDate = customfields.tenkenDate;
        this.submitData.isSmokingAllowed = customfields.isSmokingAllowed;
        if (images) {
          this.submitData.images = images;
        }
      });
    },
    openCreateModal() {
      this.resetSubmitData();
      this.productDialog = true;
      this.submitMode = "create";
      this.submitData.id = null;
    },
    editProduct(productId) {
      this.productDialog = true;
      this.submitMode = "update";
      this.submitData.id = productId;
      this.getProduct(productId);
    },
    updateImage(event, index) {
      this.submitData.images[index] = event;
      if (
        this.submitMode === "update" &&
        !this.submitData.updatedImages.includes(index)
      ) {
        this.submitData.updatedImages.push(index);
      }
    },
    deleteProduct(productId) {
      this.deleteProductDialog = true;
      this.deleteProductId = productId;
    },
    submitProduct() {
      if (this.submitMode === "create") {
        this.sendNewProduct();
      } else if (this.submitMode === "update") {
        this.sendEditedProduct();
      }
    },
    async sendNewProduct() {
      let customfields = {
        passenger: this.submitData.passenger,
        licenseNumber: this.submitData.licenseNumber,
        syakenDate: this.submitData.syakenDate,
        tenkenDate: this.submitData.tenkenDate,
        isSmokingAllowed: this.submitData.isSmokingAllowed,
      };

      const data = {
        name: this.submitData.name,
        description: this.submitData.description,
        price: this.submitData.price,
        start_date: this.submitData.startDate,
        end_date: this.submitData.endDate,
        customfields: JSON.stringify(customfields),
        images: JSON.stringify(this.submitData.images),
      };

      await axios
        .post(`${this.backendDomain}/api/products/create`, data)
        .then(() => {
          this.productDialog = false;
          this.resetSubmitData();
          this.showToastMeassage(
            "success",
            "車両情報追加成功",
            "車両情報が追加されました。"
          );
          this.getProducts();
        })
        .catch((error) => {
          console.log(error);
          this.showToastMeassage(
            "error",
            "エラー",
            "車両情報が追加に失敗しました。ページの再読み込みをお願いします。"
          );
          this.productDialog = false;
        });
    },
    async sendEditedProduct() {
      let customfields = {
        passenger: this.submitData.passenger,
        licenseNumber: this.submitData.licenseNumber,
        syakenDate: this.submitData.syakenDate,
        tenkenDate: this.submitData.tenkenDate,
        isSmokingAllowed: this.submitData.isSmokingAllowed,
      };

      const data = {
        name: this.submitData.name,
        description: this.submitData.description,
        price: this.submitData.price,
        start_date: this.submitData.startDate,
        end_date: this.submitData.endDate,
        customfields: JSON.stringify(customfields),
        images: JSON.stringify(this.submitData.images),
      };

      await axios
        .patch(`${this.backendDomain}/api/products/${this.submitData.id}`, data)
        .then(() => {
          this.productDialog = false;
          this.resetSubmitData();
          this.showToastMeassage(
            "success",
            "車両情報追加成功",
            "車両情報が追加されました。"
          );
          this.getProducts();
        })
        .catch((error) => {
          console.log(error);
          this.showToastMeassage(
            "error",
            "エラー",
            "車両情報が更新に失敗しました。ページの再読み込みをお願いします。"
          );
          this.productDialog = false;
        });
    },
    async sendDeleteProcudct() {
      await axios
        .delete(`${this.backendDomain}/api/products/${this.deleteProductId}`)
        .then(() => {
          this.deleteProductDialog = false;
        });
      this.getProducts();
    },
    resetSubmitData() {
      this.submitData = {};
      this.submitData = {
        id: null,
        name: "",
        price: 0,
        passenger: 7,
        images: [],
        description: "",
        startDate: "",
        endDate: "",
        licenseNumber: "",
        syakenDate: "",
        tenkenDate: "",
        isSmokingAllowed: false,
        updatedImages: [],
      };
    },
    async toggleStatus(productId) {
      await axios
        .patch(`${this.backendDomain}/api/products/status/${productId}`)
        .then((res) => {
          let message = res.data ? "公開になりました" : "非公開になりました";
          this.showToastMeassage("success", message);
          this.getProducts();
        })
        .catch((error) => {
          console.log(error);
          this.showToastMeassage(
            "error",
            "エラー",
            "車両ステータス更新に失敗しました。ページの再読み込みをお願いします。"
          );
          this.productDialog = false;
        });
    },
  },
  created() {
    this.getProducts();
  },
};
</script>

<style lang="scss" scoped>
.product-list {
  &__header {
    display: flex;
    justify-content: space-between;
    &--create-btn {
      margin: 1rem;
      width: initial;
    }
  }
  &__table {
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
    color: #418eb8;
    &::v-deep .input-area {
      margin: 0 auto 2rem;
    }
  }
}
</style>
