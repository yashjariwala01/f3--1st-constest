let score = {};

function OpeningCeremony(score, Race100M){
    score = {red:0, blue:0, green:0, yellow:0};
    setTimeout(() => {
        console.log("Let the game and party be-gain!");
        Race100M(score, LongJump);
    }, 1000);
}

function Race100M(score, LongJump){
    setTimeout(() => {
        console.log("Initial scores");
        console.log(score);
        const obj = {
             red: Math.ceil(Math.random() * 5) + 10,
             blue:  Math.ceil(Math.random() * 5) + 10,
             green:  Math.ceil(Math.random() * 5) + 10,
             yellow:  Math.ceil(Math.random() * 5) + 10
        };
        const sortedArr = Object.keys(obj).sort((a, b) => obj[a] - obj[b]);

        let newObj = {};
        newObj[sortedArr[0]] = 50;
        newObj[sortedArr[1]] = 25;
        console.log(`${sortedArr[0]} Wins 100M race` );

        score[sortedArr[0]] += 50;
        score[sortedArr[1]] += 25;

        console.log("Updated Score");
        console.log(score);
        LongJump(score, HighJump);

    }, 3000);

    
}

function LongJump(score, HighJump){
    setTimeout(() => {
        console.log("Scores before Long Jump");
        console.log(score);

        const color = ["red", "blue", "green", "yellow"][Math.ceil(Math.random() * 3)];

        score[color] += 150;

        console.log("Winner of the Long Jump: " + color);
        console.log("Score after complettion of Long Jump: ", score);

        HighJump(score, AwardCeremony);
        
    }, 2000);
}

function HighJump(score, AwardCeremony){

    console.log("Scores before High Jump");
    console.log(score);

    let color = prompt("Please enter the Colour of your choice");

    if (color == null || color == "" || (!(color === "red") && !(color === "green") && !(color === "blue") && !(color === "yellow"))) {
        console.log("Event was cancelled");
        AwardCeremony(score);
    } else {
        score[color] += 100;
        console.log("Winner of High Jump: " + color);
        console.log("Score after finishing the High Jump: ", score);

        AwardCeremony(score);
    }   
}

function AwardCeremony(score){
    
    let sortedArr = Object.keys(score).sort((a, b) => score[b] - score[a]);
    let n = sortedArr.length;
    
    console.log(`${sortedArr[0]} Came 1st with ${score[sortedArr[n-1]]} points`);
    console.log(`${sortedArr[1]} Came 2nd with ${score[sortedArr[n-2]]} points`);
    console.log(`${sortedArr[2]} Came 3rd with ${score[sortedArr[n-3]]} points`);
    console.log(`${sortedArr[3]} Came last with ${score[sortedArr[n-4]]} points`);
}

OpeningCeremony(score, Race100M);