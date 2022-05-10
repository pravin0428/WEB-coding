  


var cart = JSON.parse(localStorage.getItem("cart"))||[]; 
var Sort  = document.querySelector("#sort")
var nameSort  = document.querySelector("#name")

displatData(cart)



function displatData(data){
  document.querySelector("#container").innerHTML = null
 data.forEach(function(ele, index){
   
   // *****  element creation part  ******
var box= document.createElement("div");
var image = document.createElement("img");


var para1 = document.createElement("p");

var para2 = document.createElement("p");

var para3 = document.createElement("s");

var  button = document.createElement("button");
// btn.id = cartbtn

 // *****  value insertion  part  ******
image.src= ele.image_url;

para1.innerText = ele.name;

para2.innerText = ele.price;

para3.innerText = ele.strikedoffprice;

button .innerText = "DELETE"


// *****   function or Event listnet part  ******

// so now we have to add the add to cart functinality

button .addEventListener("click", function(){
deleteCart( index)
} )

box.append(image,para1,para2 ,para3,button )
 document.querySelector("#container").append(box)
})
}
 

function deleteCart( index){

  cart.splice(index,1)
  localStorage.setItem("cart" , JSON.stringify( cart))
  displatData(cart)
}
 
Sort.addEventListener("change" , sortTheData)
nameSort.addEventListener("change" , SortDataByName)
 

 function sortTheData(){
    var value = Sort.value;
      // console.log(value)
     if (value == "phl"){
      cart.sort(function (p,q){
        return Number.parseInt(q.price) - Number.parseInt(p.price)
       
   })
   displatData(cart)

     }else if (value == "plh"){
      cart.sort(function (p,q){
        return Number.parseInt(p.price) - Number.parseInt(q.price)
       
       })
       displatData(cart)
     } 
}
 
function SortDataByName(){
  var value = nameSort.value;
  // console.log(value)
     if (value == "asc" ) {
           cart.sort(function(a,b){
             if (a.name<b.name){
               return -1
             }else{
               return 1
             }
              return 0
           })
           displatData(cart)
        }
         else if (value == "dsc"){
          cart.sort(function(a,b){
            if (a.name<b.name){
              return 1
            }else{
              return -1
            }
             return 0
          })
          displatData(cart)
         }
           
       
}
  

 