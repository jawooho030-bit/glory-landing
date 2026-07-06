// =========================
// GLORY LINE SYSTEM V9
// Meta Pixel + LINE
// =========================

const LINE_URL = "https://line.me/ti/p/@484lolur";

function openLine(source = "unknown") {

  console.log("LINE click:", source);

  // Meta Pixel Contact Event
  if (typeof fbq !== "undefined") {
    fbq("track", "Contact", {
      content_name: source
    });
  }

  // 等待事件送出再開啟 LINE
  setTimeout(function () {
    window.open(LINE_URL, "_blank");
  }, 200);

}
