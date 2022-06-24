if(window.location.host && window.location.protocol!='https:') window.location.href='https:'+window.location.href.substring(window.location.protocol.length);
if(window.location.host && document.location.protocol=='http:') document.location.href=document.location.href.replace('http:','https:');
var controller=new ScrollMagic.Controller();
var sceneLayer1,sceneLayer2;

function setCookie(name,value,days) {
    var expires='';
    if(days){
        var date = new Date();
        date.setTime(date.getTime()+(days*24*60*60*1000));
        expires=";expires="+date.toUTCString();
    }
    document.cookie=name+'='+(value||'')+expires+';path=/';
	console.log('SETCOOKIE: '+name+'='+(value||'')+expires+';path=/');
}
function getCookie(name) {
    var nameEQ = name + "=";
    var ca = document.cookie.split(';');
    for(var i=0;i < ca.length;i++) {
        var c = ca[i];
        while (c.charAt(0)==' ') c = c.substring(1,c.length);
        if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length,c.length);
    }
    return null;
}
function delCookie(name) {   
    document.cookie = name +'=; Path=/; Expires=Thu, 01 Jan 1970 00:00:01 GMT;';
}
function pt(obj){return $(obj).offset().top;}
//function pb(obj){return $(obj).offset().top+$(obj).height();}
function pb(obj,margin){return $(obj).offset().top+$(obj).outerHeight(margin==false ? false : true);}
function pw(obj){return $(obj).width();}
function ph(obj){return $(obj).height();}
function gw(percentage){return window.innerWidth*percentage/100;}
function gh(percentage){return window.innerHeight*percentage/100;}
/*
function v2p(vmin){return (vmin*window.innerHeight)/100;}
function vh2p(vmin){return(vmin*window.innerHeight)/100;}
function vw2p(vmin){return(vmin*window.innerWidth)/100;}
function p2v(pixel){return pixel*100/window.innerHeight;}
function p2vh(pixel){return pixel*100/window.innerHeight;}
function p2vw(pixel){return pixel*100/window.innerWidth;}
*/
function v2p(vmin){return (vmin*screen.height)/100;}
function vh2p(vmin){return(vmin*screen.height)/100;}
function vw2p(vmin){return(vmin*screen.width)/100;}
function p2v(pixel){return pixel*100/screen.height;}
function p2vh(pixel){return pixel*100/screen.height;}
function p2vw(pixel){return pixel*100/screen.width;}
function r2p(rem){ return rem * parseFloat(getComputedStyle(document.documentElement).fontSize); }
//function mob(){ if( screen.width / screen.height < 1)return true;else return false;}
//function mobRatio(){ return window.innerHeight/window.innerWidth>1.3; }
function mobDevice(){ if(/MRA58N\)/.test(navigator.userAgent))return false;
	return /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);}
function mobRatio(){
	if(mobDevice()) return true;
	//else if(window.innerWidth<1150) return true;
	else if(window.innerWidth<900) return true;
	else return false;}

$(function(){

	$('#btn12Welve').click(function(){
	});

	$('#btnConnect').click(function(){
		alert('Coming soon');
	});

	$('#btnKor').click(function(){
		$('.btnLang').css('color','#666666');
		$(this).css('color','#EEEEEE');
		$('.areaEng').hide();
		$('.areaKor').show();
		setCookie('language','kor');
		lockMobile=false;
		content2Lock=true;
		resizeWindow();
	});

	$('#btnEng').click(function(){
		$('.btnLang').css('color','#666666');
		$(this).css('color','#EEEEEE');
		$('.areaKor').hide();
		$('.areaEng').show();
		setCookie('language','eng',1);
		lockMobile=false;
		content2Lock=true;
		resizeWindow();
	});

	if(getCookie('language')=='kor') $('#btnKor').click();
	else $('#btnEng').click();
});