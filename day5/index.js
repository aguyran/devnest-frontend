window.addEventListener('load',()=>{
    const calculate =(obj)=> {
        let x = parseFloat(document.getElementById("oneTxt").value);
        let y = parseFloat(document.getElementById("secondTxt").value);
        switch(obj){
            case "add":
                return x+y;
            case "sub":
                return x-y;
            case "mul":
                return x*y;
            case "div":
                return x/y;
            default: return "invalid case";
        }
    }
    const buttons = document.getElementById("buttonGroup");
    buttons.addEventListener('click',(evt)=>{
       document.getElementById("result").innerHTML=calculate(evt.target.id);
    });
}); 