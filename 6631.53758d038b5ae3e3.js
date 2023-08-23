"use strict";(self.webpackChunkangular_starter=self.webpackChunkangular_starter||[]).push([[6631],{6631:(L,T,s)=>{s.r(T),s.d(T,{TutorialModule:()=>X});var m=s(6814),M=s(4408),o=s(9468),p=s(8645);let h=(()=>{var e;class n{constructor(){this.trailer=!1,this.sendMessageSource=new p.x,this.missionAnnouncedSource=new p.x,this.missionConfirmedSource=new p.x,this.missionAnnounced$=this.missionAnnouncedSource.asObservable(),this.missionConfirmed$=this.missionConfirmedSource.asObservable()}announceMission(t){this.missionAnnouncedSource.next(t)}confirmMission(t){this.missionConfirmedSource.next(t)}open(t,i){this.pageId=i;const l=new bootstrap.Modal(document.getElementById("modalEbook"),{keyboard:!0});l&&l?.show()}afterClosed(t){this.sendMessageSource.next(t)}getMessage(){return this.sendMessageSource.asObservable()}sendMessage(t){this.sendMessageSource.next(t)}}return(e=n).\u0275fac=function(t){return new(t||e)},e.\u0275prov=o.Yz7({token:e,factory:e.\u0275fac}),n})();var C=s(2096),S=s(6306),E=s(9862),Z=s(4352),A=s(93),x=s(9360),w=s(4829),O=s(2306),U=s(8251),z=s(7103);const I=(0,O.d)(e=>function(r=null){e(this),this.message="Timeout has occurred",this.name="TimeoutError",this.info=r});function F(e){throw new I(e)}class N{constructor(){this.action="",this.emailebook=""}}var c=s(95);function j(e,n){1&e&&(o.TgZ(0,"div",18)(1,"strong"),o._uU(2,"Veuillez entrez votre adresse email"),o.qZA()())}function B(e,n){1&e&&o._UZ(0,"span",19)}const P={headers:new E.WM({"Content-Type":"application/json","Access-Control-Allow-Origin":"*","Access-Control-Allow-Methods":"GET, HEAD,POST, PUT, DELETE, OPTIONS","Access-Control-Allow-Headers":"Origin, X-Requested-With, contentType,Content-Type, Accept, Authorization"})};let Y=(()=>{var e;class n{constructor(t,i,l){this.platformId=t,this.http=i,this.modalEbookService=l,this.item=new N,this.loading=!1,this.emailerror=!1,this.nameerror=!1,this.id="",this.emailebook="",this.nameebook="",this.title=""}close(t){t?(this.emailerror=!1,(null==this.emailebook||""===this.emailebook)&&(this.emailerror=!0),this.emailerror||(this.loading=!0,this.getSubscriptionTutorial(this.emailebook,this.modalEbookService.pageId,"subscription-tutorial:valid").subscribe(i=>{null==i&&(i={id:1,message:"User created!"}),this.item.action="valid",this.item.emailebook=this.emailebook,this.item.data=i,this.modalEbookService.afterClosed(this.item),this.loading=!1}))):(this.item.action="cancel",this.item.emailebook=this.emailebook,this.modalEbookService.afterClosed(this.item))}getSubscriptionTutorial(t,i,l){let d="";d+="subscription-tutorial";const b=JSON.stringify({pageId:i,pagename:l,email:t});return this.http.post("subscription-tutorial",b,P).pipe(function J(e,n){const{first:r,each:t,with:i=F,scheduler:l=n??Z.z,meta:d=null}=(0,A.q)(e)?{first:e}:"number"==typeof e?{each:e}:e;if(null==r&&null==t)throw new TypeError("No timeout provided.");return(0,x.e)((b,u)=>{let k,a,f=null,v=0;const y=g=>{a=(0,z.f)(u,l,()=>{try{k.unsubscribe(),(0,w.Xf)(i({meta:d,lastValue:f,seen:v})).subscribe(u)}catch($){u.error($)}},g)};k=b.subscribe((0,U.x)(u,g=>{a?.unsubscribe(),v++,u.next(f=g),t>0&&y(t)},void 0,void 0,()=>{a?.closed||a?.unsubscribe(),f=null})),!v&&y(null!=r?"number"==typeof r?r:+r-l.now():t)})}(3e3),(0,S.K)(this.handleError("addItem")))}handleError(t="operation",i){return l=>(console.error(`${t} failed: ${l.message}`),(0,C.of)(i))}}return(e=n).\u0275fac=function(t){return new(t||e)(o.Y36(o.Lbi),o.Y36(E.eN),o.Y36(h))},e.\u0275cmp=o.Xpm({type:e,selectors:[["app-modal-ebook"]],inputs:{id:"id",title:"title"},decls:30,vars:3,consts:[["tabindex","-1","role","dialog","id","modalEbook",1,"modal","fade"],["role","document",1,"modal-dialog","modal-lg"],[1,"modal-content","rounded-5","shadow"],[1,"modal-header","p-5","pb-4","border-bottom-0"],["type","button","data-bs-dismiss","modal","aria-label","Close",1,"btn-close"],[1,"modal-body","p-5","pt-0"],[1,"text-center",2,"font-size","20px"],[1,"h2-responsive"],[1,"row","d-flex","justify-content-center"],[1,"col-md-8"],[1,"md-form"],["type","email","id","emailebook",1,"form-control",3,"ngModel","ngModelChange"],["class","help-block editerror pb-4","style","font-size:22px",4,"ngIf"],["type","button",1,"btn","btn-rounded","buttonguide",3,"click"],["class","text-white spinner-border spinner-border-sm","role","status","aria-hidden","true",4,"ngIf"],[1,"text-white","ml-4"],[1,"col-md-10"],[2,"font-size","13px"],[1,"help-block","editerror","pb-4",2,"font-size","22px"],["role","status","aria-hidden","true",1,"text-white","spinner-border","spinner-border-sm"]],template:function(t,i){1&t&&(o.TgZ(0,"div",0)(1,"div",1)(2,"div",2)(3,"div",3),o._UZ(4,"button",4),o.qZA(),o.TgZ(5,"div",5),o._UZ(6,"br"),o.TgZ(7,"div",6)(8,"p"),o._uU(9,"Entrez votre email pour recevoir "),o.qZA(),o.TgZ(10,"p",7)(11,"strong"),o._uU(12,'"D\xe9marrer une Application Web avec Angular CLI 14" '),o.qZA()(),o.TgZ(13,"div",8)(14,"div",9)(15,"div",10)(16,"input",11),o.NdJ("ngModelChange",function(d){return i.emailebook=d}),o.qZA()(),o.YNc(17,j,3,0,"div",12),o.qZA()(),o.TgZ(18,"div",8)(19,"div",9)(20,"button",13),o.NdJ("click",function(){return i.close(!0)}),o.YNc(21,B,1,0,"span",14),o.TgZ(22,"span",15),o._uU(23,"Je re\xe7ois mon Guide Angular"),o.qZA()()()(),o.TgZ(24,"div",8)(25,"div",16),o._UZ(26,"br"),o.TgZ(27,"p",17)(28,"strong"),o._uU(29,"Vous pouvez vous d\xe9sinscrire en 1 clic depuis n'importe lequel de mes emails"),o.qZA()()()()()()()()()),2&t&&(o.xp6(16),o.Q6J("ngModel",i.emailebook),o.xp6(1),o.Q6J("ngIf",i.emailerror),o.xp6(4),o.Q6J("ngIf",!0===i.loading))},dependencies:[m.O5,c.Fj,c.JJ,c.On],styles:[".buttonguide[_ngcontent-%COMP%]{color:#fff;background-color:#1976d2;font-weight:700}.textguide[_ngcontent-%COMP%]{color:#1976d2}.textcode[_ngcontent-%COMP%]{color:#1976d2;font-weight:700}"]}),n})();const D=[{path:"",component:(()=>{var e;class n{constructor(t){this.modalEbookService=t}openModal(){this.modalEbookService.open("modalEbook",10)}}return(e=n).\u0275fac=function(t){return new(t||e)(o.Y36(h))},e.\u0275cmp=o.Xpm({type:e,selectors:[["app-example-modal"]],decls:9,vars:0,consts:[[1,"container","px-4","py-5"],[1,"display-6","fw-bold","pb-2","text-center"],["type","button",1,"btn","btn-primary",3,"click"]],template:function(t,i){1&t&&(o._UZ(0,"app-modal-ebook"),o.TgZ(1,"div",0)(2,"h2",1),o._uU(3,"Features"),o.qZA(),o._UZ(4,"hr"),o.TgZ(5,"p"),o._uU(6," Modal components Below is a static modal example (meaning its position and display have been overridden). Included are the modal header, modal body (required for padding), and modal footer (optional). We ask that you include modal headers with dismiss actions whenever possible, or provide another explicit dismiss action. "),o.qZA(),o.TgZ(7,"button",2),o.NdJ("click",function(){return i.openModal()}),o._uU(8,"Primary"),o.qZA()())},dependencies:[Y]}),n})()}];let R=(()=>{var e;class n{}return(e=n).\u0275fac=function(t){return new(t||e)},e.\u0275mod=o.oAB({type:e}),e.\u0275inj=o.cJS({imports:[M.Bz.forChild(D),M.Bz]}),n})(),W=(()=>{var e;class n{}return(e=n).\u0275fac=function(t){return new(t||e)},e.\u0275mod=o.oAB({type:e}),e.\u0275inj=o.cJS({imports:[m.ez,c.u5]}),n})(),X=(()=>{var e;class n{}return(e=n).\u0275fac=function(t){return new(t||e)},e.\u0275mod=o.oAB({type:e}),e.\u0275inj=o.cJS({providers:[h],imports:[m.ez,R,W]}),n})()}}]);