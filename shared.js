// Makes answers comparable by ignoring harmless differences:
// - extra spaces, and spaces around punctuation  ( int* ptr;  =  int *ptr; )
// - single vs double quotes                      ( 'Hi'  =  "Hi" )
// - <tag/> vs <tag>                              ( <meta charset="UTF-8"/> )
function normalize(code) {
  return code
    .trim()
    .replace(/\s+/g, ' ')
    .replace(/'/g, '"')
    .replace(/\s*\/>/g, '>')
    .replace(/\s*([{}()\[\];,=<>*:])\s*/g, '$1');
}

function validate(inputId, correctAnswer, messageId, lightId) {
  const userCode = document.getElementById(inputId).value;
  const textEl = document.getElementById(messageId);
  const lightEl = document.getElementById(lightId);

  lightEl.className = 'indicator';
  textEl.className = 'result-text';

  if (!userCode.trim()) {
    textEl.innerText = 'Type your answer first.';
    return;
  }

  if (normalize(userCode) === normalize(correctAnswer)) {
    lightEl.classList.add('ok');
    textEl.className = 'result-text ok';
    textEl.innerText = '✓ Correct!';
  } else {
    lightEl.classList.add('fail');
    textEl.className = 'result-text fail';
    textEl.innerText = '✗ Not quite — check the syntax and try again.';
  }
}
