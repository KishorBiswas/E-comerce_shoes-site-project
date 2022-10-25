let main = document.querySelector(".mainImg");
        let firstImg = document.querySelector(".firstImg");
        let secondImg = document.querySelector(".secondImg");
        let thiredImg = document.querySelector(".thiredImg");
        let fourImg = document.querySelector(".fourImg");
        let fiveImg = document.querySelector(".fiveImg");
        let sixImg = document.querySelector(".sixImg");
       

        firstImg.addEventListener('click', ()=>{
            main.src = './imgPng/Shoes1.png';
          
        })

        secondImg.addEventListener('click', ()=>{
            main.src = './imgPng/Shoes2.png';
          
        })


        thiredImg.addEventListener('click', ()=>{
            main.src = './imgPng/Shoes3.png';
            
        })

        fourImg.addEventListener('click', ()=>{
            main.src = './imgPng/Shoes44.png';
            
        })

        fiveImg.addEventListener('click', ()=>{
            main.src = './imgPng/Shoes5.png';
            
        })


        sixImg.addEventListener('click', ()=>{
            main.src = './imgPng/Shoes6.png';
            
        })



 

// Zoom the product items start here

const lens = document.querySelector('.magnifire_lens');
const product_img = document.querySelector('.shoes_img img');
const magnifide_img = document.querySelector('.magified_img');

function magnify(product_img,magnifide_img){
    product_img.addEventListener('mousemove',moveLens);
    lens.addEventListener('mousemove',moveLens);

    // mouseout event
    lens.addEventListener('mouseout', leaveOut);
}

function moveLens(e){
    // console.log(`X: ${e.pageX}  Y:${e.pageY}`);
    let x,y,cx,cy;

    // get The position of yur cursor
    const product_img_rect = product_img.getBoundingClientRect();
    x = e.pageX - product_img_rect.left - lens.offsetWidth/2;
    y = e.pageY - product_img_rect.top - lens.offsetHeight/2;

    // lens under the product_img set all time
    let max_xposs = product_img_rect.width - lens.offsetWidth;
    let max_yposs = product_img_rect.height - lens.offsetHeight;

    if(x > max_xposs){x = max_xposs;}
    if(x < 0){ x = 0;}

    if(y > max_yposs){y = max_yposs;}
    if(y < 0){ y = 0;}

    // Move th lens with your mouse
    lens.style.cssText = `top: ${y}px; left: ${x}px;`;



    // Calculet the magified_img position 
    cx = magnifide_img.offsetWidth/lens.offsetWidth;
    cy = magnifide_img.offsetHeight/lens.offsetHeight;

    magnifide_img.style.cssText = `
        background: url('${product_img.src}')
        -${x * cx}px -${y * cy}px / ${product_img_rect.width * cx}px ${product_img_rect.height *  cy}px
        no-repeat
    `;

    lens.classList.add('active');
    magnifide_img.classList.add('active');

}

function leaveOut(){
    lens.classList.remove('active');
    magnifide_img.classList.remove('active');
}



magnify(product_img,magnifide_img);
// Zoom the product items end here
