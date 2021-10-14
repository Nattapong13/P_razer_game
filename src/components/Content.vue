<template>
  <div>
    <!-- เริืิ่ม -->
    <div class="row">
      <div class="leftcolumn">
        <!-- Proouctlist -->
        <ProductList :products="productData" />
        <!-- จบ Proouctlist -->
      </div>
      <div class="rightcolumn">
        <div class="card">
          <h3>เพิ่มสินค้าใหม่</h3>
          <form @submit.prevent="addProduct()">
            <p>
              <label>บาร์โค้ด : </label><br /><input
                type="text"
                style="width: 100%"
                v-model="formProduct.id"
              />
            </p>
            <p>
              <label>ชื่อสินค้า : </label><br /><input
                type="text"
                style="width: 100%"
                v-model="formProduct.name"
              />
            </p>
            <p>
              <label>รูปภาพ : </label><br /><input
                type="text"
                style="width: 100%"
                v-model="formProduct.img"
              />
            </p>
            <p>
              <label>ราคา: </label><br /><input
                type="text"
                style="width: 100%"
                v-model="formProduct.price"
              />
            </p>
            <p>
              <label>ราคา: </label><br /><textarea
                style="width: 100%"
                v-model="formProduct.detail"
              ></textarea>
            </p>
            <p><input type="submit" value="บีันทึกรายการสินค้า" /></p>
          </form>
        </div>
        <!-- sidebar -->
        <SideBar />
        <!-- จบ sidebar -->
      </div>
    </div>
    <!-- จบ-->
  </div>
</template>


<script>
import ProductList from "./ProductList";
import SideBar from "./SideBar";
export default {
  components: {
    ProductList,
    SideBar,
  },
  data() {
    return {
      formProduct: {
        id: "",
        name: "",
        price: 0,
        detail: "",
        img: "",
      },
      productData: [],
    };
  },
  mounted() {
    this.loadData();
  },
  methods: {
    addProduct() {
      this.productData.push({
        id: this.formProduct.id,
        name: this.formProduct.name,
        detail: this.formProduct.detail,
        price: this.formProduct.price,
        img: this.formProduct.img,
      });
      alert("Ok saved");
      this.formProduct = {
        id: "",
        name: "",
        price: 0,
        detail: "",
        img: "",
      };
    },
    loadData() {
      this.productData.push(
        {
          id: 1,
          name: "Razer Kraken (QUARTZ PINK) Gaming Gear",
          detail:
            "-Frequency response: 12 Hz – 28 kHz -Impedance: 32 Ω @ 1 kHz -Sensitivity (@1 kHz): 109 dB -Input power: 30 mW (Max) -Drivers: 50 mm, with Neodymium magnets -Inner ear cup diameter: 54 mm x 65 mm -Connection type: Analog 3.5 mm -Cable length: 1.3 m / 4.27 ft. -Approx. weight: 322 g / 0.71 lbs",
          price: 1890,
          img:
            "https://www.jib.co.th/img_master/product/original/2019041918043133548_1.jpg",
        },
        {
          id: 2,
          name: "Razer Basilisk (QUARTZ PINK) Gaming Gear",
          detail:
            "-Razer 5G optical sensor with true 16,000 DPI -Razer Mechanical Mouse Switches -Eight independently programmable Hyperesponse buttons-Ergonomic right-handed design with enhanced rubber side grips-Hybrid On-board and Cloud Storage-Razer Chroma™ lighting with true 16.8 million customizable color options-Razer Synapse 3 (Beta) enabled-Approximate weight 107 g / 0.24 lbs (Excluding cable)-Compatible with Xbox One for basic input",
          price: 2790,
          img:
            "https://www.jib.co.th/img_master/product/original/2019041917265233547_1.jpg",
        },
        {
          id: 3,
          name: "Razer Blackwidow Tournament Edition Chroma V2 (QUARTZ PINK)",
          detail:
            "-Razer™ Mechanical Green Switches with 50g actuation force-80 million keystroke lifespan -Razer Chroma customizable backlighting with 16.8 million color options -Compact layout-Ergonomic wrist rest-Razer Synapse enabled-10 key roll-over anti-ghosting-Fully programmable keys with on-the-fly macro recording-Gaming mode option -1000 Hz Ultrapolling -Instant Trigger Technology -Detachable braided fiber cable with cable strap",
          price: 4990,
          img:
            "https://img.advice.co.th/images_nas/pic_product4/A0123239/A0123239OK_BIG_1.jpg",
        }
      );
      console.log(this.productData);
    },
  },
};
</script>


<style scoped>
</style>