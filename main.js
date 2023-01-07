(()=>{"use strict";var e={};function t(e){const t=document.createElement("p");return t.textContent=e,t}e.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),(()=>{var t;e.g.importScripts&&(t=e.g.location+"");var n=e.g.document;if(!t&&n&&(n.currentScript&&(t=n.currentScript.src),!t)){var a=n.getElementsByTagName("script");a.length&&(t=a[a.length-1].src)}if(!t)throw new Error("Automatic publicPath is not supported in this browser");t=t.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),e.p=t})();const n=function(){const e=document.getElementById("main");e.textContent="",e.appendChild(function(){const e=document.createElement("div");return e.classList.add("home"),e.appendChild(t("Mangalorean food is an eclectic mix of cuisines from different communities who have long inhabited the coasts of Karnataka.")),e.appendChild(t("Mangalorean cuisine has also been influenced by the food of South India which is why you will find an abundance of curry leaves and coconut. But it is foolhardy to dismiss Mangalorean food as simply South Indian because of its unique dishes.")),e.appendChild(t("Because nowhere else in the world, will you find the delicious ghee roast, kori roti, or leaf-wrapped patolis.")),e}())};function a(e,t){const n=document.createElement("div");n.classList.add("menu-item");const a=document.createElement("h2");a.textContent=e;const i=document.createElement("p");i.textContent=t;const o=document.createElement("img");return o.classList.add("menuImg"),o.src=`../dist/images/${e.toLowerCase()}.jpg`,o.alt=`Image of ${e}`,n.appendChild(a),n.appendChild(o),n.appendChild(i),n}const i=e.p+"f6b8ce26a3b70fddf983.png";function o(e){const t=document.createElement("h2");return t.textContent=e,t}const d=e.p+"79d245e5e75b2b3d869e.jpg";function c(){const e=document.createElement("header");e.classList.add("header");const t=document.createElement("h1");return t.classList.add("restaurantName"),t.textContent="The MANGALOREAN",e.appendChild(t),e.appendChild(function(){const e=document.createElement("nav");e.classList.add("nav");const t=document.createElement("button");t.classList.add("buttons"),t.textContent="HOME",t.addEventListener("click",(e=>{e.target.classList.contains("active")||(s(t),n())}));const d=document.createElement("button");d.classList.add("buttons"),d.textContent="MENU",d.addEventListener("click",(e=>{e.target.classList.contains("active")||(s(d),function(){const e=document.getElementById("main");e.textContent="",e.appendChild(function(){const e=document.createElement("div");return e.classList.add("menu"),e.appendChild(a("POMFRET","Pomfret fish is known for its delicate, flaky white flesh and mild, sweet flavor. It is considered a delicacy in many parts of Asia and is often served as a whole fish with its head and tail intact. The fish can be cooked in a variety of ways, including steaming, grilling, frying, and baking.")),e.appendChild(a("GOLIBAJE","Golibaje or Mangalore bajji is an Indian fried food made from various flours and curd. In Tulu Nadu region, it is known as golibaje. Other names for the dish include Mangalore baje. This is widely famous in Andhra Pradesh and Telangana as Mysore bonda/bajji.")),e.appendChild(a("KORIROTI","Kori rotti is a spicy dish of Tulu Udupi-Mangalorean cuisine, a combination of red-chili and coconut milk based chicken curry and crisp, dry wafers made from boiled rice. Kori means chicken in Tulu.")),e.appendChild(a("GHEEROAST","Chicken ghee roast is a popular Tuluva Mangalorean Chicken recipe whose origins go back to the town, Kundapur, close to Udupi. Chicken ghee roast is fiery red in colour, and has a tangy and spicy flavor with ghee and roasted spices.")),e.appendChild(a("NEERDOSA","Neer dosa, literally meaning water dosa in Tulu is a crêpe prepared from rice batter. Neer dosa is a delicacy from Tulu Nadu and part of Mangalorean cuisine")),e.appendChild(a("PATHOLI","Patholi (plural: Patoleo) are sweet stuffed rice rolls which are steamed wrapped in turmeric leaves. Since there’s a unique technique involved in this recipe, the preparation and cooking of this dish is laborious. It is vegan and since rice flour is the main ingredient, the dish is gluten free too.")),e}())}())}));const c=document.createElement("button");return c.classList.add("buttons"),c.textContent="CONTACT",c.addEventListener("click",(e=>{e.target.classList.contains("active")||(s(c),function(){const e=document.getElementById("main");e.textContent="",e.appendChild(function(){const e=document.createElement("div");e.classList.add("contact");const t=document.createElement("img");return t.classList.add("map"),t.src=i,t.alt="map of Mangalore",e.appendChild(o("WHERE WE ARE")),e.appendChild(t),e.appendChild(o("HOURS:")),e.appendChild(o("Mon to Fri: CLOSED")),e.appendChild(o("Sunday: Noon to Midnight")),e.appendChild(o("Saturday: Noon to Midnight")),e}())}())})),e.appendChild(t),e.appendChild(d),e.appendChild(c),e}()),e}function s(e){document.querySelectorAll(".buttons").forEach((e=>{e!==this&&e.classList.remove("active")})),e.classList.add("active")}!function(){const e=document.getElementById("content");e.appendChild(c()),e.appendChild(function(){const e=document.createElement("main");return e.setAttribute("id","main"),e.classList.add("main"),e}()),e.appendChild(function(){const e=document.createElement("footer");e.classList.add("footer");const t=document.createElement("p");t.innerHTML="A Mangy project",e.appendChild(t);const n=document.createElement("img");n.src=d,n.alt="Mangalorian Helmet",n.classList.add("footerImage"),e.appendChild(n);const a=document.createElement("p");return a.innerHTML="NM Dec 2022",e.appendChild(a),e}()),s(document.querySelector(".buttons")),n()}()})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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RUFBT3RDLFlBQVkwQyxHQUVaSixDQUNULENBUXlCSyxJQUN2QnJCLEVBQWdCNUMsU0FBU2tFLGNBQWMsYUFDdkMsR0FDRixDQ3RHQSxFIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbWFuZ2Fsb3JlYW4vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vbWFuZ2Fsb3JlYW4vLi9zcmMvaG9tZS5qcyIsIndlYnBhY2s6Ly9tYW5nYWxvcmVhbi93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovL21hbmdhbG9yZWFuL3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL21hbmdhbG9yZWFuLy4vc3JjL21lbnUuanMiLCJ3ZWJwYWNrOi8vbWFuZ2Fsb3JlYW4vLi9zcmMvY29udGFjdC5qcyIsIndlYnBhY2s6Ly9tYW5nYWxvcmVhbi8uL3NyYy93ZWJzaXRlLmpzIiwid2VicGFjazovL21hbmdhbG9yZWFuLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIFRoZSByZXF1aXJlIHNjb3BlXG52YXIgX193ZWJwYWNrX3JlcXVpcmVfXyA9IHt9O1xuXG4iLCJmdW5jdGlvbiBtYWtlSG9tZSgpIHtcbiAgICBjb25zdCBob21lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgaG9tZS5jbGFzc0xpc3QuYWRkKCdob21lJyk7XG5cbiAgICBob21lLmFwcGVuZENoaWxkKG1ha2VQYXJhKFwiTWFuZ2Fsb3JlYW4gZm9vZCBpcyBhbiBlY2xlY3RpYyBtaXggb2YgY3Vpc2luZXMgZnJvbSBkaWZmZXJlbnQgY29tbXVuaXRpZXMgd2hvIGhhdmUgbG9uZyBpbmhhYml0ZWQgdGhlIGNvYXN0cyBvZiBLYXJuYXRha2EuXCIpKTtcbiAgICBob21lLmFwcGVuZENoaWxkKG1ha2VQYXJhKFwiTWFuZ2Fsb3JlYW4gY3Vpc2luZSBoYXMgYWxzbyBiZWVuIGluZmx1ZW5jZWQgYnkgdGhlIGZvb2Qgb2YgU291dGggSW5kaWEgd2hpY2ggaXMgd2h5IHlvdSB3aWxsIGZpbmQgYW4gYWJ1bmRhbmNlIG9mIGN1cnJ5IGxlYXZlcyBhbmQgY29jb251dC4gQnV0IGl0IGlzIGZvb2xoYXJkeSB0byBkaXNtaXNzIE1hbmdhbG9yZWFuIGZvb2QgYXMgc2ltcGx5IFNvdXRoIEluZGlhbiBiZWNhdXNlIG9mIGl0cyB1bmlxdWUgZGlzaGVzLlwiKSk7XG4gICAgaG9tZS5hcHBlbmRDaGlsZChtYWtlUGFyYShcIkJlY2F1c2Ugbm93aGVyZSBlbHNlIGluIHRoZSB3b3JsZCwgd2lsbCB5b3UgZmluZCB0aGUgZGVsaWNpb3VzIGdoZWUgcm9hc3QsIGtvcmkgcm90aSwgb3IgbGVhZi13cmFwcGVkIHBhdG9saXMuXCIpKVxuXG4gICAgcmV0dXJuIGhvbWU7XG59XG5cbmZ1bmN0aW9uIG1ha2VQYXJhKHRleHQpe1xuICAgIGNvbnN0IHBhcmEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgICBwYXJhLnRleHRDb250ZW50PSh0ZXh0KTtcbiAgICByZXR1cm4gcGFyYTtcbn1cblxuZnVuY3Rpb24gbG9hZEhvbWVQYWdlKCkge1xuICAgIGNvbnN0IG1haW4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm1haW5cIik7XG4gICAgbWFpbi50ZXh0Q29udGVudD1cIlwiO1xuICAgIG1haW4uYXBwZW5kQ2hpbGQobWFrZUhvbWUoKSk7XG59XG5leHBvcnQgZGVmYXVsdCBsb2FkSG9tZVBhZ2U7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJ2YXIgc2NyaXB0VXJsO1xuaWYgKF9fd2VicGFja19yZXF1aXJlX18uZy5pbXBvcnRTY3JpcHRzKSBzY3JpcHRVcmwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcubG9jYXRpb24gKyBcIlwiO1xudmFyIGRvY3VtZW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmRvY3VtZW50O1xuaWYgKCFzY3JpcHRVcmwgJiYgZG9jdW1lbnQpIHtcblx0aWYgKGRvY3VtZW50LmN1cnJlbnRTY3JpcHQpXG5cdFx0c2NyaXB0VXJsID0gZG9jdW1lbnQuY3VycmVudFNjcmlwdC5zcmNcblx0aWYgKCFzY3JpcHRVcmwpIHtcblx0XHR2YXIgc2NyaXB0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic2NyaXB0XCIpO1xuXHRcdGlmKHNjcmlwdHMubGVuZ3RoKSBzY3JpcHRVcmwgPSBzY3JpcHRzW3NjcmlwdHMubGVuZ3RoIC0gMV0uc3JjXG5cdH1cbn1cbi8vIFdoZW4gc3VwcG9ydGluZyBicm93c2VycyB3aGVyZSBhbiBhdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIHlvdSBtdXN0IHNwZWNpZnkgYW4gb3V0cHV0LnB1YmxpY1BhdGggbWFudWFsbHkgdmlhIGNvbmZpZ3VyYXRpb25cbi8vIG9yIHBhc3MgYW4gZW1wdHkgc3RyaW5nIChcIlwiKSBhbmQgc2V0IHRoZSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyB2YXJpYWJsZSBmcm9tIHlvdXIgY29kZSB0byB1c2UgeW91ciBvd24gbG9naWMuXG5pZiAoIXNjcmlwdFVybCkgdGhyb3cgbmV3IEVycm9yKFwiQXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCBpbiB0aGlzIGJyb3dzZXJcIik7XG5zY3JpcHRVcmwgPSBzY3JpcHRVcmwucmVwbGFjZSgvIy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcPy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcL1teXFwvXSskLywgXCIvXCIpO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gc2NyaXB0VXJsOyIsImZ1bmN0aW9uIG1ha2VNZW51KCl7XG4gICAgY29uc3QgbWVudSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIG1lbnUuY2xhc3NMaXN0LmFkZCgnbWVudScpO1xuXG4gICAgbWVudS5hcHBlbmRDaGlsZChcbiAgICAgICAgbWFrZU1lbnVJdGVtKFxuICAgICAgICAgIFwiUE9NRlJFVFwiLFxuICAgICAgICAgIFwiUG9tZnJldCBmaXNoIGlzIGtub3duIGZvciBpdHMgZGVsaWNhdGUsIGZsYWt5IHdoaXRlIGZsZXNoIGFuZCBtaWxkLCBzd2VldCBmbGF2b3IuIEl0IGlzIGNvbnNpZGVyZWQgYSBkZWxpY2FjeSBpbiBtYW55IHBhcnRzIG9mIEFzaWEgYW5kIGlzIG9mdGVuIHNlcnZlZCBhcyBhIHdob2xlIGZpc2ggd2l0aCBpdHMgaGVhZCBhbmQgdGFpbCBpbnRhY3QuIFRoZSBmaXNoIGNhbiBiZSBjb29rZWQgaW4gYSB2YXJpZXR5IG9mIHdheXMsIGluY2x1ZGluZyBzdGVhbWluZywgZ3JpbGxpbmcsIGZyeWluZywgYW5kIGJha2luZy5cIlxuICAgICAgICApXG4gICAgICApO1xuXG4gICAgbWVudS5hcHBlbmRDaGlsZChcbiAgICAgIG1ha2VNZW51SXRlbShcbiAgICAgICAgXCJHT0xJQkFKRVwiLFxuICAgICAgICBcIkdvbGliYWplIG9yIE1hbmdhbG9yZSBiYWpqaSBpcyBhbiBJbmRpYW4gZnJpZWQgZm9vZCBtYWRlIGZyb20gdmFyaW91cyBmbG91cnMgYW5kIGN1cmQuIEluIFR1bHUgTmFkdSByZWdpb24sIGl0IGlzIGtub3duIGFzIGdvbGliYWplLiBPdGhlciBuYW1lcyBmb3IgdGhlIGRpc2ggaW5jbHVkZSBNYW5nYWxvcmUgYmFqZS4gVGhpcyBpcyB3aWRlbHkgZmFtb3VzIGluIEFuZGhyYSBQcmFkZXNoIGFuZCBUZWxhbmdhbmEgYXMgTXlzb3JlIGJvbmRhL2JhamppLlwiLFxuICAgICAgICBcImdvbGliYWplXCJcbiAgICAgIClcbiAgICApO1xuICAgIG1lbnUuYXBwZW5kQ2hpbGQoXG4gICAgICBtYWtlTWVudUl0ZW0oXG4gICAgICAgIFwiS09SSVJPVElcIixcbiAgICAgICAgXCJLb3JpIHJvdHRpIGlzIGEgc3BpY3kgZGlzaCBvZiBUdWx1IFVkdXBpLU1hbmdhbG9yZWFuIGN1aXNpbmUsIGEgY29tYmluYXRpb24gb2YgcmVkLWNoaWxpIGFuZCBjb2NvbnV0IG1pbGsgYmFzZWQgY2hpY2tlbiBjdXJyeSBhbmQgY3Jpc3AsIGRyeSB3YWZlcnMgbWFkZSBmcm9tIGJvaWxlZCByaWNlLiBLb3JpIG1lYW5zIGNoaWNrZW4gaW4gVHVsdS5cIixcbiAgICAgICAgXCJrb3Jpcm90aVwiXG4gICAgICApXG4gICAgKTtcbiAgICBtZW51LmFwcGVuZENoaWxkKFxuICAgICAgbWFrZU1lbnVJdGVtKFxuICAgICAgICBcIkdIRUVST0FTVFwiLFxuICAgICAgICBcIkNoaWNrZW4gZ2hlZSByb2FzdCBpcyBhIHBvcHVsYXIgVHVsdXZhIE1hbmdhbG9yZWFuIENoaWNrZW4gcmVjaXBlIHdob3NlIG9yaWdpbnMgZ28gYmFjayB0byB0aGUgdG93biwgS3VuZGFwdXIsIGNsb3NlIHRvIFVkdXBpLiBDaGlja2VuIGdoZWUgcm9hc3QgaXMgZmllcnkgcmVkIGluIGNvbG91ciwgYW5kIGhhcyBhIHRhbmd5IGFuZCBzcGljeSBmbGF2b3Igd2l0aCBnaGVlIGFuZCByb2FzdGVkIHNwaWNlcy5cIixcbiAgICAgICAgXCJnaGVlcm9hc3RcIlxuICAgICAgKVxuICAgICk7XG4gICAgbWVudS5hcHBlbmRDaGlsZChcbiAgICAgIG1ha2VNZW51SXRlbShcbiAgICAgICAgXCJORUVSRE9TQVwiLFxuICAgICAgICBcIk5lZXIgZG9zYSwgbGl0ZXJhbGx5IG1lYW5pbmcgd2F0ZXIgZG9zYSBpbiBUdWx1IGlzIGEgY3LDqnBlIHByZXBhcmVkIGZyb20gcmljZSBiYXR0ZXIuIE5lZXIgZG9zYSBpcyBhIGRlbGljYWN5IGZyb20gVHVsdSBOYWR1IGFuZCBwYXJ0IG9mIE1hbmdhbG9yZWFuIGN1aXNpbmVcIixcbiAgICAgICAgXCJuZWVyZG9zYVwiXG4gICAgICApXG4gICAgKTtcbiAgICBtZW51LmFwcGVuZENoaWxkKFxuICAgICAgbWFrZU1lbnVJdGVtKFxuICAgICAgICBcIlBBVEhPTElcIixcbiAgICAgICAgXCJQYXRob2xpIChwbHVyYWw6IFBhdG9sZW8pIGFyZSBzd2VldCBzdHVmZmVkIHJpY2Ugcm9sbHMgd2hpY2ggYXJlIHN0ZWFtZWQgd3JhcHBlZCBpbiB0dXJtZXJpYyBsZWF2ZXMuIFNpbmNlIHRoZXJl4oCZcyBhIHVuaXF1ZSB0ZWNobmlxdWUgaW52b2x2ZWQgaW4gdGhpcyByZWNpcGUsIHRoZSBwcmVwYXJhdGlvbiBhbmQgY29va2luZyBvZiB0aGlzIGRpc2ggaXMgbGFib3Jpb3VzLiBJdCBpcyB2ZWdhbiBhbmQgc2luY2UgcmljZSBmbG91ciBpcyB0aGUgbWFpbiBpbmdyZWRpZW50LCB0aGUgZGlzaCBpcyBnbHV0ZW4gZnJlZSB0b28uXCIsXG4gICAgICAgIFwicGF0aG9saVwiXG4gICAgICApXG4gICAgKTtcblxuICAgIHJldHVybiBtZW51O1xufVxuZnVuY3Rpb24gbWFrZU1lbnVJdGVtKGl0ZW0sIG5vdGVzKSB7XG4gICAgY29uc3QgbWVudUl0ZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIG1lbnVJdGVtLmNsYXNzTGlzdC5hZGQoXCJtZW51LWl0ZW1cIik7XG4gIFxuICAgIGNvbnN0IGZvb2ROYW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgyXCIpO1xuICAgIGZvb2ROYW1lLnRleHRDb250ZW50ID0gaXRlbTtcbiAgXG4gICAgY29uc3QgaXRlbU5vdGVzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gICAgaXRlbU5vdGVzLnRleHRDb250ZW50ID0gbm90ZXM7XG4gIFxuICAgIGNvbnN0IGl0ZW1JbWFnZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIik7XG4gICAgaXRlbUltYWdlLmNsYXNzTGlzdC5hZGQoJ21lbnVJbWcnKTtcbiAgICBpdGVtSW1hZ2Uuc3JjID0gYC4uL2Rpc3QvaW1hZ2VzLyR7aXRlbS50b0xvd2VyQ2FzZSgpfS5qcGdgO1xuICAgIGl0ZW1JbWFnZS5hbHQgPSBgSW1hZ2Ugb2YgJHtpdGVtfWA7XG4gIFxuICAgIG1lbnVJdGVtLmFwcGVuZENoaWxkKGZvb2ROYW1lKTtcbiAgICBtZW51SXRlbS5hcHBlbmRDaGlsZChpdGVtSW1hZ2UpO1xuICAgIG1lbnVJdGVtLmFwcGVuZENoaWxkKGl0ZW1Ob3Rlcyk7XG4gIFxuICAgIHJldHVybiBtZW51SXRlbTtcbiAgfVxuZnVuY3Rpb24gbG9hZE1lbnVQYWdlKCkge1xuICAgIGNvbnN0IG1haW4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm1haW5cIik7XG4gICAgbWFpbi50ZXh0Q29udGVudD1cIlwiO1xuICAgIG1haW4uYXBwZW5kQ2hpbGQobWFrZU1lbnUoKSk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGxvYWRNZW51UGFnZTsiLCJpbXBvcnQgbWFwIGZyb20gJy4uL2Rpc3QvaW1hZ2VzL21hcC5wbmcnXG5cbmZ1bmN0aW9uIG1ha2VDb250YWN0KCl7XG4gICAgY29uc3QgY29udGFjdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNvbnRhY3QuY2xhc3NMaXN0LmFkZCgnY29udGFjdCcpO1xuXG4gICAgY29uc3QgbWFwTWFuZ2Fsb3JlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImltZ1wiKTtcbiAgICBtYXBNYW5nYWxvcmUuY2xhc3NMaXN0LmFkZCgnbWFwJyk7XG4gICAgbWFwTWFuZ2Fsb3JlLnNyYyA9IG1hcDtcbiAgICBtYXBNYW5nYWxvcmUuYWx0ID0gYG1hcCBvZiBNYW5nYWxvcmVgO1xuICAgIFxuICAgIGNvbnRhY3QuYXBwZW5kQ2hpbGQobWFrZVBhcmEoXCJXSEVSRSBXRSBBUkVcIikpO1xuICAgIGNvbnRhY3QuYXBwZW5kQ2hpbGQobWFwTWFuZ2Fsb3JlKTtcbiAgICBjb250YWN0LmFwcGVuZENoaWxkKG1ha2VQYXJhKFwiSE9VUlM6XCIpKTtcbiAgICBjb250YWN0LmFwcGVuZENoaWxkKG1ha2VQYXJhKFwiTW9uIHRvIEZyaTogQ0xPU0VEXCIpKTtcbiAgICBjb250YWN0LmFwcGVuZENoaWxkKG1ha2VQYXJhKFwiU3VuZGF5OiBOb29uIHRvIE1pZG5pZ2h0XCIpKTtcbiAgICBjb250YWN0LmFwcGVuZENoaWxkKG1ha2VQYXJhKFwiU2F0dXJkYXk6IE5vb24gdG8gTWlkbmlnaHRcIikpO1xuXG4gICAgcmV0dXJuIGNvbnRhY3Q7XG59XG5cbmZ1bmN0aW9uIG1ha2VQYXJhKHRleHQpe1xuICAgIGNvbnN0IHBhcmEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDJcIik7XG4gICAgcGFyYS50ZXh0Q29udGVudD0odGV4dCk7XG4gICAgcmV0dXJuIHBhcmE7XG59XG5mdW5jdGlvbiBsb2FkQ29udGFjdFBhZ2UoKSB7XG4gICAgY29uc3QgbWFpbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibWFpblwiKTtcbiAgICBtYWluLnRleHRDb250ZW50PVwiXCI7XG4gICAgbWFpbi5hcHBlbmRDaGlsZChtYWtlQ29udGFjdCgpKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgbG9hZENvbnRhY3RQYWdlOyIsImltcG9ydCBsb2FkSG9tZVBhZ2UgZnJvbSBcIi4vaG9tZVwiO1xuaW1wb3J0IGxvYWRNZW51UGFnZSBmcm9tIFwiLi9tZW51XCI7XG5pbXBvcnQgbG9hZENvbnRhY3RQYWdlIGZyb20gXCIuL2NvbnRhY3RcIjtcbmltcG9ydCBoZWxtZXQgZnJvbSAnLi4vZGlzdC9pbWFnZXMvaGVsbWV0LmpwZyc7XG5cbmZ1bmN0aW9uIGNyZWF0ZUhlYWRlcigpe1xuICAgIGNvbnN0IGhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoZWFkZXJcIik7XG4gICAgaGVhZGVyLmNsYXNzTGlzdC5hZGQoXCJoZWFkZXJcIik7XG5cbiAgICBjb25zdCByZXN0YXVyYW50TmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoMVwiKTtcbiAgICByZXN0YXVyYW50TmFtZS5jbGFzc0xpc3QuYWRkKFwicmVzdGF1cmFudE5hbWVcIik7XG4gICAgcmVzdGF1cmFudE5hbWUudGV4dENvbnRlbnQ9KFwiVGhlIE1BTkdBTE9SRUFOXCIpO1xuICAgXG4gICAgaGVhZGVyLmFwcGVuZENoaWxkKHJlc3RhdXJhbnROYW1lKTtcbiAgICBoZWFkZXIuYXBwZW5kQ2hpbGQoY3JlYXRlTmF2KCkpO1xuICAgIHJldHVybiBoZWFkZXI7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZU5hdigpe1xuICAgIGNvbnN0IG5hdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJuYXZcIik7XG4gICAgbmF2LmNsYXNzTGlzdC5hZGQoXCJuYXZcIik7XG5cbiAgICBjb25zdCBob21lQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgICBob21lQnV0dG9uLmNsYXNzTGlzdC5hZGQoXCJidXR0b25zXCIpO1xuICAgIGhvbWVCdXR0b24udGV4dENvbnRlbnQ9KFwiSE9NRVwiKTsgXG4gICAgaG9tZUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IHtcbiAgICAgICAgaWYgKGUudGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucyhcImFjdGl2ZVwiKSkgcmV0dXJuO1xuICAgICAgICBzZXRBY3RpdmVCdXR0b24oaG9tZUJ1dHRvbik7XG4gICAgICAgIGxvYWRIb21lUGFnZSgpO1xuICAgICAgfSk7XG5cbiAgICBjb25zdCBtZW51QnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgICBtZW51QnV0dG9uLmNsYXNzTGlzdC5hZGQoXCJidXR0b25zXCIpO1xuICAgIG1lbnVCdXR0b24udGV4dENvbnRlbnQ9KFwiTUVOVVwiKTtcbiAgICBtZW51QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT4ge1xuICAgICAgICBpZiAoZS50YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKFwiYWN0aXZlXCIpKSByZXR1cm47XG4gICAgICAgIHNldEFjdGl2ZUJ1dHRvbihtZW51QnV0dG9uKTtcbiAgICAgICAgbG9hZE1lbnVQYWdlKCk7XG4gICAgICB9KTtcblxuICAgIGNvbnN0IGNvbnRhY3RCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICAgIGNvbnRhY3RCdXR0b24uY2xhc3NMaXN0LmFkZChcImJ1dHRvbnNcIik7XG4gICAgY29udGFjdEJ1dHRvbi50ZXh0Q29udGVudD0oXCJDT05UQUNUXCIpO1xuICAgIGNvbnRhY3RCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PiB7XG4gICAgICAgIGlmIChlLnRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoXCJhY3RpdmVcIikpIHJldHVybjtcbiAgICAgICAgc2V0QWN0aXZlQnV0dG9uKGNvbnRhY3RCdXR0b24pO1xuICAgICAgICBsb2FkQ29udGFjdFBhZ2UoKTtcbiAgICAgIH0pO1xuXG4gICAgbmF2LmFwcGVuZENoaWxkKGhvbWVCdXR0b24pO1xuICAgIG5hdi5hcHBlbmRDaGlsZChtZW51QnV0dG9uKTtcbiAgICBuYXYuYXBwZW5kQ2hpbGQoY29udGFjdEJ1dHRvbik7XG5cbiAgICByZXR1cm4gbmF2O1xufVxuXG5mdW5jdGlvbiBzZXRBY3RpdmVCdXR0b24oYnV0dG9uKSB7XG4gICAgY29uc3QgYnV0dG9ucyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuYnV0dG9uc1wiKTtcbiAgXG4gICAgYnV0dG9ucy5mb3JFYWNoKChidXR0b24pID0+IHtcbiAgICAgIGlmIChidXR0b24gIT09IHRoaXMpIHtcbiAgICAgICAgYnV0dG9uLmNsYXNzTGlzdC5yZW1vdmUoXCJhY3RpdmVcIik7XG4gICAgICB9XG4gICAgfSk7XG4gIFxuICAgIGJ1dHRvbi5jbGFzc0xpc3QuYWRkKFwiYWN0aXZlXCIpO1xuICB9XG5mdW5jdGlvbiBjcmVhdGVNYWluKCkge1xuICAgIGNvbnN0IG1haW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibWFpblwiKTtcbiAgICBtYWluLnNldEF0dHJpYnV0ZShcImlkXCIsIFwibWFpblwiKTtcbiAgICBtYWluLmNsYXNzTGlzdC5hZGQoXCJtYWluXCIpO1xuICAgIHJldHVybiBtYWluO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVGb290ZXIoKXtcbiAgY29uc3QgZm9vdGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZm9vdGVyJyk7XG4gIGZvb3Rlci5jbGFzc0xpc3QuYWRkKCdmb290ZXInKTtcblxuICBjb25zdCBmb290ZXJUZXh0TCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgZm9vdGVyVGV4dEwuaW5uZXJIVE1MID0gJ0EgTWFuZ3kgcHJvamVjdCc7XG4gIGZvb3Rlci5hcHBlbmRDaGlsZChmb290ZXJUZXh0TCk7XG5cbiAgY29uc3QgZm9vdGVySW1hZ2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcbiAgZm9vdGVySW1hZ2Uuc3JjID0gaGVsbWV0O1xuICBmb290ZXJJbWFnZS5hbHQgPSAnTWFuZ2Fsb3JpYW4gSGVsbWV0JztcbiAgZm9vdGVySW1hZ2UuY2xhc3NMaXN0LmFkZCgnZm9vdGVySW1hZ2UnKTtcbiAgZm9vdGVyLmFwcGVuZENoaWxkKGZvb3RlckltYWdlKTtcbiAgXG4gIGNvbnN0IGZvb3RlclRleHRSID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICBmb290ZXJUZXh0Ui5pbm5lckhUTUwgPSAnTk0gRGVjIDIwMjInO1xuICBmb290ZXIuYXBwZW5kQ2hpbGQoZm9vdGVyVGV4dFIpO1xuICBcbiAgcmV0dXJuIGZvb3Rlcjtcbn1cblxuZnVuY3Rpb24gd2ViSW5pdGlhbGl6ZSgpe1xuXG4gIGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY29udGVudFwiKTtcblxuICBjb250YWluZXIuYXBwZW5kQ2hpbGQgKGNyZWF0ZUhlYWRlcigpKTtcbiAgY29udGFpbmVyLmFwcGVuZENoaWxkIChjcmVhdGVNYWluKCkpO1xuICBjb250YWluZXIuYXBwZW5kQ2hpbGQgKGNyZWF0ZUZvb3RlcigpKTtcbiAgc2V0QWN0aXZlQnV0dG9uKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuYnV0dG9uc1wiKSk7XG4gIGxvYWRIb21lUGFnZSgpO1xufVxuZXhwb3J0IGRlZmF1bHQgd2ViSW5pdGlhbGl6ZTsiLCJpbXBvcnQgd2ViSW5pdGlhbGl6ZSBmcm9tIFwiLi93ZWJzaXRlLmpzXCI7XG4vLyBpbXBvcnQgJy4vc3R5bGUuY3NzJztcbndlYkluaXRpYWxpemUoKTtcbiJdLCJuYW1lcyI6WyJfX3dlYnBhY2tfcmVxdWlyZV9fIiwibWFrZVBhcmEiLCJ0ZXh0IiwicGFyYSIsImRvY3VtZW50IiwiY3JlYXRlRWxlbWVudCIsInRleHRDb250ZW50IiwiZyIsImdsb2JhbFRoaXMiLCJ0aGlzIiwiRnVuY3Rpb24iLCJlIiwid2luZG93Iiwic2NyaXB0VXJsIiwiaW1wb3J0U2NyaXB0cyIsImxvY2F0aW9uIiwiY3VycmVudFNjcmlwdCIsInNyYyIsInNjcmlwdHMiLCJnZXRFbGVtZW50c0J5VGFnTmFtZSIsImxlbmd0aCIsIkVycm9yIiwicmVwbGFjZSIsInAiLCJtYWluIiwiZ2V0RWxlbWVudEJ5SWQiLCJhcHBlbmRDaGlsZCIsImhvbWUiLCJjbGFzc0xpc3QiLCJhZGQiLCJtYWtlSG9tZSIsIm1ha2VNZW51SXRlbSIsIml0ZW0iLCJub3RlcyIsIm1lbnVJdGVtIiwiZm9vZE5hbWUiLCJpdGVtTm90ZXMiLCJpdGVtSW1hZ2UiLCJ0b0xvd2VyQ2FzZSIsImFsdCIsImNyZWF0ZUhlYWRlciIsImhlYWRlciIsInJlc3RhdXJhbnROYW1lIiwibmF2IiwiaG9tZUJ1dHRvbiIsImFkZEV2ZW50TGlzdGVuZXIiLCJ0YXJnZXQiLCJjb250YWlucyIsInNldEFjdGl2ZUJ1dHRvbiIsIm1lbnVCdXR0b24iLCJtZW51IiwibWFrZU1lbnUiLCJjb250YWN0QnV0dG9uIiwiY29udGFjdCIsIm1hcE1hbmdhbG9yZSIsIm1ha2VDb250YWN0IiwiY3JlYXRlTmF2IiwiYnV0dG9uIiwicXVlcnlTZWxlY3RvckFsbCIsImZvckVhY2giLCJyZW1vdmUiLCJjb250YWluZXIiLCJzZXRBdHRyaWJ1dGUiLCJjcmVhdGVNYWluIiwiZm9vdGVyIiwiZm9vdGVyVGV4dEwiLCJpbm5lckhUTUwiLCJmb290ZXJJbWFnZSIsImZvb3RlclRleHRSIiwiY3JlYXRlRm9vdGVyIiwicXVlcnlTZWxlY3RvciJdLCJzb3VyY2VSb290IjoiIn0=