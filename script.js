//your JS code here. If required.
let  button=document.getElementById("enterBtn");

button.addEventListener("click",()=>
	let para=document.getElementById("status");
	let head=document.createElement("h1");
    head.innerText="Entered metaverse";
	para.replaceWith(head);
    
)