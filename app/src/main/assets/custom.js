window.addEventListener("DOMContentLoaded",()=>{const t=document.createElement("script");t.src="https://www.googletagmanager.com/gtag/js?id=G-W5GKHM0893",t.async=!0,document.head.appendChild(t);const n=document.createElement("script");n.textContent="window.dataLayer = window.dataLayer || [];function gtag(){dataLayer.push(arguments);}gtag('js', new Date());gtag('config', 'G-W5GKHM0893');",document.body.appendChild(n)});(function() {
  'use strict';
  var BACK = '\u2190';
  var FWD = '\u2192';
  function makeBtn(align, sym, fn) {
    var b = document.createElement('div');
    b.id = 'pp-nav-' + (align === 'left' ? 'back' : 'fwd');
    b.innerHTML = sym;
    b.style.cssText = 'position:fixed;' + align + ':14px;bottom:90px;z-index:2147483647;width:46px;height:46px;border-radius:50%;background:rgba(24,60,120,0.72);color:#fff;font-size:24px;line-height:46px;text-align:center;cursor:pointer;user-select:none;-webkit-user-select:none;box-shadow:0 2px 8px rgba(0,0,0,0.35);font-family:Arial,sans-serif;';
    b.addEventListener('click', function(e) {
      e.stopPropagation();
      fn();
    });
    document.body.appendChild(b);
    return b;
  }
  function init() {
    if (document.getElementById('pp-nav-back')) { return; }
    makeBtn('left', BACK, function() { history.back(); });
    makeBtn('right', FWD, function() { history.forward(); });
  }
  if (document.body) { init(); } else { document.addEventListener('DOMContentLoaded', init); }
})();
