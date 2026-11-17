(function(){
var b=document.querySelector('.burger'),n=document.getElementById('nav');
if(b&&n)b.addEventListener('click',function(){var o=n.classList.toggle('open');b.setAttribute('aria-expanded',o?'true':'false');b.setAttribute('aria-label',o?'Close menu':'Open menu');});
function $(i){return document.getElementById(i);}
var f=$('cform');
if(f)f.addEventListener('submit',function(e){e.preventDefault();var fm=$('fm');
 if($('website').value)return;
 if(!f.checkValidity()){fm.hidden=false;fm.textContent='Please add your name, a valid email address and a message, and tick the agreement box.';return;}
 var body='Name: '+$('name').value+'\nEmail: '+$('email').value+'\nTopic: '+$('topic').value+'\n\n'+$('message').value;
 location.href='mailto:'+f.getAttribute('data-to')+'?subject='+encodeURIComponent(f.getAttribute('data-brand')+': '+$('topic').value)+'&body='+encodeURIComponent(body);
 fm.hidden=false;fm.textContent='Your email app should open with the message ready to send. If nothing happens, write to us directly at '+f.getAttribute('data-to')+'.';});
var c=$('cookie'),k=null;try{k=localStorage.getItem('ck_'+location.hostname);}catch(e){}
if(c&&!k)c.classList.add('show');
if(c)c.querySelectorAll('button').forEach(function(bt){bt.addEventListener('click',function(){try{localStorage.setItem('ck_'+location.hostname,bt.getAttribute('data-cookie'));}catch(e){}c.classList.remove('show');});});
var y=$('year');if(y)y.textContent=new Date().getFullYear();
})();
(function(){function $(i){return document.getElementById(i);}
function on(a,f){a.forEach(function(x){x.addEventListener('input',f);x.addEventListener('change',f);});f();}
var ci=$('cg-i');if(ci){var cc=$('cg-c');on([ci,cc],function(){var c=parseFloat(cc.value)||0,g=Math.round(c*parseFloat(ci.value));var n=ci.options[ci.selectedIndex].text;$('cg-o').innerHTML='<strong>'+g+' g</strong><p>'+c+' cup'+(c===1?'':'s')+' of '+n.toLowerCase()+'.</p><p>'+(n.indexOf('flour')>-1?'Spoon and level if you must use cups; scooping adds up to 25%.':'Weigh straight into the bowl for best accuracy.')+'</p>';});}
var pa=$('ps-a');if(pa){var pb=$('ps-b');var A={r20:314,r23:415,s20:400,s23:529,t33:759,l900:260};on([pa,pb],function(){var r=A[pb.value]/A[pa.value],rr=Math.round(r*100)/100,t;
 if(pa.value==='l900'||pb.value==='l900'){t='Loaf pans are deep: expect a longer bake at about 10&deg;C lower.';}else if(r<0.9){t='Your pan is smaller: the batter will be deeper. Bake a little longer at 10&deg;C lower.';}else if(r>1.1){t='Your pan is larger: the batter will be thinner. Start checking 5&ndash;10 minutes early.';}else{t='Close enough to use the recipe as written.';}
 $('ps-o').innerHTML='<strong>&times; '+rr+'</strong><p>Multiply every ingredient by '+rr+'.</p><p>'+t+'</p>';});}
var ov=$('ot-v');if(ov){var ou=$('ot-u');var G=[[1,140],[2,150],[3,170],[4,180],[5,190],[6,200],[7,220],[8,230],[9,240]];on([ov,ou],function(){var v=parseFloat(ov.value)||0,u=ou.value,c;
 if(u==='c')c=v;else if(u==='cf')c=v+20;else if(u==='f')c=(v-32)*5/9;else{var g=Math.max(1,Math.min(9,Math.round(v)));c=G[g-1][1];}
 var best=G[0];G.forEach(function(x){if(Math.abs(x[1]-c)<Math.abs(best[1]-c))best=x;});var f=Math.round((c*9/5+32)/5)*5;c=Math.round(c/5)*5;
 $('ot-o').innerHTML='<strong>'+c+'&deg;C &middot; '+f+'&deg;F</strong><p>Fan oven: '+(c-20)+'&deg;C &middot; Gas mark '+best[0]+'</p><p>An oven thermometer shows whether your oven runs hot or cold.</p>';});}
})();
