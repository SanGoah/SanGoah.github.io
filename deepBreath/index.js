$((function(){var a,e,o=$("#player-track"),t=$("#track-name"),n=$("#album-art"),s=$("body"),c=$(".ball"),l=$("#ball0"),r=$("#text_on_ball0"),i=$("#ball1"),h=$("#ball2"),g=$("#ball3"),d=$("#ball4"),p=$("#ball5"),u=$("#ball6"),m=$("#play-pause-button"),b=null,y=["https://blog-1256194686.cos.ap-shanghai.myqcloud.com/deepBreath/bgm_xiqi.mp3","https://blog-1256194686.cos.ap-shanghai.myqcloud.com/deepBreath/bgm_huqi.mp3"],q=-1,f=0,k=["人在塔在！","P90 Rush B！","活则倚明日将逝之势，学则报永无止境之心。","我们奋力前行，逆水行舟，直到回到纯真的往昔。","成功的含义不在于要得到什么，在于你从那个奋斗的起点走了多远。","违背了你自己，那是你人生最大的失败，是人间最大的困惑。"],B=["https://blog-1256194686.cos.ap-shanghai.myqcloud.com/deepBreath/bg01.jpg","https://blog-1256194686.cos.ap-shanghai.myqcloud.com/deepBreath/bg02.jpg","https://blog-1256194686.cos.ap-shanghai.myqcloud.com/deepBreath/bg03.jpg","https://blog-1256194686.cos.ap-shanghai.myqcloud.com/deepBreath/bg04.jpg","https://blog-1256194686.cos.ap-shanghai.myqcloud.com/deepBreath/bg05.jpg","https://blog-1256194686.cos.ap-shanghai.myqcloud.com/deepBreath/bg06.jpg"];function v(){setTimeout((function(){audio.paused&&(o.addClass("active"),c.addClass("active"),l.addClass("active"),_(),r.css("background",'url("https://blog-1256194686.cos.ap-shanghai.myqcloud.com/deepBreath/icon_xiqi.png") center center no-repeat'),m.css("background","none"),t.text(k[Math.floor(Math.random()*k.length)]),audio.play())}),300)}function T(){var o;playProgress=audio.currentTime/audio.duration*100,e=f%2?141-.3*playProgress:.3*playProgress+111,a=f<10?(100*f+playProgress)/5:200,c.css("width",e),c.css("height",e),i.css("background-image","linear-gradient(to bottom,     hsl("+(a+50)+",100%,75%),hsl("+a+",100%,75%))"),h.css("background-image","linear-gradient(to right,      hsl("+(a+50)+",100%,75%),hsl("+a+",100%,75%))"),g.css("background-image","linear-gradient(to bottom left,hsl("+(a+50)+",100%,75%),hsl("+a+",100%,75%))"),d.css("background-image","linear-gradient(to bottom,     hsl("+(a+50)+",100%,75%),hsl("+a+",100%,75%))"),p.css("background-image","linear-gradient(to bottom left,hsl("+(a+50)+",100%,75%),hsl("+a+",100%,75%))"),u.css("background-image","linear-gradient(to right,      hsl("+(a+50)+",100%,75%),hsl("+a+",100%,75%))"),100==playProgress&&(t.text(k[Math.floor(Math.random()*k.length)]),n.removeClass("buffering").removeClass("active"),clearInterval(b),++f<12?x(0==q?1:-1):(t.text("Buff加好了，重新投入到工作中去吧！\n你可以直接关闭该页面。数秒后将跳转至博客首页。"),(o=5e3,new Promise(a=>setTimeout(a,o))).then(()=>{window.location.href="http://mechanicalmind.cn"})),f%2?r.css("background",'url("https://blog-1256194686.cos.ap-shanghai.myqcloud.com/deepBreath/icon_huqi.png" )center center no-repeat'):r.css("background",'url("https://blog-1256194686.cos.ap-shanghai.myqcloud.com/deepBreath/icon_xiqi.png" )center center no-repeat'))}function _(){clearInterval(b),b=setInterval((function(){0==nTime||bTime-nTime>1e3?r.css("background",'url("https://blog-1256194686.cos.ap-shanghai.myqcloud.com/deepBreath/icon_load.png") center center no-repeat'):f%2?r.css("background",'url("https://blog-1256194686.cos.ap-shanghai.myqcloud.com/deepBreath/icon_huqi.png") center center no-repeat'):r.css("background",'url("https://blog-1256194686.cos.ap-shanghai.myqcloud.com/deepBreath/icon_xiqi.png") center center no-repeat'),bTime=new Date,bTime=bTime.getTime()}),100)}function x(a){0==a||1==a?++q:--q,audio.src=y[q],0!=a&&(audio.play(),o.addClass("active"),clearInterval(b),_())}s.css("background-image","url("+B[Math.floor(Math.random()*B.length)]+")"),audio=new Audio,x(0),audio.loop=!1,m.on("click",v),$(audio).on("timeupdate",T)}));