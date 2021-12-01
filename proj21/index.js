let pageState = 0; //page切換狀態
let pages = [
  // array of pages
  "Summary",
  "Why",
  "How",
  "Schedule",
  "Challenge",
  "Want-to",
  "Say",
];
// start function 引導進入第一頁
function start() {
  changePage((page = "Summary"));
}
// 換頁函式
function changePage(page) {
  //更換頁籤顏色
  for (const i of pages) {
    document.getElementById(i).style.color = "";
  }
  $(".page").hide();
  switch (page) {
    case "Summary":
      $(".Summary").show();
      pageState = 0;
      break;
    case "Why":
      $(".Why").show();
      pageState = 1;
      break;
    case "How":
      $(".How").show();
      pageState = 2;
      break;
    case "Schedule":
      $(".Schedule").show();
      pageState = 3;
      break;
    case "Challenge":
      $(".Challenge").show();
      pageState = 4;
      break;
    case "Want-to":
      $(".Want-to").show();
      pageState = 5;
      break;
    case "Say":
      $(".Say").show();
      pageState = 6;
      break;
  }
  document.getElementById(page).style.color = "#aaf";
  document.getElementById("menu_control").checked = false;
  history.pushState(null, null, page);
}
// 偵測換頁頁數最大為6 最小為0
function scrollLimit() {
  if (pageState >= 6) {
    pageState = 6;
  } else if (pageState <= 0) {
    pageState = 0;
  }
}

function MouseWheel(e) {
  e = e || window.event;
  let scrollTop = $(this).scrollTop();
  let scrollHeight = $("body").prop("scrollHeight");
  let clientHeight = document.documentElement.clientHeight;
  let mouseState = e.wheelDelta <= 0 || e.detail > 0;
  // alert(['scrolled ', (( e.wheelDelta <= 0 || e.detail > 0) ? 'down' : 'up')].join(''));
  // (( e.wheelDelta <= 0 || e.detail > 0) ?  : );
  console.log(
    e.wheelDelta <= 0 || e.detail > 0,
    pageState,
    scrollHeight,
    scrollTop,
    clientHeight
  );
  if (scrollTop + clientHeight >= scrollHeight && mouseState) {
    pageState++;
    scrollLimit();
    $(this).scrollTop("0");
    changePage(pages[pageState]);
  }
  if (scrollTop == 0 && !mouseState) {
    pageState--;
    scrollLimit();
    changePage(pages[pageState]);
  }
}

function debounce(func, wait = 50, immediate = true) {
  var timeout;
  return function () {
    var later = function () {
      timeout = null;
      if (!immediate) func.apply(); //不立即執行則是隔waitms後執行
    };
    var callNow = immediate && !timeout;
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
    if (callNow) func.apply(); //立即執行後再隔20ms
  };
}

function checkSlide(e) {
  console.log(e);
}

// 點選頁面時 收合選單
$(".page").click(() => {
  document.getElementById("menu_control").checked = false;
});

$(document).ready(function () {
  $(".btn-close").click(function () {
    $(".full-screen").hide();
  });
});

// $(".how").hide();
