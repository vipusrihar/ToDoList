var taskadd=document.getElementById("taskadd");
var ultasks=document.getElementById("ultasks");
var addbtn=document.getElementById("addbtn");

addbtn.addEventListener("click",function(event){
    event.preventDefault();
    var list=document.createElement("li");
    list.innerHTML=`${taskadd.value}
    <button id="donetsk" onclick="donetsk(event)">Done</button>
    <button id="deltsk" onclick="deletetsk(event)">Delete</cancel>`;
    ultasks.append(list);
    document.getElementById("taskadd").value='';
});

function donetsk(event){
    event.preventDefault();
    var selectedtask = event.target.parentNode;
    selectedtask.style.listStyleImage="url(icons8-check-box.svg)";
    selectedtask.style.textDecorationLine="line-through";
    event.target.style.display = "none";
}

function deletetsk(event){
    event.preventDefault();
    var deletetask = event.target.parentNode;
    deletetask.remove();
}