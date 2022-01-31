export function player(name, char) {
  let score = 0;

  function incScore() {
    score++;
  }

  function delScore() {
    score = 0;
  }

  function getScore() {
    return score;
  }

  return { name, char, incScore, delScore, getScore };
}
