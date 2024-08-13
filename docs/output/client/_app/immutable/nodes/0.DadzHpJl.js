import{s as U,n as R,c as W,q as X,u as Y,v as e2,w as t2}from"../chunks/scheduler.Ce_0Mfso.js";import{S as J,i as P,e as p,s as E,A as I,c as f,a as m,z as k,f as M,B as y,d as c,o as t,g as Q,h as l,u as a2,v as s2,w as l2,n as F,l as G,x as r2}from"../chunks/index.CoaCY2RK.js";import{p as n2}from"../chunks/stores.DkqSgIgm.js";const i2="data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20width='107'%20height='128'%20viewBox='0%200%20107%20128'%3e%3ctitle%3esvelte-logo%3c/title%3e%3cpath%20d='M94.1566,22.8189c-10.4-14.8851-30.94-19.2971-45.7914-9.8348L22.2825,29.6078A29.9234,29.9234,0,0,0,8.7639,49.6506a31.5136,31.5136,0,0,0,3.1076,20.2318A30.0061,30.0061,0,0,0,7.3953,81.0653a31.8886,31.8886,0,0,0,5.4473,24.1157c10.4022,14.8865,30.9423,19.2966,45.7914,9.8348L84.7167,98.3921A29.9177,29.9177,0,0,0,98.2353,78.3493,31.5263,31.5263,0,0,0,95.13,58.117a30,30,0,0,0,4.4743-11.1824,31.88,31.88,0,0,0-5.4473-24.1157'%20style='fill:%23ff3e00'/%3e%3cpath%20d='M45.8171,106.5815A20.7182,20.7182,0,0,1,23.58,98.3389a19.1739,19.1739,0,0,1-3.2766-14.5025,18.1886,18.1886,0,0,1,.6233-2.4357l.4912-1.4978,1.3363.9815a33.6443,33.6443,0,0,0,10.203,5.0978l.9694.2941-.0893.9675a5.8474,5.8474,0,0,0,1.052,3.8781,6.2389,6.2389,0,0,0,6.6952,2.485,5.7449,5.7449,0,0,0,1.6021-.7041L69.27,76.281a5.4306,5.4306,0,0,0,2.4506-3.631,5.7948,5.7948,0,0,0-.9875-4.3712,6.2436,6.2436,0,0,0-6.6978-2.4864,5.7427,5.7427,0,0,0-1.6.7036l-9.9532,6.3449a19.0329,19.0329,0,0,1-5.2965,2.3259,20.7181,20.7181,0,0,1-22.2368-8.2427,19.1725,19.1725,0,0,1-3.2766-14.5024,17.9885,17.9885,0,0,1,8.13-12.0513L55.8833,23.7472a19.0038,19.0038,0,0,1,5.3-2.3287A20.7182,20.7182,0,0,1,83.42,29.6611a19.1739,19.1739,0,0,1,3.2766,14.5025,18.4,18.4,0,0,1-.6233,2.4357l-.4912,1.4978-1.3356-.98a33.6175,33.6175,0,0,0-10.2037-5.1l-.9694-.2942.0893-.9675a5.8588,5.8588,0,0,0-1.052-3.878,6.2389,6.2389,0,0,0-6.6952-2.485,5.7449,5.7449,0,0,0-1.6021.7041L37.73,51.719a5.4218,5.4218,0,0,0-2.4487,3.63,5.7862,5.7862,0,0,0,.9856,4.3717,6.2437,6.2437,0,0,0,6.6978,2.4864,5.7652,5.7652,0,0,0,1.602-.7041l9.9519-6.3425a18.978,18.978,0,0,1,5.2959-2.3278,20.7181,20.7181,0,0,1,22.2368,8.2427,19.1725,19.1725,0,0,1,3.2766,14.5024,17.9977,17.9977,0,0,1-8.13,12.0532L51.1167,104.2528a19.0038,19.0038,0,0,1-5.3,2.3287'%20style='fill:%23fff'/%3e%3c/svg%3e",o2="data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='-3%20-3%2030%2030'%3e%3cpath%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M12%202C6.47715%202%202%206.47715%202%2012C2%2017.5229%206.47715%2022%2012%2022C17.5229%2022%2022%2017.5229%2022%2012C22%206.47715%2017.5229%202%2012%202ZM0%2012C0%205.3726%205.3726%200%2012%200C18.6274%200%2024%205.3726%2024%2012C24%2018.6274%2018.6274%2024%2012%2024C5.3726%2024%200%2018.6274%200%2012Z'%20fill='rgba(0,0,0,0.7)'%20stroke='none'%20/%3e%3cpath%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M9.59162%2022.7357C9.49492%2022.6109%209.49492%2021.4986%209.59162%2019.399C8.55572%2019.4347%207.90122%2019.3628%207.62812%2019.1833C7.21852%2018.9139%206.80842%2018.0833%206.44457%2017.4979C6.08072%2016.9125%205.27312%2016.8199%204.94702%2016.6891C4.62091%2016.5582%204.53905%2016.0247%205.84562%2016.4282C7.15222%2016.8316%207.21592%2017.9303%207.62812%2018.1872C8.04032%2018.4441%209.02572%2018.3317%209.47242%2018.1259C9.91907%2017.9201%209.88622%2017.1538%209.96587%2016.8503C10.0666%2016.5669%209.71162%2016.5041%209.70382%2016.5018C9.26777%2016.5018%206.97697%2016.0036%206.34772%2013.7852C5.71852%2011.5669%206.52907%2010.117%206.96147%209.49369C7.24972%209.07814%207.22422%208.19254%206.88497%206.83679C8.11677%206.67939%209.06732%207.06709%209.73672%207.99999C9.73737%208.00534%2010.6143%207.47854%2012.0001%207.47854C13.386%207.47854%2013.8777%207.90764%2014.2571%207.99999C14.6365%208.09234%2014.94%206.36699%2017.2834%206.83679C16.7942%207.79839%2016.3844%208.99999%2016.6972%209.49369C17.0099%209.98739%2018.2372%2011.5573%2017.4833%2013.7852C16.9807%2015.2706%2015.9927%2016.1761%2014.5192%2016.5018C14.3502%2016.5557%2014.2658%2016.6427%2014.2658%2016.7627C14.2658%2016.9427%2014.4942%2016.9624%2014.8233%2017.8058C15.0426%2018.368%2015.0585%2019.9739%2014.8708%2022.6234C14.3953%2022.7445%2014.0254%2022.8257%2013.7611%2022.8673C13.2924%2022.9409%2012.7835%2022.9822%2012.2834%2022.9982C11.7834%2023.0141%2011.6098%2023.0123%2010.9185%2022.948C10.4577%2022.9051%2010.0154%2022.8343%209.59162%2022.7357Z'%20fill='rgba(0,0,0,0.7)'%20stroke='none'%20/%3e%3c/svg%3e";function u2(v){let e,r,h=`<a href="https://kit.svelte.dev" class="svelte-1u9z1tp"><img src="${i2}" alt="SvelteKit" class="svelte-1u9z1tp"/></a>`,o,n,i,C,_,d,s,a,u="Home",x,Z,w,$,V="About",B,D,L,A,S,b,j=`<a href="https://github.com/sveltejs/kit" class="svelte-1u9z1tp"><img src="${o2}" alt="GitHub" class="svelte-1u9z1tp"/></a>`;return{c(){e=p("header"),r=p("div"),r.innerHTML=h,o=E(),n=p("nav"),i=I("svg"),C=I("path"),_=E(),d=p("ul"),s=p("li"),a=p("a"),a.textContent=u,Z=E(),w=p("li"),$=p("a"),$.textContent=V,D=E(),L=I("svg"),A=I("path"),S=E(),b=p("div"),b.innerHTML=j,this.h()},l(z){e=f(z,"HEADER",{class:!0});var g=m(e);r=f(g,"DIV",{class:!0,"data-svelte-h":!0}),k(r)!=="svelte-1jb641n"&&(r.innerHTML=h),o=M(g),n=f(g,"NAV",{class:!0});var H=m(n);i=y(H,"svg",{viewBox:!0,"aria-hidden":!0,class:!0});var q=m(i);C=y(q,"path",{d:!0,class:!0}),m(C).forEach(c),q.forEach(c),_=M(H),d=f(H,"UL",{class:!0});var T=m(d);s=f(T,"LI",{"aria-current":!0,class:!0});var K=m(s);a=f(K,"A",{href:!0,class:!0,"data-svelte-h":!0}),k(a)!=="svelte-5a0zws"&&(a.textContent=u),K.forEach(c),Z=M(T),w=f(T,"LI",{"aria-current":!0,class:!0});var N=m(w);$=f(N,"A",{href:!0,class:!0,"data-svelte-h":!0}),k($)!=="svelte-iphxk9"&&($.textContent=V),N.forEach(c),T.forEach(c),D=M(H),L=y(H,"svg",{viewBox:!0,"aria-hidden":!0,class:!0});var O=m(L);A=y(O,"path",{d:!0,class:!0}),m(A).forEach(c),O.forEach(c),H.forEach(c),S=M(g),b=f(g,"DIV",{class:!0,"data-svelte-h":!0}),k(b)!=="svelte-1gilmbv"&&(b.innerHTML=j),g.forEach(c),this.h()},h(){t(r,"class","corner svelte-1u9z1tp"),t(C,"d","M0,0 L1,2 C1.5,3 1.5,3 2,3 L2,0 Z"),t(C,"class","svelte-1u9z1tp"),t(i,"viewBox","0 0 2 3"),t(i,"aria-hidden","true"),t(i,"class","svelte-1u9z1tp"),t(a,"href","/"),t(a,"class","svelte-1u9z1tp"),t(s,"aria-current",x=v[0].url.pathname==="/"?"page":void 0),t(s,"class","svelte-1u9z1tp"),t($,"href","/about"),t($,"class","svelte-1u9z1tp"),t(w,"aria-current",B=v[0].url.pathname==="/about"?"page":void 0),t(w,"class","svelte-1u9z1tp"),t(d,"class","svelte-1u9z1tp"),t(A,"d","M0,0 L0,3 C0.5,3 0.5,3 1,2 L2,0 Z"),t(A,"class","svelte-1u9z1tp"),t(L,"viewBox","0 0 2 3"),t(L,"aria-hidden","true"),t(L,"class","svelte-1u9z1tp"),t(n,"class","svelte-1u9z1tp"),t(b,"class","corner svelte-1u9z1tp"),t(e,"class","svelte-1u9z1tp")},m(z,g){Q(z,e,g),l(e,r),l(e,o),l(e,n),l(n,i),l(i,C),l(n,_),l(n,d),l(d,s),l(s,a),l(d,Z),l(d,w),l(w,$),l(n,D),l(n,L),l(L,A),l(e,S),l(e,b)},p(z,[g]){g&1&&x!==(x=z[0].url.pathname==="/"?"page":void 0)&&t(s,"aria-current",x),g&1&&B!==(B=z[0].url.pathname==="/about"?"page":void 0)&&t(w,"aria-current",B)},i:R,o:R,d(z){z&&c(e)}}}function c2(v,e,r){let h;return W(v,n2,o=>r(0,h=o)),[h]}class v2 extends J{constructor(e){super(),P(this,e,c2,u2,U,{})}}function d2(v){let e,r,h,o,n,i,C='<p>visit <a href="https://kit.svelte.dev" class="svelte-8o1gnw">kit.svelte.dev</a> to learn SvelteKit</p>',_;r=new v2({});const d=v[1].default,s=X(d,v,v[0],null);return{c(){e=p("div"),a2(r.$$.fragment),h=E(),o=p("main"),s&&s.c(),n=E(),i=p("footer"),i.innerHTML=C,this.h()},l(a){e=f(a,"DIV",{class:!0});var u=m(e);s2(r.$$.fragment,u),h=M(u),o=f(u,"MAIN",{class:!0});var x=m(o);s&&s.l(x),x.forEach(c),n=M(u),i=f(u,"FOOTER",{class:!0,"data-svelte-h":!0}),k(i)!=="svelte-1dlfr5"&&(i.innerHTML=C),u.forEach(c),this.h()},h(){t(o,"class","svelte-8o1gnw"),t(i,"class","svelte-8o1gnw"),t(e,"class","app svelte-8o1gnw")},m(a,u){Q(a,e,u),l2(r,e,null),l(e,h),l(e,o),s&&s.m(o,null),l(e,n),l(e,i),_=!0},p(a,[u]){s&&s.p&&(!_||u&1)&&Y(s,d,a,a[0],_?t2(d,a[0],u,null):e2(a[0]),null)},i(a){_||(F(r.$$.fragment,a),F(s,a),_=!0)},o(a){G(r.$$.fragment,a),G(s,a),_=!1},d(a){a&&c(e),r2(r),s&&s.d(a)}}}function p2(v,e,r){let{$$slots:h={},$$scope:o}=e;return v.$$set=n=>{"$$scope"in n&&r(0,o=n.$$scope)},[o,h]}class m2 extends J{constructor(e){super(),P(this,e,p2,d2,U,{})}}export{m2 as component};
