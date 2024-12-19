$(document).ready(function () {
    loadToDo();

    $("#newBtn").click(function () {
        const todoText = prompt("Enter your TO DO:");
        if (todoText && todoText.trim() !== "") {
            addToDo(todoText);
            saveToDo();
        }
    });

    function addToDo(text) {
        const $toDo = $("<div>").text(text);
        $toDo.click(function () {
            deleteToDo($(this));
        });
        $("#ft_list").prepend($toDo); 
    }

    function deleteToDo($element) {
        if (confirm("Do you really want to delete this TO DO?")) {
            $element.remove();
            saveToDo();
        }
    }

    function saveToDo() {
        const toDoArray = [];
        $("#ft_list div").each(function () {
            toDoArray.push($(this).text());
        });
        document.cookie = "todo=" + JSON.stringify(toDoArray) + ";path=/";
    }

    function loadToDo() {
        const cookie = document.cookie.split("; ").find(row => row.startsWith("todo="));
        if (cookie) {
            const toDoArray = JSON.parse(cookie.split("=")[1]);
            toDoArray.forEach(text => addToDo(text));
        }
    }
});