<template>
  
  <div>
    <!-- 第一屏 -->
    <div class="body">
      <div>
        <p class="head">THE PASSWORD FOR DISCOVERING WEALTH</p>
      </div>
      <div class="content">
        <!-- 中间的logo -->
        <!-- <div class="logo">
          <img src="http://image.kmeta.world/website/logo.png" />
        </div> -->
        <!-- 下方的盒子 -->
        <div class="left">
          <div class="iscontact" v-show="iscon">
            <p class="p1">联系我们</p>
            <p class="p2">电子邮箱：kmeta@kmeta.world</p>
          </div>
          <div class="contact" @click="iscon = !iscon">
            <img src="http://image.kmeta.world/website/contact.png" alt="" />
            <p>联系我们</p>
          </div>
        </div>
        <div class="button">
          <a href="#mao"
            ><img src="http://image.kmeta.world/website/star.png"
          /></a>
        </div>

        
        <div class="bigright">
          <div class="login">
          <img src="http://image.kmeta.world/website/login.png" />
          <p>登录</p>
        </div>


        <div class="right">
          <div class="downloadad" v-show="isdownload">
            <div class="indownloadad">
              <img src="http://image.kmeta.world/website/ios.png" />
              <div class="indownloadad_text">
                <p class="p3">IOS下载</p>
                <p class="p4">敬请期待</p>
              </div>
            </div>
          </div>
          <div class="downloadios" v-show="isdownload">
            <div class="indownloadios">
              <img src="http://image.kmeta.world/website/ad.png" />
              <div class="indownloadad_text">
                <p class="p3">安卓下载</p>
                <p class="p4">敬请期待</p>
              </div>
            </div>
          </div>
          <div class="download" @click="isdownload = !isdownload">
            <img src="http://image.kmeta.world/website/download.png" />
            <p>下载</p>
          </div>
        </div>


        </div>


      </div>
    </div>
    <!-- 第二屏 -->
    <div class="second">
      <el-carousel
        :interval="200000"
        arrow="always"
        height="938px"
        indicator-position="none"
      >
        <el-carousel-item>
          <div class="titbox1">
            <p class="box1">无限穿越</p>
            <p class="box2">Kmeta星球</p>
          </div>
          <div class="titbox2">开启有趣的冒险和探索</div>
          <div class="conbox">
            <img src="http://image.kmeta.world/website/11.png" />
            <img src="http://image.kmeta.world/website/12.png" />
            <img src="http://image.kmeta.world/website/13.png" />
            <!-- <div class="border-box border-bg">
            <div class="content"> -->
            <img src="http://image.kmeta.world/website/4.png" />
            <!-- </div>
          </div> -->
            <img src="http://image.kmeta.world/website/15.png" />
            <img src="http://image.kmeta.world/website/16.png" />
            <img src="http://image.kmeta.world/website/17.png" />
          </div>
        </el-carousel-item>
        <el-carousel-item>
          <div class="titbox1">
            <p class="box1">寻找</p>
            <p class="box2">宝藏资源</p>
          </div>
          <div class="titbox2">点亮未知星球的奥秘和瑰宝</div>
          <div class="conbox">
            <img src="http://image.kmeta.world/website/12.png" />
            <img src="http://image.kmeta.world/website/13.png" />
            <img src="http://image.kmeta.world/website/14.png" />
            <img src="http://image.kmeta.world/website/5.png" />
            <img src="http://image.kmeta.world/website/16.png" />
            <img src="http://image.kmeta.world/website/17.png" />
            <img src="http://image.kmeta.world/website/11.png" />
          </div>
        </el-carousel-item>
        <el-carousel-item>
          <div class="titbox1">
            <p class="box1">兑换</p>
            <p class="box2">折扣珍品</p>
          </div>
          <div class="titbox2">集市上的宝藏等着你</div>
          <div class="conbox">
            <img src="http://image.kmeta.world/website/13.png" />
            <img src="http://image.kmeta.world/website/14.png" />
            <img src="http://image.kmeta.world/website/15.png" />
            <img src="http://image.kmeta.world/website/6.png" />
            <img src="http://image.kmeta.world/website/17.png" />
            <img src="http://image.kmeta.world/website/11.png" />
            <img src="http://image.kmeta.world/website/12.png" />
          </div>
        </el-carousel-item>
        <el-carousel-item>
          <div class="titbox1">
            <p class="box1">遨游在</p>
            <p class="box2">数字世界里</p>
          </div>
          <div class="titbox2">你的冒险从此不止于此</div>
          <div class="conbox">
            <img src="http://image.kmeta.world/website/14.png" />
            <img src="http://image.kmeta.world/website/15.png" />
            <img src="http://image.kmeta.world/website/16.png" />
            <img src="http://image.kmeta.world/website/7.png" />
            <img src="http://image.kmeta.world/website/11.png" />
            <img src="http://image.kmeta.world/website/12.png" />
            <img src="http://image.kmeta.world/website/13.png" />
          </div>
        </el-carousel-item>
        <el-carousel-item>
          <div class="titbox1">
            <p class="box1">摆脱焦虑</p>
            <p class="box2">勇敢踏上星际旅程</p>
          </div>
          <div class="titbox2">在平行世界世界里，找到未来的方向</div>
          <div class="conbox">
            <img src="http://image.kmeta.world/website/15.png" />
            <img src="http://image.kmeta.world/website/16.png" />
            <img src="http://image.kmeta.world/website/17.png" />
            <img src="http://image.kmeta.world/website/1.png" />
            <img src="http://image.kmeta.world/website/12.png" />
            <img src="http://image.kmeta.world/website/13.png" />
            <img src="http://image.kmeta.world/website/14.png" />
          </div>
        </el-carousel-item>
        <el-carousel-item>
          <div class="titbox1">
            <p class="box1">心之所想</p>
            <p class="box2">便是K之所向</p>
          </div>
          <div class="titbox2">在平行世界世界里，找到未来的方向</div>
          <div class="conbox">
            <img src="http://image.kmeta.world/website/16.png" />
            <img src="http://image.kmeta.world/website/17.png" />
            <img src="http://image.kmeta.world/website/11.png" />
            <img src="http://image.kmeta.world/website/2.png" />
            <img src="http://image.kmeta.world/website/13.png" />
            <img src="http://image.kmeta.world/website/14.png" />
            <img src="http://image.kmeta.world/website/15.png" />
          </div>
        </el-carousel-item>
        <el-carousel-item>
          <div class="titbox1">
            <p class="box1">在kmeta中</p>
            <p class="box2">寻找属于自己的宝藏</p>
          </div>
          <div class="titbox2">在平行世界世界里，找到未来的方向</div>
          <div class="conbox">
            <img src="http://image.kmeta.world/website/17.png" />
            <img src="http://image.kmeta.world/website/11.png" />
            <img src="http://image.kmeta.world/website/12.png" />
            <img src="http://image.kmeta.world/website/3.png" />
            <img src="http://image.kmeta.world/website/14.png" />
            <img src="http://image.kmeta.world/website/15.png" />
            <img src="http://image.kmeta.world/website/16.png" />
          </div>
        </el-carousel-item>
      </el-carousel>

      <!-- 底部版权 -->
      <div class="copyright" id="mao">
        <div>
          <p class="p5">关于Kmeta 丨 服务条款 丨 客服中心 丨 隐私保护指引</p>
          <p class="p6">沪ICP备2023024672号</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'

export default {
  data() {
    return {
      isdownload: false,
      iscon: false,
      // iscopyright:false
    };
  },
  methods: {
    Scrollbottom() {
      let scrollTop =
        document.documentElement.scrollTop || document.body.scrollTop;
      let clientHeight = document.documentElement.clientHeight;
      let scrollHeight = document.documentElement.scrollHeight;
      if (scrollTop + clientHeight >= scrollHeight) {
        // alert("滚动到底部了")
        // this.iscopyright = true
        // this.pageNo++
        // console.log(this.pageNo);
        // this.fetchData()
      } else {
        // this.iscopyright = false
      }
    },
  },
  created() {
    window.addEventListener("scroll", this.Scrollbottom); //页面加载时监听滚动事件
    let domWidth = document.body.clientWidth || document.body.scrollWidth;
    let domHeight = document.body.clientHeight || document.body.scrollHeight;

    console.log(domWidth, domHeight);
  },

  destroyed() {
    window.removeEventListener("scroll", this.Scrollbottom); //页面离开后销毁监听事件
  },
};
</script>

<style lang="scss" scoped>
/*通配符号让所有标签的margin和padding为0*/
* {
  padding: 0;
  margin: 0;
}
.body {
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100vh;
  /* width: 1890px;
  height: 950px; */
  /*100vh是指的可视区域的总高度*/
  background-image: url(http://image.kmeta.world/website/big.png);
  background-size: cover;
  background-repeat: no-repeat;
  /* -moz-background-size:100% 100%;  */
  /* background-size:100% 100%; */
}
.head {
  width: 100%;
  height: 39px;
  line-height: 39px;
  text-align: center;
  vertical-align: middle;
  color: #ffffff;
  font-size: 14px;
}

.content {
  flex: 1;
  width: 100%;
  /* position: relative; */
}
.logo {
  width: 207px;
  height: 249px;
  position: absolute;
  left: 50%;
  top: 50%;
  margin-left: -104px;
  margin-top: -125px;
}
.logo img {
  width: 207px;
  height: 249px;
}

.bottom {
  height: 44px;
  width: 100%;
  background-color: #bbf;
  position: absolute;
  top: 90%;
}

.left {
  width: 358px;
  height: 189px;
  position: absolute;
  top: 75%;
  left: 3%;
  // background-color: #fff;
}
.iscontact {
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 358px;
  height: 125px;
  position: absolute;
  top: 0;
  left: 0;
  border: #d648ef 2px solid;
  border-radius: 20px;
}

.iscontact p {
  text-align: left;
  margin-left: 27px;
  color: #ffffff;
  font-size: 16px;
}
.iscontact .p2 {
  margin-top: 22px;
}
.contact {
  display: flex;

  align-items: center;
  width: 194px;
  height: 44px;
  /* background-color: #bfa; */
  // position: absolute;
  // top: 90%;
  // left: 3%;
  position: absolute;
  top: 140px;
  left: 0;
  border: #d648ef 2px solid;
  border-radius: 20px;
}

.contact img {
  width: 25px;
  height: 21px;
  margin-left: 45px;
}
.contact p {
  margin-left: 10px;
  color: #ffffff;
  font-size: 16px;
}

.button {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 84px;
  height: 44px;
  /* background-color: #bfa; */
  position: absolute;
  top: 89%;
  left: 50%;
  margin-left: -42px;
}


.bigright{
  width: 368px;
  height: 202px;
  position: absolute;
  top: 74%;
  left: 78%;
}
.login {
  display: flex;
  align-items: center;
  width: 144px;
  height: 44px;
  /* background-color: #bfa; */
  position: absolute;
  bottom: 0;
  left: 0;
  border: #3050ff 2px solid;
  border-radius: 20px;
}
.login img {
  width: 23px;
  height: 20px;
  margin-left: 40px;
}

.login p {
  margin-left: 10px;
  color: #ffffff;
  font-size: 16px;
}

.right{
  width: 194px;
  height: 202px;
  position: absolute;
  top: 0;
  right: 0;
}
.downloadad {
  display: flex;
  align-items: center;
  width: 190px;
  height: 50px;
  border: #23aed8 2px solid;
  border-radius: 20px;
  position: absolute;
  top: 0;
  left: 0;

}
.downloadad .indownloadad {
  width: 98px;
  height: 30px;
  display: flex;
  // justify-content: space-between;
  margin-left: 45px;
}
.downloadad img {
  width: 26px;
  height: 30px;
  // margin-left: 45px;
}
.indownloadad_text {
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: start;
  margin-left: 8px;
  // background-color: #cdf;
}
.downloadios {
  display: flex;
  align-items: center;
  width: 190px;
  height: 50px;
  border: #23aed8 2px solid;
  border-radius: 20px;
  position: absolute;
  top: 35%;
  left: 0;
}
.downloadios .indownloadios {
  width: 98px;
  height: 30px;
  display: flex;
  // justify-content: space-between;
  margin-left: 45px;
}
.downloadios img {
  width: 26px;
  height: 30px;
  // margin-left: 45px;
}
.downloadios .indownloadios_text {
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: start;
  margin-left: 8px;
}

.p3 {
  font-weight: bold;
  color: #ffffff;
  font-size: 16px;
}
.p4 {
  // margin-left: 11px;
  color: #ffffff;
  font-size: 10px;
}
.download {
  display: flex;
  align-items: center;
  width: 194px;
  height: 44px;
  position: absolute;
  bottom: 0;
  left: 0;
  border: #23aed8 2px solid;
  border-radius: 20px;
}
.download img {
  width: 29px;
  height: 22px;
  margin-left: 58px;
}

.download p {
  margin-left: 11px;
  color: #ffffff;
  font-size: 16px;
}

/* 第二屏 */

.second {
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
}

::v-deep .el-carousel {
  // background: rgba(255, 0, 0, 0.2);
  height: 938px;
  overflow-y:hidden;

  .el-carousel__container {
    // height: 100%;
  }
}
.el-carousel__item {
  /* display: flex; */
  /* flex-direction: column; */
  width: 100%;
  // height: 100vh;
  /*100vh是指的可视区域的总高度*/
  background-color: black;
  /* background-image: url(http://image.kmeta.world/website/big.png); */
  background-size: cover;
  background-repeat: no-repeat;
  /* -moz-background-size:100% 100%;  */
  /* background-size:100% 100%; */
}

.el-carousel__item .titbox1 {
  position: absolute;
  margin-left: 24%;
  margin-top: 115px;
  height: 127px;
  font-size: 60px;
  text-align: left;
  color: #ffffff;
  /* background-color: #3050ff; */
}
.el-carousel__item .box1 {
  height: 59px;
}
.el-carousel__item .box2 {
  height: 59px;
  margin-top: 5px;
}

.el-carousel__item .titbox2 {
  position: absolute;
  margin-left: 24%;
  margin-top: 269px;
  font-size: 23px;
  text-align: left;
  color: #9b9b9b;
  /* background-color: #3050ff; */
}

.el-carousel__item .conbox {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  position: absolute;
  top: 36%;
}

.border-box {
  width: 300px;
  height: 200px;
  margin: 25px 0;
}

.border-bg {
  padding: 9px;
  background: linear-gradient(to right, #76c4ea, #dda1d8);
  border-radius: 40px;
}

.content {
  height: 100%;
  // background: #222;
  // border-radius: 40px; /*trciky part*/
}

.el-carousel__item img {
  width: 238px;
  height: 516px;
  margin-left: 16px;
}
.copyright {
  display: flex;
  justify-content: center;
  align-items: center;
  // position: absolute;
  z-index: 1;
  // top: 185%;
  flex: 1;
  width: 100%;
  // height: 13vh;
  // height: 142px;
  // height: 100vh;
  // background-image: url(http://image.kmeta.world/website/copyright.png);

  background-color: #040c0f;
  // background-size: cover;
  // background-repeat: no-repeat;
}

.copyright p {
  font-size: 11px;
  color: #ffffff;
}
.copyright .p5 {
  // position: absolute;
  // top: 65%;
}
.copyright .p6 {
  // position: absolute;
  // top: 84%;
  margin-top: 12px;
}

// 滚动条










</style>
