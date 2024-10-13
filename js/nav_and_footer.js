// nav
const navContent = `
  <nav class="navbar navbar-dark navbar-expand-md" style="padding: 4px 1px; background-color: #333333; opacity: 0.95;">
    <div class="container-fluid">
      <a class="navbar-brand" href="index.html"><img src="assets/IMG_2073.jpg" width="30px" class="d-inline-block rounded-circle"> 阿蛤ㄉ窩</a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbar"><span class="navbar-toggler-icon"></span></button>
      <div id="navbar" class="collapse navbar-collapse">
        <ul class="navbar-nav me-auto">
          <li class="nav-item active"><a class="nav-link" href="about_me.html">關於我</a></li>
          <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" href="#" data-bs-toggle="dropdown">一些文章</a>
            <div class="dropdown-menu">
              <a class="dropdown-item" href="photo.html">攝影</a>
              <a class="dropdown-item" href="road.html">公路</a>
              <a class="dropdown-item" href="study.html">學習</a>
              <a class="dropdown-item" href="investment.html">投資</a>
            </div>
          </li>
          <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" href="#" data-bs-toggle="dropdown">旅遊</a>
            <div class="dropdown-menu">
              <a class="dropdown-item" href="trip.html">旅遊總覽</a>
              <hr class="dropdown-divider">
              <a class="dropdown-item" href="trip/Penghu_trip_2019.html" target="_blank">澎湖之旅</a>
              <a class="dropdown-item" href="trip/KaohsiungPingtung_trip_2021.html" target="_blank">高屏行</a>
              <a class="dropdown-item">二林實地考察</a>
              <a class="dropdown-item">蘭嶼小旅行</a>
            </div>
          </li>
          <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" href="#" data-bs-toggle="dropdown">網頁練習/筆記</a>
            <div class="dropdown-menu">
              <a class="dropdown-item" href="web_note/TestTestTest.html" target="_blank">試驗場</a>
              <hr class="dropdown-divider">
              <h3 class="dropdown-header">非Bootsrap相關筆記</h3>
              <a class="dropdown-item" href="web_note.html#webNote">網頁練習筆記區</a>
              <hr class="dropdown-divider">
              <h3 class="dropdown-header">Bootstrap相關筆記</h3>
              <a class="dropdown-item" href="web_note.html#usefulBootstrapComponent">一些好用的Bootstrap元件</a>
              <a class="dropdown-item" href="web_note.html#bootstrapNote">Bootstrap網格與內容樣式筆記</a>
              <hr class="dropdown-divider">
              <h3 class="dropdown-header">CSS函式庫相關筆記</h3>
              <a class="dropdown-item" href="web_note.html#cssFunctionNote">一些CSS函式庫</a>
              <hr class="dropdown-divider">
              <h3 class="dropdown-header">D3.js相關筆記</h3>
              <a class="dropdown-item" href="web_note.html#D3jsNote">D3.js資料視覺化筆記</a>
            </div>
          </li>
          <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" href="#" data-bs-toggle="dropdown">投資相關</a>
            <div class="dropdown-menu">
              <a class="dropdown-item" target="_blank">投資總覽</a>
              <hr class="dropdown-divider">
              <h3 class="dropdown-header">個人投資</h3>
              <a class="dropdown-item" href="investment/myInvestment.html">我的投資</a>
              <hr class="dropdown-divider">
              <h3 class="dropdown-header">投資工具（待整理）</h3>
              <a class="dropdown-item" href="investment/d3RollingReturnTest.html" target="_blank">滾動報酬率動圖測試</a>
              <a class="dropdown-item" href="investment/kLineTest.html" target="_blank">K線圖測試</a>
            </div>
          </li>
          <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" href="#" data-bs-toggle="dropdown">其他網頁</a>
            <div class="dropdown-menu">
              <a class="dropdown-item" href="old_index_20240508.html" target="_blank">舊版網頁（20240508版本）</a>
              <a class="dropdown-item" href="old_index_20240620.html" target="_blank">舊版網頁（20240620版本）</a>
              <a class="dropdown-item" href="old_web_note_20240802.html" target="_blank">舊版web_note網頁（20240802版本）</a>
              <a class="dropdown-item" href="study/statistics_note.html" target="_blank">統計學筆記</a>
              <a class="dropdown-item" href="other/degitalMedia_class.html" target="_blank">多媒體影像創作社</a>
              <a class="dropdown-item" href="other/photo_short_side_calculator.html" target="_blank">加黑框短邊計算器</a>
              <a class="dropdown-item" href="four_month_military_life/diary.html" target="_blank">軍中日記</a>
            </div>
          </li>
          <li class="nav-item"><a class="nav-link" href="#">聯絡我</a></li>
        </ul>
      </div>
    </div>
  </nav>
  <style>
    /* Navigator */
    nav a {
      transition: background-color 0.5s;
    }
    
    nav a:hover {
      background-color: #555555;
    }
  </style>
`;

// footer
const footerContent = `
  <footer class="container-fluid" style="padding: 25px; padding-left: 35px;">
    <div class="row">
      <div class="col-sm-7">
        <p class="fw-light">
          內文撰寫｜董冠霆<br>
          製&emsp;&emsp;圖｜董冠霆<br>
          網&emsp;&emsp;頁｜董冠霆<br>
          攝&emsp;&emsp;影｜董冠霆<br>
        </p>
        <p class="fw-light">
          聯絡方式：LineID @310956585<br>
          資料最後更新時間：<time datetime="2024-10-13T15:33">2024/10/13 15:33</time>
        </p>
        <p class="fw-light">&copy; 2024 Copyright</p>
      </div>
      <div class="col-sm-5 d-flex justify-content-sm-end align-items-end">
        <a href="https://www.instagram.com/ting.d_927" class="d-inline-block me-3" target="_blank"><i class="bi bi-instagram"></i></a>
        <a href="https://www.facebook.com/guanting.dong" class="d-inline-block me-3" target="_blank"><i class="bi bi-facebook"></i></a>
        <a href="https://line.me/ti/p/fOtvr_KEbv" class="d-inline-block me-5" target="_blank"><i class="bi bi-line"></i></a>
      </div>
    </div>
  </footer>
  <style>
    /* footer */
    footer {
      background-color: #3c3c3c;
    }

    footer h5 {
      color: #ffffff;
    }

    footer p {
      font-size: 14px;
      color: #eeeeee;
    }

    footer a {
      font-size: 24px;
      color: #eeeeee;
    }

    footer a:hover {
      transform: translateY(-1.5px);
      transition: transform 0.2s ease-in-out;
    }
  </style>
`;

document.getElementById("nav-placeholder").innerHTML = navContent;
document.getElementById("footer-placeholder").innerHTML = footerContent;