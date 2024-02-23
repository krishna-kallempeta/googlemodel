function closeup(){
    let close = document.getElementById('main-div')
    let show = document.getElementById('main-div')
    let dropdown = document.getElementById('signup')
   close.addEventListener('click',()=>{
    close.classList.add('hide-dive')
    dropdown.classList.add('dropdown')
   
   })
   show.classList.remove('hide-dive')


}


function country(){
    let show = document.getElementById('.select')
    let close =document.getElementById
    show.addEventListener('click',()=>{
        show.classList.add('d_none');

    })
}
