for(let i=0 ;i<document.getElementsByClassName("drum").length;i++)
{
    document.querySelectorAll("button")[i].addEventListener("click",function() {
       
        if(i<4)
        {
            a=i+1;
            
            let audio= new Audio('sounds/tom-'+ a +'.mp3');
              audio.play();
        }
        if(i==4)
        {
            let audio= new Audio('sounds/crash.mp3');
            audio.play();
        }
        if(i==5)
        {
            let audio= new Audio('sounds/kick-bass.mp3');
            audio.play();
        }
        if(i==6)
        {
            let audio= new Audio('sounds/snare.mp3');
            audio.play();
        }
        
        
    }

        );
    
}
document.addEventListener("keydown",function(event){

    switch(event.key)
    {
        case "w": let w = new Audio('sounds/tom-1.mp3');
                     w.play();
            break;
        case "a": let a  = new Audio('sounds/tom-2.mp3');
                   a.play();
            break;
         case "s": let s= new Audio('sounds/tom-3.mp3');
                     s.play();
            break;
         case "d": let d= new Audio('sounds/tom-4.mp3');
                     d.play();
            break;
        case "j": let j= new Audio('sounds/crash.mp3');
                   j.play(); 
            break;
        case "k":  let k= new Audio('sounds/kick-bass.mp3');
                    k.play();
            break;
        case "l":   let l= new Audio('sounds/snare.mp3');
                     l.play();
            break;  
        default:   console.log("default");
            break;                      

    }
    butanimate(event.key)

}

);
function butanimate(r)
{
    document.querySelector("."+r).classList.add("animateButton");
    setTimeout(() =>{
        document.querySelector("."+r).classList.remove("animateButton");
    },100);

}