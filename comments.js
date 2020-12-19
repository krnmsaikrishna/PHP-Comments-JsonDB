$(document).ready(function(){
var i=0,length=0;
var code1,code2,code3, code, comment="";
var mobile="";
var comments=JSON.parse (data);
length=comments.length;
code1='<div class="block commenters" style="margin-top:8px; min-width:250px;"><div class="inner"><br /><img class="app-icon" src="profile.png" style="border-radius:0;"><p><b class="title name">';
code2='</b>'+'<br />'+'<small class="mobile-no">';
code3='</small></p>';
code4='<p class="content comment"></p><br /></div></div>';
for (i=0; i <length; i++)
{
name=comments[i].name;
comment=comments[i].comment;
mobile=comments[i].mobile;
mobile=mobile.slice(0,6)+"xxxx";
comment=comments[i].comment;
code=code1+name+code2+mobile+code3+comment+code4;
$("#comments").append(code);
}
});
