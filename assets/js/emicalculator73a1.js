(function(){function a(a){L=a,jQuery("#loanproduct").val(L),"active"!=jQuery("li#"+L).attr("class")&&jQuery("li#"+L).addClass("active").siblings().removeClass("active"),jQuery("ul.loanproduct-nav li").click(function(){return"active"!=jQuery(this).attr("class")&&(jQuery(this).addClass("active").siblings().removeClass("active"),L=jQuery(this).attr("id"),jQuery("#loanproduct").val(L),"home-loan"==L?c("Home Loan Amount",2e7,1e5,5e6,20,7.5,30,.5,240):"personal-loan"==L?c("Personal Loan Amount",3e6,1e4,75e4,25,11,5,.25,36):"car-loan"==L&&c("Car Loan Amount",2e6,1e4,4e5,20,8.5,7,.25,60),m()),!1})}function e(){jQuery("#loanamount").blur(function(){jQuery("#loanamount").val(Globalize.format(Math.round(jQuery("#loanamount").val().replace(/[^\d\.]/g,"")),"n","en-IN"))}),jQuery("#loaninterest").blur(function(){jQuery("#loaninterest").val(Math.round(1e3*jQuery("#loaninterest").val().replace(/[^\d\.]/g,""))/1e3)}),jQuery("#loanterm").blur(function(){jQuery("#emicalculatorform input[name='loantenure']")[0].checked?jQuery("#loanterm").val(Math.round(Math.round(12*jQuery("#loanterm").val().replace(/[^\d\.]/g,""))/12*100)/100):jQuery("#loanterm").val(jQuery("#loanterm").val().replace(/[^\d\.]/g,""))})}function s(a){var e=jQuery("#emicalculatorform").find(":input").get();return"object"!=typeof a?(a={},jQuery.each(e,function(){this.name&&(this.checked||/select|textarea/i.test(this.nodeName)||/text|hidden|password/i.test(this.type))&&"loandata"!=this.name&&(a[this.name]=jQuery(this).val())}),a):(jQuery.each(e,function(){this.name&&a[this.name]?"checkbox"==this.type||"radio"==this.type?(jQuery(this).prop("checked",a[this.name]==jQuery(this).val()),a[this.name]==jQuery(this).val()?(jQuery(this).parent(".btn").addClass("active"),jQuery(this).parent(".btn").siblings("input[name="+this.name+"]").removeClass("active")):(jQuery(this).parent(".btn").removeClass("active"),jQuery(this).parent(".btn").siblings("input[name="+this.name+"]").addClass("active"))):jQuery(this).val(a[this.name]):"checkbox"==this.type&&jQuery(this).prop("checked",!1)}),jQuery(this))}function t(){jQuery("#startmonthyear").attr("readonly",!0),jQuery("#startmonthyear").datepicker({format:"M yyyy",minViewMode:1,autoclose:!0}).on("changeDate",function(){jQuery(this).datepicker("getDate").toDateString()!=A.g.toDateString()&&(A.g=jQuery(this).datepicker("getDate"),m())}).on("hide",function(){jQuery("#startmonthyear").blur()}),A.g=new Date,jQuery("#startmonthyear").datepicker("setDate",A.g)}function n(){jQuery("#loanamount").unbind("change"),jQuery("#loaninterest").unbind("change"),jQuery("#loanterm").unbind("change"),jQuery("#emicalculatorform input[name='loantenure']").unbind("change"),jQuery("#emicalculatorform input[name='emischeme']").unbind("change")}function l(a,e,s,t,n){M=jQuery("#loanamountslider").slider({range:"min",value:parseInt(jQuery("#loanamount").val().replace(/[^\d\.]/g,"")),min:0,max:a,step:e,slide:function(a,e){jQuery("#loanamount").val(Globalize.format(Math.round(e.value),"n","en-IN"))},change:function(a){a.originalEvent&&m()}}),M.slider("value",M.slider("value")),w=jQuery("#loaninterestslider").slider({range:"min",value:parseFloat(jQuery("#loaninterest").val()),min:5,max:s,step:.25,slide:function(a,e){jQuery("#loaninterest").val(e.value)},change:function(a){a.originalEvent&&m()}}),w.slider("value",w.slider("value")),a=parseInt(jQuery("#loanterm").val()),jQuery("#emicalculatorform input[name='loantenure']")[1].checked&&(a=parseInt(jQuery("#loanterm").val())/12),C=jQuery("#loantermslider").slider({range:"min",value:a,min:0,max:t,step:n,slide:function(a,e){jQuery("#emicalculatorform input[name='loantenure']")[0].checked?jQuery("#loanterm").val(e.value):jQuery("#loanterm").val(12*e.value)},change:function(a){a.originalEvent&&m()}}),C.slider("value",C.slider("value"))}function r(){jQuery("#loanamount").change(function(){M.slider("value",this.value.replace(/[^\d\.]/g,"")),m()}),jQuery("#loaninterest").change(function(){w.slider("value",this.value),m()}),jQuery("#loanterm").change(function(){jQuery("#emicalculatorform input[name='loantenure']")[0].checked?C.slider("value",this.value):C.slider("value",this.value/12),m()}),jQuery("#emicalculatorform input[name='loantenure']").change(function(){jQuery("#emicalculatorform input[name='loantenure']")[0].checked?jQuery("#loanterm").val(Math.round(jQuery("#loanterm").val().replace(/[^\d\.]/g,"")/12*100)/100):jQuery("#loanterm").val(Math.round(12*jQuery("#loanterm").val().replace(/[^\d\.]/g,""))),o()}),jQuery("#emicalculatorform input[name='emischeme']").change(function(){m()})}function c(a,e,s,t,c,i,p,m,u){n(),jQuery("label[for=loanamount]").html(a),jQuery("#loanamount").val(Globalize.format(t,"n","en-IN")),jQuery("#loaninterest").val(1e3*i/1e3),jQuery("#emicalculatorform input[name='loantenure']")[0].checked?jQuery("#loanterm").val(u/12):jQuery("#loanterm").val(u),l(e,s,c,p,m),r(),o(),"car-loan"==L?jQuery(".toggle-hidden").removeClass("toggle-hidden").addClass("toggle-visible"):jQuery(".toggle-visible").removeClass("toggle-visible").addClass("toggle-hidden")}function o(){"home-loan"==L?(jQuery("#loanamountsteps").html('<span class="tick" style="left: 0%;">|<br/><span class="marker">0</span></span><span class="tick d-none d-sm-table-cell" style="left: 12.5%;">|<br/><span class="marker">25L</span></span><span class="tick" style="left: 25%;">|<br/><span class="marker">50L</span></span><span class="tick d-none d-sm-table-cell" style="left: 37.5%;">|<br/><span class="marker">75L</span></span><span class="tick" style="left: 50%;">|<br/><span class="marker">100L</span></span><span class="tick d-none d-sm-table-cell" style="left: 62.5%;">|<br/><span class="marker">125L</span></span><span class="tick" style="left: 75%;">|<br/><span class="marker">150L</span></span><span class="tick d-none d-sm-table-cell" style="left: 87.5%;">|<br/><span class="marker">175L</span></span><span class="tick" style="left: 100%;">|<br/><span class="marker">200L</span></span>'),jQuery("#loanintereststeps").html('<span class="tick" style="left: 0%;">|<br/><span class="marker">5</span></span><span class="tick" style="left: 16.67%;">|<br/><span class="marker">7.5</span></span><span class="tick" style="left: 33.34%;">|<br/><span class="marker">10</span></span><span class="tick" style="left: 50%;">|<br/><span class="marker">12.5</span></span><span class="tick" style="left: 66.67%;">|<br/><span class="marker">15</span></span><span class="tick" style="left: 83.34%;">|<br/><span class="marker">17.5</span></span><span class="tick" style="left: 100%;">|<br/><span class="marker">20</span></span>'),jQuery("#emicalculatorform input[name='loantenure']")[0].checked?jQuery("#loantermsteps").html('<span class="tick" style="left: 0%;">|<br/><span class="marker">0</span></span><span class="tick" style="left: 16.67%;">|<br/><span class="marker">5</span></span><span class="tick" style="left: 33.33%;">|<br/><span class="marker">10</span></span><span class="tick" style="left: 50%;">|<br/><span class="marker">15</span></span><span class="tick" style="left: 66.67%;">|<br/><span class="marker">20</span></span><span class="tick" style="left: 83.33%;">|<br/><span class="marker">25</span></span><span class="tick" style="left: 100%;">|<br/><span class="marker">30</span></span>'):jQuery("#loantermsteps").html('<span class="tick" style="left: 0%;">|<br/><span class="marker">0</span></span><span class="tick" style="left: 16.67%;">|<br/><span class="marker">60</span></span><span class="tick" style="left: 33.33%;">|<br/><span class="marker">120</span></span><span class="tick" style="left: 50%;">|<br/><span class="marker">180</span></span><span class="tick" style="left: 66.67%;">|<br/><span class="marker">240</span></span><span class="tick" style="left: 83.33%;">|<br/><span class="marker">300</span></span><span class="tick" style="left: 100%;">|<br/><span class="marker">360</span></span>')):"personal-loan"==L?(jQuery("#loanamountsteps").html('<span class="tick" style="left: 0%;">|<br/><span class="marker">0</span></span><span class="tick" style="left: 16.67%;">|<br/><span class="marker">5L</span></span><span class="tick" style="left: 33.34%;">|<br/><span class="marker">10L</span></span><span class="tick" style="left: 50%;">|<br/><span class="marker">15L</span></span><span class="tick" style="left: 66.67%;">|<br/><span class="marker">20L</span></span><span class="tick" style="left: 83.34%;">|<br/><span class="marker">25L</span></span><span class="tick" style="left: 100%;">|<br/><span class="marker">30L</span></span>'),jQuery("#loanintereststeps").html('<span class="tick" style="left: 0%;">|<br/><span class="marker">5</span></span><span class="tick" style="left: 12.5%;">|<br/><span class="marker">7.5</span></span><span class="tick" style="left: 25%;">|<br/><span class="marker">10</span></span><span class="tick" style="left: 37.5%;">|<br/><span class="marker">12.5</span></span><span class="tick" style="left: 50%;">|<br/><span class="marker">15</span></span><span class="tick" style="left: 62.5%;">|<br/><span class="marker">17.5</span></span><span class="tick" style="left: 75%;">|<br/><span class="marker">20</span></span><span class="tick" style="left: 87.5%;">|<br/><span class="marker">22.5</span></span><span class="tick" style="left: 100%;">|<br/><span class="marker">25</span></span>'),jQuery("#emicalculatorform input[name='loantenure']")[0].checked?jQuery("#loantermsteps").html('<span class="tick" style="left: 0%;">|<br/><span class="marker">0</span></span><span class="tick" style="left: 20%;">|<br/><span class="marker">1</span></span><span class="tick" style="left: 40%;">|<br/><span class="marker">2</span></span><span class="tick" style="left: 60%;">|<br/><span class="marker">3</span></span><span class="tick" style="left: 80%;">|<br/><span class="marker">4</span></span><span class="tick" style="left: 100%;">|<br/><span class="marker">5</span>'):jQuery("#loantermsteps").html('<span class="tick" style="left: 0%;">|<br/><span class="marker">0</span></span><span class="tick" style="left: 20%;">|<br/><span class="marker">12</span></span><span class="tick" style="left: 40%;">|<br/><span class="marker">24</span></span><span class="tick" style="left: 60%;">|<br/><span class="marker">36</span></span><span class="tick" style="left: 80%;">|<br/><span class="marker">48</span></span><span class="tick" style="left: 100%;">|<br/><span class="marker">60</span>')):"car-loan"==L&&(jQuery("#loanamountsteps").html('<span class="tick" style="left: 0%;">|<br/><span class="marker">0</span></span><span class="tick" style="left: 25%;">|<br/><span class="marker">5L</span></span><span class="tick" style="left: 50%;">|<br/><span class="marker">10L</span></span><span class="tick" style="left: 75%;">|<br/><span class="marker">15L</span></span><span class="tick" style="left: 100%;">|<br/><span class="marker">20L</span></span>'),jQuery("#loanintereststeps").html('<span class="tick" style="left: 0%;">|<br/><span class="marker">5</span></span><span class="tick" style="left: 16.67%;">|<br/><span class="marker">7.5</span></span><span class="tick" style="left: 33.34%;">|<br/><span class="marker">10</span></span><span class="tick" style="left: 50%;">|<br/><span class="marker">12.5</span></span><span class="tick" style="left: 66.67%;">|<br/><span class="marker">15</span></span><span class="tick" style="left: 83.34%;">|<br/><span class="marker">17.5</span></span><span class="tick" style="left: 100%;">|<br/><span class="marker">20</span></span>'),jQuery("#emicalculatorform input[name='loantenure']")[0].checked?jQuery("#loantermsteps").html('<span class="tick" style="left: 0%;">|<br/><span class="marker">0</span></span><span class="tick" style="left: 14.29%;">|<br/><span class="marker">1</span></span><span class="tick" style="left: 28.57%;">|<br/><span class="marker">2</span></span><span class="tick" style="left: 42.86%;">|<br/><span class="marker">3</span></span><span class="tick" style="left: 57.14%;">|<br/><span class="marker">4</span></span><span class="tick" style="left: 71.43%;">|<br/><span class="marker">5</span></span><span class="tick" style="left: 85.71%;">|<br/><span class="marker">6</span></span><span class="tick" style="left: 100%;">|<br/><span class="marker">7</span></span>'):jQuery("#loantermsteps").html('<span class="tick" style="left: 0%;">|<br/><span class="marker">0</span></span><span class="tick" style="left: 14.29%;">|<br/><span class="marker">12</span></span><span class="tick" style="left: 28.57%;">|<br/><span class="marker">24</span></span><span class="tick" style="left: 42.86%;">|<br/><span class="marker">36</span></span><span class="tick" style="left: 57.14%;">|<br/><span class="marker">48</span></span><span class="tick" style="left: 71.43%;">|<br/><span class="marker">60</span></span><span class="tick" style="left: 85.71%;">|<br/><span class="marker">72</span></span><span class="tick" style="left: 100%;">|<br/><span class="marker">84</span></span>'))}function i(){jQuery(".ecalprint").click(function(){return window.print(),!1})}function p(){jQuery(".ecalshare").click(function(){jQuery("#loader").toggle();var a=s();return a=Base64.encode(unescape(encodeURIComponent(JSON.stringify(a)))),jQuery.get("https://emicalculator.net/bitly/?longURL=https://emicalculator.net/?ecdata="+a,function(a){jQuery("#sharelink").val(a),jQuery("#ecalsharelink").slideDown(),jQuery("#loader").toggle()}),!1}),jQuery("#sharelink").click(function(){jQuery(this).focus().select()})}function m(){jQuery("#emicalculatorform").mask("Calculating EMI..."),setTimeout(u,10)}function u(){jQuery("#ecalsharelink").hide(),b=Math.abs(jQuery("#loanamount").val().replace(/[^\d\.]/g,"")),g=Math.abs(jQuery("#loaninterest").val()/12/100),j=jQuery("#emicalculatorform input[name='loantenure']")[0].checked?Math.abs(Math.round(12*jQuery("#loanterm").val())):Math.abs(jQuery("#loanterm").val()),0==g&&(jQuery("#loaninterest").val(5),g=.004166666666666667,w.slider("value",5)),0==j&&(jQuery("#emicalculatorform input[name='loantenure']")[0].checked?jQuery("#loanterm").val(1):jQuery("#loanterm").val(12),C.slider("value",1),j=12),v=0,"emiadvance"==jQuery("#emicalculatorform input[name='emischeme']:checked").val()&&(v=1),jQuery("#loanstartdate").val(jQuery("#startmonthyear").val()),Q="car-loan"==L&&1==v?Math.pow(1+g,j-1)/(Math.pow(1+g,j)-1)*g*b:Math.pow(1+g,j)/(Math.pow(1+g,j)-1)*g*b,jQuery("#emiamount span").text(Globalize.format(Math.round(Q),"n","en-IN")),jQuery("#emitotalinterest span").text(Globalize.format(Math.round(Q*j-b),"n","en-IN")),jQuery("#emitotalamount span").text(Globalize.format(Math.round(Q*j),"n","en-IN")),z=[],G=[],T=[],D=[],P=[],B=[],E=[],F=[],H=[],S=[],B[0]=new Date(A.g.getTime()),"car-loan"==L&&1==v?(F[0]=0,E[0]=Q):(F[0]=b*g,E[0]=Q-F[0]),H[0]=b-E[0],S[0]=(b-H[0])/b*100;var a=B[0].getFullYear(),e=0;z[e++]=a,G[a]=E[0],T[a]=F[0],D[a]=H[0],P[a]=S[0];for(var s=1;s<j;s++)B[s]=new Date(B[s-1].getTime()),B[s].setMonth(B[s].getMonth()+1,1),F[s]=H[s-1]*g,E[s]=Q-F[s],H[s]=H[s-1]-E[s],S[s]=(b-H[s])/b*100,B[s].getFullYear()!=a&&(a=B[s].getFullYear(),z[e++]=a,G[a]=0,T[a]=0,D[a]=0,P[a]=0),G[a]+=E[s],T[a]+=F[s],D[a]=H[s],P[a]=S[s];H[j-1]=0,D[a]=0,S[j-1]=100,P[a]=100,h(),y(),d(),jQuery("#emicalculatorform").unmask()}function y(){var a=[],e=[],s=[],t=[],n=0;n=0;for(var l=z.length;n<l;n++){var r=z[n];a[n]=r,e[n]=G[r],s[n]=T[r],t[n]=D[r]}new Highcharts.Chart({chart:{renderTo:"emibarchart",backgroundColor:"transparent",plotBackgroundColor:"transparent",defaultSeriesType:"column",borderWidth:0,spacingLeft:0,spacingRight:0},title:{text:""},xAxis:{categories:a,minorTickInterval:"auto",tickmarkPlacement:"on",labels:{rotation:-45,align:"right",step:8<z.length?2:1,style:{font:"normal 9px Verdana, sans-serif"},formatter:function(){return this.value}}},yAxis:[{min:0,title:{text:"EMI Payment / year"},stackLabels:{enabled:!1,style:{fontWeight:"bold",color:Highcharts.theme&&Highcharts.theme.textColor||"gray"}},opposite:!0,labels:{formatter:function(){return"₹ "+Globalize.format(this.value,"n","en-IN")}}},{min:0,title:{text:"Balance"},stackLabels:{enabled:!1,style:{fontWeight:"bold",color:Highcharts.theme&&Highcharts.theme.textColor||"gray"}},labels:{formatter:function(){return"₹ "+Globalize.format(this.value,"n","en-IN")}}}],legend:{align:"center",itemMarginBottom:2,itemMarginTop:2,verticalAlign:"bottom",floating:!1,backgroundColor:"#EEEEEE",shadow:!1},tooltip:{formatter:function(){return"Balance"==this.series.name?"<b>Year: "+this.x+"</b><br/>"+this.series.name+" : ₹ "+Globalize.format(this.y,"n","en-IN")+"<br/>Loan Paid To Date : "+Globalize.format((b-this.y)/b*100,"n2","en-IN")+"%":"<b>Year : "+this.x+"</b><br/>"+this.series.name+" : ₹ "+Globalize.format(this.y,"n","en-IN")+"<br/>Total Payment : ₹ "+Globalize.format(this.point.stackTotal,"n","en-IN")}},plotOptions:{column:{borderWidth:0,stacking:"normal",dataLabels:{enabled:!1,color:Highcharts.theme&&Highcharts.theme.dataLabelsColor||"white"}}},series:[{name:"Interest",data:s,yAxis:0,legendIndex:2,color:"#ED8C2B"},{name:"Principal",data:e,yAxis:0,legendIndex:1,color:"#88A825"},{name:"Balance",data:t,type:"spline",yAxis:1,legendIndex:3,color:"#B8204C"}]})}function d(){I='<table><tr class="row no-margin"><th class="col-2 col-lg-1" id="yearheader">Year</th><th class="col-sm-2 d-none d-sm-table-cell" id="principalheader">Principal<br/>(A)</th><th class="col-3 d-table-cell d-sm-none" id="principalheader">Principal</th><th class="col-sm-2 d-none d-sm-table-cell" id="interestheader">Interest<br/>(B)</th><th class="col-3 d-table-cell d-sm-none" id="interestheader">Interest</th><th class="col-sm-3 d-none d-sm-table-cell" id="totalheader">Total Payment<br/>(A + B)</th><th class="col-4 col-sm-3" id="balanceheader">Balance</th><th class="col-lg-1 d-none d-lg-table-cell" id="paidtodateheader">Loan Paid To Date</th></tr>';for(var a=0,e=0,s=z.length;e<s;e++){var t=z[e];I+='<tr class="row no-margin yearlypaymentdetails"><td id="year'+t+'" class="col-2 col-lg-1 paymentyear toggle">'+t+'</td><td class="col-3 col-sm-2 currency">₹ '+Globalize.format(G[t],"n","en-IN")+'</td><td class="col-3 col-sm-2 currency">₹ '+Globalize.format(T[t],"n","en-IN")+'</td><td class="col-sm-3 d-none d-sm-table-cell currency">₹ '+Globalize.format(G[t]+T[t],"n","en-IN")+'</td><td class="col-4 col-sm-3 currency">₹ '+Globalize.format(D[t],"n","en-IN")+'</td><td class="col-lg-1 d-none d-lg-table-cell paidtodateyear">'+Globalize.format(P[t],"n2","en-IN")+"%</td></tr>",I+='<tr id="monthyear'+t+'" class="row no-margin monthlypaymentdetails"><td class="col-12 monthyearwrapper" colspan="6"><div class="monthlypaymentcontainer"><table>';for(var n=B.length;a<n&&B[a].getFullYear()==t;)I+='<tr class="row no-margin"><td class="col-2 col-lg-1 paymentmonthyear">'+O[B[a].getMonth()]+'</td><td class="col-3 col-sm-2 currency">₹ '+Globalize.format(E[a],"n","en-IN")+'</td><td class="col-3 col-sm-2 currency">₹ '+Globalize.format(F[a],"n","en-IN")+'</td><td class="col-sm-3 d-none d-sm-table-cell currency">₹ '+Globalize.format(E[a]+F[a],"n","en-IN")+'</td><td class="col-4 col-sm-3 currency">₹ '+Globalize.format(H[a],"n","en-IN")+'</td><td class="col-lg-1 d-none d-lg-table-cell paidtodatemonthyear">'+Globalize.format(S[a++],"n2","en-IN")+"%</td></tr>";I+="</table></div></td></tr>"}I+="</table>",jQuery("#emipaymenttable").html(I),jQuery("#emipaymenttable tr.monthlypaymentdetails").find("div").hide(),jQuery("#emipaymenttable td.toggle").click(function(){var a=jQuery(this).attr("id");jQuery(this).toggleClass("toggle-open"),jQuery("tr#month"+a).find("div").slideToggle()})}function h(){new Highcharts.Chart({chart:{renderTo:"emipiechart",backgroundColor:"transparent",plotBackgroundColor:"transparent",borderWidth:null,plotBorderWidth:null,plotShadow:!1},title:{text:"Break-up of Total Payment"},tooltip:{formatter:function(){return"<b>"+this.point.name+": "+Math.round(10*this.percentage)/10+"%</b>"}},plotOptions:{pie:{borderWidth:0,startAngle:0,allowPointSelect:!0,cursor:"pointer",dataLabels:{style:{textOutline:!1},enabled:!0,distance:-30,color:"#FFFFFF",formatter:function(){return"<b>"+Math.round(10*this.percentage)/10+"%</b>"}},showInLegend:!0}},series:[{type:"pie",name:"Principal Loan Amount vs. Total Interest",data:[{name:"Principal Loan Amount",y:b,color:"#88A825"},{name:"Total Interest",y:Q*j-b,sliced:!0,selected:!0,color:"#ED8C2B"}]}]})}var f="function"==typeof Object.defineProperties?Object.defineProperty:function(a,e,s){return a==Array.prototype||a==Object.prototype?a:(a[e]=s.value,a)},k=function(a){a=["object"==typeof globalThis&&globalThis,a,"object"==typeof window&&window,"object"==typeof self&&self,"object"==typeof global&&global];for(var e=0;e<a.length;++e){var s=a[e];if(s&&s.Math==Math)return s}throw Error("Cannot find global object")}(this);!function(a,e){if(e)a:{var s=k;a=a.split(".");for(var t=0;t<a.length-1;t++){var n=a[t];if(!(n in s))break a;s=s[n]}a=a[a.length-1],t=s[a],(e=e(t))!=t&&null!=e&&f(s,a,{configurable:!0,writable:!0,value:e})}}("Array.prototype.find",function(a){return a||function(a,e){a:{var s=this;s instanceof String&&(s=String(s));for(var t=s.length,n=0;n<t;n++){var l=s[n];if(a.call(e,l,n,s)){a=l;break a}}a=void 0}return a}});var b,g,j,Q,v,I,L,M,w,C,x,N,A={dateText:new Date},z=[],G=[],T=[],D=[],P=[],B=[],E=[],F=[],H=[],S=[],O="Jan Feb Mar Apr May Jun Jul Aug Sep Oct Nov Dec".split(" ");jQuery(document).ready(function(){a("home-loan"),t();var l=jQuery("#loandata").val();if(""!=l){jQuery(".loanproduct-nav").hide(),l=jQuery.parseJSON(decodeURIComponent(escape(Base64.decode(l)))),L=l.loanproduct,a(L),n(),s(l),r();var o=Math.abs(jQuery("#loanamount").val().replace(/[^\d\.]/g,"")),u=jQuery("#loaninterest").val(),y=jQuery("#loanterm").val();"loanyears"==l.loantenure&&(y*=12),jQuery("#emicalculatorform input[name='emischeme']:checked").val(),"home-loan"==L?c("Home Loan Amount",2e7,1e5,o,20,u,30,.5,y):"personal-loan"==L?c("Personal Loan Amount",3e6,1e4,o,25,u,5,.25,y):"car-loan"==L&&c("Car Loan Amount",2e6,1e4,o,20,u,7,.25,y),l=l.loanstartdate,0<l.length&&(N=l.substring(l.length-4,l.length),x=jQuery.inArray(l.substring(0,l.length-5),O),jQuery("#startmonthyear").datepicker("setDate",new Date(N,x,1)))}else c("Home Loan Amount",2e7,1e5,5e6,20,7.5,30,.5,240);e(),i(),p(),m()})}).call(this);
//# sourceMappingURL=emicalculator.js.map
