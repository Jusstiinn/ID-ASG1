//click detection for the search button
const searchBtn = document.getElementById("searchBtn");
const searchPopup = document.getElementById("searchPopup");
const closePopup = document.getElementById("closePopup");

searchBtn.onclick = () => {
    searchPopup.style.display = "flex"
}

closePopup.onclick = () => {
    searchPopup.style.display = "none"
}

// Close popup when clicking outside the box
searchPopup.onclick = (e) => {
    if (e.target === searchPopup) {
        searchPopup.style.display = "none"
    }
}

//Function to check use input and open the page
function goToPage() {

    //makes the input into small letters and no spaces.
    const input = document.getElementById('userInput').value.replace(' ', '').toLowerCase().trim();

    // Decide which page to open
    let url;
    if (input === 'overwatch2') {
        url = 'overwatch.html';
    } else if (input === 'silksong' || input==='hollowknightsilksong' || input==='hollowknight:silksong') {
        url = 'silksong.html';
    } else if (input === 'inscryption') {
        url = 'inscryption.html';
    } else {
        alert('Page not found!');
        return false; // Prevent form submission
    }

    window.location.href = url; // Redirect to the page
    return false; // Prevent form from submitting normally
}

