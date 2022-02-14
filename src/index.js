const number_range = document.querySelector(".number_range");
const number_answer = document.querySelector(".number_answer");
const btn_play = document.querySelector(".btn_play");
const game_selection = document.querySelector(".game_selection");
const game_result = document.querySelector(".game_result");

function show_result(event) {
  event.preventDefault();
  const number = parseInt(number_range.value);
  const random_number = Math.floor(Math.random() * (number + 1));

  if (number_answer.value != "") {
    const answer = number_answer.value;
    game_selection.innerHTML = `You chose: ${answer}, the machine chose: ${random_number}.`;
    if (answer == random_number) {
      game_result.innerHTML = "You Won!".bold();
    } else {
      game_result.innerHTML = "You Lost!".bold();
    }
  }
}

btn_play.addEventListener("click", show_result);
