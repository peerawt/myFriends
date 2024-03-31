const friendsInfo = [];

function addFriend() {
    const numFriends = Math.floor(Math.random() * 9) + 1;
    alert(`Adding ${numFriends} friend(s) in this round.`);
    
    for (let i = 0; i < numFriends; i++) {
      let friendName, friendAge;
      
      do {
        friendName = prompt(`Enter friend ${i + 1}'s nickname:`);
        if (friendName === null) return; 
        friendAge = parseInt(prompt(`Enter ${friendName}'s age:`));
        
        if (!friendName.trim() || isNaN(friendAge)) {
          alert("Please enter valid friend information.");
        }
      } while (!friendName.trim() || isNaN(friendAge));
      
      friendsInfo.push({ name: friendName, age: friendAge });
    }
    displayFriendsInfo();
}

function calculateTotalAge() {
  const totalAge = friendsInfo.reduce((acc, friend) => acc + friend.age, 0);
  alert(`Total age of all friends: ${totalAge}`);
}

function calculateAverageAge() {
  const totalAge = friendsInfo.reduce((acc, friend) => acc + friend.age, 0);
  const averageAge = totalAge / friendsInfo.length;
  alert(`Average age of all friends: ${averageAge.toFixed(2)}`);
}

function calculateYoungestAge() {
  const youngestAge = Math.min(...friendsInfo.map(friend => friend.age));
  const youngestFriends = friendsInfo.filter(friend => friend.age === youngestAge);
  const names = youngestFriends.map(friend => friend.name).join(', ');
  alert(`Youngest friend is  ${names} , age: ${youngestAge}`);
}

function calculateOldestAge() {
  const oldestAge = Math.max(...friendsInfo.map(friend => friend.age));
  const oldestFriends = friendsInfo.filter(friend => friend.age === oldestAge);
  const names = oldestFriends.map(friend => friend.name).join(', ');
  alert(`Oldest friend is  ${names} , age: ${oldestAge} `);
}

function displayFriendsInfo() {
  const friendsInfoDiv = document.getElementById('friends-info');
  friendsInfoDiv.innerHTML = '';
  friendsInfo.forEach(friend => {
    const friendDiv = document.createElement('div');
    friendDiv.textContent = `${friend.name}, Age: ${friend.age}`;
    friendsInfoDiv.appendChild(friendDiv);
  });
}

document.getElementById('add-friend-btn').addEventListener('click', addFriend);
document.getElementById('calculate-total-age').addEventListener('click', calculateTotalAge);
document.getElementById('calculate-average-age').addEventListener('click', calculateAverageAge);
document.getElementById('calculate-youngest-age').addEventListener('click', calculateYoungestAge);
document.getElementById('calculate-oldest-age').addEventListener('click', calculateOldestAge);
document.getElementById('reset-btn').addEventListener('click', () => {
  friendsInfo.length = 0;
  document.getElementById('friends-info').innerHTML = '';
});
