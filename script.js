const down = document.getElementById("down");
const reset = document.getElementById("reset");
const up = document.getElementById("up");
const value = document.getElementById("value");
let count = 0;

up.onclick = function(){
  count++;
  value.textContent = count;
}

down.onclick = function(){
  count--;
  value.textContent = count;
}

reset.onclick = function(){
  count=0;
  value.textContent = count;
}