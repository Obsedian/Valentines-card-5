let yesButtonCount = 0;

function goToNextPage(page) {
    yesButtonCount++;
    window.location.href = page;  // Navigate to the next page
}


function trickNoButton() {
    let noButton = document.querySelector('.no-button');
    if (yesButtonCount < 7) {
        for (let i = 0; i < 7; i++) {
            let newYesButton = document.createElement("button");
            newYesButton.classList.add("yes-button");
            newYesButton.textContent = "Yes";
            newYesButton.onclick = function() { goToNextPage('page2.html'); }; // Keep navigating
            document.body.appendChild(newYesButton);
        }
        noButton.style.display = "none";
    }
}
