"use strict";(self.webpackChunkangular_starter=self.webpackChunkangular_starter||[]).push([[6188],{6188:(_,s,c)=>{c.r(s),c.d(s,{TutorialModule:()=>T});var i=c(6814),d=c(4408);class r{constructor(){this.title="",this.name="",this.releaseDate=""}}var e=c(9468),m=c(4699);let u=(()=>{var n;class a{constructor(){this.selected=new e.vpe,this.channel=new r,this.index=0}select(t){this.selected.emit(t)}}return(n=a).\u0275fac=function(t){return new(t||n)},n.\u0275cmp=e.Xpm({type:n,selectors:[["app-channel"]],inputs:{channel:"channel",index:"index"},outputs:{selected:"selected"},decls:7,vars:4,consts:[[1,"nga-card-component","p-2","mb-2","text-center",3,"click"],[1,"img-thumbnail",3,"src","alt"],[1,"card-body"],[1,"card-text"],["type","button",1,"btn","btn-primary","btn-sm"]],template:function(t,o){1&t&&(e.TgZ(0,"div",0),e.NdJ("click",function(){return o.select(o.channel)}),e._UZ(1,"img",1),e.TgZ(2,"div",2)(3,"p",3),e._uU(4),e.qZA(),e.TgZ(5,"button",4),e._uU(6),e.qZA()()()),2&t&&(e.xp6(1),e.MGl("src","assets/params/images/channels/",o.channel.name,".jpg",e.LSH),e.s9C("alt",o.channel.name),e.xp6(3),e.Oqu(o.channel.releaseDate),e.xp6(2),e.hij("n\xb0 ",o.index,""))},styles:[".nga-card-component[_ngcontent-%COMP%]{position:relative;display:flex;flex-direction:column;min-width:0;word-wrap:break-word;background-color:#fff;background-clip:border-box;cursor:pointer;box-shadow:0 0 1px #00000029,0 0 5px #0000001f}.nga-card-component[_ngcontent-%COMP%]:hover{box-shadow:0 2px 5px #00000029,0 2px 10px #0000001f}"]}),a})();function h(n,a){1&n&&(e.TgZ(0,"div",12)(1,"div",13),e._uU(2," Select a channel on the list"),e._UZ(3,"br")(4,"br")(5,"i",14)(6,"br"),e.qZA()())}function g(n,a){if(1&n){const l=e.EpF();e.TgZ(0,"div",15),e._UZ(1,"img",16),e.TgZ(2,"button",17),e.NdJ("click",function(){e.CHM(l);const o=e.oxw();return e.KtG(o.onReset())}),e._uU(3,"Reset"),e.qZA()()}if(2&n){const l=e.oxw();e.xp6(1),e.MGl("src","assets/params/images/channels/",l.channelSelected.name,".jpg",e.LSH)}}function x(n,a){if(1&n){const l=e.EpF();e.TgZ(0,"div",18)(1,"app-channel",19),e.NdJ("selected",function(o){e.CHM(l);const p=e.oxw();return e.KtG(p.onSelected(o))}),e.qZA()()}if(2&n){const l=a.$implicit,t=a.index;e.xp6(1),e.Q6J("channel",l)("index",t+1)}}const f=[{path:"",component:(()=>{var n;class a{constructor(t){this.seoService=t,this.seoService.setMetaDescription("Example Components content with meta"),this.seoService.setMetaTitle("angular-starter Title : example-components Page"),this.channelSelected=new r,this.channels=[{title:"Disney Channel",name:"disney-channel",releaseDate:"22/03/1997"},{title:"FOX",name:"fox",releaseDate:"09/10/1986"},{title:"Discovery Channel",name:"discovery-channel",releaseDate:"17/06/1985"},{title:"HBO",name:"hbo",releaseDate:"08/11/1972"},{title:"History",name:"history",releaseDate:"01/01/1995"},{title:"Hulu",name:"hulu",releaseDate:"29/03/2007"},{title:"MTV",name:"mtv",releaseDate:"01/08/1981"},{title:"NBC",name:"nbc",releaseDate:"01/07/1941"},{title:"Netflix",name:"netflix",releaseDate:"29/08/1997"},{title:"Showtime",name:"showtime",releaseDate:"09/05/1976"},{title:"USA Nnetwork",name:"usa-network",releaseDate:"22/09/1977"}]}ngOnInit(){this.channelSelected=this.channels[0]}onSelected(t){this.channelSelected=t}onReset(){this.channelSelected=new r}}return(n=a).\u0275fac=function(t){return new(t||n)(e.Y36(m.v))},n.\u0275cmp=e.Xpm({type:n,selectors:[["app-example-components"]],decls:19,vars:5,consts:[[1,"container","pt-5"],[1,"row"],[1,"text-center"],[1,"h5"],[1,"col-12","col-sm-12","col-md-4","col-lg-4","col-xl-4","p-4"],[1,"nga-card-component","text-center"],[1,"card-title","text-primary","p-2"],[1,"card-title"],["class","card-body",4,"ngIf"],["class","card-body text-center",4,"ngIf"],[1,"col-12","col-sm-12","col-md-8","col-lg-8","col-xl-8"],["class","col-6 col-sm-6 col-md-4 col-lg-3 col-xl-3",4,"ngFor","ngForOf"],[1,"card-body"],["role","alert",1,"alert","alert-info"],[1,"fas","fa-arrow-alt-circle-right","ms-4","fa-2x"],[1,"card-body","text-center"],["alt","channel.name",1,"img-thumbnail",3,"src"],["type","button",1,"btn","btn-info","mt-2",3,"click"],[1,"col-6","col-sm-6","col-md-4","col-lg-3","col-xl-3"],[3,"channel","index","selected"]],template:function(t,o){1&t&&(e.TgZ(0,"div",0)(1,"div",1)(2,"div",2)(3,"h1",3),e._uU(4,"Components Features"),e.qZA(),e._UZ(5,"hr"),e.qZA()(),e.TgZ(6,"div",1)(7,"div",4)(8,"div",1)(9,"div",5)(10,"h5",6),e._uU(11),e.qZA(),e.TgZ(12,"h5",7),e._uU(13),e.qZA(),e.YNc(14,h,7,0,"div",8),e.YNc(15,g,4,1,"div",9),e.qZA()()(),e.TgZ(16,"div",10)(17,"div",1),e.YNc(18,x,2,2,"div",11),e.qZA()()()()),2&t&&(e.xp6(11),e.Oqu(o.channelSelected.title),e.xp6(2),e.Oqu(o.channelSelected.releaseDate),e.xp6(1),e.Q6J("ngIf",!o.channelSelected.name),e.xp6(1),e.Q6J("ngIf",o.channelSelected.name),e.xp6(3),e.Q6J("ngForOf",o.channels))},dependencies:[i.sg,i.O5,u],styles:[".nga-card-component[_ngcontent-%COMP%]{position:relative;display:flex;flex-direction:column;min-width:0;word-wrap:break-word;background-color:#fff;background-clip:border-box;cursor:pointer;box-shadow:0 0 1px #00000029,0 0 5px #0000001f}.nga-card-component[_ngcontent-%COMP%]:hover{box-shadow:0 2px 5px #00000029,0 2px 10px #0000001f}"]}),a})()}];let v=(()=>{var n;class a{}return(n=a).\u0275fac=function(t){return new(t||n)},n.\u0275mod=e.oAB({type:n}),n.\u0275inj=e.cJS({imports:[d.Bz.forChild(f),d.Bz]}),a})(),T=(()=>{var n;class a{}return(n=a).\u0275fac=function(t){return new(t||n)},n.\u0275mod=e.oAB({type:n}),n.\u0275inj=e.cJS({imports:[i.ez,v]}),a})()}}]);