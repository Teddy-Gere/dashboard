const btnMenu=document.querySelector('button.toggle__menu')

btnMenu.addEventListener('click',function(){
 const btnList=document.querySelector('.nav__list')
 btnList.classList.toggle('show')
 document.body.classList.toggle('no-scroll')

})

const displayMore=document.querySelector('.more__display .icon')
displayMore.addEventListener('click',function(){
    const btnList=document.querySelector('.display__list')
    const moreIcon=document.querySelector('.more__display')
    moreIcon.classList.toggle('show')
    btnList.classList.toggle('show')
   })

const displayMoreRevenue=document.querySelector(".revenue__content .more__display")
displayMoreRevenue.addEventListener('click',function(){
    console.log('display more revenue')
    const btnList=document.querySelector('.revenue__content .display__list')
    const moreIcon=document.querySelector('.revenue__content .more__display')
    moreIcon.classList.toggle('show')
    btnList.classList.toggle('show')
   })