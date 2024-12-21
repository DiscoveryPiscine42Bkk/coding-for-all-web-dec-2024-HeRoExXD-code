// LOAD TODO
window.onload = () => {
    loadToDo();
};

// NEW TODO
document.getElementById("newBtn").onclick = () => {
    const todoText = prompt("Enter your TO DO:").trim();
    if (todoText) {
        addToDo(todoText);
        saveToDo();
    }
};

// ADD TODO TO DOM
function addToDo(text) {
    const toDoDiv = document.createElement("div");
    toDoDiv.textContent = text;
    toDoDiv.onclick = () => deleteToDo(toDoDiv);
    const list = document.getElementById("ft_list");

    // Add the new TO DO at the top of the list
    if (list.firstChild) {
        list.insertBefore(toDoDiv, list.firstChild);
    } else {
        list.appendChild(toDoDiv);
    }
}

// REMOVE TODO
function deleteToDo(toDoDiv) {
    if (confirm("Do you really want to delete this TO DO?")) {
        toDoDiv.remove();
        saveToDo();
    }
}

// SAVE TO DO LIST TO COOKIES
function saveToDo() {
    const list = document.querySelectorAll("#ft_list div");
    const toDoArray = [];
    list.forEach(item => toDoArray.push(item.textContent));

    // Set cookie expiration date (1 year from now)
    const expires = new Date();
    expires.setFullYear(expires.getFullYear() + 1);

    // Save to cookies
    document.cookie = `todo=${encodeURIComponent(JSON.stringify(toDoArray))};path=/;expires=${expires.toUTCString()};SameSite=Lax`;
}

// LOAD TO DO LIST FROM COOKIES
function loadToDo() {
    const cookie = document.cookie.split("; ").find(row => row.startsWith("todo="));
    if (cookie) {
        const toDoArray = JSON.parse(decodeURIComponent(cookie.split("=")[1]));
        toDoArray.reverse().forEach(item => addToDo(item));
    }
}
