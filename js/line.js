// =========================
// GLORY LINE SYSTEM V8
// ONLY SOURCE OF LINE_URL
// =========================

const LINE_URL = "https://line.me/xxxxx"; // 改成你的

function openLine(source = "unknown") {
  // tracking（未來可接GA4/Meta）
  console.log("LINE click from:", source);

  window.open(LINE_URL, "_blank");
}
