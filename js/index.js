const output = document.querySelector("#order");
const order = document.querySelector("#submitBtn");
const studentId = document.querySelector("#studentId");
let pizza = {
    name: "",
    size: "",
    crust: "",
    toppings: []
}
order.addEventListener("click", function(){
    let orderName = document.querySelector("#name").value;
    pizza.name = orderName;
    pizza.size = document.querySelector('#size').value;
    pizza.crust = document.querySelector('#crust').value;
    
    const checkedToppings = document.querySelectorAll('input[name="toppings"]:checked');
    pizza.toppings = Array.from(checkedToppings).map(topping => topping.value);
    if (pizza.name !== "" && pizza.toppings.length > 0){
    output.textContent = `Order for ${pizza.name}, a ${pizza.size} pizza, with a ${pizza.crust} crust, and ${pizza.toppings.join(", ")} for toppings`;
    }else if (pizza.name === ""){
        output.textContent = "Please enter a name";
    }else {
        output.textContent = "Select at least one topping.";
    }
    studentId.style.visibility = "visible";
});