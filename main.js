const paragraph = document.querySelector('p')
paragraph.style.color = "aqua"

const heading = document.querySelector('h1')
heading.style.fontSize = "42px"

paragraph.innerText = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed id urna a libero interdum posuere. Donec vitae aliquet sapien. Vivamus sagittis erat a lacus tincidunt, vel feugiat odio ultrices."

const lineItem13 = document.querySelector("#item-13")
lineItem13.style.opacity = '30%'

const lineItem3 = document.querySelector('#item-3')
lineItem3.innerText = "Greetings!"

const image = document.querySelector('img')
image.src = "https://media.istockphoto.com/id/1470130937/photo/young-plants-growing-in-a-crack-on-a-concrete-footpath-conquering-adversity-concept.webp?b=1&s=170667a&w=0&k=20&c=IRaA17rmaWOJkmjU_KD29jZo4E6ZtG0niRpIXQN17fc="

image.style.height = '250px'

const newImage = document.createElement('img')
newImage.src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_2Adu-DK44ruLrPXeNWVGtmRjkEzgo_WnT_nAOyrzVPulse4gDcZSZHD4oiW_8at1EC8&usqp=CAU"

document.querySelector('img').insertAdjacentElement("beforebegin",newImage)

// document.body.appendChild(newImage)
newImage.style.height = '280px'


