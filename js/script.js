const LINE_URL = "https://line.me/ti/p/484lolur";

/* =========================
OPEN LINE + TRACKING
========================= */
function openLine(source) {

  // 1. 打開 LINE
  window.open(LINE_URL, "_blank");

  // 2. GA4 追蹤（如果有 GA4）
  if (typeof gtag !== "undefined") {
    gtag('event', 'line_click', {
      'event_category': 'conversion',
      'event_label': source
    });
  }

  // 3. Meta Pixel 追蹤（如果有 Pixel）
  if (typeof fbq !== "undefined") {
    fbq('track', 'Contact', {
      content_name: source
    });
  }

  // 4. console debug（方便你測試）
  console.log("LINE clicked:", source);
}
