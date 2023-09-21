<template>
    <div class="topLp">
      <Header></Header>
      <main class="main">
        <section class="heroImageArea">
          <ImageSlider
            :images="heroImages"
          ></ImageSlider>
        </section>
        <section class="features">
          <h1 class="feture1">FETURE</h1>
          <h3 class="h3">特徴</h3>
          <div class="div190">
            <h1 class="h14">
              <p class="p">必要書類はメールにて送信。</p>
              <p class="p">かんたんに手続きが済みます。</p>
            </h1>
            <div class="ellipseDiv" />
            <div class="div187">01</div>
            <h1 class="h15">
              <p class="p">難しい手続きなしで</p>
              <p class="p">すぐご出発</p>
            </h1>
          </div>
          <div class="div188">
            <h1 class="h12">
              <p class="p">混みにくいインターチェンジへ</p>
              <p class="p">最短アクセスが可能です。</p>
            </h1>
            <div class="ellipseDiv" />
            <div class="div187">02</div>
            <h1 class="h13">
              <p class="p">混みにくい高速道路の</p>
              <p class="p">近くだからスイスイ</p>
            </h1>
          </div>
          <div class="div186">
            <h1 class="h1">
              <p class="p">
                広々過ごせるアルファードでゆとりのある快適なご旅行を
              </p>
              <p class="p">サポートいたします。</p>
            </h1>
            <div class="ellipseDiv" />
            <div class="div187">03</div>
            <h1 class="h11">
              <p class="p">全車ゆとりのある</p>
              <p class="p">アルファード</p>
            </h1>
          </div>
        </section>
        <section class="schedule" schedule-search-form>
          <div class="scheduleChild" />
          <div class="div153">
            <div class="div154">乗車定員　7人</div>
            <img
              class="maskGroupIcon1"
              alt=""
              src="/images/mask-group1@2x.png"
            />
          </div>
          <div class="h">¥25,000~/24h</div>
          <div class="alphard">ALPHARD</div>
          <main class="main6" />
          <div class="div155">
            <div class="child" />
            <div class="div156">選択する</div>
          </div>
          <div class="div157">
            <div class="child" />
            <div class="div158">
              <p class="p">会員の方</p>
              <p class="p1">　　 (選択する)</p>
            </div>
          </div>
          <div class="div159">
            <div class="child" />
            <div class="div158">
              <p class="p">初めての方</p>
              <p class="p1">(選択する)</p>
            </div>
          </div>
          <div class="div161">会員の方</div>
          <div class="div162">(選択する)</div>
          <div class="div163">(選択する)</div>
          <div class="div164">はじめての方</div>
          <img class="scheduleItem" alt="" src="/images/vector-2.svg" />
          <div class="div165">
            <img class="icon1" alt="" src="/images/1.svg" />
            <div class="div166">日付未定</div>
          </div>
          <div class="div167">
            <div class="div168">
              <div class="div169">2023/01/01</div>
              <img class="vectorIcon25" alt="" src="/images/vector25.svg" />
            </div>
            <div class="div170">
              <div class="child26" />
              <div class="div171">8:00</div>
              <img class="vectorIcon26" alt="" src="/images/vector26.svg" />
            </div>
            <div class="div172">
              <div class="div66">8:00</div>
              <img
                class="keyboardArrowDown8"
                alt=""
                src="/images/keyboard-arrow-down7.svg"
              />
            </div>
            <div class="div174">返却日時</div>
          </div>
          <div class="div175">
            <div class="div176">出発日時</div>
            <div class="div177">
              <div class="div169">2023/01/01</div>
              <img class="vectorIcon25" alt="" src="/images/vector27.svg" />
            </div>
            <div class="calendarOverlayButton">
              <img class="vectorIcon28" alt="" src="/images/vector28.svg" />
            </div>
            <div class="calendarOverlayButton1">
              <img class="vectorIcon28" alt="" src="/images/vector28.svg" />
            </div>
            <div class="div170">
              <div class="child26" />
              <div class="div171">8:00</div>
              <img class="vectorIcon26" alt="" src="/images/vector29.svg" />
            </div>
            <div class="div172">
              <div class="div66">8:00</div>
              <img
                class="keyboardArrowDown8"
                alt=""
                src="/images/keyboard-arrow-down7.svg"
              />
            </div>
          </div>
          <div class="div183">
            <div class="schedule1">SCHEDULE</div>
            <div class="div184">旅行日程で探す</div>
            <img class="scheduleIcon3" alt="" src="/images/schedule2.svg" />
          </div>
          <button class="button3">
            <div class="child" />
            <div class="div4">空き状況を検索</div>
          </button>
        </section>
        <div class="div35">
          <button class="button2">
            <div class="child" />
            <div class="div4">　 予約確認</div>
          </button>
          <div class="div37">
            <div class="div38">会員登録</div>
            <div class="div39">
              <div class="div40">希望する</div>
              <img class="vectorIcon4" alt="" src="/images/vector4.svg" />
            </div>
            <div class="div41">
              <div class="div42">希望しない</div>
              <img class="vectorIcon4" alt="" src="/images/vector5.svg" />
            </div>
          </div>
          <div class="div43">
            <input class="rectangleInput" type="text" />
            <div class="div44">パスワード</div>
          </div>
          <div class="div45">
            <div class="child1" />
            <div class="div46">備考</div>
          </div>
          <div class="div47">
            <input class="input" type="text" />
            <input class="input1" type="text" />
            <input class="input2" type="file" />
            <input class="input3" type="file" />
            <div class="div48">追加運転者</div>
            <div class="div49">
              <div class="div50">あり</div>
              <img class="vectorIcon4" alt="" src="/images/vector6.svg" />
            </div>
            <div class="div51">
              <div class="div52">なし</div>
              <img class="vectorIcon4" alt="" src="/images/vector7.svg" />
            </div>
          </div>
          <div class="div53">
            <input class="input4" type="text" />
            <input class="input5" type="text" />
            <input class="input6" type="file" />
            <input class="input7" type="text" />
            <div class="div54">本人確認書類アップロード</div>
          </div>
          <div class="div55">
            <div class="div56">
              <div class="child2" />
              <div class="div57">セキュリティコード</div>
              <div class="div58">123</div>
            </div>
            <div class="div59">
              <div class="div60">カード有効期限</div>
              <div class="div61">
                <div class="child3" />
                <div class="div62">01</div>
                <img class="vectorIcon8" alt="" src="/images/vector8.svg" />
              </div>
              <div class="div63">
                <div class="child4" />
                <div class="div62">2023</div>
                <img class="vectorIcon9" alt="" src="/images/vector9.svg" />
              </div>
              <div class="div65">
                <div class="div66">01</div>
                <img
                  class="keyboardArrowDown"
                  alt=""
                  src="/images/keyboard-arrow-down2.svg"
                />
              </div>
              <div class="div67">
                <div class="div66">2023</div>
                <img
                  class="keyboardArrowDown"
                  alt=""
                  src="/images/keyboard-arrow-down3.svg"
                />
              </div>
              <div class="div69">
                <div class="child3" />
                <div class="div62">01</div>
                <img class="vectorIcon8" alt="" src="/images/vector10.svg" />
              </div>
              <div class="div71">/</div>
            </div>
            <input class="child6" type="text" />
            <div class="div72">クレジットカード番号</div>
            <div class="div73">123456789012</div>
          </div>
          <div class="div74">
            <div class="div75">空港お見送り</div>
            <div class="div76">
              <div class="div50">あり</div>
              <img class="vectorIcon4" alt="" src="/images/vector11.svg" />
            </div>
            <div class="div78">
              <div class="div52">なし</div>
              <img class="vectorIcon4" alt="" src="/images/vector12.svg" />
            </div>
            <div class="div80">
              <div class="child3" />
              <div class="div62">17</div>
              <img class="vectorIcon8" alt="" src="/images/vector13.svg" />
            </div>
            <div class="div82">
              <div class="child3" />
              <div class="div62">00</div>
              <img class="vectorIcon8" alt="" src="/images/vector14.svg" />
            </div>
            <input class="input8" type="text" />
            <input class="input9" type="text" />
            <div class="div84">時</div>
            <div class="div85">分</div>
          </div>
          <div class="div86">
            <div class="div75">空港お出迎え</div>
            <div class="div76">
              <div class="div50">あり</div>
              <img class="vectorIcon4" alt="" src="/images/vector15.svg" />
            </div>
            <div class="div78">
              <div class="div52">なし</div>
              <img class="vectorIcon4" alt="" src="/images/vector16.svg" />
            </div>
            <div class="div92">
              <div class="child9" />
              <div class="div62">09</div>
              <img class="vectorIcon8" alt="" src="/images/vector17.svg" />
            </div>
            <div class="div94">
              <div class="child9" />
              <div class="div62">00</div>
              <img class="vectorIcon8" alt="" src="/images/vector18.svg" />
            </div>
            <div class="div96">
              <div class="div66">00</div>
              <img
                class="keyboardArrowDown"
                alt=""
                src="/images/keyboard-arrow-down4.svg"
              />
            </div>
            <div class="div98">
              <div class="div66">09</div>
              <img
                class="keyboardArrowDown"
                alt=""
                src="/images/keyboard-arrow-down4.svg"
              />
            </div>
            <div class="div84">時</div>
            <div class="div85">分</div>
          </div>
          <div class="div102">
            <div class="div103">住所</div>
            <div class="div104">
              <input class="input10" type="text" />
              <div class="rectangleParent">
                <div class="frameChild" />
                <div class="div105">都道府県</div>
                <img class="vectorIcon19" alt="" src="/images/vector19.svg" />
              </div>
              <select class="select" />
              <input class="child11" type="text" />
            </div>
            <div class="div106">〒</div>
          </div>
          <div class="div107">
            <div class="div108">
              <div class="div109">
                <div class="child3" />
                <div class="div62">01</div>
                <img class="vectorIcon8" alt="" src="/images/vector20.svg" />
              </div>
              <div class="div111">
                <div class="div66">1920</div>
                <img
                  class="keyboardArrowDown"
                  alt=""
                  src="/images/keyboard-arrow-down5.svg"
                />
              </div>
              <div class="div113">
                <div class="div62">01</div>
                <img class="vectorIcon8" alt="" src="/images/vector21.svg" />
              </div>
              <div class="div115">/</div>
              <div class="div116">/</div>
            </div>
            <div class="div117">生年月日</div>
            <input class="child13" type="text" />
            <div class="div118">19750101</div>
          </div>
          <div class="div119">
            <div class="div120">
              <div class="div121">
                <div class="child4" />
                <div class="div62">2023</div>
                <img class="vectorIcon9" alt="" src="/images/vector22.svg" />
              </div>
              <div class="div123">
                <div class="child3" />
                <div class="div62">01</div>
                <img class="vectorIcon8" alt="" src="/images/vector23.svg" />
              </div>
              <div class="div125">
                <div class="child3" />
                <div class="div62">01</div>
                <img class="vectorIcon8" alt="" src="/images/vector24.svg" />
              </div>
              <div class="div111">
                <div class="div66">2023</div>
                <img
                  class="keyboardArrowDown"
                  alt=""
                  src="/images/keyboard-arrow-down6.svg"
                />
              </div>
              <div class="div129">
                <div class="div66">01</div>
                <img
                  class="keyboardArrowDown"
                  alt=""
                  src="/images/keyboard-arrow-down6.svg"
                />
              </div>
              <div class="div131">
                <div class="div66">01</div>
                <img
                  class="keyboardArrowDown"
                  alt=""
                  src="/images/keyboard-arrow-down6.svg"
                />
              </div>
              <div class="div133">/</div>
              <div class="div134">/</div>
            </div>
            <div class="div135">免許証有効期限</div>
            <input class="child17" type="text" />
            <div class="div136">20230101</div>
          </div>
          <div class="div137">
            <input class="rectangleInput" type="text" />
            <div class="div138">免許証番号</div>
            <div class="div139">123456789012</div>
          </div>
          <div class="div140">
            <input class="rectangleInput" type="text" />
            <div class="div44">電話番号</div>
            <div class="div139">080-0000-0000</div>
          </div>
          <div class="div143">
            <input class="rectangleInput" type="text" />
            <div class="div44">メールアドレス</div>
            <div class="div139">example@class.okinawa</div>
          </div>
          <div class="div145">
            <input class="rectangleInput" type="text" />
            <div class="div44">お名前 (かな)</div>
            <div class="div147">やまだたろう</div>
          </div>
          <div class="div148">
            <input class="rectangleInput" type="text" />
            <div class="div149">お名前</div>
            <div class="div147">山田太郎</div>
          </div>
          <div class="div151">
            <div class="yourInformation">YOUR INFORMATION</div>
            <div class="div152">お客様情報入力</div>
            <img class="scheduleIcon1" alt="" src="/images/schedule1.svg" />
          </div>
          <img class="scheduleIcon2" alt="" src="/images/schedule2.svg" />
        </div>
        <div class="div3">
          <button class="button">
            <div class="child" />
            <div class="div4">　 現金決済</div>
          </button>
          <button class="button1">
            <div class="child" />
            <div class="div4">オンライン決済</div>
          </button>
          <div class="div6">
            <div class="div7">■お客様情報</div>
            <div class="div8">お名前</div>
            <div class="div9">メールアドレス</div>
            <div class="div10">電話番号</div>
            <div class="div11">080-0000-0000</div>
            <div class="div12">空港お出迎え</div>
            <div class="div13">空港お見送り</div>
            <div class="div14">18:00</div>
            <div class="div15">なし</div>
            <div class="exampleclassokinawa">example@class.okinawa</div>
            <div class="div16">山田太郎　様</div>
          </div>
          <div class="div17">
            <img class="inner" alt="" src="/images/vector-1.svg" />
            <div class="div18">
              <img class="icon" alt="" src="/images/@2x.png" />
              <div class="div19">補償制度を詳しく</div>
            </div>
            <div class="exampleclassokinawa">基本料金</div>
            <div class="div21">¥20,000</div>
            <div class="div22">補償制度</div>
            <div class="div23">¥3,000</div>
            <div class="div24">¥30,000</div>
            <div class="div25">2023/1/1 10:00 ~ 20231/2 18:00</div>
            <div class="div26">■料金</div>
            <div class="div27">■貸出日程</div>
          </div>
          <div class="div28">
            <div class="at">
              <div class="at1">AT</div>
            </div>
            <div class="div29">
              <img class="vectorIcon" alt="" src="/images/vector.svg" />
              <img class="vectorIcon1" alt="" src="/images/vector1.svg" />
              <img class="vectorIcon2" alt="" src="/images/vector2.svg" />
              <img class="vectorIcon3" alt="" src="/images/vector3.svg" />
              <div class="div30">7人</div>
            </div>
            <img class="maskGroupIcon" alt="" src="/images/mask-group@2x.png" />
          </div>
          <div class="div31">
            <main class="main1" />
            <main class="main2" />
            <main class="main3" />
            <main class="main4" />
          </div>
          <main class="main5" />
          <div class="div32">■車両情報</div>
          <div class="toyota">TOYOTA　アルファード</div>
          <div class="div33">
            <div class="bookingInformation">BOOKING INFORMATION</div>
            <div class="div34">ご予約内容</div>
            <img class="scheduleIcon" alt="" src="/images/schedule.svg" />
          </div>
        </div>
      </main>
      <footer class="footer">
        <div class="div">〒901-0203　沖縄県豊見城市長堂67</div>
        <div class="div1">営業時間　8:00-18:00</div>
        <div class="div2">問合せ　080-0000-0000</div>
        <img
          class="classLogo31"
          alt=""
          src="/images/class-logo3-1@2x.png"
          :onClick="onCLASSLogo31Click"
        />
        <img class="footerChild" alt="" src="/images/images/group-2@2x.png" />
      </footer>
      <div class="div192">お客様画面</div>
      <h3 class="h31">
        <p class="p">※空港近辺では使用インターが</p>
        <p class="p">重なり、度々渋滞になります。</p>
      </h3>
    </div>
  </template>
  
  <script>
  import Header from "/src/components/common/Header";
  import ImageSlider from "/src/components/common/ImageSlider";
  export default {
    name: 'Home',
    components: {
      Header,
      ImageSlider
    },
    props: {
      msg:  {
        type   : String,
        default: "Hello world",
        }
    },
    data() {
      return {
        heroImages: [
          "/images/hero-image1-v2.jpg",
          "https://cdn.pixabay.com/photo/2015/12/12/15/24/amsterdam-1089646_1280.jpg",
          "https://cdn.pixabay.com/photo/2016/12/04/19/30/berlin-cathedral-1882397_1280.jpg"
        ]
      }
    }
  }
  </script>
  
  <!-- Add "scoped" attribute to limit CSS to this component only -->
  <style lang="scss" scoped>
  section {
    &.heroImageArea {
      margin-bottom: 1.2rem;
    }

    &.features {
      text-align: center;
      font-size: var(--font-size-base);
      color: var(--color-white);
      font-family: var(--font-istok-web);
    }
  }
  </style>
  