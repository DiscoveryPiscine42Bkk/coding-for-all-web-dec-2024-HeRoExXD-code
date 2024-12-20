$(document).ready(function () {
    loadToDo();

    $("#newBtn").click(function () {
        const todoText = prompt("Enter your TO DO:");
        if (todoText && $.trim(todoText) !== "") {
            addToDo(todoText);
            saveToDo();
        }
    });

    function addToDo(text) {
        const $toDo = $("<div>").text(text); 
        $toDo.click(function () {
            deleteToDo($(this));
        });
        $("#ft_list").append($toDo); 
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
        localStorage.setItem("todo", JSON.stringify(toDoArray)); 
    }

    function loadToDo() {
        const storedToDo = localStorage.getItem("todo"); 
        if (storedToDo) {
            const toDoArray = JSON.parse(storedToDo); 
            $.each(toDoArray, function (_, text) {
                addToDo(text); 
            });
        }
    }
});