

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

// 移動游標改變顯示圖標
function ntubicdImage() {
  var changeImage = document.getElementById("changeImage");
  changeImage.src = "assets/ntubicd_trademark.png";
}

function ntubicdSabImage() {
  var changeBackImage = document.getElementById("changeImage");
  changeBackImage.src = "assets/ntubicdsab_trademark.JPG";
}