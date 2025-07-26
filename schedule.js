// API 1: "https://api.apilayer.com/therundown/sports"
// API 2: "https://api.apilayer.com/therundown/sports/${sport-id}/teams"
// API 3: "https://api.apilayer.com/therundown/sports/2/schedule?limit=100&from=2025-07-24"

const currentDate = new Date();
const month = String(currentDate.getMonth() + 1).padStart(2,'0');
const day = String(currentDate.getDate()).padStart(2,'0');
const year = currentDate.getFullYear();
const formattedDate = `${month}-${day}-${year}`;

const gameArray = document.querySelector(".schedule-card__container");


async function gamesBySport() {
    try{
const response = await fetch(`https://api.apilayer.com/therundown/sports/2/schedule?limit=100&from=${formattedDate}`,{
    headers: {
        "apikey": "aNoSnnyZRGVdeoZdIBXwBMgXkAxNseWj"
    }
})

if(!response.ok) {
    throw new Error('Network response was not ok');
}
const gameData = await response.json();

gameArray.innerHtml = gameData.map(game => schedHtml(game)).join('');
    
}
catch (error) {
        console.error('There was a problem with the fetch operation:', error);
    };}





gamesBySport()

function schedHtml() {
    return  `<div class="schedule-card__container">
                            <div class="teams">
                            <div><h3 class="team-name"> ${game.home_team}</h3>
                            <p><b>SCORE:</b> ${game.home_score}</p></div>
                            <hr class="team-line">
                            <div><h3 class="team-name"> ${game.away_team}</h3>
                            <p><b>SCORE:</b> ${game.away_score}</p></div>
                            </div>
                            <hr>
                            <p class="game-time"><b>GAME TIME:</b> ${game.event_status_detail}</p>
                            <hr>
                            <p><STRONG> ${game.event_location}</STRONG></p>
                            <hr>
                            <p><STRONG>${game.broadcast}</STRONG></p>
                        </div>`;
}

// document.querySelector(".schedule-card__container").innerHTML = schedHTML;


// function schedHTML(sport_id) {
//     return `<div class="schedule-card__container">
//                             <div class="teams">
//                             <div><h3 class="team-name"> ${game.home_team}</h3>
//                             <p><b>SCORE:</b> ${game.home_score}</p></div>
//                             <hr class="team-line">
//                             <div><h3 class="team-name"> ${game.away_team}</h3>
//                             <p><b>SCORE:</b> ${game.away_score}</p></div>
//                             </div>
//                             <hr>
//                             <p class="game-time"><b>GAME TIME:</b> ${game.event_status_detail}</p>
//                             <hr>
//                             <p><STRONG> ${game.event_location}</STRONG></p>
//                             <hr>
//                             <p><STRONG>${game.broadcast}</STRONG></p>
//                         </div>`}
// }


// const sportListEl = document.querySelector(".sport__name");

//  async function main() {
//     const sports = await fetch("https://api.apilayer.com/therundown/sports/1/schedule?limit=100&from=2025-07-24", requestOptions);
//     const sportsData = await sports.json();  
//    console.log(sportsData);
//  };

//  main();

    