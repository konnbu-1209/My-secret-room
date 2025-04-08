
function checkPassword() {
  const correctPassword = "makuibinora_ iakukayi_50420901";
  const input = document.getElementById("password-input").value.trim();
  const errorMessage = document.getElementById("error-message");

  if (input === correctPassword) {
    document.getElementById("password-screen").style.display = "none";
    document.getElementById("content-screen").style.display = "block";
  } else {
    errorMessage.textContent = "パスワードが間違っています。";
  }
}
