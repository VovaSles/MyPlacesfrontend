(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[7],{43:function(e,t,a){"use strict";var n=a(0),c=a.n(n);a(50);t.a=function(e){return c.a.createElement("div",{className:"card ".concat(e.className),style:e.style},e.children)}},50:function(e,t,a){},66:function(e,t,a){},67:function(e,t,a){},68:function(e,t,a){},74:function(e,t,a){"use strict";a.r(t);var n=a(48),c=a.n(n),r=a(49),l=a(10),o=a(0),s=a.n(o),i=a(8),u=a(43),m=a(45),d=a(59),p=(a(66),function(e){var t=Object(o.useRef)(),a=e.center,n=e.zoom;return Object(o.useEffect)((function(){var e=new window.google.maps.Map(t.current,{center:a,zoom:n});new window.google.maps.Marker({position:a,map:e})}),[a,n]),s.a.createElement("div",{ref:t,className:"map ".concat(e.className),style:e.style})}),E=a(51),f=a(15),h=a(11),v=a(52),b=(a(67),function(e){var t=Object(v.a)(),a=t.isLoading,n=t.error,i=t.sendRequest,b=t.clearError,O=Object(o.useContext)(h.a),g=Object(o.useState)(!1),w=Object(l.a)(g,2),C=w[0],N=w[1],j=Object(o.useState)(!1),k=Object(l.a)(j,2),_=k[0],y=k[1],D=function(){return N(!1)},I=function(){y(!1)},x=function(){var t=Object(r.a)(c.a.mark((function t(){return c.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return y(!1),t.prev=1,t.next=4,i("http://localhost:5000/api"+"/places/".concat(e.id),"DELETE",null,{Authorization:"Bearer "+O.token});case 4:e.onDelete(e.id),t.next=9;break;case 7:t.prev=7,t.t0=t.catch(1);case 9:case"end":return t.stop()}}),t,null,[[1,7]])})));return function(){return t.apply(this,arguments)}}();return s.a.createElement(s.a.Fragment,null,s.a.createElement(E.a,{error:n,onClear:b}),s.a.createElement(d.a,{show:C,onCancel:D,header:e.address,contentClass:"place-item__modal-content",footerClass:"place-item__modal-actions",footer:s.a.createElement(m.a,{onClick:D},"CLOSE")},s.a.createElement("div",{className:"map-container"},s.a.createElement(p,{center:e.coordinates,zoom:16}))),s.a.createElement(d.a,{show:_,onCancel:I,header:"Are you sure?",footerClass:"place-item__modal-actions",footer:s.a.createElement(s.a.Fragment,null,s.a.createElement(m.a,{inverse:!0,onClick:I},"CANCEL"),s.a.createElement(m.a,{danger:!0,onClick:x},"DELETE"))},s.a.createElement("p",null,"Do you want to proceed and delete this place? Please note that it can't be undone thereafter.")),s.a.createElement("li",{className:"place-item"},s.a.createElement(u.a,{className:"place-item__content"},a&&s.a.createElement(f.a,{asOverlay:!0}),s.a.createElement("div",{className:"place-item__image"},s.a.createElement("img",{src:"".concat("http://localhost:5000","/").concat(e.image),alt:e.title})),s.a.createElement("div",{className:"place-item__info"},s.a.createElement("h2",null,e.title),s.a.createElement("h3",null,e.address),s.a.createElement("p",null,e.description)),s.a.createElement("div",{className:"place-item__actions"},s.a.createElement(m.a,{inverse:!0,onClick:function(){return N(!0)}},"VIEW ON MAP"),O.userId===e.creatorId&&s.a.createElement(m.a,{to:"/places/".concat(e.id)},"EDIT"),O.userId===e.creatorId&&s.a.createElement(m.a,{danger:!0,onClick:function(){y(!0)}},"DELETE")))))}),O=(a(68),function(e){return 0===e.items.length?s.a.createElement("div",{className:"place-list center"},s.a.createElement(u.a,null,s.a.createElement("h2",null,"No places found. Maybe create one?"),s.a.createElement(m.a,{to:"/places/new"},"Share Place"))):s.a.createElement("ul",{className:"place-list"},e.items.map((function(t){return s.a.createElement(b,{key:t.id,id:t.id,image:t.image,title:t.title,description:t.description,address:t.address,creatorId:t.creator,coordinates:t.location,onDelete:e.onDeletePlace})})))});t.default=function(){var e=Object(o.useState)(),t=Object(l.a)(e,2),a=t[0],n=t[1],u=Object(v.a)(),m=u.isLoading,d=u.error,p=u.sendRequest,h=u.clearError,b=Object(i.h)().userId;Object(o.useEffect)((function(){(function(){var e=Object(r.a)(c.a.mark((function e(){var t;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,p("http://localhost:5000/api"+"/places/user/".concat(b));case 3:t=e.sent,n(t.places),e.next=9;break;case 7:e.prev=7,e.t0=e.catch(0);case 9:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(){return e.apply(this,arguments)}})()()}),[p,b]);return s.a.createElement(s.a.Fragment,null,s.a.createElement(E.a,{error:d,onClear:h}),m&&s.a.createElement("div",{className:"center"},s.a.createElement(f.a,null)),!m&&a&&s.a.createElement(O,{items:a,onDeletePlace:function(e){n((function(t){return t.filter((function(t){return t.id!==e}))}))}}))}}}]);
//# sourceMappingURL=7.6151445a.chunk.js.map