const lineUrl = "https://lin.ee/xxxxxx";

function openLine(source) {

  console.log("CTA:", source);

  if (typeof fbq !== "undefined") {
    fbq('trackCustom', 'LINE_CLICK', { source });
  }

  window.open(lineUrl, "_blank");
}
