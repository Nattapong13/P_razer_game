<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "App",
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Mitr:wght@600&display=swap");
* {
  box-sizing: border-box;
  font-family: Mitr;
}

body {
  font-family: Arial;
  padding: 10px;
  background: #A2D2FF;
}

.header {
  padding: 30px;
  text-align: center;
  background: white;
  background-image: url("https://assets2.razerzone.com/images/quartz/razer-quartz-OGimage.jpg");
  background-repeat: 100%;
  height: 300px;
  background-position: center;
}

.header h1 {
  font-size: 50px;
}

.menu {
  overflow: hidden;
  background-color: #FFFEB7;
}

.menu a {
  float: left;
  display: block;
  color: #FFADAD;
  text-align: center;
  padding: 14px 16px;
  text-decoration: none;
}

.menu a:hover {
  background-color: #EB92BE;
  color: #B1FFFD;
}

.leftcolumn {
  float: left;
  width: 75%;
}

.rightcolumn {
  float: left;
  width: 25%;
  background-color: #A2D2FF;
  padding-left: 20px;
}

.img {
  background-color: #B24080;
  width: 100%;
  height: auto;
  padding: 10px;
}
.img1 {
  background-color: #B24080;
  width: 50%;
  height: auto;
  padding: 10px;
  display: inline-block;
  background-position: center;
}

.card {
  background-color: white;
  padding: 20px;
  margin-top: 20px;
}

.column1 {
  float: left;
  width: 400px;
  padding: 10px;
}

.column2 {
  float: left;
  padding: 10px;
}

.row:after {
  content: "";
  display: table;
  clear: both;
}

.footer {
  padding: 20px;
  text-align: center;
  background: #ddd;
  margin-top: 20px;
}

.price {
  color: #B24080;
  padding: 40px;
}

@media screen and (max-width: 800px) {
  .leftcolumn,
  .rightcolumn {
    width: 100%;
    padding: 0;
  }
}

@media screen and (max-width: 400px) {
  .menu a {
    float: none;
    width: 100%;
  }
}
</style>
