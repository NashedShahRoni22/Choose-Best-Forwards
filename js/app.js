//common function
function getInnerText(getId){
    const playerNameField = document.getElementById(getId);
    const playerName = playerNameField.innerText;
    return playerName;
}
function getInnerValue(getId){
    const playerNameField = document.getElementById(getId);
    const playerName = parseInt(playerNameField.value);
    return playerName;
}
function setListItem(setId,playerName){
    const listContainer = document.getElementById(setId);
    const li = document.createElement('li');
    li.innerText = playerName;
    listContainer.appendChild(li);
}
function setTextFeild(setId,value){
    const setField = document.getElementById(setId);
    setField.innerText = value;
}
function disableButton(btnId) {
    document.getElementById(btnId).disabled = 'true';
}
//selected Five Part
document.getElementById('select-messi-btn').addEventListener('click', function(){
    const getName = getInnerText('player-messi');
    setListItem('list-container',getName);
    disableButton('select-messi-btn');
})
document.getElementById('select-neymar-btn').addEventListener('click', function(){
    const getName = getInnerText('player-neymar');
    setListItem('list-container',getName);
    disableButton('select-neymar-btn');
})
document.getElementById('select-mbappe-btn').addEventListener('click', function(){
    const getName = getInnerText('player-mbappe');
    setListItem('list-container',getName);
    disableButton('select-mbappe-btn');
})
document.getElementById('select-ronaldo-btn').addEventListener('click', function(){
    const getName = getInnerText('player-ronaldo');
    setListItem('list-container',getName);
    disableButton('select-ronaldo-btn');
})
document.getElementById('select-haaland-btn').addEventListener('click', function(){
    const getName = getInnerText('player-haaland');
    setListItem('list-container',getName);
    disableButton('select-haaland-btn');
})
document.getElementById('select-dybala-btn').addEventListener('click', function(){
    const getName = getInnerText('player-dybala');
    setListItem('list-container',getName);
    disableButton('select-dybala-btn');
})

//Budget Part
document.getElementById('calc-player-expense').addEventListener('click', function(){
    const perPlayerCost = getInnerValue('per-player-cost');
    const playerExpense = perPlayerCost * 5;
    setTextFeild('player-expense-field',playerExpense);
})

document.getElementById('calc-total-expense').addEventListener('click', function(){
    const managerCost = getInnerValue('manager-cost');
    const coachCost = getInnerValue('coach-cost');
    const playerField = document.getElementById('player-expense-field');
    const playerCost = parseInt(playerField.innerText)
    const totalCost = managerCost + coachCost + playerCost;
    setTextFeild('total-cost-field',totalCost);
})
