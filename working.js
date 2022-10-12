// 1st cart:
// For plus button
const plusButton1 = document.getElementById("plus-button1");
plusButton1.addEventListener("click",function () {
    var totalQuantity=plusMinusCart();
    const totalCartField=totalQuantity+1;
    document.getElementById("cart-field1").value=totalCartField;

    const totalPrice=totalCartField*59;
    document.getElementById("price1").innerText=totalPrice;
    
});

//For minus button
const minusButton1=document.getElementById("minus-button1");
minusButton1.addEventListener("click",function () {
    var totalQuantity=plusMinusCart();
    const totalCartField=totalQuantity-1;
    document.getElementById("cart-field1").value=totalCartField;
    const totalPrice=totalCartField*59;
    document.getElementById("price1").innerText=totalPrice;

    if (totalCartField<1){
        document.getElementById("cart-field1").value=1;
        document.getElementById("price1").innerText=59;

    }

    
});

//2nd Cart:
// For plus button
const plusButton2 = document.getElementById("plus-button2");
plusButton2.addEventListener("click",function () {
    var totalQuantity2=plusMinusCart2();
    const totalCartField2=totalQuantity2+1;
    document.getElementById("cart-field2").value=totalCartField2;

    const totalPrice2=totalCartField2*180;
    document.getElementById("price2").innerText=totalPrice2;
   
    
});

//For minus button
const minusButton2=document.getElementById("minus-button2");
minusButton2.addEventListener("click",function () {
    var totalQuantity2=plusMinusCart2();
    const totalCartField2=totalQuantity2-1;
    document.getElementById("cart-field2").value=totalCartField2;
    const totalPrice2=totalCartField2*180;
    document.getElementById("price2").innerText=totalPrice2;
    if (totalCartField2<1){
        document.getElementById("cart-field2").value=1;
        document.getElementById("price2").innerText=180;
    }

    
});


function plusMinusCart(){
    const cartField1=document.getElementById("cart-field1").value;
    const cartField1Num=parseInt(cartField1);
    return cartField1Num;

};

function plusMinusCart2(){
    const cartField2=document.getElementById("cart-field2").value;
    const cartField2Num=parseInt(cartField2);
    return cartField2Num;

};