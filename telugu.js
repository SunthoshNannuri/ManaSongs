function popup(soundFile)
{
    document.getElementById("menu").style.filter='blur(3px)';
    document.getElementById("division").style.filter='blur(3px)';
    let element=document.getElementById("open")
    element.setAttribute("id","playing");
    new Audio(soundFile).play();
}