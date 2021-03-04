<template>
  <div class="header">
    <router-link :to="{ name: 'root' }">
      <img src="../assets/cnodejs_light.svg" alt="" />
    </router-link>
    <ul>
      <li><a href="#">首页</a></li>
      <li><a href="#">新手入门</a></li>
      <li><a href="#">Api</a></li>
      <li><a href="#">关于</a></li>
      <li><a href="#">注册</a></li>
      <li><a href="#">登录</a></li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "Header",
};
</script>

<style scoped>
.header {
  height: 50px;
  background-color: #5a5555;
}
img {
  max-width: 120px;
  margin-left: 15px;
  margin-top: 10px;
}

ul {
  float: right;
  list-style: none;
  margin: 4px;
}

li {
  display: inline-block;
  padding: 10px 15px;
}

a {
  text-decoration: none;
  color: #ccc;
  font-size: 14px;
  text-shadow: none;
}
</style>