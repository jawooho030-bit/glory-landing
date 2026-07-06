// =========================
// GLORY LINE SYSTEM V9
// Meta Pixel + LINE
// =========================

// 建議之後換成 https://lin.ee/XXXXXX
const LINE_URL = "https://line.me/ti/p/@484lolur";

function openLine(source = "unknown") {

  console.log("LINE click:", source);

  // Meta Pixel：記錄使用者點擊 LINE
  if (typeof fbq !== "undefined") {
    fbq("track", "Contact", {
      content_name: source
    });
  }

  // 等待 Pixel 事件送出
  setTimeout(() => {
    window.open(LINE_URL, "_blank");
  }, 200);

}
