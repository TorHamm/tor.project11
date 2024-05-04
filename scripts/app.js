import data from '../data.json' with {type:'json'};

const buttons = document.querySelectorAll('button');

function displayData(timeselect) {

    //? This function is for display data based on card id.
    for (let i = 0;i < data.length;i++) {
        let currentCard = document.getElementById(data[i].title);
        if (currentCard) {
            let currentElement = currentCard.querySelector('#current');
            let previousElement = currentCard.querySelector('#previous');
            currentElement.textContent = data[i].timeframes[timeselect].current + "hrs";
            previousElement.textContent = "Last week - " + data[i].timeframes[timeselect].previous + "hrs";
        } else {
            console.log("Can't find element with " + data[i].title + "id.");
        }
    }
}

function selectBtn() {

    //? This line is for default button that's always selected.
    const defaulbutton = document.getElementById("weekly");
    defaulbutton.classList.add("selected");
    displayData(defaulbutton.id);

    //? This line is for display data based on timeframes selected.
    buttons.forEach(function(button){
        button.addEventListener('click', function() {
            buttons.forEach(function(unselected) {
                unselected.classList.remove("selected");
            })
            this.classList.add("selected");
            displayData(this.id);
        });
    });
}

selectBtn();