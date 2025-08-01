/*
  Einfaches Skript für die Multiple‑Choice‑Fragen in den Lerneinheiten.
  Die Funktion checkAnswer vergleicht die ausgewählte Option mit der
  korrekten und zeigt eine Rückmeldung an. Sie wird von den Buttons
  ausgelöst und erwartet die ID des korrekten Wertes sowie die ID des
  Elements, in dem die Rückmeldung erscheinen soll.
*/

function checkAnswer(correctValue, feedbackId) {
  const selected = document.querySelector('input[name="answer"]:checked');
  const feedbackEl = document.getElementById(feedbackId);
  if (!selected) {
    feedbackEl.textContent = 'Bitte wähle eine Antwort aus.';
    feedbackEl.style.color = '#dd6b20'; // orange
    return;
  }
  if (selected.value === correctValue) {
    feedbackEl.textContent = 'Richtig! Super gemacht 🎉';
    feedbackEl.style.color = '#38a169'; // grün
  } else {
    feedbackEl.textContent = 'Leider falsch. Versuch es noch einmal!';
    feedbackEl.style.color = '#e53e3e'; // rot
  }
}