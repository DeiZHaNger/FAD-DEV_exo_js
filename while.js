let userName;
do {
    userName = prompt("Nom?");
    // console.log(userName);
} while (userName === null || !userName.length);


let answer;
do {
    answer = confirm("On continue?");
} while (!answer);