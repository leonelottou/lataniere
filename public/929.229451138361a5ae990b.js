(self.webpackChunkdemo1=self.webpackChunkdemo1||[]).push([[929],{6929:(t,e,o)=>{"use strict";o.r(e),o.d(e,{AuthModule:()=>w});var n=o(8583),i=o(3679),r=o(7716),l=o(7556),s=o(3318);function a(t,e){1&t&&(r.ynx(0),r.TgZ(1,"div",18),r.TgZ(2,"div",19),r._uU(3," Veuillez fournir vos idenifiants pour vous connecter "),r.qZA(),r.qZA(),r.BQk())}function c(t,e){1&t&&(r.ynx(0),r.TgZ(1,"span",20),r._uU(2," Veuillez patienter... "),r._UZ(3,"span",21),r.qZA(),r.BQk()),2&t&&(r.xp6(1),r.Udp("display","block"))}function m(t,e){1&t&&(r.ynx(0),r.TgZ(1,"span",22),r._uU(2,"Se connecter"),r.qZA(),r.BQk())}function g(t,e){if(1&t&&(r.ynx(0),r.TgZ(1,"div",23),r.TgZ(2,"span",24),r._uU(3),r.qZA(),r.qZA(),r.BQk()),2&t){const t=r.oxw().message;r.xp6(3),r.hij(" ",t," ")}}function u(t,e){if(1&t&&r.YNc(0,g,4,1,"ng-container",3),2&t){const t=e.control;r.Q6J("ngIf",t.hasError(e.validation)&&(t.dirty||t.touched))}}const d=function(t,e){return{"is-invalid":t,"is-valid":e}},p=function(t){return{validation:"required",message:"Email r\xe9quis",control:t}},h=function(t){return{validation:"email",message:"Email invalid",control:t}},f=function(t){return{validation:"minLength",message:"Email doit avoir au moins 3 symboles",control:t}},x=function(t){return{validation:"maxLength",message:"Email should have maximum 360 symbols",control:t}},Z=function(t){return{validation:"required",message:"Mot de passe r\xe9quis",control:t}},v=function(t){return{validation:"minlength",message:"Password should have at least 3 symbols",control:t}},b=function(t){return{validation:"maxLength",message:"Password should have maximum 100 symbols",control:t}};let T=(()=>{class t{constructor(t,e,o,n,i){this.fb=t,this.authService=e,this.route=o,this.router=n,this.changeDetectorRef=i,this.defaultAuth={email:"admin@demo.com",password:"demo"},this.unsubscribe=[],this.hasError=!1,console.log("erreur")}ngOnInit(){this.initForm(),this.returnUrl=this.route.snapshot.queryParams["returnUrl".toString()]||"/"}get f(){return this.loginForm.controls}initForm(){this.loginForm=this.fb.group({email:["",i.kI.compose([i.kI.required,i.kI.minLength(3),i.kI.maxLength(320)])],password:["",i.kI.compose([i.kI.required,i.kI.minLength(3),i.kI.maxLength(100)])]})}ngOnDestroy(){this.unsubscribe.forEach(t=>t.unsubscribe())}login(){console.log(this.f.password.value),this.isLoading$=!0,this.authService.login(this.f.email.value,this.f.password.value).then(t=>{this.isLoading$=!1,this.hasError=!1,this.router.navigate(["/"]),console.log("Connect\xe9 avec succ\xe8s",t),this.changeDetectorRef.detectChanges()}).catch(t=>{this.hasError=!0,this.isLoading$=!1,console.error("Erreur de connexion",t),this.changeDetectorRef.detectChanges()})}}return t.\u0275fac=function(e){return new(e||t)(r.Y36(i.qu),r.Y36(l.e),r.Y36(s.gz),r.Y36(s.F0),r.Y36(r.sBO))},t.\u0275cmp=r.Xpm({type:t,selectors:[["app-login"]],decls:33,vars:44,consts:[["novalidate","novalidate","id","kt_login_signin_form",1,"form","w-100",3,"formGroup","ngSubmit"],[1,"text-center","mb-10"],[1,"text-dark","mb-3"],[4,"ngIf"],[1,"mb-lg-15","alert","alert-danger",3,"hidden"],[1,"alert-text","font-weight-bold"],[1,"fv-row","mb-10"],[1,"form-label","fs-6","fw-bolder","text-dark"],["type","email","name","email","formControlName","email","autocomplete","off",1,"form-control","form-control-lg","form-control-solid",3,"ngClass"],[3,"ngTemplateOutlet","ngTemplateOutletContext"],[1,"d-flex","justify-content-between","mt-n5"],[1,"d-flex","flex-stack","mb-2"],[1,"form-label","fw-bolder","text-dark","fs-6","mb-0"],["routerLink","/auth/forgot-password","id","kt_login_forgot",1,"link-primary","fs-6","fw-bolder",2,"display","none"],["type","password","name","password","autocomplete","off","formControlName","password",1,"form-control","form-control-lg","form-control-solid",3,"ngClass"],[1,"text-center"],["type","submit","id","kt_sign_in_submit",1,"btn","btn-lg","btn-primary","w-100","mb-5",3,"disabled"],["formError",""],[1,"mb-10","bg-light-info","p-8","rounded"],[1,"text-info"],[1,"indicator-progress"],[1,"spinner-border","spinner-border-sm","align-middle","ms-2"],[1,"indicator-label"],[1,"fv-plugins-message-container"],["role","alert"]],template:function(t,e){if(1&t&&(r.TgZ(0,"form",0),r.NdJ("ngSubmit",function(){return e.login()}),r.TgZ(1,"div",1),r.TgZ(2,"h1",2),r._uU(3,"Connectez-vous \xe0 La Taniere 237"),r.qZA(),r.qZA(),r.YNc(4,a,4,0,"ng-container",3),r.TgZ(5,"div",4),r.TgZ(6,"div",5),r._uU(7," identifiant incorrect "),r.qZA(),r.qZA(),r.TgZ(8,"div",6),r.TgZ(9,"label",7),r._uU(10,"Email ou Num\xe9ro de t\xe9l\xe9phone"),r.qZA(),r._UZ(11,"input",8),r.GkF(12,9),r.GkF(13,9),r.GkF(14,9),r.GkF(15,9),r.qZA(),r.TgZ(16,"div",6),r.TgZ(17,"div",10),r.TgZ(18,"div",11),r.TgZ(19,"label",12),r._uU(20,"Mot de passe"),r.qZA(),r.TgZ(21,"a",13),r._uU(22," Mot de passe oubli\xe9? "),r.qZA(),r.qZA(),r.qZA(),r._UZ(23,"input",14),r.GkF(24,9),r.GkF(25,9),r.GkF(26,9),r.qZA(),r.TgZ(27,"div",15),r.TgZ(28,"button",16),r.YNc(29,c,4,2,"ng-container",3),r.YNc(30,m,3,0,"ng-container",3),r.qZA(),r.qZA(),r.qZA(),r.YNc(31,u,1,1,"ng-template",null,17,r.W1O)),2&t){const t=r.MAs(32);r.Q6J("formGroup",e.loginForm),r.xp6(4),r.Q6J("ngIf",!e.hasError),r.xp6(1),r.Q6J("hidden",0==e.hasError),r.xp6(6),r.Q6J("ngClass",r.WLB(24,d,e.loginForm.controls.email.invalid&&e.loginForm.controls.email.touched,e.loginForm.controls.email.valid&&e.loginForm.controls.email.touched)),r.xp6(1),r.Q6J("ngTemplateOutlet",t)("ngTemplateOutletContext",r.VKq(27,p,e.loginForm.controls.email)),r.xp6(1),r.Q6J("ngTemplateOutlet",t)("ngTemplateOutletContext",r.VKq(29,h,e.loginForm.controls.email)),r.xp6(1),r.Q6J("ngTemplateOutlet",t)("ngTemplateOutletContext",r.VKq(31,f,e.loginForm.controls.email)),r.xp6(1),r.Q6J("ngTemplateOutlet",t)("ngTemplateOutletContext",r.VKq(33,x,e.loginForm.controls.email)),r.xp6(6),r.Udp("margin-left","5px"),r.xp6(2),r.Q6J("ngClass",r.WLB(35,d,e.loginForm.controls.password.invalid&&e.loginForm.controls.password.touched,e.loginForm.controls.password.valid&&e.loginForm.controls.password.touched)),r.xp6(1),r.Q6J("ngTemplateOutlet",t)("ngTemplateOutletContext",r.VKq(38,Z,e.loginForm.controls.password)),r.xp6(1),r.Q6J("ngTemplateOutlet",t)("ngTemplateOutletContext",r.VKq(40,v,e.loginForm.controls.password)),r.xp6(1),r.Q6J("ngTemplateOutlet",t)("ngTemplateOutletContext",r.VKq(42,b,e.loginForm.controls.password)),r.xp6(2),r.Q6J("disabled",e.loginForm.invalid),r.xp6(1),r.Q6J("ngIf",e.isLoading$),r.xp6(1),r.Q6J("ngIf",!e.isLoading$)}},directives:[i._Y,i.JL,i.sg,n.O5,i.Fj,i.JJ,i.u,n.mk,n.tP,s.yS],styles:["[_nghost-%COMP%]{width:100%}@media (min-width: 992px){[_nghost-%COMP%]   .login-form[_ngcontent-%COMP%]{width:100%;max-width:450px}[_nghost-%COMP%]   .login-form[_ngcontent-%COMP%]   .mat-form-field[_ngcontent-%COMP%]{width:100%}}"]}),t})();const q=[{path:"",component:(()=>{class t{constructor(t,e){this.authService=t,this.router=e}ngOnInit(){this.authService.checkAuthentication().then(t=>{t?(console.log("non connect\xe9"),this.router.navigate(["/"]),console.log("Utilisateur connect\xe9 :",t)):console.log("Utilisateur non connect\xe9")}).catch(t=>{})}}return t.\u0275fac=function(e){return new(e||t)(r.Y36(l.e),r.Y36(s.F0))},t.\u0275cmp=r.Xpm({type:t,selectors:[["app-auth"]],decls:14,vars:0,consts:[[1,"d-flex","flex-column","flex-column-fluid","bgi-position-y-bottom","position-x-center","bgi-no-repeat","bgi-size-contain","bgi-attachment-fixed",2,"background-image","url('./assets/media/illustrations/sketchy-1/14.png')"],[1,"d-flex","flex-center","flex-column","flex-column-fluid","p-10","pb-lg-20"],["routerLink","/",1,"mb-12"],["alt","Logo","src","./assets/TaverneTransp.png",1,"h-200px"],[1,"w-lg-500px","bg-white","rounded","shadow-sm","p-10","p-lg-15","mx-auto"],[1,"d-flex","flex-center","flex-column-auto","p-10",2,"display","none !important"],[1,"d-flex","align-items-center","fw-bold","fs-6"],[1,"text-muted","text-hover-primary","px-2","cursor-pointer"]],template:function(t,e){1&t&&(r.TgZ(0,"div",0),r.TgZ(1,"div",1),r.TgZ(2,"a",2),r._UZ(3,"img",3),r.qZA(),r.TgZ(4,"div",4),r._UZ(5,"router-outlet"),r.qZA(),r.qZA(),r.TgZ(6,"div",5),r.TgZ(7,"div",6),r.TgZ(8,"a",7),r._uU(9,"About"),r.qZA(),r.TgZ(10,"a",7),r._uU(11,"Contact"),r.qZA(),r.TgZ(12,"a",7),r._uU(13,"Contact Us"),r.qZA(),r.qZA(),r.qZA(),r.qZA())},directives:[s.yS,s.lC],styles:["[_nghost-%COMP%]{height:100%}"]}),t})(),children:[{path:"",component:T},{path:"login",component:T}]}];let w=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=r.oAB({type:t}),t.\u0275inj=r.cJS({imports:[[n.ez,s.Bz.forChild(q),i.UX]]}),t})()}}]);