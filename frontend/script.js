const API_URL = "http://127.0.0.1:5000/notes";

const noteInput = document.getElementById("noteInput");
const saveBtn = document.getElementById("saveBtn");
const searchInput = document.getElementById("searchInput");
const notesContainer = document.getElementById("notesContainer");
const message = document.getElementById("message");

let allNotes = [];

window.onload = loadNotes;

saveBtn.addEventListener("click", saveNote);

searchInput.addEventListener("input", filterNotes);

async function loadNotes() {

    try {

        const response = await fetch(API_URL);

        allNotes = await response.json();

        displayNotes(allNotes);

    }

    catch {

        showMessage("Cannot connect to server.", "error");

    }

}

async function saveNote() {

    const note = noteInput.value.trim();

    if (note === "") {

        showMessage("Please enter a note.", "error");

        return;

    }

    try {

        const response = await fetch(API_URL, {

            method: "POST",

            headers: {

                "Content-Type": "application/json"

            },

            body: JSON.stringify({

                note

            })

        });

        if (!response.ok) throw Error();

        noteInput.value = "";

        showMessage("Note saved successfully.", "success");

        loadNotes();

    }

    catch {

        showMessage("Unable to save note.", "error");

    }

}

function displayNotes(notes) {

    notesContainer.innerHTML = "";

    if (notes.length === 0) {

        notesContainer.innerHTML = `

        <div class="empty-state">

            <i class="fa-regular fa-note-sticky fa-3x"></i>

            <br><br>

            No Notes Available

        </div>

        `;

        return;

    }

    notes.forEach(note => {

        notesContainer.innerHTML += `

        <div class="note-card">

            <div class="note-text">

                ${note.note}

            </div>

            <div class="note-footer">

                <small>

                    <i class="fa-regular fa-clock"></i>

                    ${note.created_at}

                </small>

                <button
                class="delete-btn"
                onclick="deleteNote(${note.id})">

                    <i class="fa-solid fa-trash"></i>

                    Delete

                </button>

            </div>

        </div>

        `;

    });

}

function filterNotes() {

    const keyword = searchInput.value.toLowerCase();

    const filtered = allNotes.filter(note =>

        note.note.toLowerCase().includes(keyword)

    );

    displayNotes(filtered);

}

async function deleteNote(id) {

    try {

        await fetch(`${API_URL}/${id}`, {

            method: "DELETE"

        });

        showMessage("Note deleted successfully.", "success");

        loadNotes();

    }

    catch {

        showMessage("Delete failed.", "error");

    }

}

function showMessage(text, type) {

    message.textContent = text;

    message.className = type;

    setTimeout(() => {

        message.textContent = "";

        message.className = "";

    }, 2500);

}