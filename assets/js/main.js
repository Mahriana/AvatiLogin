document.getElementById("darkModeToggle").addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
  const isDarkMode = document.body.classList.contains("dark-mode");
  const icon = document.querySelector("#darkModeToggle img");
  const logo = document.getElementById("logo");

  // Alterar o ícone do botão
  icon.src = isDarkMode ? "/assets/img/sun.png" : "/assets/img/moon.png";

  // Alterar a logo
  logo.src = isDarkMode
    ? "/assets/img/logodark.png"
    : "/assets/img/logolight.png";

  // Salvar a preferência no localStorage
  localStorage.setItem("theme", isDarkMode ? "dark" : "light");
});

// Aplicar o tema salvo
const savedTheme = localStorage.getItem("theme");
if (savedTheme === "dark") {
  document.body.classList.add("dark-mode");
  document.querySelector("#darkModeToggle img").src = "/assets/img/sun.png";
  document.getElementById("logo").src = "/assets/img/logodark.png";
} else {
  document.getElementById("logo").src = "/assets/img/logolight.png";
}

function validaLogin() {
  // Limpa mensagens anteriores
  const emailError = document.getElementById("email-error");
  const passwordError = document.getElementById("password-error");
  const successMessage = document.getElementById("success-message");
  emailError.textContent = "";
  passwordError.textContent = "";
  successMessage.textContent = "";

  const email = document.getElementById("email").value;
  const password = document.getElementById("senha").value; // Alteração no ID
  let hasError = false;

  // Validação do e-mail
  if (!email || !email.includes("@") || !email.includes(".")) {
    emailError.textContent = "Por favor, insira um e-mail válido.";
    hasError = true;
  }

  // Validação da senha
  if (!password || password.length < 6) {
    passwordError.textContent = "A senha deve ter pelo menos 6 caracteres.";
    hasError = true;
  }

  if (!hasError) {
    // Simula envio
    successMessage.textContent = "Enviando...";
    setTimeout(() => {
      successMessage.textContent = "Login realizado com sucesso!";
    }, 2000); // Simula 2 segundos de carregamento
  }

  // Previne o comportamento padrão do formulário
  return false;
}
