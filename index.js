let scoreForGamer1=0;
let scoreForGamer2=0;
 

let starter = Math.random() > 0.5 ? true : false;

while (scoreForGamer1 < 5 && scoreForGamer2 < 5) {
  if (starter) {
    if (Math.random() > 0.5) {
      scoreForGamer1++;
    }
  } else {
    if (Math.random() > 0.5) {
      scoreForGamer2++;
    }
    
  }
  starter=!starter;
}

console.log("gamerPoint1 "+scoreForGamer1);
console.log("gamerPoint2 "+scoreForGamer2);
if (scoreForGamer1>scoreForGamer2) {
      alert("Gamer 1 WINN!!")
    }
else
  {
alert("Gamer 2 WINN!!")
  }
