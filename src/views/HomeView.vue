<template>
  <div>
    <!-- 第一屏 -->
    <div class="body">
      <div>
        <p class="head">THE PASSWORD FOR DISCOVERING WEALTH</p>
      </div>
      <div>
        <img class="first-content__bg" id="first-content__bg" />
      </div>
      <div class="content">
        <!-- 中间的logo -->
        <!-- <div class="logo">
          <img src="http://image.kmeta.world/website/logo.png" />
        </div> -->
        <!-- 下方的盒子 -->
        <div class="big">
          <div class="left">
            <div class="iscontact" v-show="iscon">
              <div class="iscontact_inner">
                <div class="p1">
                  <p>Contact us：</p>
                  <img src="./img/x.png" alt="关闭" @click="noshowcon" />
                </div>
                <p class="p2">E-mail：info@kmeta.world</p>
              </div>
            </div>
            <div class="contact" @click="showcon" id="contact">
              <img src="http://image.kmeta.world/website/contact.png" alt="" />
              <p>JOIN US</p>
            </div>
          </div>
          <div class="button">
            <div class="button_inner">
              <a href="javascript:history.go(0);"
                ><img src="https://image.kmeta.world/website/star1.png"
              /></a>
            </div>
          </div>
          <div class="bigright">
            <div class="right" @mouseleave="noshow">
              <div class="download" @mouseenter="show" id="download">
                <a> <p>K星矿元</p></a>
              </div>
              <!-- <div class="isdownloadshow"> -->
              <!-- <div class="downloadad" v-if="isdownload">
                <div class="indownloadad">
                  <img src="https://image.kmeta.world/website/ios1.png" />
                  <div class="indownloadad_text">
                    <img
                      class="p1"
                      src="https://image.kmeta.world/website/iosdownload.png"
                    />
                    <p class="p2">Coming soon</p>
                  </div>
                </div>
              </div>
              <div class="downloadios" v-if="isdownload">
                <div class="indownloadios">
                  <img src="https://image.kmeta.world/website/ad1.png" />
                  <div class="indownloadios_text">
                    <img
                      class="p1"
                      src="https://image.kmeta.world/website/addownload.png
"
                    />
                    <p class="p2">Coming soon</p>
                  </div>
                </div>
              </div> -->
              <!-- </div> -->
            </div>
          </div>
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
      islogin: false,
      iscon: false,
      // iscopyright:false
    };
  },
  mounted() {
    // this.isheight()
  },
  methods: {
    isheight() {
      var isApple = /iPad|iPhone|iPod/.test(navigator.userAgent);
      // const bodyStyle = document.querySelector("body") // 获取body节点样式
      var body = document.body || document.documentElement.body;
      var element = document.getElementById("first-content__bg");

      if (isApple) {
        body.style.minHeight = "100dvh";
        element.style.height = "100dvh";
      } else {
        body.style.minHeight = "100vh";
        element.style.height = "100vh";
      }
    },

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
    show() {
      var download = document.getElementById("download");
      download.style.border = "rgba(35, 174, 216, 0.5) 1px solid";
      this.isdownload = true;
    },
    noshow() {
      this.isdownload = false;
      var download = document.getElementById("download");

      download.style.border = "rgba(35, 174, 216, 1) 1px solid";
    },
    showcon() {
      this.iscon = true;
      var contact = document.getElementById("contact");
      contact.style.border = "rgba(214, 72, 239, 0.5)1px solid";
      contact.style.background = "rgba(214, 72, 239, 0.15)";
    },
    noshowcon() {
      this.iscon = false;
      var contact = document.getElementById("contact");

      contact.style.border = "rgba(214, 72, 239, 1) 1px solid";
    },
    showcon1() {
      var contact = document.getElementById("contact");

      contact.style.background = "rgba(214, 72, 239, 1)";
    },

    noshowcon1() {
      var contact = document.getElementById("contact");

      contact.style.background = "rgba(214, 72, 239, 0.15)";
    },
  },
  created() {
    window.addEventListener("scroll", this.Scrollbottom); //页面加载时监听滚动事件
    let domWidth = document.body.clientWidth || document.body.scrollWidth;
    let domHeight = document.body.clientHeight || document.body.scrollHeight;

    // 点击除了joinus之外的地方联系我们关闭
    let that = this; //将vue对象的引用保存在that中
    document.addEventListener("click", function (event) {
      // console.log("e", event);
      var contact = document.getElementById("contact");
      if (event.target !== contact && !contact.contains(event.target)) {
        that.noshowcon();
      }
    });
  },

  destroyed() {
    window.removeEventListener("scroll", this.Scrollbottom); //页面离开后销毁监听事件
    window.removeEventListener("click"); //页面离开后销毁监听事件
  },
};
</script>

<style lang="scss" scoped>
/*通配符号让所有标签的margin和padding为0*/
* {
  padding: 0;
  margin: 0;
}
a {
  text-decoration: none;
  color: inherit;
}
.body {
  font-family: HarmonyOS_Sans_SC_Black;
  width: 100%;
  background-image: url(https://image.kmeta.world/website/img/bg.jpg);
  min-width: 750px;
  // height: 100vh;
  min-height: 100vh;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;

  // max-height: calc(100vh - 39px); // 减去头部高度
  position: relative;
}

.first-content__bg {
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  // height: 100%;
  // height: 100dvh;
  height: 100vh;
  object-fit: cover;
  z-index: -1;
}
.head {
  width: 100%;
  height: 121px;
  line-height: 121px;
  text-align: center;
  vertical-align: middle;
  color: #ffffff;
  font-size: 24px;
  // z-index: 2;
}

.content {
  // flex: 1;
  // width: 100%;
  /* position: relative; */
  // width: 100%;
  height: 250px;
  // position: absolute;
  // bottom: 0px;
  // top: 830px;
  // border: #1c883c 1px solid;
  // display: flex;
  // justify-content: center;

  position: absolute;
  left: 0;
  bottom: 0;
  width: 100%;
  z-index: 900;
}
// .logo {
//   width: 207px;
//   height: 249px;
//   position: absolute;
//   left: 50%;
//   top: 50%;
//   margin-left: -104px;
//   margin-top: -125px;
// }
// .logo img {
//   width: 207px;
//   height: 249px;
// }

// .bottom {
//   height: 44px;
//   width: 100%;
//   background-color: #bbf;
//   position: absolute;
//   top: 90%;
// }
.big {
  height: 250px;

  // width: 1802px;
  // border: #23aed8 1px solid;
  // position: absolute;
  // left: 60px;
  // right: 60px;

  // bottom: 48px;
}
.big2 {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 518px;
  height: 70px;
  // background-color: #984040;

  position: absolute;
  bottom: 60px;
  left: 50%;
  transform: translateX(-50%);
}

.big .left {
  position: absolute;
  bottom: 60px;
  left: 42px;

  width: 512px;
  height: 285px;
  // position: absolute;
  // left: 0px;
  // bottom: 0px;
  // background-color: #984040;
}
.iscontact {
  // background-color: #984040;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 512px;
  height: 196px;
  position: absolute;
  top: 0;
  left: 0;
  border: #d648ef 2px solid;
  // background: rgba(214, 72, 239, 0.15);
  border-radius: 40px;
}
.iscontact_inner {
  // background-color: #35c16d;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  width: 418px;
  height: 107px;
}

.iscontact_inner p {
  width: 195px;
  height: 28px;
}
.iscontact .p1 {
  width: 418px;
  height: 28px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: #ffffff;
  font-size: 30px;
  font-weight: bold;
}

.iscontact .p1 img {
  margin-left: 202px;
  // margin-bottom: 30px;
  width: 20px;
  height: 20px;
}
.iscontact .p2 {
  width: 418px;
  height: 30px;
  line-height: 30px;
  color: #ffffff;
  font-size: 30px;
  margin-left: -5px;
  // background-color: #b49726;
}
.contact {
  display: flex;

  align-items: center;
  width: 190px;
  height: 52px;
  /* background-color: #bfa; */
  // position: absolute;
  // top: 90%;
  // left: 3%;
  position: absolute;
  bottom: 0px;
  left: 0;
  border: #d648ef 1px solid;
  border-radius: 40px;
  background: rgba(214, 72, 239, 0.15);
}
.contact2 {
  display: flex;

  align-items: center;
  width: 234px;
  height: 64px;
  /* background-color: #bfa; */
  // position: absolute;
  // top: 90%;
  // left: 3%;
  position: absolute;
  bottom: 0px;
  left: 0;
  // border: #d648ef 1px solid;
  // border-radius: 40px;
  background: url(https://image.kmeta.world/website/img/iosbig.png);
  background-size: cover;
  background-repeat: no-repeat;
}

// .contact:hover {
//   background: rgba(214, 72, 239, 1);
// }
.contact img {
  width: 32px;
  height: 28px;
  margin-left: 34px;
}
.contact p {
  margin-left: 14px;
  color: #ffffff;
  font-size: 18px;
  font-weight: bold;
}

.button {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 94px;
  height: 52px;
  /* background-color: #bfa; */
  // position: absolute;
  // bottom: 0px;
  // left: 50%;
  // margin-left: -42px;
  // border: rgba(50, 26, 193, 0.5) 2px solid;
  // border-radius: 40px;

  position: absolute;
  bottom: 60px;
  left: 50%;
  transform: translate(-50%, 0);
}
// .button:hover {
//   border: rgba(50, 26, 193, 1) 2px solid;

// }

.button_inner {
  width: 30px;
  height: 30px;
}
.button_inner img {
  width: 29px;
  height: 29px;
}

.bigright {
  // border: rgba(50, 26, 193, 1) 2px solid;

  width: 232px;
  height: 242px;

  // position: absolute;
  // right: 0px;
  // bottom: 0px;
  position: absolute;
  bottom: 60px;
  right: 40px;
}

.bigright .right {
  width: 232px;
  height: 242px;
  position: absolute;
  top: 0;
  right: 0;
  // background-color: #984040;
}
.downloadad {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 232px;
  height: 66px;
  border: #23aed8 2px solid;
  background: rgba(35, 174, 216, 0.15);
  border-radius: 40px;
  position: absolute;
  top: 0;
  right: 0;
}

.downloadad .indownloadad {
  width: 152px;
  height: 40px;
  display: flex;
  // margin-left: 13px;
  justify-content: space-between;
  align-items: center;
  // background: #3050ff;
}
.downloadad img {
  margin-top: 2px;
  width: 32px;
  height: 35px;
}
.indownloadad_text {
  width: 110px;
  height: 45px;
  display: flex;
  flex-direction: column;
  // justify-content:flex-start;
  align-items: start;
  margin-left: 13px;

  // background-color: #cdf;
  // margin-top: -5px;
}
.indownloadad_text .p1 {
  // margin-top: -15px;

  // font-size: 22px;
  // color: #ffffff;
  // font-weight: bold;
  width: 107px;
  height: 24px;
}
.indownloadad_text .p2 {
  font-size: 16px;
  color: #ffffff;

  // margin-top: -5px;
}
.downloadios {
  display: flex;
  align-items: center;
  justify-content: center;
  align-items: center;
  width: 232px;
  height: 66px;
  border: #23aed8 2px solid;
  background: rgba(35, 174, 216, 0.15);

  border-radius: 40px;
  position: absolute;
  bottom: 86px;
  right: 0;
  // background: #3050ff;
}
.downloadios .indownloadios {
  width: 152px;
  height: 40px;
  display: flex;
  align-items: center;
  // margin-left: 13px;
  // background: #3050ff;
}
.downloadios img {
  // margin-top: 2px;
  // background: #3050ff;

  width: 32px;
  height: 35px;
}
.downloadios .indownloadios_text {
  width: 110px;
  height: 45px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: start;
  margin-left: 13px;
}

.indownloadios_text .p1 {
  width: 86px;
  height: 20px;
}
.indownloadios_text .p2 {
  font-size: 16px;
  color: #ffffff;
}
.download {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 190px;
  height: 52px;
  position: absolute;
  bottom: 0;
  right: 0;
  background: rgba(35, 174, 216, 1);
  border: rgba(35, 174, 216, 1) 2px solid;
  border-radius: 40px;
}
.download2 {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 234px;
  height: 64px;
  position: absolute;
  bottom: 0;
  right: 0;
  background: url(https://image.kmeta.world/website/img/And.png);
  background-size: cover;
  background-repeat: no-repeat;
}
.download img {
  width: 33px;
  height: 26px;
  margin-left: 40px;
}
.download p {
  font-size: 18px;
  color: #ffffff;
  font-weight: bold;
  margin-left: 13px;
}
</style>
