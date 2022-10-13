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
    const cartField1=document.getElementById(product + "-count").value;
    const cartField1Num=parseInt(cartField1);
    let caseNewCount=cartField1Num;

    if (isIncrease==true){
        caseNewCount=cartField1Num + 1;
        
    }
    if (isIncrease==false && caseNewCount>1){
        caseNewCount=cartField1Num - 1;
    }
    let totalPrice=0;
    if (product=="phone"){
        totalPrice=caseNewCount*1250;
    }
    if (product=="case"){
        totalPrice=caseNewCount*59;
    }
    document.getElementById(product + "-count").value=caseNewCount;
    document.getElementById(product + "-price").innerText=totalPrice;
};



