import{f as h}from"./assets/vendor-CCO2o_no.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const i of t.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&n(i)}).observe(document,{childList:!0,subtree:!0});function c(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function n(e){if(e.ep)return;e.ep=!0;const t=c(e);fetch(e.href,t)}})();h("#datetime-picker",{defaultDate:new Date(1991,7,19),minuteIncrement:1,onClose(s){y(s)}});function y(s){let o=s[0],c=o.getFullYear().toString()+(o.getMonth()+1)+o.getDate(),n=[...c].reduce((r,l)=>r+ +l,0);console.log(o.getFullYear().toString()+(o.getMonth()+1)+o.getDate()),console.log(n);let e=[...n.toString()].reduce((r,l)=>+r+ +l,0);console.log(e);let t=n-2;console.log("2"),console.log(t);let i=Math.floor(t/10)+t%10;console.log(i);let d=c+n.toString()+e.toString()+"2"+t.toString()+i.toString();console.log(d);let f=d,g=Array.from({length:9},(r,l)=>(l+1).toString().repeat([...f].filter(u=>u==l+1).length)),a=[];for(let r=0;r<3;r++)a.push(g.slice(r*3,r*3+3));let m=a[0].map((r,l)=>a.map(u=>u[l])).flat(),p=document.querySelector(".grid");p.innerHTML=m.map(r=>`<div class="cell">${r}</div>`).join("")}
//# sourceMappingURL=index.js.map
