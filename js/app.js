const playerNameArray = [];

//display players name
function displayPlayerName(names){
    const listContainer = document.getElementById('list-container');
    listContainer.innerText =''; 
    for (const name of names) {
        const li = document.createElement('li');
        li.innerText = name;
        listContainer.appendChild(li);
    }
}
//add to list
function addToList(button){
    const playerName = button.parentNode.children[0].innerText;
    if(playerNameArray.length <= 4){
        playerNameArray.push(playerName);
        button.disabled = 'true';
        button.style.backgroundColor = 'red';
    }
    else{
        alert('Already Added 5 Players!')
    }
    displayPlayerName(playerNameArray);
}
//get inner value
function getInnerValue(inputId)
{
    const inputField =  document.getElementById(inputId).value;
    const inputFieldValue = parseInt(inputField);
    return inputFieldValue;
}
//get inner text
function getInnerText(inputId)
{
    const inputText =  document.getElementById(inputId).value;
    const inputTextValue = parseInt(inputText);
    return inputTextValue;
}
//player expense calculation
function calcPlayerExpense(){
    const perPlayerCost = getInnerValue('per-player-cost');
    const totalPlayer = playerNameArray.length;
    const playerExpense = perPlayerCost * totalPlayer;
    document.getElementById('player-expense-field').innerText = playerExpense;
    return playerExpense;
}
//total budget calculation
function calcTotal(){
    const playerCost = calcPlayerExpense();
    const managerCost = getInnerValue('manager-cost');
    const coachCost = getInnerValue('coach-cost');
    const totalCost = playerCost + managerCost + coachCost;
    document.getElementById('total-cost-field').innerText = totalCost;
}