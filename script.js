var popup=document.querySelector(".pop")
var popupbox=document.querySelector(".box")
var addbutton=document.getElementById("add-popup")
addbutton.addEventListener("click",function(){
    popup.style.display="block"
    popupbox.style.display="block"
})
var closebutton=document.getElementById("cancel-book")
closebutton.addEventListener("click",function(event){
    event.preventDefault()
     popup.style.display="none"
    popupbox.style.display="none"
})
var container=document.querySelector(".container")
var addbutton=document.getElementById("add-book")
var bookinput=document.getElementById("book-input")
var authorinput=document.getElementById("author-input")
var desc=document.getElementById("desc-input")
addbutton.addEventListener("click",function(event){
    event.preventDefault()
var div=document.createElement("div")
div.setAttribute("class","book-con")
div.innerHTML=`
 <h2>${bookinput.value}</h2>
            <h5>${authorinput.value}</h5>
            <p>${desc.value}</p>
        <button onclick="deletebook(event)">delete</button>`
  container.append(div)
   popup.style.display="none"
    popupbox.style.display="none"
    
})
function deletebook(event){
event.target.parentElement.remove()
}