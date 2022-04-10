console.log('hii')
const names = ['Virat','Ronaldo','Messi','Dhoni','Rohit']
const nameclass = ['red','blue','orange','violet','green']
const divTag = document.querySelector('div')
for(let i=0; i<names.length;i++)
{
    console.log(names[i])
    const newElement = document.createElement('p')
    newElement.innerText = names[i]
    newElement.classList.add(nameclass[i],"myClass") 
    divTag.appendChild(newElement)
    
}