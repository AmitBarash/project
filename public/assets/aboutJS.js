const helloUser = document.getElementById('helloUser');
const helloUser2 = document.getElementById('helloUser2');
const submit = document.getElementById('submitButton');
const nameInput = document.getElementById('firstName');
const emailInput = document.getElementById('emailAddress');
let isHere = false;

submit.onclick = function()
{
    const val2 = emailInput.value;
    const val = nameInput.value;
    for(let i = 0 ; i < val2.length && isHere == false ; i++)
    {
        if(val2.charAt(i) == '@')
        {
            isHere = true;
        }
    }
    if(isHere == false && val2 != '')
    {
        alert('the email in not a real address email');
    }
    if(val != '' && isHere == true)
    {
        helloUser.innerText = val;
        helloUser.style.display = 'block';
        helloUser2.style.display = 'block';
    }
    else if(val == '' || val2 == '')
    {
        alert('one or more of the input areas is empty, please fill it');
    }
}