(()=>{"use strict";var e={5278:(e,t,r)=>{const s=r(1322);chrome.runtime.onMessage.addListener((function(e,t,r){e.color?(console.log("Receive color = "+e.color),document.body.style.backgroundColor=e.color,r("Change color to "+e.color)):r("Color message is none.")})),new s.CGMain},1322:(e,t,r)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.CGMain=void 0;const s=r(4143),o=r(3464),n=r(9638),i=r(210);t.CGMain=class{constructor(){this.inGesture=!1,this.gestures=[],this.forceOverIFrameState=!1,this.initMouseGestureDirections(),this.listenToMouseEvents(),this.initStorageListeners(),this.listenToMutationObserver(),this.showMessage("Gesture ready")}initStorageListeners(){chrome.storage.sync.get("ForceOverIFrame",(e=>{console.log("this is what i get ForceOverIFrame",e.ForceOverIFrame),this.forceOverIFrameState=e.ForceOverIFrame})),chrome.storage.onChanged.addListener(((e,t)=>{var r;console.log(e),this.toggleAllIFramePointerEvent(null===(r=null==e?void 0:e.ForceOverIFrame)||void 0===r?void 0:r.newValue)}))}listenToMouseEvents(){s.fromEvent(document,"contextmenu").subscribe((e=>{this.inGesture&&e.preventDefault(),this.inGesture=!1})),this.move$=s.fromEvent(document,"mousemove").pipe(o.tap((e=>{this.showIndicator(!0)})),o.takeUntil(s.fromEvent(document,"mouseup").pipe(o.tap((e=>{this.showIndicator(!1),this.anchorCoordinate=null,this.currentAnchorTarget?(console.log("is anchor",this.currentAnchorTarget),chrome.runtime.sendMessage({type:n.MessageTypes.Url,gestures:this.gestures,url:this.currentAnchorTarget.href})):chrome.runtime.sendMessage({type:n.MessageTypes.Gesture,gestures:this.gestures,url:null}),this.gestures=[]}))))),s.fromEvent(document,"mousedown").pipe(o.tap((e=>{this.inGesture=!1})),o.filter((e=>this.isGestureButton(e))),o.tap((e=>{console.log("tapping mouse down is anchor"),this.currentAnchorTarget=this.lookupParentsForAnchor(e),console.log("[currentAnchorTarget]",this.currentAnchorTarget,chrome.tabs)})),o.switchMap((e=>this.move$))).subscribe((e=>{let t=this.getCoordinate(e);if(this.anchorCoordinate||(this.anchorCoordinate=t),this.getDistance(this.anchorCoordinate,t)>10){this.inGesture=!0;let e=this.getVector(this.getDegrees(this.anchorCoordinate,t));null!=e&&((this.gestures.length>0&&this.gestures[this.gestures.length-1]!=e||0==this.gestures.length)&&this.gestures.push(e),this.printGestures(),this.anchorCoordinate=t)}}))}toggleIFramePointerEvents(e,t){t?e.classList.add("pointer-event-none"):e.classList.remove("pointer-event-none")}disablePointerEventOnClick(e){s.fromEvent(e.parentElement,"mousedown").pipe(o.tap((e=>console.log(e))),o.filter((e=>0==e.button)),o.take(1)).subscribe((e=>{this.toggleIFramePointerEvents(e.target.querySelector("iframe"),!1),this.showMessage("Enabled IFrame interaction")}))}toggleAllIFramePointerEvent(e){document.querySelectorAll("iframe").forEach((t=>{this.toggleIFramePointerEvents(t,e)}))}listenToMutationObserver(){const e=document;new MutationObserver(((e,t)=>{e.filter((e=>"childList"===e.type)).forEach((e=>{var t;null===(t=e.addedNodes)||void 0===t||t.forEach((e=>{"IFRAME"==e.nodeName&&(console.log("iframe found added",e),this.toggleIFramePointerEvents(e,this.forceOverIFrameState),this.disablePointerEventOnClick(e))}))}))})).observe(e,{childList:!0,subtree:!0})}lookupParentsForAnchor(e){console.log("this.currentAnchorTarget",e.target);let t=e.target;if(null!=t.href)return t;for(;t.parentElement;)if(t=t.parentElement,null!=t.href)return t;return null}getCoordinate(e){return{x:e.clientX,y:e.clientY}}getDistance(e,t){return Math.sqrt(Math.pow(e.x-t.x,2)+Math.pow(e.y-t.y,2))}getDegrees(e,t){return 180*Math.atan2(e.y-t.y,e.x-t.x)/Math.PI}getVector(e){return e>-30&&e<30?(console.log("gesture","left"),i.GestureTypes.Left):e>60&&e<120?(console.log("gesture","up"),i.GestureTypes.Up):e>-120&&e<-60?(console.log("gesture","down"),i.GestureTypes.Down):e>150||e<-150?(console.log("gesture","right"),i.GestureTypes.Right):void console.log("undefined")}isGestureButton(e){return 2==e.button}getVectorText(){return this.gestures.map((e=>i.GestureTypes[e]))}addDot(e){let t=document.createElement("div");t.style.position="absolute",t.style.left=e.clientX+"px",t.style.top=e.clientY+"px",t.style.width="3px",t.style.height="3px",t.style.backgroundColor=0==e.button?"red":"green",document.body.appendChild(t)}initMouseGestureDirections(){this.indicatorElement=document.createElement("div"),this.indicatorElement.id="chrogestureid",this.indicatorElement.classList.add("chgs-indicator"),this.showIndicator(!1),document.body.appendChild(this.indicatorElement)}showMessage(e){let t=document.createElement("div");t.id="chrogesture-messagebox",t.classList.add("message-box"),t.innerText=e,t.style.visibility="hidden",document.body.appendChild(t),s.timer(3e3).subscribe((e=>{t.remove()}))}showIndicator(e){this.indicatorElement.style.visibility=e?"initial":"hidden"}printGestures(){this.indicatorElement.innerText=this.gestures.map((e=>{switch(e){case i.GestureTypes.Up:return"🔼";case i.GestureTypes.Down:return"🔽";case i.GestureTypes.Left:return"◀";case i.GestureTypes.Right:return"▶"}})).join(" ")}}},210:(e,t)=>{var r;Object.defineProperty(t,"__esModule",{value:!0}),t.GestureTypes=void 0,(r=t.GestureTypes||(t.GestureTypes={}))[r.Up=0]="Up",r[r.Down=1]="Down",r[r.Left=2]="Left",r[r.Right=3]="Right"},9638:(e,t)=>{var r;Object.defineProperty(t,"__esModule",{value:!0}),t.MessageTypes=void 0,(r=t.MessageTypes||(t.MessageTypes={}))[r.Gesture=0]="Gesture",r[r.Url=1]="Url"}},t={};function r(s){if(t[s])return t[s].exports;var o=t[s]={exports:{}};return e[s](o,o.exports,r),o.exports}r.m=e,r.x=e=>{},r.d=(e,t)=>{for(var s in t)r.o(t,s)&&!r.o(e,s)&&Object.defineProperty(e,s,{enumerable:!0,get:t[s]})},r.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),r.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.j=828,(()=>{var e={828:0},t=[[5278,736]],s=e=>{},o=(o,n)=>{for(var i,a,[l,u,c,h]=n,d=0,g=[];d<l.length;d++)a=l[d],r.o(e,a)&&e[a]&&g.push(e[a][0]),e[a]=0;for(i in u)r.o(u,i)&&(r.m[i]=u[i]);for(c&&c(r),o&&o(n);g.length;)g.shift()();return h&&t.push.apply(t,h),s()},n=self.webpackChunkchrome_extension_typescript_starter=self.webpackChunkchrome_extension_typescript_starter||[];function i(){for(var s,o=0;o<t.length;o++){for(var n=t[o],i=!0,a=1;a<n.length;a++){var l=n[a];0!==e[l]&&(i=!1)}i&&(t.splice(o--,1),s=r(r.s=n[0]))}return 0===t.length&&(r.x(),r.x=e=>{}),s}n.forEach(o.bind(null,0)),n.push=o.bind(null,n.push.bind(n));var a=r.x;r.x=()=>(r.x=a||(e=>{}),(s=i)())})(),r.x()})();