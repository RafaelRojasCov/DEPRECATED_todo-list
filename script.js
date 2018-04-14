var ol = document.getElementById("myList");
var input = document.getElementById("task");
var addTask = document.getElementById("add");
var removeTask = document.getElementById("remove");

function createListElement(){
	var li = document.createElement("li");
		gettingDone(li);
		li.addEventListener("mouseover", function(){
			li.style.cursor = "pointer";
		});
		li.appendChild(document.createTextNode(input.value));
		ol.appendChild(li);
		input.value = "";
}

function addListAfterClick() {
	if (input.value.length > 0){
		createListElement();
	}
}

function addListAfterKeypressed(event) {
	if (input.value.length > 0 && event.keyCode == 13){
		createListElement();
	}
}


function gettingDone(item){
	item.addEventListener("click", function(){
		item.classList.toggle("done");
	});
}

function removeTasks(){
	var doneTasks = document.getElementsByTagName("li");
	for (var i=0; i < doneTasks.length; i++){
	 	if (doneTasks[i].className == "done"){
			doneTasks[i].remove();
			i--;
	    }
	}
}

addTask.addEventListener("click", addListAfterClick);
input.addEventListener("keypress", addListAfterKeypressed);
removeTask.addEventListener("click", removeTasks);