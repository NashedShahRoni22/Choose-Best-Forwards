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
//selected Five Part
document.getElementById('select-messi-btn').addEventListener('click', function(){
    const getName = getInnerText('player-messi');
    setListItem('list-container',getName);
})
document.getElementById('select-neymar-btn').addEventListener('click', function(){
    const getName = getInnerText('player-neymar');
    setListItem('list-container',getName);
})
document.getElementById('select-mbappe-btn').addEventListener('click', function(){
    const getName = getInnerText('player-mbappe');
    setListItem('list-container',getName);
})
document.getElementById('select-ronaldo-btn').addEventListener('click', function(){
    const getName = getInnerText('player-ronaldo');
    setListItem('list-container',getName);
})
document.getElementById('select-haaland-btn').addEventListener('click', function(){
    const getName = getInnerText('player-haaland');
    setListItem('list-container',getName);
})
document.getElementById('select-dybala-btn').addEventListener('click', function(){
    const getName = getInnerText('player-dybala');
    setListItem('list-container',getName);
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
