window.onload = function(){
   let first =  document.querySelector('button.first');
   let second = document.querySelector('button.second');
   let third = document.querySelector('button.third')
   let boxFirst = document.querySelector('div.first')
   let boxSecond = document.querySelector('div.second')
   let boxThird = document.querySelector('div.third')

   first.addEventListener("click", function(){
       boxFirst.scrollIntoView({block: 'end', behavior: 'smooth'})
   })

   second.addEventListener('click', () => {
       boxSecond.scrollIntoView({block: 'center', behavior: 'auto'})
   })

   third.addEventListener('click', () => {
    boxThird.scrollIntoView({block: 'start', behavior: 'smooth'})
  })
}