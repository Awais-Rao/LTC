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
            document.getElementById('navbar_top').classList.add('top-navbar', 'shadow', 'opacity-100');
        } else {
            document.getElementById('navbar_top').classList.remove('top-navbar', 'shadow', 'opacity-100');
        }
    });
});
// DOMContentLoaded  end


const first_container = document.getElementById('mariam');
const second_container = document.getElementById('zafar');
const third_container = document.getElementById('qayyum');
const fourth_container = document.getElementById('shafique');



// // const buttons = ["mariam_btn","zafar_btn","qayyum_btn","shafique_btn"]
// const tabs_btns = document.querySelectorAll('.tabs-btns > .team_member_wrapper_div');
// // tabs_btns.forEach(func)
// //console.log(tabs_btns);
// tabs_btns.forEach((item)=>{
//   //  item.classList.add('d-none'); 
//   let actv =  item.classList.contains('active-btn');
//  this.addEventListener('click',function() {
//     console.log('clicked');
//     actv.classList.remove('active-btn');
//  })
 
// })


const first_btn = document.getElementById('mariam-btn');
const second_btn = document.getElementById('zafar-btn');
const third_btn = document.getElementById('qayyum-btn');
const fourth_btn = document.getElementById('shafique-btn');

function diactivate_Buttons() {
    first_btn.classList.remove('active-btn');
    second_btn.classList.remove('active-btn');
    third_btn.classList.remove('active-btn');
    fourth_btn.classList.remove('active-btn');
}

first_btn.addEventListener('click', function(){  
    
    diactivate_Buttons();   

    fourth_container.classList.remove('shafique_active');
    fourth_container.classList.add('shafique');    
    second_container.classList.remove('zafar_active');
    second_container.classList.add('zafar');    
    third_container.classList.remove('qayyum_active');
    third_container.classList.add('qayyum');
    
    mariam.classList.remove('mariam');
    mariam.classList.add('mariam_active');
    this.classList.add('active-btn');
    
})
second_btn.addEventListener('click', function(){
    
    diactivate_Buttons();

    first_container.classList.remove('mariam_active');
    first_container.classList.add('mariam');    
    fourth_container.classList.remove('shafique_active');
    fourth_container.classList.add('shafique');    
    third_container.classList.remove('qayyum_active');
    third_container.classList.add('qayyum');
    
    second_container.classList.remove('zafar');
    second_container.classList.add('zafar_active');
    this.classList.add('active-btn');
})
third_btn.addEventListener('click', function(){
    
    diactivate_Buttons();

    first_container.classList.remove('mariam_active');
    first_container.classList.add('mariam');    
    second_container.classList.remove('zafar_active');
    second_container.classList.add('zafar');    
    fourth_container.classList.remove('shafique_active');
    fourth_container.classList.add('shafique');
    
    third_container.classList.remove('qayyum');
    third_container.classList.add('qayyum_active');
    this.classList.add('active-btn');
    this.classList.add('active-btn');

})
fourth_btn.addEventListener('click', function(){
    
    diactivate_Buttons();

    first_container.classList.remove('mariam_active');
    first_container.classList.add('mariam');    
    second_container.classList.remove('zafar_active');
    second_container.classList.add('zafar');    
    third_container.classList.remove('qayyum_active');
    third_container.classList.add('qayyum');
    
    fourth_container.classList.remove('shafique');
    fourth_container.classList.add('shafique_active');
    this.classList.add('active-btn');

})



const heightOfNewsCard = document.getElementById('news-wrapper-2').offsetHeight;
 var card = document.querySelectorAll(".news_wrapper");
 card.classList.add("d-none");