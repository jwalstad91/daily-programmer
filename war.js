/*
#320 - War (card game)
https://www.reddit.com/r/dailyprogrammer/comments/6ilyfi/20170621_challenge_320_intermediate_war_card_game/
*/

var input1 = "5 1 13 10 11 3 2 10 4 12 5 11 10 5 7 6 6 11 9 6 3 13 6 1 8 1";
var input2 = "9 12 8 3 11 10 1 4 2 4 7 9 13 8 2 13 7 4 2 8 9 12 3 12 7 5";

//var input1 = "3 11 6 12 2 13 5 7 10 3 10 4 12 11 1 13 12 2 1 7 10 6 12 5 8 1"; 
//var input2 = "9 10 7 9 5 2 6 1 11 11 7 9 3 4 8 3 4 8 8 4 6 9 13 2 13 5";

//var input1 = "1 2 3 4 5 6 7 8 9 10 11 12 13 1 2 3 4 5 6 7 8 9 10 11 12 13"; 
//var input2 = "1 2 3 4 5 6 7 8 9 10 11 12 13 1 2 3 4 5 6 7 8 9 10 11 12 13";

var p1 = input1.split(" ");
var p2 = input2.split(" ");

function main(){
    console.log("Begin war.")
    var result = battle();
    console.log("End war.");
    // 0 : tie
    // 1 : p1 wins
    // 2 : p2 wins
    console.log(result);
}

function battle(){
    if (p1.length == 0 && p2.length != 0){
        return 2;
    }
    else if (p2.length == 0 && p1.length != 0){
        return 1;
    }
    else if (p1.length == 0 && p2.length == 0){
        return 0;
    }

    var p1Card = p1.splice(0, 1).toString();
    var p2Card = p2.splice(0, 1).toString();

    // p1 wins
    if (p1Card > p2Card){
        p1.push(p2Card);
    }

    // p2 wins
    if (p1Card < p2Card){
        p2.push(p1Card);
    }

    // Tie
    if (p1Card == p2Card){
        war();
    }

    return battle();
}

function war(){
    var p1Cards = p1.splice(0, 4);
    var p2Cards = p2.splice(0, 4);

    var p1Draw = p1Cards.splice(-1, 1).toString();
    var p2Draw = p2Cards.splice(-1, 1).toString();

    // p1 wins
    if (p1Draw > p2Draw){
        p1.push(p1Cards);
        p1.push(p1Draw);
        p1.push(p2Cards);
        p1.push(p2Draw);

    }

    // p2 wins
    if (p1Draw < p2Draw){
        p2.push(p2Cards);
        p2.push(p2Draw);
        p2.push(p1Cards);
        p2.push(p1Draw);
    }

    // Tie
    if (p1Draw == p2Draw){
        war();
    }
}

main();