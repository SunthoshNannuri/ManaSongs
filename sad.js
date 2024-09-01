var count=1;
let play=0;
var auto=0;
function play1()
{
    count=1
    let source=document.getElementById('song1').src='arjun.mp3';
    document.getElementById('glimps').src='arjun.mp4'
    console.log(source)
   var audio=document.getElementById('song1')
   audio.currentTime=0.5
    audio.play();
audio.addEventListener("ended", function() {
    if(play>0)
        {
var song2=play2()
return song2
        }
});
    document.getElementById("test1").style.color='pink'
    document.getElementById("test2").style.color='white'
 document.getElementById("test3").style.color='white'
 document.getElementById("test4").style.color='white'
 document.getElementById("test5").style.color='white'
 document.getElementById("test6").style.color='white'

 document.getElementById("test1").style.transform='scale(1.25)'
 document.getElementById("test2").style.transform='scale(1)'
 document.getElementById("test3").style.transform='scale(1)'
 document.getElementById("test4").style.transform='scale(1)'
 document.getElementById("test5").style.transform='scale(1)'
 document.getElementById("test6").style.transform='scale(1)'
}
function play2()
{
    count=2;
    document.getElementById('glimps').src='nuvunte.mp4'
document.getElementById('song1').src='nuvvu.mp3';  
var audio=document.getElementById('song1')
audio.currentTime=1.5
audio.play();
audio.addEventListener('ended',function()
{
    if(play>0)
        {
    var song3=play3()
    return song3()
        }
})
document.getElementById("test1").style.color='white'
 document.getElementById("test2").style.color='mediumaquamarine'
 document.getElementById("test3").style.color='white'
 document.getElementById("test4").style.color='white'
 document.getElementById("test5").style.color='white'
 document.getElementById("test6").style.color='white'

 document.getElementById("test1").style.transform='scale(1)'
 document.getElementById("test2").style.transform='scale(1.25)'
 document.getElementById("test3").style.transform='scale(1)'
 document.getElementById("test4").style.transform='scale(1)'
 document.getElementById("test5").style.transform='scale(1)'
 document.getElementById("test6").style.transform='scale(1)'
}
function play3()
{
    count=3
    document.getElementById('glimps').src='adiga.mp4'
document.getElementById('song1').src='agiga.mp3';  
var audio=document.getElementById('song1')
audio.currentTime=0.8
audio.play();
audio.addEventListener('ended',function()
{
    if(play>0)
    {
    var song4=play4()
    return song4
    }
})
document.getElementById("test1").style.color='white'
 document.getElementById("test2").style.color='white'
  document.getElementById("test3").style.color='rgb(10, 139, 10)'
  document.getElementById("test4").style.color='white'
  document.getElementById("test5").style.color='white'
  document.getElementById("test6").style.color='white'

  document.getElementById("test1").style.transform='scale(1)'
 document.getElementById("test2").style.transform='scale(1)'
 document.getElementById("test3").style.transform='scale(1.25)'
 document.getElementById("test4").style.transform='scale(1)'
 document.getElementById("test5").style.transform='scale(1)'
 document.getElementById("test6").style.transform='scale(1)'
}
function play4()
{
    count=4
    document.getElementById('glimps').src='atu.mp4'
document.getElementById('song1').src='atu.mp3';  
var audio=document.getElementById('song1')
audio.currentTime=1.5
audio.play();
audio.addEventListener('ended',function()
{
    if(play>0)
    {
    var song5=play5()
    return song5
    }
})
document.getElementById("test1").style.color='white'
 document.getElementById("test2").style.color='white'
  document.getElementById("test3").style.color='white'
  document.getElementById("test4").style.color='aqua'
  document.getElementById("test5").style.color='white'
  document.getElementById("test6").style.color='white'

  document.getElementById("test1").style.transform='scale(1)'
 document.getElementById("test2").style.transform='scale(1)'
 document.getElementById("test3").style.transform='scale(1)'
 document.getElementById("test4").style.transform='scale(1.25)'
 document.getElementById("test5").style.transform='scale(1)'
 document.getElementById("test6").style.transform='scale(1)'
}
function play5()
{
    count=5
    document.getElementById('glimps').src='dooram.mp4'
document.getElementById('song1').src='dooram.mp3';  
var audio=document.getElementById('song1')
audio.currentTime=1.5
audio.play();
audio.addEventListener('ended',function()
{
    if(play>0)
    {
    var song6=play6()
    return song6()
    }
})
document.getElementById("test1").style.color='white'
 document.getElementById("test2").style.color='white'
  document.getElementById("test3").style.color='white'
  document.getElementById("test4").style.color='white'
  document.getElementById("test5").style.color='olivedrab'
  document.getElementById("test6").style.color='white'

  document.getElementById("test1").style.transform='scale(1)'
 document.getElementById("test2").style.transform='scale(1)'
 document.getElementById("test3").style.transform='scale(1)'
 document.getElementById("test4").style.transform='scale(1)'
 document.getElementById("test5").style.transform='scale(1.25)'
 document.getElementById("test6").style.transform='scale(1)'
}
function play6()
{
    count=6
    console.log(count)
    document.getElementById('glimps').src='emai.mp4'
document.getElementById('song1').src='emai.mp3';  
var audio=document.getElementById('song1')
audio.currentTime=0.2
audio.play();
audio.addEventListener('ended',function()
{
    if(play>0)
    {
    var song1=play1()
    return song1()
    }
})
document.getElementById("test1").style.color='white'
 document.getElementById("test2").style.color='white'
  document.getElementById("test3").style.color='white'
  document.getElementById("test4").style.color='white'
  document.getElementById("test5").style.color='white'
  document.getElementById("test6").style.color='rgb(220, 200, 172)'

  document.getElementById("test1").style.transform='scale(1)'
 document.getElementById("test2").style.transform='scale(1)'
 document.getElementById("test3").style.transform='scale(1)'
 document.getElementById("test4").style.transform='scale(1)'
 document.getElementById("test5").style.transform='scale(1)'
 document.getElementById("test6").style.transform='scale(1.25)'
}
function changesong()
{
    count++;
    if(count==2)
    {
  var change=play2()
  return change
    }
    else if(count==3)
    {
        var change=play3()
        return change
    }
    else if(count==4)
        {
            var change=play4()
            return change
        }
        else if(count==5)
            {
                var change=play5()
                return change
            }
            else if(count==6)
                {
                    var change=play6()
                    return change
                }
                if(count==7)
                    {
                  var change=play1()
                  return change
                    }
                    else if(count==8)
                    {
                        var change=play3()
                        return change
                    }
                    else if(count==8)
                        {
                            var change=play4()
                            return change
                        }
                        else if(count==10)
                            {
                                var change=play5()
                                return change
                            }
                    
            
}
function changeback()
{
    count--;
    if(count==1)
        {
      var change=play1()
      return change
        }
    if(count==2)
    {
  var change=play2()
  return change
    }
    else if(count==3)
    {
        var change=play3()
        return change
    }
    else if(count==4)
        {
            var change=play4()
            return change
        }
        else if(count==5)
            {
                var change=play5()
                return change
            }
            else if(count==6)
                {
                    var change=play6()
                    return change
                }
            
                if(count==-5)
                    {
                  var change=play1()
                  return change
                    }
                if(count==-4)
                {
              var change=play2()
              return change
                }
                else if(count==-3)
                {
                    var change=play3()
                    return change
                }
                else if(count==-2)
                    {
                        var change=play4()
                        return change
                    }
                    else if(count==-1)
                        {
                            var change=play5()
                            return change
                        }
                        else if(count==0)
                            {
                                var change=play6()
                                return change
                            }

}
var like=0;
function like11()
{
    like++;
    document.getElementById('l1').style.display='none'
    document.getElementById('li1').style.display='block'
    const para = document.createElement("p");
    para.setAttribute('id','likedsong1')
const node = document.createTextNode("Teliseney Na Nuvve");
para.appendChild(node);
para.onclick=()=>
{
    document.getElementById('likedsongs').style.display='none'
    var change=play1()
    return change
}
if(like==1)
{
const element = document.getElementById("likedsongs");
element.appendChild(para);
}
}
function like12()
{
   
     document.getElementById('l1').style.display='block'
    document.getElementById('li1').style.display='none'
    like--;
    var child=document.getElementById('likedsong1')
    child.remove();
}
function like21()
{
    document.getElementById('l2').style.display='none'
    document.getElementById('li2').style.display='block'
    const para = document.createElement("p");
    const node = document.createTextNode("Nuvvu Vunte Na Jathaga");
    para.appendChild(node);
    para.setAttribute('id','likedsong2')
    para.onclick=()=>
        {
            document.getElementById('likedsongs').style.display='none'
            var change=play2()
            return change
        }
    const element = document.getElementById("likedsongs");
    element.appendChild(para);
}
function like22()
{
     document.getElementById('l2').style.display='block'
    document.getElementById('li2').style.display='none'
    like--;
    var child=document.getElementById('likedsong2')
    child.remove();
    
}
function like31()
{
    document.getElementById('l3').style.display='none'
    document.getElementById('li3').style.display='block'
    const heading=document.createElement('p')
    heading.setAttribute('id','likedsong3')
    const node=document.createTextNode('Adiga Adiga')
    heading.appendChild(node)
    heading.onclick=()=>
        {
            document.getElementById('likedsongs').style.display='none'
            var change=play3()
            return change
        }
    const song=document.getElementById('likedsongs')

    song.appendChild(heading)
}
function like32()
{
     document.getElementById('l3').style.display='block'
    document.getElementById('li3').style.display='none'
    like--;
    var child=document.getElementById('likedsong3')
    child.remove();
}
function like41()
{
    document.getElementById('l4').style.display='none'
    document.getElementById('li4').style.display='block'
    const heading=document.createElement('p')
    heading.setAttribute('id','likedsong4')
    const node=document.createTextNode('Dooram Dooram')
    heading.appendChild(node)
    heading.onclick=()=>
        {
            document.getElementById('likedsongs').style.display='none'
            var change=play4()
            return change
        }
    const song=document.getElementById('likedsongs')
    song.appendChild(heading)
}
function like42()
{
     document.getElementById('l4').style.display='block'
    document.getElementById('li4').style.display='none'
    like--;
    var child=document.getElementById('likedsong4')
    child.remove();
}
function like51()
{
    document.getElementById('l5').style.display='none'
    document.getElementById('li5').style.display='block'
    const heading=document.createElement('p')
    heading.setAttribute('id','likedsong5')
    const node=document.createTextNode('Atu Nuvve')
    heading.appendChild(node)
    heading.onclick=()=>
        {
            document.getElementById('likedsongs').style.display='none'
            var change=play5()
            return change
        }
    heading.onclick=()=>
        {
            document.getElementById('likedsongs').style.display='none'
            var change=play5()
            return change
        }
    const song=document.getElementById('likedsongs')
    song.appendChild(heading)
}
function like52()
{
     document.getElementById('l5').style.display='block'
    document.getElementById('li5').style.display='none'
    like--;
    var child=document.getElementById('likedsong5')
    child.remove();
}
function like61()
{
    document.getElementById('l6').style.display='none'
    document.getElementById('li6').style.display='block'
    const heading=document.createElement('p')
    heading.setAttribute('id','likedsong6')
    const node=document.createTextNode('Emai Poyave')
    heading.appendChild(node)
    heading.onclick=()=>
        {
            document.getElementById('likedsongs').style.display='none'
            var change=play6()
            return change
        }
    const song=document.getElementById('likedsongs')
    song.appendChild(heading)
}
function like62()
{
     document.getElementById('l6').style.display='block'
    document.getElementById('li6').style.display='none'
    like--;
    var child=document.getElementById('likedsong6')
    child.remove();
}
function autoplayoff()
{
document.getElementById('autooff').style.display='none'
document.getElementById('autoon').style.display='block'
play++;
console.log(play)
}
function autoplayon()
{
    play--;
    console.log(play)
document.getElementById('autooff').style.display='block'
document.getElementById('autoon').style.display='none'
}

