

//recuperer le id de licone du  menu 
let menu=document.getElementById("i");

menu.addEventListener("click",men);
//recuperer l id du menu
 let nav=document.getElementById("n");
 
 //recuperer le id du boutton add to the list 
 let ajou =document.getElementById("ajouter");
 //le click sur le boutton pour ajouter une line
 ajou.addEventListener("click",ajouter);
//recupere le id de l'emplacement des lines frame lkbira
let list =document.querySelector(".sugg");

let x=0;

function men(){
   if(nav.classList.contains("nav-display")){
    nav.classList.remove("nav-display");

   }else{
    nav.classList.add("nav-display");

   }
}





function ajouter(){
    //recuperer la valeur du input
let inp =document.getElementById("text-unput");
if(((inp.value)=="")){
    alert("it is empty , you have to write something");
}

else if(x<7 ){


//create div buttons
let divbuttons=document.createElement("div");
divbuttons.classList.add("buttons");

//create buttons
//delate btn
let suppbutton=document.createElement("button")
suppbutton.innerHTML="delate";
suppbutton.classList.add("bdelate","btns");

//update btn
let updatebutton=document.createElement("button")
updatebutton.innerHTML="update";
updatebutton.classList.add("bupdate","btns");

//check btn
let checkbutton=document.createElement("button")
checkbutton.innerHTML="check";
checkbutton.classList.add("bcheck","btns");
//link with their childs
divbuttons.appendChild(suppbutton);
divbuttons.appendChild(updatebutton);
divbuttons.appendChild(checkbutton);
// let c=document.getElementById("check")
let buttonc=document.getElementById("bchek")

//create line
var el=document.createElement("lo");
 
el.classList.add("t");
//djibou wch kteb lutilisateur
var node=document.createTextNode(inp.value);

//recuperer do
let di=document.querySelector(".do");
//creer lemplacement du input
let divo=document.createElement("div");
divo.classList.add("do");

// divo.innerHTML=node;
divo.appendChild(node);

//link les boutton m3a lktiba f line

el.appendChild(divo);
el.appendChild(divbuttons);
//link klch m3a frame lkbira
list.append(el);


    inp.value="";
    x++;

}
else if(x==7){
    alert("the list is full , you have to delate one");
}

}



list.addEventListener("click",(event)=>
    {
if(event.target.classList.contains("bdelate")){

    event.target.parentElement.parentElement.remove();
x--;
}else if(event.target.classList.contains("bupdate")){
    let newelement=prompt("update ");
    if(newelement!=null){
        let myli=event.target.parentElement.parentElement.querySelector(".do");
        myli.innerHTML=newelement;

    }
}
    else if(event.target.classList.contains("bcheck")){

        let line =event.target.parentElement.parentElement;
        
        line.classList.add("cheked");
        if(event.target.innerHTML=="check"){
            event.target.innerHTML="uncheck";
            event.target.style.width="35%";
            event.target.innerHTML.style.textAlign = "center";
            
        }else{
            line.classList.remove("cheked");
            event.target.classList.add("bcheck")
            event.target.innerHTML="check"
            
           

        }
    }

})





