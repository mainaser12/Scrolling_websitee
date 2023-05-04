let stars = document.getElementById('stars');
let moon = document.getElementById('moon');
let mountains3 = document.getElementById('mountains3');
let mountains4 = document.getElementById('mountains4');
let river = document.getElementById('river');
let boat = document.getElementById('boat');
let Si = document.querySelector('.Si');
window.onscroll = function(){
    let value = scrollY;
    stars.style.left = value + 'px';
    moon.style.top = value * 3 + 'px';
    mountains3.style.top = value * 2 + 'px';
    mountains4.style.top = value * 1.5 + 'px';
    river.style.top = value + 'px';
    boat.style.top = value + 'px';
    boat.style.left = value * 3 + 'px';
    Si.style.fontsize = value + 'px';
    if(scrollY >= 70){
        Si.style.fontsize = 70 + 'px';
        si.style.position = 'fixed';
        if(scrollY >= 478){
            si.style.display = 'none';
        }else{
            si.style.display = 'block';
        }
        if(scrollY >= 127){
            document.querySelector('.main').style.background ='linear-gradient(#376281,#10001f)';
        }else{
            document.querySelector('.main').style.background ='linear-gradient(#460356,#1f0542)';
        }
    }

}