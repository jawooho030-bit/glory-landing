const LINE_URL = "https://line.me/ti/p/484lolur";

/**
 * GLORY V6 LINE Tracking System
 * - 所有 CTA 都走這裡
 * - 可追蹤來源
 */

function openLine(source = "unknown") {

  // 1. GA4 tracking
  if (typeof gtag !== "undefined") {
    gtag("event", "line_click", {
      event_category: "CTA",
      event_label: source
    });
  }

  // 2. Meta Pixel tracking
  if (typeof fbq !== "undefined") {
    fbq("track", "Contact", {
      content_name: source
    });
  }

  // 3. Debug log（方便你測試）
  console.log("[LINE CLICK]", source);

  // 4. redirect
  window.open(LINE_URL, "_blank");
}


/**
 * 卡片點擊專用（如果你未來要擴展 message）
 * 用於 concerns section
 */
function openLineWithMessage(source, message) {

  if (typeof gtag !== "undefined") {
    gtag("event", "line_click", {
      event_category: "CARD_CTA",
      event_label: source
    });
  }

  if (typeof fbq !== "undefined") {
    fbq("track", "Contact", {
      content_name: source
    });
  }

  console.log("[CARD LINE CLICK]", source, message);

  // 未來可擴展：自動帶入 LINE message（進階 API）
  window.open(LINE_URL, "_blank");
}


/**
 * Scroll tracking（可選）
 * 用來分析用戶停留位置
 */
function trackScrollDepth(percent) {

  if (typeof gtag !== "undefined") {
    gtag("event", "scroll_depth", {
      event_category: "ENGAGEMENT",
      event_label: percent + "%"
    });
  }

}
