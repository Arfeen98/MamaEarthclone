let cart_data = JSON.parse(localStorage.getItem("cart")) || [];

const append=(data,parent)=>{
  var a=1;
   // console.log("hello")
    parent.innerHTML=null;
    data.map((elem)=>{
    // console.log("Hello");
    let div=document.createElement("div");
    div.setAttribute("class","small");

    let title=document.createElement("h5");
    title.innerText=elem.title;
    title.setAttribute("class","title")
    // console.log(title);
    
    let image=document.createElement('img');
    image.src=elem.imageurl;
    
    let price=document.createElement("h3");
    price.setAttribute("class","price")
    price.innerText="₹"+elem.price;
    
    let rating=document.createElement("h4");
    rating.setAttribute("class","ratin")
    rating.innerText=elem.rating+"★";

    let add=document.createElement("button");
    add.innerText="ADD TO CART"
    $(add).click(function () {
      $('.alert').addClass("show");
      $('.alert').removeClass("hide");
      $('.alert').addClass("showAlert");
      setTimeout(function () {
          $('.alert').removeClass("show");
          $('.alert').addClass("hide");
      }, 2000);
  });
    add.setAttribute("class","adda");
    
    div.append(image,title,rating,price,add);
    parent.append(div);
    add.onclick=()=>{
    //  console.log("add")
    a=3;
    cart_data.push(elem)
      localStorage.setItem("cart",JSON.stringify(cart_data));
     }

     div.onclick= function detail(){
         //console.log("title");
       localStorage.setItem("item",JSON.stringify(elem));
       
       if(a==3){
         return;
       }
       window.location.href="item_details.html";
     }
 
     });
}

export default append;