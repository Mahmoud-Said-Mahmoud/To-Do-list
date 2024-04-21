const inputBox=document.querySelector('#input-box');
const list=document.querySelector('#list-container');
console.log(list)

function addTask(){
    if(inputBox.value===''){
        alert('you must write something');
    }
    else{
        let li= document.createElement('li');
        li.innerHTML=inputBox.value;
        list.appendChild(li);
        let span=document.createElement('span');
        span.innerHTML="\u00d7";
        li.appendChild(span);
        console.log(list)
        
    }
    inputBox.value=""
    saveData()
}
list.addEventListener("click",(e)=>{
    
    if(e.target.tagName==="LI"){
        e.target.classList.toggle("checked")
        saveData()
        
     }
    else if(e.target.tagName==="SPAN"){
        e.target.parentElement.remove();
        saveData()
    }
  
})

function saveData(){
    localStorage.setItem("data",list.innerHTML);
}

function showData(){
    list.innerHTML=localStorage.getItem("data")
}
showData()