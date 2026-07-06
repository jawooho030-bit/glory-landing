const LINE_URL = "https://line.me/ti/p/484lolur";

/* =========================
GLORY LINE SYSTEM MODULE
========================= */

/**
 * Open LINE with tracking support
 */
function openLine(source = "unknown") {

  // Open LINE
  window.open(LINE_URL, "_blank");

  // GA4 event
  if (typeof gtag !== "undefined") {
    gtag('event', 'line_click', {
      event_category: 'conversion',
      event_label: source
    });
  }

  // Meta Pixel event
  if (typeof fbq !== "undefined") {
    fbq('track', 'Contact', {
      content_name: source
    });
  }

  // Debug log
  console.log("[GLORY LINE CLICK]", source);
}

/* =========================
Optional: direct CTA helpers
========================= */

function lineHero() {
  openLine("hero");
}

function lineService(type) {
  openLine("service_" + type);
}

function lineFinal() {
  openLine("final_cta");
}

function lineFloating() {
  openLine("floating_button");
}
