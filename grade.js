let containerr = document.querySelector(".containerr");
let timeNow = new Date().getHours();
console.log(timeNow);
let greeting =
  timeNow >= 5 && timeNow < 12   
    ? "Good Morning" 
    : timeNow >= 12 && timeNow < 17
    ? "Good Afternoon"
    : timeNow >= 17 && timeNow < 20
    ? "Good Evening"
    : "Good Night";

let message =
  timeNow >= 5 && timeNow < 12   
    ? "Start your day with the good news of your hard-earned grades."
    : timeNow >= 12 && timeNow < 17
    ? "Your hard work is paying off. See your results."
    : timeNow >= 17 && timeNow < 20
    ? "Relax and review your progress."
    : "End your day with a look at your well-deserved grades.";

console.log(greeting);
containerr.innerHTML = `<h4>${greeting}</h4><h5>${message}</h5>`;

function show_result(){
    let T = document.querySelector("#T").value;
    let E = document.querySelector("#E").value;
    let A = document.querySelector("#A").value;
    let Ec = document.querySelector("#Ec").value;
    let C = document.querySelector("#C").value;
    let CO = document.querySelector("#CO").value;

    let subjects = [T, E, A, Ec, C, CO];
    let invalidInput = subjects.some(mark => mark === "" || mark < 0 || mark > 100);
    let hasFailedSubject = subjects.some(mark => mark < 35);

    let resultButton = document.getElementById("resultButton");

    if (invalidInput) {
        alert("Please enter all marks between 0 and 100.");
        return;
    }

    let to = subjects.reduce((acc, mark) => acc + parseFloat(mark), 0);
    let per = (to * 100) / 600;

    if (hasFailedSubject) {
        document.querySelector(".result h2").innerHTML = "You have failed";
        resultButton.style.backgroundColor = "#e46161";
        document.querySelector(".gra").innerHTML = "Reappear";
    } else {
        document.querySelector(".result h2").innerHTML = "You have passed";
        resultButton.style.backgroundColor = "#a2c11c";
        if (per >= 90) {
            document.querySelector(".gra").innerHTML = "A+";
        } else if (per >= 80) {
            document.querySelector(".gra").innerHTML = "A";
        } else if (per >= 70) {
            document.querySelector(".gra").innerHTML = "B+";
        } else if (per >= 60) {
            document.querySelector(".gra").innerHTML = "B";
        } else if (per >= 50) {
            document.querySelector(".gra").innerHTML = "C+";
        } else if (per >= 40) {
            document.querySelector(".gra").innerHTML = "C";
        } else {
            document.querySelector(".gra").innerHTML = "D";
        }
    }

    document.querySelector(".to").innerHTML = to;
    document.querySelector(".per").innerHTML = per;
}
