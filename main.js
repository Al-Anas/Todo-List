var form=document.querySelector("#task-form");
var taskInput=document.querySelector("#new-task");
var taskList=document.querySelector("ul");
var clear=document.querySelector("#clear-task");

form.addEventListener("submit",addTask);
function addTask(e)
 {
    
    if(taskInput.value==="")
     {
        alert("Add a task");
     }
    else
     {
       var li=document.createElement("li");
       var link=document.createElement("a");
       link.setAttribute("href","#");
       link.innerHTML="x";
       li.appendChild(document.createTextNode(taskInput.value +" "));
       li.appendChild(link);
       taskList.appendChild(li);
       taskInput.value="";
     }

     e.preventDefault();
 }


 taskList.addEventListener("click",removeTask);
 function removeTask(e)
 {
    if(e.target.hasAttribute("href"))
    {
        if(confirm("Are you sure"))
        {
            var el=e.target.parentElement;
            el.remove();
        }
    }
 }


 clear.addEventListener("click",remove);
 function remove(){
     taskList.innerHTML="";
 }

