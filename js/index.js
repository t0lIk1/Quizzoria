const button = document.querySelector('.hero__button');
const div = document.querySelector('.hero__congrutilation');
const input = Array.from(document.getElementsByTagName("input"));
console.log(input);
const label = document.getElementsByTagName("label");
const body = document.querySelector(".hero");
const conf = `<div class="hero__congrutilation hero__congrutilation--correct">
<h2 class="hero__text-congrutilation text">Correct</h2>
<p class="hero__descr-congrutilation descr">Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita repellat sunt adipisci soluta modi, repellendus officiis placeat porro architecto? Velit suscipit repellat at iste possimus libero quis assumenda cum accusantium?</p>
</div>`;
const uncor = `<div class="hero__congrutilation hero__congrutilation--uncorrect">
<h2 class="hero__text-congrutilation text">Decline</h2>
<p class="hero__descr-congrutilation descr">Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita repellat sunt adipisci soluta modi, repellendus officiis placeat porro architecto? Velit suscipit repellat at iste possimus libero quis assumenda cum accusantium?</p>
</div>`;
const arr = [conf, uncor];
let checkId;


button.addEventListener("click", (e) => {
  for (var i = 0; i < input.length; i++) {
    input[i].disabled = true;
    for (var g = 0; i < input.length; g++) {
      if (input[g].checked) {
        checkId = input[g].id;
        console.log(checkId);
        break;
      }
    }
  }
  if (checkId == 1 ){
    body.insertAdjacentHTML("beforeend", arr[0]);
  }
  else if (checkId !== 1 && checkId !== null){
    body.insertAdjacentHTML("beforeend", arr[1]);
  }
  else{
    alert("ошибка");
  }
  button.classList.toggle("active");
  div.classList.toggle("active");

});