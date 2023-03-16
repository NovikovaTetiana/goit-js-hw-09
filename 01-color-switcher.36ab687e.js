const t=document.querySelector("[data-start]"),e=(document.querySelector("[data-stop]"),document.querySelector("body"));let o=null;t.addEventListener("click",(()=>{o=setTimeout((()=>{e.style.backgroundColor=`#${Math.floor(16777215*Math.random()).toString(16)}`,t.disabled=!0,console.log("hi")}),0)}));
//# sourceMappingURL=01-color-switcher.36ab687e.js.map
