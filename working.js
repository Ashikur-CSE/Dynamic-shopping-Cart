// Phone cart:
// For plus button
const plusButton1 = document.getElementById("plus-button1");
plusButton1.addEventListener("click",function () {
    plusMinusCart("phone",true);  
});

//For minus button
const minusButton1=document.getElementById("minus-button1");
minusButton1.addEventListener("click",function () {
    plusMinusCart("phone",false); 
});

//Case Cart:
// For plus button
const plusButton2 = document.getElementById("plus-button2");
plusButton2.addEventListener("click",function () {

    plusMinusCart("case",true);
});

//For minus button
const minusButton2=document.getElementById("minus-button2");
minusButton2.addEventListener("click",function () {
    plusMinusCart("case",false);
});


//Main Function
function plusMinusCart(product,isIncrease){
    const productQuantity=document.getElementById(product + "-count").value;
    const productQuantityNum=parseInt(productQuantity);
    let productNewCount=productQuantityNum;

    if (isIncrease==true){
        productNewCount=productQuantityNum + 1;
        
    }
    if (isIncrease==false && productNewCount>1){
        productNewCount=productQuantityNum - 1;
    }
    let totalPrice=0;
    if (product=="phone"){
        totalPrice=productNewCount*1250;
    }
    if (product=="case"){
        totalPrice=productNewCount*59;
    }
    document.getElementById(product + "-count").value=productNewCount;
    document.getElementById(product + "-price").innerText=totalPrice;

    calculationTotal();
};

//Grand Calculation
function calculationTotal(){
    const phoneQuantity=getProductQuantity("phone");
    const caseQuantity=getProductQuantity("case");

    const totalAmount=phoneQuantity*1250 + caseQuantity*59;
    document.getElementById("subTotalPrice").innerText=totalAmount;

    const tax=(totalAmount*0.1).toFixed(2);
    document.getElementById("tex").innerText=tax;

    const grandTotal=parseInt(totalAmount)+parseFloat(tax);
    document.getElementById("GrandtotalPrice").innerText=grandTotal;
}

function getProductQuantity(product){
    const productInput= document.getElementById(product + "-count").value;
    const productCount=parseInt(productInput);
    return productCount;

}



