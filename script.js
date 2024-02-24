

//camp nom en verd-vermell
const nameInput = document.querySelector('input[name="name"]');

nameInput.addEventListener('focusout', function() {
  if (this.value.trim() === '') {
    this.style.borderColor = 'red';
  } else {
    this.style.borderColor = 'green';
  }
});

//camp email validacio
const emailInput = document.querySelector('input[name="email"]');

emailInput.addEventListener('focusout', function() {
  const email = this.value.trim();
  
  if (validateEmail(email)) {
    this.style.borderColor = 'green';
  } else {
    this.style.borderColor = 'red';
  }
});

function validateEmail(email) {
  return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email);
}

//camp contrasenya validacio

document.querySelector('input[name="password"]').addEventListener("input", function() {
  const password = this.value;
  let errors = [];

  if (password.length < 8 || password.length > 15) {
      errors.push("La contrasenya ha de tenir entre 8 i 15 caràcters.");
  }
  
  if (!/[a-z]/.test(password)) {
      errors.push("La contrasenya ha de contenir almenys una lletra minúscula.");
  }
  
  if (!/[A-Z]/.test(password)) {
      errors.push("La contrasenya ha de contenir almenys una lletra majúscula.");
  }
  
  if (!/[0-9]/.test(password)) {
      errors.push("La contrasenya ha de contenir almenys un dígit numèric.");
  }
  
  if (!/[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/.test(password)) {
      errors.push("La contrasenya ha de contenir almenys un caràcter especial.");
  }
  
  if (errors.length > 0) {
      this.style.borderColor = 'red';
      // Mostra els errors a l'usuari, per exemple, amb un element HTML proper al formulari
      // Exemple: document.getElementById("errors").innerText = errors.join("\n");
  } else {
      this.style.borderColor = 'green';
      // Esborra els errors mostrats a l'usuari si n'hi ha
      // Exemple: document.getElementById("errors").innerText = "";
  }
});



//validacio de contrasenya igual

const passwordInput = document.querySelector('input[name="password"]');
const confirmPasswordInput = document.querySelector('input[name="confirm_password"]');

confirmPasswordInput.addEventListener("input", function() {
    const confirmPassword = this.value;
    const password = passwordInput.value;

    if (confirmPassword === password) {
        this.style.borderColor = 'green';
        // Esborra els errors mostrats a l'usuari si n'hi ha
        // Exemple: document.getElementById("confirmPasswordError").innerText = "";
    } else {
        this.style.borderColor = 'red';
        // Mostra un missatge d'error a l'usuari
        // Exemple: document.getElementById("confirmPasswordError").innerText = "Les contrasenyes no coincideixen.";
        
    }

 
});

//alert confirm password
confirmPasswordInput.addEventListener("focusout", function() {
    const confirmPassword = this.value;
    const password = passwordInput.value;

    if (confirmPassword !== password) {
        alert("Les contrasenyes no coincideixen");
    }
});

//codi postal al boto de submit

const form = document.querySelector('.form');
const addressInput = document.querySelector('textarea[name="address"]');
const submitButton = document.getElementById('submit-btn');

form.addEventListener('submit', function(event) {
    if (addressInput.value.trim() === '') {
        event.preventDefault(); 
        alert("L'adreça postal és obligatòria. Si us plau, introdueix una adreça postal.");
    }
});


