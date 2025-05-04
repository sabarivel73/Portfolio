const header = document.querySelector("header");
window.addEventListener("scroll",function()
{
    header.classList.toggle("sticky",window.scrollY>0)
});
let menu = document.querySelector('#menu-icon');
let navlist = document.querySelector('.navlist');
menu.onclick = () =>
    {
        menu.classList.toggle('bx-x');
        navlist.classList.toggle('active');
    };
window.onscroll = () =>
    {
        menu.classList.remove('bx-x');
        navlist.classList.remove('active');
    };
const sv = ScrollReveal
(
    {
        distance: '45px',
        duration: 2700,
        reset: true
    }
)
sv.reveal('.home-text',{delay:350,origin:'left'})
sv.reveal('.home-img',{delay:350,origin:'right'})
sv.reveal('.sub-service,.about,.portfolio,.service,.cta,.contact',{delay:200,origin:'bottom'})
var icon = document.getElementById("icon");
icon.onclick = function()
{
    document.body.classList.toggle("darktheme");
}
var text = new Typed(".text",{
    strings : ["Software Developer"],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true
}) 
var text1 = new Typed(".text1",{
    strings : ["Software Developer"],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true
}) 