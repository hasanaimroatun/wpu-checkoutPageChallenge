// number of bag
let state1 = 0; 

// number of shoes
let state2 = 0;

// cost

const newPrice = document.querySelectorAll('.newPrice');
const bagPrice = newPrice[0].children[0].innerHTML;
const shoesPrice = newPrice[1].children[0].innerHTML;


let totalBagCost = 0;
let totalShoesCost = 0;
let totalBnSCost = 0;
let totalPayment = 0;

const totalCost = document.querySelector('.tValue').children[0];

// shipping
const shippingCost = document.querySelector('.sValue').children[0].innerHTML;



// button

const sumItem = document.querySelectorAll('.count');

// button for bag


let dec1 = false
let inc1 = false

const decreaseBtn1 = document.querySelectorAll('.decrease')[0];
decreaseBtn1.addEventListener('click', function(){
    dec1 = true;
    while(dec1){
        sumItem[0].innerHTML = state1 - 1;
        state1 = state1 - 1;
        totalBagCost = state1 >= 0 ? ((state1 * (bagPrice * 100)) /100) : 0;
        totalShoesCost = state2 >= 0 ? ((state2 * (shoesPrice * 100)) /100) : 0;
        totalBnSCost =  (totalBagCost + totalShoesCost).toFixed(2);
        totalPayment = totalBnSCost > 0 ? (((totalBnSCost * 100)+ (shippingCost * 100))/100).toFixed(2) : 0;
        totalCost.innerHTML = totalPayment;
        dec1 = false;
    }
})

const increaseBtn1 = document.querySelectorAll('.increase')[0];
increaseBtn1.addEventListener('click', function(){
    inc1 = true;
    while(inc1){
        sumItem[0].innerHTML = state1 + 1;
        state1 = state1 + 1;
        totalBagCost = state1 >= 0 ? ((state1 * (bagPrice * 100)) /100) : 0;
        totalShoesCost = state2 >= 0 ? ((state2 * (shoesPrice * 100)) /100) : 0;
        totalBnSCost =  (totalBagCost + totalShoesCost).toFixed(2);
        totalPayment = totalBnSCost > 0 ? (((totalBnSCost * 100)+ (shippingCost * 100))/100).toFixed(2) : 0;
        totalCost.innerHTML = totalPayment;
        inc1 = false;
    }
})


// button for shoes

let dec2 = false
let inc2 = false

const decreaseBtn2 = document.querySelectorAll('.decrease')[1];
decreaseBtn2.addEventListener('click', function(){
    dec2 = true;
    while(dec2){
        sumItem[1].innerHTML = state2 - 1;
        state2 = state2 - 1;
        totalBagCost = state1 >= 0 ? ((state1 * (bagPrice * 100)) /100) : 0;
        totalShoesCost = state2 >= 0 ? ((state2 * (shoesPrice * 100)) /100) : 0;
        totalBnSCost =  (totalBagCost + totalShoesCost).toFixed(2);
        totalPayment = totalBnSCost > 0 ? (((totalBnSCost * 100)+ (shippingCost * 100))/100).toFixed(2) : 0;
        totalCost.innerHTML = totalPayment;
        dec2 = false;
    }
})

const increaseBtn2 = document.querySelectorAll('.increase')[1];
increaseBtn2.addEventListener('click', function(){
    inc2 = true;
    while(inc2){
        sumItem[1].innerHTML = state2 + 1;
        state2 = state2 + 1;
        totalBagCost = state1 >= 0 ? ((state1 * (bagPrice * 100)) /100) : 0;
        totalShoesCost = state2 >= 0 ? ((state2 * (shoesPrice * 100)) /100) : 0;
        totalBnSCost =  (totalBagCost + totalShoesCost).toFixed(2);
        totalPayment = totalBnSCost > 0 ? (((totalBnSCost * 100)+ (shippingCost * 100))/100).toFixed(2) : 0;
        totalCost.innerHTML = totalPayment;
        inc2 = false;
    }
})




let savedData = ["","", "", "", "", "", ""];

// input 
const input = document.querySelectorAll('input');

// input email
let email = "";
let e = false
input[0].addEventListener('input', function(){
    e = true;
    while (e) {
        email = input[0].value;
        savedData.splice(0,1,email);
        e = false;
    }
})

// input phone
let phone = "";
let p = false;
input[1].addEventListener('input', function(){
    p = true;
    while (p) {
        phone = input[1].value;
        savedData.splice(1,1,phone);
        p = false;
    }
})

// input name 
let nama = "";
let n = false;
input[2].addEventListener('input', function(){
    n = true;
    while (n) {
        nama = input[2].value;
        savedData.splice(2,1,nama);
        n = false;
    }
})

// input address
let address = "";
let a = false;
input[3].addEventListener('input', function(){
    a = true;
    while (a) {
        address = input[3].value;
        savedData.splice(3,1,address);
        a = false;
    }
})

// input city
let city = "";
let c = false;
input[4].addEventListener('input', function(){
    c = true;
    while (c) {
        city = input[4].value;
        savedData.splice(4,1,city);
        c = false;
    }
})

// input postal code
let postalCode = "";
let pc = false;
input[5].addEventListener('input', function(){
    pc = true;
    while (pc) {
        postalCode = input[5].value;
        savedData.splice(6,1,postalCode);
        pc = false;
    }
})


// select country
const select = document.querySelector('select');
let selectCountry = "";
let slct = false;
select.addEventListener('input', function(){
    slct = true;
    while (slct) {
        selectCountry = select.value;
        savedData.splice(5,1,selectCountry);
        slct = false;
    }
})

// save data info
let statusChecked = "";
let chk = false;

input[6].addEventListener('click', function(){
    if(input[6].checked){
        chk = true;
        while(chk) {
            statusChecked = input[6].value + 'true';
            alert(
                `email: ${savedData[0]} \nphone: ${savedData[1]} \nname: ${savedData[2]} \naddress: ${savedData[3]} \ncity: ${savedData[4]} \ncountry: ${savedData[5]} \npostal code: ${savedData[6]}`
            )
            chk = false;
        }
    } else{
        chk = true;
        while(chk) {
            statusChecked = input[6].value + 'false';
            chk = false;
        }
    }
})


const btnSubmit = document.querySelector('.buttonSubmit');
btnSubmit.addEventListener('click'||'keypress', function(e){
    if(e.key === "Enter"){
        btnSubmit.click();
    }

    if(savedData.every(s => s !== "") == true){
        alert('validation succeeds!')
        alert(
            `Thank you ${savedData[2]} \nTotal cost of your item is $${totalPayment} \n\nHave a nice day!`
        )
    } else {
        alert('validation fails! \nPlease complete your data before continue!')
    }
})








