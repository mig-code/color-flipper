const btnNewColor= document.getElementById("btn-new-color")
const btncopyToClipBoard =document.getElementById("render-hex-color")
const arrayHexOptions=[0,1,2,3,4,5,6,7,8,9,0,"A","B","C","D","E","F"]
let hexColor="#61D165"


btnNewColor.addEventListener("click",()=>{
    hexColor=""
    for(i=0;i<6;i++){
        let rand =Math.floor(Math.random()*17) 
        hexColor+=arrayHexOptions[rand] 
    }

    document.body.style.backgroundColor=`#${hexColor}`
    document.getElementById("render-hex-color").innerHTML=`#${hexColor}`
   
    
})

btncopyToClipBoard.addEventListener("click",()=>{
    navigator.clipboard.writeText(`#${hexColor}`)
    alert(`Color #${hexColor} copied to clipboard`);

})
