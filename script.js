
function zmienDane() {
  const tel = document.getElementById('nowyTelefon').value;
  const email = document.getElementById('nowyEmail').value;
  if (tel) document.getElementById('telefon').textContent = tel;
  if (email) document.getElementById('email').textContent = email;
}
    