let pageState = 0;
let pages = [
  "Summary",
  "Why",
  "How",
  "Schedule",
  "Challenge",
  "Want-to",
  "Say",
];
function start() {
  changePage((page = "Summary"));
}
function changePage(page) {
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
  document.getElementById(page).style.color = "#fff";
  document.getElementById("menu_control").checked = false;
  // 精華所在
  history.pushState(null, null, page);
}

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

// hook event listener on window object
if ("onmousewheel" in window) {
  window.onmousewheel = MouseWheel;
  // } else if ('onmousewheel' in document) {
  //   document.onmousewheel = MouseWheel;
  // } else if ('addEventListener' in window) {
  //   window.addEventListener("mousewheel", MouseWheel, false);
  //   window.addEventListener("DOMMouseScroll", MouseWheel, false);
}

// fuction pageSelect(){

// }
