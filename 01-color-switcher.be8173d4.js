!function(){var t=document.querySelector("[data-start]"),e=document.querySelector("[data-stop]"),n=document.querySelector("body"),o=null;function r(){return"#".concat(Math.floor(16777215*Math.random()).toString(16))}t.addEventListener("click",(function(){o=setTimeout((function(){n.style.backgroundColor=r(),t.disabled=!0,e.disabled=!1,o=setInterval((function(){n.style.backgroundColor=r()}),1e3)}))}),0),e.addEventListener("click",(function(){clearInterval(o),t.disabled=!1,e.disabled=!0}))}();
//# sourceMappingURL=01-color-switcher.be8173d4.js.map