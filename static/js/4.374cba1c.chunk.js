(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[4],{43:function(e,t,a){"use strict";var n=a(0),r=a.n(n);a(50);t.a=function(e){return r.a.createElement("div",{className:"card ".concat(e.className),style:e.style},e.children)}},44:function(e,t,a){"use strict";a.d(t,"a",(function(){return i}));var n=a(46);function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){Object(n.a)(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}},46:function(e,t,a){"use strict";function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}a.d(t,"a",(function(){return n}))},47:function(e,t,a){"use strict";var n=a(16);a.d(t,"c",(function(){return r})),a.d(t,"b",(function(){return i})),a.d(t,"a",(function(){return l})),a.d(t,"d",(function(){return c}));var r=function(){return{type:"REQUIRE"}},i=function(e){return{type:"MINLENGTH",val:e}},l=function(){return{type:"EMAIL"}},c=function(e,t){var a,r=!0,i=function(e){if("undefined"===typeof Symbol||null==e[Symbol.iterator]){if(Array.isArray(e)||(e=Object(n.a)(e))){var t=0,a=function(){};return{s:a,n:function(){return t>=e.length?{done:!0}:{done:!1,value:e[t++]}},e:function(e){throw e},f:a}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var r,i,l=!0,c=!1;return{s:function(){r=e[Symbol.iterator]()},n:function(){var e=r.next();return l=e.done,e},e:function(e){c=!0,i=e},f:function(){try{l||null==r.return||r.return()}finally{if(c)throw i}}}}(t);try{for(i.s();!(a=i.n()).done;){var l=a.value;"REQUIRE"===l.type&&(r=r&&e.trim().length>0),"MINLENGTH"===l.type&&(r=r&&e.trim().length>=l.val),"MAXLENGTH"===l.type&&(r=r&&e.trim().length<=l.val),"MIN"===l.type&&(r=r&&+e>=l.val),"MAX"===l.type&&(r=r&&+e<=l.val),"EMAIL"===l.type&&(r=r&&/^\S+@\S+\.\S+$/.test(e))}}catch(c){i.e(c)}finally{i.f()}return r}},50:function(e,t,a){},53:function(e,t,a){"use strict";var n=a(10),r=a(44),i=a(0),l=a.n(i),c=a(47),u=(a(54),function(e,t){switch(t.type){case"CHANGE":return Object(r.a)({},e,{value:t.val,isValid:Object(c.d)(t.val,t.validators)});case"TOUCH":return Object(r.a)({},e,{isTouched:!0});default:return e}});t.a=function(e){var t=Object(i.useReducer)(u,{value:e.initialValue||"",isTouched:!1,isValid:e.initialValid||!1}),a=Object(n.a)(t,2),r=a[0],c=a[1],o=e.id,s=e.onInput,p=r.value,d=r.isValid;Object(i.useEffect)((function(){s(o,p,d)}),[o,p,d,s]);var f=function(t){c({type:"CHANGE",val:t.target.value,validators:e.validators})},m=function(){c({type:"TOUCH"})},v="input"===e.element?l.a.createElement("input",{id:e.id,type:e.type,placeholder:e.placeholder,onChange:f,onBlur:m,value:r.value}):l.a.createElement("textarea",{id:e.id,rows:e.rows||3,onChange:f,onBlur:m,value:r.value});return l.a.createElement("div",{className:"form-control ".concat(!r.isValid&&r.isTouched&&"form-control--invalid")},l.a.createElement("label",{htmlFor:e.id},e.label),v,!r.isValid&&r.isTouched&&l.a.createElement("p",null,e.errorText))}},54:function(e,t,a){},55:function(e,t,a){"use strict";a.d(t,"a",(function(){return u}));var n=a(10),r=a(46),i=a(44),l=a(0),c=function(e,t){switch(t.type){case"INPUT_CHANGE":var a=!0;for(var n in e.inputs)e.inputs[n]&&(a=n===t.inputId?a&&t.isValid:a&&e.inputs[n].isValid);return Object(i.a)({},e,{inputs:Object(i.a)({},e.inputs,Object(r.a)({},t.inputId,{value:t.value,isValid:t.isValid})),isValid:a});case"SET_DATA":return{inputs:t.inputs,isValid:t.formIsValid};default:return e}},u=function(e,t){var a=Object(l.useReducer)(c,{inputs:e,isValid:t}),r=Object(n.a)(a,2),i=r[0],u=r[1];return[i,Object(l.useCallback)((function(e,t,a){u({type:"INPUT_CHANGE",value:t,isValid:a,inputId:e})}),[]),Object(l.useCallback)((function(e,t){u({type:"SET_DATA",inputs:e,formIsValid:t})}),[])]}},56:function(e,t,a){"use strict";var n=a(10),r=a(0),i=a.n(r),l=a(45);a(57);t.a=function(e){var t=Object(r.useState)(),a=Object(n.a)(t,2),c=a[0],u=a[1],o=Object(r.useState)(),s=Object(n.a)(o,2),p=s[0],d=s[1],f=Object(r.useState)(!1),m=Object(n.a)(f,2),v=m[0],b=m[1],O=Object(r.useRef)();Object(r.useEffect)((function(){if(c){var e=new FileReader;e.onload=function(){d(e.result)},e.readAsDataURL(c)}}),[c]);return i.a.createElement("div",{className:"form-control"},i.a.createElement("input",{id:e.id,ref:O,style:{display:"none"},type:"file",accept:".jpg,.png,.jpeg",onChange:function(t){var a,n=v;t.target.files&&1===t.target.files.length?(a=t.target.files[0],u(a),b(!0),n=!0):(b(!1),n=!1),e.onInput(e.id,a,n)}}),i.a.createElement("div",{className:"image-upload ".concat(e.center&&"center")},i.a.createElement("div",{className:"image-upload__preview"},p&&i.a.createElement("img",{src:p,alt:"Preview"}),!p&&i.a.createElement("p",null,"Please pick an image.")),i.a.createElement(l.a,{type:"button",onClick:function(){O.current.click()}},"PICK IMAGE")),!v&&i.a.createElement("p",null,e.errorText))}},57:function(e,t,a){},69:function(e,t,a){},72:function(e,t,a){"use strict";a.r(t);var n=a(48),r=a.n(n),i=a(49),l=a(44),c=a(10),u=a(0),o=a.n(u),s=a(43),p=a(53),d=a(45),f=a(51),m=a(15),v=a(56),b=a(47),O=a(55),y=a(52),j=a(11);a(69);t.default=function(){var e=Object(u.useContext)(j.a),t=Object(u.useState)(!0),a=Object(c.a)(t,2),n=a[0],E=a[1],h=Object(y.a)(),g=h.isLoading,w=h.error,I=h.sendRequest,T=h.clearError,N=Object(O.a)({email:{value:"",isValid:!1},password:{value:"",isValid:!1}},!1),V=Object(c.a)(N,3),P=V[0],S=V[1],C=V[2],x=function(){var t=Object(i.a)(r.a.mark((function t(a){var i,l,c;return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(a.preventDefault(),!n){t.next=13;break}return t.prev=2,t.next=5,I("http://localhost:5000/api/users/login","POST",JSON.stringify({email:P.inputs.email.value,password:P.inputs.password.value}),{"Content-Type":"application/json"});case 5:i=t.sent,e.login(i.userId,i.token),t.next=11;break;case 9:t.prev=9,t.t0=t.catch(2);case 11:t.next=27;break;case 13:return t.prev=13,(l=new FormData).append("email",P.inputs.email.value),l.append("name",P.inputs.name.value),l.append("password",P.inputs.password.value),l.append("image",P.inputs.image.value),t.next=21,I("http://localhost:5000/api/users/signup","POST",l);case 21:c=t.sent,e.login(c.userId,c.token),t.next=27;break;case 25:t.prev=25,t.t1=t.catch(13);case 27:case"end":return t.stop()}}),t,null,[[2,9],[13,25]])})));return function(e){return t.apply(this,arguments)}}();return o.a.createElement(o.a.Fragment,null,o.a.createElement(f.a,{error:w,onClear:T}),o.a.createElement(s.a,{className:"authentication"},g&&o.a.createElement(m.a,{asOverlay:!0}),o.a.createElement("h2",null,"Login Required"),o.a.createElement("hr",null),o.a.createElement("form",{onSubmit:x},!n&&o.a.createElement(p.a,{element:"input",id:"name",type:"text",label:"Your Name",validators:[Object(b.c)()],errorText:"Please enter a name.",onInput:S}),!n&&o.a.createElement(v.a,{center:!0,id:"image",onInput:S,errorText:"Please provide an image."}),o.a.createElement(p.a,{element:"input",id:"email",type:"email",label:"E-Mail",validators:[Object(b.a)()],errorText:"Please enter a valid email address.",onInput:S}),o.a.createElement(p.a,{element:"input",id:"password",type:"password",label:"Password",validators:[Object(b.b)(6)],errorText:"Please enter a valid password, at least 6 characters.",onInput:S}),o.a.createElement(d.a,{type:"submit",disabled:!P.isValid},n?"LOGIN":"SIGNUP")),o.a.createElement(d.a,{inverse:!0,onClick:function(){n?C(Object(l.a)({},P.inputs,{name:{value:"",isValid:!1},image:{value:null,isValid:!1}}),!1):C(Object(l.a)({},P.inputs,{name:void 0,image:void 0}),P.inputs.email.isValid&&P.inputs.password.isValid),E((function(e){return!e}))}},"SWITCH TO ",n?"SIGNUP":"LOGIN")))}}}]);
//# sourceMappingURL=4.374cba1c.chunk.js.map