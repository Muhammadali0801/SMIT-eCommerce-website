let productsAdd =  document.querySelector("#mainDiv");

fetch("https://fakestoreapi.com/products")
.then((url) =>{
return url.json();
})
.then((urlJason) => {
urlJason.map((urlEl) => {
    productsAdd.innerHTML += `
    <div class="col-lg-4 col-md-6 col-sm-12 mb-4">
    <div class="card h-100 CS-back" >
    <img src="${urlEl.image}" class="card-img-top CS-img" alt="...">
    <div class="card-body">
    <h5 class="card-title ">${urlEl.title}</h5>
    
    <p class="card-text">Price: ${urlEl.price}</p>
    <a href="#" onclick="addCard()" class="btn CS-btn">Add to Cart</a>
    </div>
  </div>
</div>
`    
})
})
.catch((a) => {
    alert("SomeThing went wrong ", a)
})

let artNum =  document.querySelector("#cart"); 
let count = 0;
function addCard(){
count++;
artNum.innerHTML = count 
}

