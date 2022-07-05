//add buttons id
const addB1 = document.getElementById('add1');
const addB2 = document.getElementById('add2');
const addB3 = document.getElementById('add3');
const addB4 = document.getElementById('add4');
const addB5 = document.getElementById('add5');
const addB6 = document.getElementById('add6');
const addB7 = document.getElementById('add7');
const addB8 = document.getElementById('add8');
const addB9 = document.getElementById('add9');
const addB10 = document.getElementById('add10');
const addB11 = document.getElementById('add11');
const addB12 = document.getElementById('add12');
const addB13 = document.getElementById('add13');
const addB14 = document.getElementById('add14');
const addB15 = document.getElementById('add15');

//remove buttons id
const removeB1 = document.getElementById('remove1');
const removeB2 = document.getElementById('remove2');
const removeB3 = document.getElementById('remove3');
const removeB4 = document.getElementById('remove4');
const removeB5 = document.getElementById('remove5');
const removeB6 = document.getElementById('remove6');
const removeB7 = document.getElementById('remove7');
const removeB8 = document.getElementById('remove8');
const removeB9 = document.getElementById('remove9');
const removeB10 = document.getElementById('remove10');
const removeB11 = document.getElementById('remove11');
const removeB12 = document.getElementById('remove12');
const removeB13 = document.getElementById('remove13');
const removeB14 = document.getElementById('remove14');
const removeB15 = document.getElementById('remove15');

//how much of each product number id
const number1 = document.getElementById('number1');
const number2 = document.getElementById('number2');
const number3 = document.getElementById('number3');
const number4 = document.getElementById('number4');
const number5 = document.getElementById('number5');
const number6 = document.getElementById('number6');
const number7 = document.getElementById('number7');
const number8 = document.getElementById('number8');
const number9 = document.getElementById('number9');
const number10= document.getElementById('number10');
const number11 = document.getElementById('number11');
const number12 = document.getElementById('number12');
const number13 = document.getElementById('number13');
const number14 = document.getElementById('number14');
const number15 = document.getElementById('number15');

//the sum id of the whole products together
const sum = document.getElementById('sum');

//the number of products id of the whole products together
const productsNum = document.getElementById('productsNum');

//the price title in the details navbar
const priceB = document.getElementById('priceB');

//the products title in the details navbar
const productsB = document.getElementById('productsB');

//the presenting of the number in the price title in the details navbar
const priceHowMuch = document.getElementById('priceHowMuch');

//the presenting of the number in the products title in the details navbar
const productsHowMuch = document.getElementById('productsHowMuch');

//how many are there of each product array
let sumOfProductsArr = [0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0];

//the price of each product array
let costOfProductsArr = [13 , 5 , 3 , 13 , 4 , 6 , 17 , 5 , 3 , 10 , 5 , 3 , 17 , 5 , 3];

//the presenting of the number of products
let sumOfProducts = 0;

//the presenting of the cost
let cost = 0;

//the number of times that the user pressed on the title products in the details navbar. used to open and close the title
let pressNumProducts = 0;

//the number of times that the user pressed on the title price in the datails navbar. used to open and close the title
let pressNumPrice = 0;

// closeNav();
update();

//this function updates the products page
function update()
{
    sumOfProducts = 0;
    cost = 0;
    for(let i = 0 ; i < costOfProductsArr.length ; i++)
    {
        cost += costOfProductsArr[i] * sumOfProductsArr[i];
    }
    number1.innerText = sumOfProductsArr[0];
    number2.innerText = sumOfProductsArr[1];
    number3.innerText = sumOfProductsArr[2];
    number4.innerText = sumOfProductsArr[3];
    number5.innerText = sumOfProductsArr[4];
    number6.innerText = sumOfProductsArr[5];
    number7.innerText = sumOfProductsArr[6];
    number8.innerText = sumOfProductsArr[7];
    number9.innerText = sumOfProductsArr[8];
    number10.innerText = sumOfProductsArr[9];
    number11.innerText = sumOfProductsArr[10];
    number12.innerText = sumOfProductsArr[11];
    number13.innerText = sumOfProductsArr[12];
    number14.innerText = sumOfProductsArr[13];
    number15.innerText = sumOfProductsArr[14];
    for(let i = 0 ; i < sumOfProductsArr.length ; i++)
    {
        sumOfProducts += sumOfProductsArr[i];
    }
    sum.innerText = cost;
    productsNum.innerText = sumOfProducts;
}

//this is a basic function that gets the number of products of a specific product and remove one from it.
//it returns the new number of products.
function remove1(sumOfProduct)
{
    if(sumOfProduct > 0)
    {
        sumOfProduct--;
    } 
    return sumOfProduct;
}

//in lines 139-288 each button (add or remove) calls the fitting function ("add1" or "remove1") and gives it the number of products that the button belongs to.
//then it updates the products page by using the function "update"
addB1.onclick = function()
{
    sumOfProductsArr[0]++;
    update();
}
addB2.onclick = function()
{
    sumOfProductsArr[1]++;
    update();
}
addB3.onclick = function()
{
    sumOfProductsArr[2]++;
    update();
}
addB4.onclick = function()
{
    sumOfProductsArr[3]++;
    update();
}
addB5.onclick = function()
{
    sumOfProductsArr[4]++;
    update();
}
addB6.onclick = function()
{
    sumOfProductsArr[5]++;
    update();
}
addB7.onclick = function()
{
    sumOfProductsArr[6]++;
    update();
}
addB8.onclick = function()
{
    sumOfProductsArr[7]++;
    update();
}
addB9.onclick = function()
{
    sumOfProductsArr[8]++;
    update();
}
addB10.onclick = function()
{
    sumOfProductsArr[9]++;
    update();
}
addB11.onclick = function()
{
    sumOfProductsArr[10]++;
    update();
}
addB12.onclick = function()
{
    sumOfProductsArr[11]++;
    update();
}
addB13.onclick = function()
{
    sumOfProductsArr[12]++;
    update();
}
addB14.onclick = function()
{
    sumOfProductsArr[13]++;
    update();
}
addB15.onclick = function()
{
    sumOfProductsArr[14]++;
    update();
}
removeB1.onclick = function()
{
    sumOfProductsArr[0] = remove1(sumOfProductsArr[0]);
    update();
}
removeB2.onclick = function()
{
    sumOfProductsArr[1] = remove1(sumOfProductsArr[1]);
    update();
}
removeB3.onclick = function()
{
    sumOfProductsArr[2] = remove1(sumOfProductsArr[2]);
    update();
}
removeB4.onclick = function()
{
    sumOfProductsArr[3] = remove1(sumOfProductsArr[3]);
    update();
}
removeB5.onclick = function()
{
    sumOfProductsArr[4] = remove1(sumOfProductsArr[4]);
    update();
}
removeB6.onclick = function()
{
    sumOfProductsArr[5] = remove1(sumOfProductsArr[5]);
    update();
}
removeB7.onclick = function()
{
    sumOfProductsArr[6] = remove1(sumOfProductsArr[6]);
    update();
}
removeB8.onclick = function()
{
    sumOfProductsArr[7] = remove1(sumOfProductsArr[7]);
    update();
}
removeB9.onclick = function()
{
    sumOfProductsArr[8] = remove1(sumOfProductsArr[8]);
    update();
}
removeB10.onclick = function()
{
    sumOfProductsArr[9] = remove1(sumOfProductsArr[9]);
    update();
}
removeB11.onclick = function()
{
    sumOfProductsArr[10] = remove1(sumOfProductsArr[10]);
    update();
}
removeB12.onclick = function()
{
    sumOfProductsArr[11] = remove1(sumOfProductsArr[11]);
    update();
}
removeB13.onclick = function()
{
    sumOfProductsArr[12] = remove1(sumOfProductsArr[12]);
    update();
}
removeB14.onclick = function()
{
    sumOfProductsArr[13] = remove1(sumOfProductsArr[13]);
    update();
}
removeB15.onclick = function()
{
    sumOfProductsArr[14] = remove1(sumOfProductsArr[14]);
    update();
}

//the next two functions responsible on opening and closing the details navbar:

//this is opening the navbar
// function openNav()
// {
//     document.getElementById("mySidenavProducts").style.width = "250px";
//     document.getElementById("mainProducts").style.marginLeft = "250px";
// }
// //this is closing the navbar
// function closeNav()
// {
//     document.getElementById("mySidenavProducts").style.width = "0";
//     document.getElementById("mainProducts").style.marginLeft= "0";
// }


productsB.onclick = function()
{
    pressNumProducts++;
    if(pressNumProducts % 2 != 0)
    {
        productsNum.style.visibility = 'visible';
        productsHowMuch.style.visibility = 'visible';
    }
    else
    {
        productsNum.style.visibility = 'hidden';
        productsHowMuch.style.visibility = 'hidden';
    }
}
priceB.onclick = function()
{
    pressNumPrice++;
    if(pressNumPrice % 2 != 0)
    {
        sum.style.visibility = 'visible';
        priceHowMuch.style.visibility = 'visible';
    }
    else
    {
        sum.style.visibility = 'hidden';
        priceHowMuch.style.visibility = 'hidden';
    }
}