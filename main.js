let  body  =document.querySelector('body')
let header = document.querySelector('.header')
let input = document.querySelector('.input')
let budget = document.querySelector('#budget')
let contract = document.querySelector('#contract')
let dates = document.querySelectorAll('.date-form')

let currentDate = []
let firstDates = ['20.06 - 08.08', '20.06 - 08.08', 
'04.07 - 13.08', '04.07 - 13.09 и 22.08 - 12.09']
let secondDates = ['20.06 - 23.09', '20.06 - 28.10', 
'04.07 - 13.08 и 22.08 - 24.09', '04.07 - 13.08 и 22.08 - 29.10']

let lastScroll = 0

const setActive = () => {
	input.checked ? currentDate = secondDates : currentDate = firstDates
  	budget.classList.toggle('active')
  	contract.classList.toggle('active')

  	for (let i = 0; i < dates.length; i++) {
  		dates[i].classList.add('hide')
	  	
	  	setTimeout(() => { 
	        dates[i].classList.remove('hide')
	        dates[i].innerText = currentDate[i]
	    }, 400)
	}
}

const scrollEvent = () => {
	console.log(window.scrollY)
	if(window.scrollY > lastScroll && window.scrollY !== 0){	
		!header.classList.contains('none') && header.classList.add('none')
		body.style.margin = "0px auto 0 auto"
	}else if(window.scrollY == lastScroll){
		
	}
	else{
		header.classList.contains('none') && header.classList.remove('none')
		body.style.margin = "-108px auto 0 auto"
	}
	lastScroll = window.scrollY
}

input.addEventListener("click", setActive)
document.addEventListener("scroll", scrollEvent)
