const box = document.querySelector(".box");
const createBtn = document.querySelector(".btn");
let notes = document.querySelectorAll(".input-box");



createBtn.addEventListener("click", () =>{
    let notesContainer = document.createElement("div");
    notesContainer.classList.add("notes");
    let inputBox = document.createElement("textarea");
    inputBox.classList.add("input-box");
    let button = document.createElement("button");
    button.classList.add("delete");
    button.innerHTML = `<i class="fa-solid fa-trash"> </i>Delete`;
    notesContainer.appendChild(inputBox);
    notesContainer.appendChild(button);
    box.appendChild(notesContainer);
    updateStorage();
})

box.addEventListener("click", (e) =>{
    if(e.target.classList.contains("delete")){
        e.target.parentElement.remove();
        //alternative
        // if(e.target.closest(".delete")){
        // e.target.closest(".notes").remove();
        updateStorage();
    }

    else if(e.target.tagName === "TEXTAREA"){
        notes = document.querySelectorAll(".input-box");
        notes.forEach(e=>{
            e.onkeyup = function(){
                updateStorage();
            }
        })
    }
}

)
   





function updateStorage(){
    // Sync the value of textareas to their textContent so it saves in innerHTML
    document.querySelectorAll(".input-box").forEach(note => {
        note.textContent = note.value;
    });
    localStorage.setItem("notes", box.innerHTML);
}

function showNotes(){
    box.innerHTML = localStorage.getItem("notes");
}

showNotes();


