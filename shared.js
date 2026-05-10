function validate(inputId, correctAnswer, messageId, lightId) {
  const userCode = document.getElementById(inputId).value.trim();
  const textEl = document.getElementById(messageId);
  const lightEl = document.getElementById(lightId);

  lightEl.className = 'indicator';
  if (userCode === correctAnswer) {
    lightEl.classList.add('ok');
    textEl.className = 'result-text ok';
    textEl.innerText = '✓ Correct!';
  } else {
    lightEl.classList.add('fail');
    textEl.className = 'result-text fail';
    textEl.innerText = '✗ Not quite — check spacing or syntax.';
  }
}
