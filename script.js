let abc = [];

for (var y = 0; y <= 52; y++) {
   abc.push("" + y + "");
}

let i = Math.floor(Math.random() * 52);
console.log(i);
for(let x = 0; x <= abc.length; x++) {
      var addButtons = document.getElementById('buttons');
      addButtons.innerHTML += "<button onclick='game(this.value)' value=" + x + "></button>"
}

function game(playerChoose) {
      console.log(playerChoose);
      let sound = document.getElementById("audio");
      sound.play();
      if(playerChoose === abc[i]) {
            document.getElementById('lost').style.display = "block";
            
      //random gif
            let randomImg = Math.floor(Math.random() * 2) + 1;
            let img = document.createElement('div');
            img.style.width = "100%";
            img.style.height = "685px";
            img.style.margin = "0 auto";
            img.style.position = "absolute";
            img.style.top = "0";
            img.style.left = "0";
            img.style.right = "0";
            img.style.backgroundImage = "url('" + randomImg + ".gif')";
            
            document.body.appendChild(img);
            
            let soundNoise = document.getElementById('audioNoise');
            soundNoise.play();
      }else {
            event.target.style.backgroundImage = "url('ballClicked.png')";
      }
}
