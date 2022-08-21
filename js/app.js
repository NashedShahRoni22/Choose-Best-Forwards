//selected Five Part
function getInnerText(getId){
    const playerNameField = document.getElementById(getId);
    const playerName = playerNameField.innerText;
    return playerName;
}
function setListItem(setId,playerName){
    const listContainer = document.getElementById(setId);
    const li = document.createElement('li');
    li.innerText = playerName;
    listContainer.appendChild(li);
}

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