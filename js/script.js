

// 一些與Bootstrap無關的筆記
// 下拉式超連結
function toSearchEngine() {
  var searchEngine = document.getElementById("searchEngine");
  var selectedValue = searchEngine.value;

  if (selectedValue === "Google") {
    window.open("https://www.google.com.tw", "_blank");
  } else if (selectedValue === "Yahoo") {
    window.open("https://tw.yahoo.com", "");
  } else if (selectedValue === "Bing") {
    window.open("https://www.bing.com", "");
  }  
}

// 移動游標改變顯示圖標_JavaScript
function ntubicdImage() {
  var changeImage = document.getElementById("changeImage1");
  changeImage.src = "assets/about_me/ntubicd_trademark.png";
}

function ntubicdSabImage() {
  var changeBackImage = document.getElementById("changeImage1");
  changeBackImage.src = "assets/about_me/ntubicdsab_trademark.JPG";
}

// 移動游標改變顯示圖標_jQuery
// 寫在html裡