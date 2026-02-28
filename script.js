// ===============================
// Task 1: Save Data to Local Storage
// ===============================

const nameInput = document.getElementById("nameInput");
const saveBtn = document.getElementById("saveBtn");
const displayName = document.getElementById("displayName");

saveBtn.addEventListener("click", function () {
  const nameValue = nameInput.value.trim();

  if (nameValue !== "") {
    // Using JSON.stringify
    localStorage.setItem("savedUserName", JSON.stringify(nameValue));

    displayName.textContent = "Saved Name: " + nameValue;

    nameInput.value = "";
  }
});

// ===============================
// Task 2: Display Saved Data on Page Load
// ===============================

window.addEventListener("DOMContentLoaded", function () {
  const storedName = localStorage.getItem("savedUserName");

  if (storedName) {
    // Using JSON.parse
    const parsedName = JSON.parse(storedName);
    displayName.textContent = "Saved Name: " + parsedName;
  }

  // Load Dark Mode state
  const darkModeState = localStorage.getItem("darkMode");

  if (darkModeState === "enabled") {
    document.body.classList.add("dark-mode");
  }
});

// ===============================
// Task 3: Update Saved Data
// ===============================
// (Already handled in Save button click)
// If new name is entered and saved,
// localStorage value gets updated automatically.

// ===============================
// Task 4: Remove Data
// ===============================

const removeBtn = document.getElementById("removeBtn");

removeBtn.addEventListener("click", function () {
  localStorage.removeItem("savedUserName");

  displayName.textContent = "";
});

// ===============================
// Task 5: Dark Mode Persistence
// ===============================

const darkModeBtn = document.getElementById("darkModeBtn");

darkModeBtn.addEventListener("click", function () {
  document.body.classList.toggle("dark-mode");

  if (document.body.classList.contains("dark-mode")) {
    localStorage.setItem("darkMode", "enabled");
  } else {
    localStorage.setItem("darkMode", "disabled");
  }
});

// ===============================
// Task 6: Clear All Storage
// ===============================

const clearAllBtn = document.getElementById("clearAllBtn");

clearAllBtn.addEventListener("click", function () {
  localStorage.clear();

  displayName.textContent = "";

  document.body.classList.remove("dark-mode");
});
