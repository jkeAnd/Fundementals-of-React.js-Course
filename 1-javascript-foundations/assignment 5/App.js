const users = [
    { name: 'Anna', active: true},
    { name: 'Tom', active: false},
    { name: 'Luna', active: true}, 
];

const activeUsers = users.filter(user => user.active);

console.log(activeUsers);