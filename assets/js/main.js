const sideBar = document.getElementById('sub_navbar');
const sideBar_button = window.getComputedStyle(sideBar, '::after');



sideBar.addEventListener('click', function(){
    let visible =  this.classList.contains('show_sub_navbar');
    if(!visible) {
        sideBar.classList.add('show_sub_navbar');
        // sideBar_button.style.transform = "rotate(180deg)";
    } else{
        sideBar.classList.remove('show_sub_navbar');
    } 
})

document.addEventListener("DOMContentLoaded", function () {

    window.addEventListener('scroll', function () {

        if (window.scrollY > 200) {
            document.getElementById('navbar_top').classList.add('shadow', 'opacity-100');
        } else {
            document.getElementById('navbar_top').classList.remove('shadow', 'opacity-100');
        }
    });
});
// DOMContentLoaded  end