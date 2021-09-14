//Business logic
function myPizza(size, crust, toppings = []) {
    this.size = size;
    this.crust = crust;
    this.toppings = toppings;
}

myPizza.prototype.Price = function () {
    var price_Size;
    var price_Crust;

    if (this.size == "Small") {
        price_Size = 700;
    }
    else if (this.size == "Medium") {
        price_Size = 1000;
    }
    else {
        price_Size = 1500;
    }



    if (this.crust == "Crispy") {
        price_Crust = 700;
    }
    else if (this.crust == "Stuffed") {
        price_Crust = 1000;
    }
    else {
        price_Crust = 1500;
    }

    var price_Toppings = [];

    for (var i = 0; i < this.toppings.length; i++) {
        if (this.toppings[i] == 'Pepperoni') {
            var price1 = 150;
            price_Toppings.push(price1);
        }
    }
    for (var i = 0; i < this.toppings.length; i++) {
        if (this.toppings[i] == 'Mushrooms') {
            var price2 = 150;
            price_Toppings.push(price2);
        }
    }
    for (var i = 0; i < this.toppings.length; i++) {
        if (this.toppings[i] == 'Onions') {
            var price3 = 150;
            price_Toppings.push(price3);
        }
    }
    for (var i = 0; i < this.toppings.length; i++) {
        if (this.toppings[i] == 'Sausage') {
            var price4 = 150;
            price_Toppings.push(price4);
        }
    }
    for (var i = 0; i < this.toppings.length; i++) {
        if (this.toppings[i] == 'Bacon') {
            var price5 = 150;
            price_Toppings.push(price5);
        }
    }
    for (var i = 0; i < this.toppings.length; i++) {
        if (this.toppings[i] == 'Extra Cheese') {
            var price6 = 150;
            price_Toppings.push(price6);
        }
    }
    for (var i = 0; i < this.toppings.length; i++) {
        if (this.toppings[i] == 'Black olives') {
            var price7 = 150;
            price_Toppings.push(price7);
        }
    }
    for (var i = 0; i < this.toppings.length; i++) {
        if (this.toppings[i] == 'Green peppers') {
            var price8 = 150;
            price_Toppings.push(price8);
        }
    }

    var priceToppingsTotal = 0;
    for (a = 0; a < price_Toppings.length; a++) {
        
        priceToppingsTotal = priceToppingsTotal + price_Toppings[a];
    }


    console.log('p',priceToppingsTotal);
    
    var totalPrice = price_Size + price_Crust + priceToppingsTotal;
    return totalPrice;
}


$("form#myForm").submit(function (event) {
    event.preventDefault();
    var inputSize = $("select#size").val();
    var inputCrust = $("select#crust").val();
    var inputToppings = [];
    var inputquantity = $("input#quantity").val();

    var inputToppings= $("#toppings input:checkbox:checked").map(function(){
        return $(this).val();
      }).get();   
     
    console.log("toppings:", inputToppings);

    var unitPrice = new myPizza(inputSize, inputCrust, inputToppings)
     //user interface or front-end
    $('#unitPrice').text(unitPrice.Price() + 'KSH');
    //Business logic
    console.log(unitPrice.Price())
    var totalPrice = unitPrice.Price()* inputquantity;
    console.log(totalPrice);

    //user interface or front-end
    $('#totalPrice').text(totalPrice + 'KSH');
    $('#toppings_display').text(inputToppings);
    $('#size_display').text(inputSize);
    $('#crust_display').text(inputCrust);
    $('#quantity_display').text(inputquantity);
    this.reset();
});

function myDerivaration() {
    var location = prompt("Delivery charge is 1000 KSH, Enter your location", "COUNTY, SUBCOUNTY, AREA CODE");
    if (location != null) {
      alert(' order will be delivered to' +' ' + location);
    }
  }
  $('#button').click(function() {
      $('#details').show()
  });