const users = [];

let user1 = {
    id: 1,
    name: 'Asilbek',
    age: 17,
    email: 'Aslwexking777@gmail.com'
};

let user2 = {
    id: 2,
    name: 'Asilbek',
    age: 17,
    email: 'asilbek@gmail.com'
};

let user2Update = {
    id: 2,
    name: 'Sarvar',
    age: 17,
    email: 'asilbek@gmail.com'
};

function addUser(user) {
    if (user) {
        users.push(user);
        console.log("User muvaffaqqiyatli qo'shildi");
    } else {
        console.log("Ma'lumot yo‘q");
    }
}

function updateUser(id, newData) {
    let index = users.findIndex(user => user.id === id);
    if (index !== -1 && newData) {
        users[index] = newData;
        console.log("User ma'lumotlari yangilandi");
    } else {
        console.error("Bunday IDga ega User topilmadi!");
    }
}

function deleteUser(id) {
    const index = users.findIndex(user => user.id === id);
    if (index !== -1) {
        users.splice(index, 1); 
        console.log("User o‘chirildi");
    } else {
        console.log("Bunday IDga ega User topilmadi");
    }
}


function listUsers() {
    if (users.length > 0) {
        users.forEach(user => {
            console.log(user);
        });
    } else {
        console.log('User mavjud emas!');
    }
}


addUser(user1);
addUser(user2);
updateUser(2, user2Update);
deleteUser(1);
listUsers();
