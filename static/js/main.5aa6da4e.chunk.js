(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{14:function(e,t,n){e.exports=n(24)},20:function(e,t,n){},23:function(e,t,n){},24:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(11),c=n.n(o),s=(n(20),n(1)),i=n(2),l=n(6),u=n(3),m=n(7),d=n(13),v=n(9),f=n(8),h=n.n(f),p=["#E59942","rebeccapurple","#649B5E","#49B851","#14A0E7","#A2EEFE","#79B473"],g=h.a.mark(E);function y(e){return(e.getDay()+6)%7}function E(e,t){var n;return h.a.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:n=new Date(e);case 1:if(!(n<=t)){a.next=7;break}return a.next=4,n;case 4:n.setDate(n.getDate()+1),a.next=1;break;case 7:case"end":return a.stop()}},g)}function D(e){var t=e.getMonth(),n=e.getDate();return[e.getFullYear(),(t<10?"0":"")+t,(n<10?"0":"")+n].join("")}var w={BUSINESS_TRIP:"\u043a\u043e\u043c\u0430\u043d\u0434\u0438\u0440\u043e\u0432\u043a\u0430",VACATION:"\u043e\u0442\u043f\u0443\u0441\u043a",CONCERT:"\u043a\u043e\u043d\u0446\u0435\u0440\u0442",SUBBOTNIK:"\u0441\u0443\u0431\u0431\u043e\u0442\u043d\u0438\u043a",UNKNOWN:""};function N(e){for(var t=(e.summary+e.description).toLowerCase(),n=0,a=Object.values(w);n<a.length;n++){var r=a[n];if(t.includes(r))return r}return w.UNKNOWN}var b=function(){var e=Object.values(w);return function(t){return p[e.indexOf(N(t))]}}();function k(e){var t=e.split(".");return new Date(+t[2]||(new Date).getFullYear(),+t[1]-1,+t[0])}var O=n(12),j=Object(O.cn)("Calendar");n(23);function L(e){return 1===e.length?e[0].color:"linear-gradient(to bottom, "+e.reduce(function(t,n,a){return t.push(n.color+" "+100*a/e.length+"%",n.color+" "+100*(a+1)/e.length+"%"),t},[]).join(", ")+")"}function S(e){var t=e.day,n=e.isCurrent,o=e.isWeekend,c=e.isPassed,s=e.events,i=e.className,l=t.date.getDate(),u=s.length>0;return r.a.createElement("td",{className:j("Day",{current:n,otherMonth:t.meta&&t.meta.otherMonth,weekend:o,hasEvents:u,passed:c},[i]),tabIndex:1},r.a.createElement("div",{className:j("DayText"),style:u?{background:L(s)}:void 0},l),u&&r.a.createElement("div",{className:j("DayInfo")},s.map(function(e,t){return r.a.createElement(a.Fragment,{key:t},r.a.createElement("h3",{className:j("DayInfoSummary")},e.summary),r.a.createElement("div",{className:j("DayInfoDescription")},[e.description,e.location,e.url].filter(Boolean).map(function(e,t){return r.a.createElement("p",{key:t},e)})))})))}var I=function(){for(var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"ru-Ru",t=[],n={weekday:"short"},a=new Date,r=0;r<7;r++)a.setDate(a.getDate()+1),t[y(a)]=a.toLocaleDateString(e,n);return t}();function x(){return r.a.createElement("tr",{className:j("DaysOfWeek")},I.map(function(e){return r.a.createElement("th",{key:e},e)}))}function M(e){var t=e.data.filter(function(e){return e.summary}),n=t.reduce(function(e,t){return e[t.color]=t.type||"???",e},{}),a=new Date;a.setHours(0,0,0,0);var o=!1;return r.a.createElement("div",{className:j("Legend")},r.a.createElement("ul",{className:j("LegendList")},Object.keys(n).map(function(e,t){return r.a.createElement("li",{className:j("LegendItem"),style:{color:e},key:t},r.a.createElement("span",{className:j("LegendItemText")},n[e]))})),r.a.createElement("ul",{className:j("LegendList")},t.map(function(e,t){var n=e.start.toLocaleDateString("ru-RU",{day:"2-digit",month:"2-digit"}),c=e.end.toLocaleDateString("ru-RU",{day:"2-digit",month:"2-digit"}),s=!1;return!o&&a<e.start&&(o=!0,s=!0),r.a.createElement("li",{className:j("LegendItem",{passed:e.end<a,markToday:s}),style:{color:e.color},key:e.start.toString()+t},r.a.createElement("span",{className:j("LegendItemText")},r.a.createElement("strong",null,n!==c?[n,c].join("-"):n)," ",e.summary))})))}var B=function(e){function t(e){var n;return Object(s.a)(this,t),(n=Object(l.a)(this,Object(u.a)(t).call(this,e))).events=void 0,n.normalizedEvents=void 0,n.normalizedEvents=n.props.data.split("\n").map(function(e){var t=e.split(/\s/),n=Object(v.a)(t),a=n[0],r=n.slice(1),o=a.split("-"),c=Object(d.a)(o,2),s=c[0],i=c[1],l=r.join(" ").split("."),u=Object(v.a)(l),m=u[0],f=u.slice(1).join(".").trim(),h={start:k(s),end:k(i||s),summary:m,description:f};return h.type=N(h),h.color=b(h),h}).sort(function(e,t){return+e.start-+t.start+(+e.end-+t.end)}),n.events=n.normalizedEvents.reduce(function(e,t,n){var a=E(t.start,t.end),r=!0,o=!1,c=void 0;try{for(var s,i=a[Symbol.iterator]();!(r=(s=i.next()).done);r=!0){var l=D(s.value);e[l]||(e[l]=[]),e[l].push(t)}}catch(u){o=!0,c=u}finally{try{r||null==i.return||i.return()}finally{if(o)throw c}}return e},{}),n}return Object(m.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){if("undefined"!==typeof window){var e=new Date,t=new Date(e);t.setHours(0,0,0,0),window.history.pushState(null,"","#"+t.toLocaleDateString("en-US",{month:"long"}))}}},{key:"render",value:function(){var e=this,t=new Date,n=function(e){e||(e=(new Date).getFullYear());var t=new Date(e,0,1),n=new Date(t),a=new Date(t);a.setFullYear(t.getFullYear()+1);for(var r=[],o=0;n<a;){var c=n.getMonth();r[c]||(o=0,r[c]=[]);var s=y(n);if(!r[c][o]){r[c][o]=[];for(var i=0;i<s;i++){var l=new Date(n);l.setDate(l.getDate()-s+i),r[c][o].push({date:l,meta:{otherMonth:!0}})}}r[c][o][s]={date:new Date(n)},6===y(n)&&o++,n.setDate(n.getDate()+1)}return r}(this.props.year||t.getFullYear()),a=new Date(t);return a.setHours(0,0,0,0),r.a.createElement("div",{className:j()},r.a.createElement("div",{className:j("Year")},n.map(function(n,o){var c=new Date;return c.setMonth(o),r.a.createElement("div",{className:j("Month"),key:o},r.a.createElement("h2",{className:j("MonthName"),id:c.toLocaleDateString("en-US",{month:"long"})},c.toLocaleDateString("ru-RU",{month:"long"})),r.a.createElement("table",{className:j("MonthTable")},r.a.createElement("tbody",null,r.a.createElement(x,null),n.map(function(n,o){return r.a.createElement("tr",{className:j("Week"),key:o},n.map(function(n,o){var c,s,i=n.date,l=D(i),u=e.events[l]||[];return r.a.createElement(S,{day:n,isCurrent:(c=i,s=t,D(c)===D(s)),isWeekend:o>4,events:u,isPassed:n.date<a,key:l})}))}))))})),r.a.createElement(M,{data:this.normalizedEvents}))}}]),t}(a.Component),C=function(e){function t(){return Object(s.a)(this,t),Object(l.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement(B,{data:"\n07.02-13.02 \u041a\u043e\u043c\u0430\u043d\u0434\u0438\u0440\u043e\u0432\u043a\u0430 \u0432 \u041c\u043e\u0441\u043a\u0432\u0443\n07.02 \u042f love Frontend\n"})}}]),t}(a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(C,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[14,1,2]]]);
//# sourceMappingURL=main.5aa6da4e.chunk.js.map