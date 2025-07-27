// API 1: "https://api.apilayer.com/therundown/sports"

async function allSports() {
    try{
        const response = await fetch(`https://api.apilayer.com/therundown/sports`, {
            headers: {
                "apikey": "aNoSnnyZRGVdeoZdIBXwBMgXkAxNseWj"
            }
        });

        if(!response.ok) {
            throw new Error('Network response was not ok');
       }
       const sportData = await response.json();
       console.log(sportData);

       const sportsContainer = document.querySelector(".sport__row");

       sportsContainer.innerHTML = '';

       sportData.forEach(sport => {
        const sportElement = document.createElement('div');
        sportElement.className = 'sport';
        sportElement.innerHTML = `<h3>${sport.name}</h3>`;
        sportsContainer.appendChild(sportElement);
       });

    } catch (error) {
        console.error('There was a problem with  the fetch operation:', error);
    }
    }

    allSports();

// async function allSports() {
//     try{
// const response = await fetch(`https://api.apilayer.com/therundown/sports`,{
//     headers: {
//         "apikey": "aNoSnnyZRGVdeoZdIBXwBMgXkAxNseWj"
//     }
// });

// if(!response.ok) {
//     throw new Error('Network response was not ok');
// }

// const sportData = await response.json();

// console.log(sportData);
//     }}


// allSports();