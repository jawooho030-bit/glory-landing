const LINE_URL = "https://line.me/ti/p/484lolur";

function openLine(source){

  if(typeof gtag !== "undefined"){
    gtag('event','line_click',{
      event_category:'CTA',
      event_label:source
    });
  }

  if(typeof fbq !== "undefined"){
    fbq('track','Contact',{content_name:source});
  }

  window.open(LINE_URL,"_blank");
}
