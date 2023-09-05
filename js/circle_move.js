let cat = document.getElementsByClassName("cat");

move();

function move(){
    Array.from(cat).forEach(c => {

        let centerX = c.offsetLeft + 20;
        let centerY = c.offsetTop + 20;

        Array.from(c.getElementsByClassName("language-logo")).forEach(l => {

            var r = 50;
    
            l.setAttribute("angle", Number(l.getAttribute("angle")) == 360 ? 0.5 : Number(l.getAttribute("angle")) + 0.5)
            t = l.getAttribute("angle");
    
            x = Math.cos((Math.PI/180)*t) * r + centerX;
            y = Math.sin((Math.PI/180)*t) * r + centerY;
    
            l.style.left = x+"px";
            l.style.top = y+"px";
            
        });

    });
    
    setTimeout(move, 70);
}