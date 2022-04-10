const divTag = document.querySelector('div')
const url = "A.jpg"
divTag.innerHTML = `<img src ="${url}"/>`
divTag.classList.add("img")
const imgTag = document.querySelector('img')
imgTag.height = 200
imgTag.width = 200

imgTag.addEventListener("mouseover",MouseOver)
imgTag.addEventListener("mouseout",MouseOut)

function MouseOver(){
    imgTag.height = 500
    imgTag.width = 500

}
function MouseOut(){
    imgTag.height = 200
    imgTag.width = 200

}