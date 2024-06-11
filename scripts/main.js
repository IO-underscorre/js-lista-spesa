const shoppingList = ['Pasta' , 'Carote', 'Mozzarella', 'Farro', 'Hummus', 'Latte', 'Cipolle', 'Patate'];

const listContainer = document.getElementById('shopping-list');
let i = 0;

while(i < shoppingList.length) {
    listContainer.innerHTML += `<li>${shoppingList[i]}</li>`;
    i++;
}