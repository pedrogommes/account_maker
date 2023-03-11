const accountForm = document.getElementById('account-form');

accountForm.addEventListener('submit', (event) => {
  event.preventDefault();
  
  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const phone = document.getElementById('phone').value;
  const address = document.getElementById('address').value;
  const nif = document.getElementById('nif').value;
  const observations = document.getElementById('observations').value;
  
  if (!name || !email || !phone || !address || !nif) {
    alert('Por favor preencha todos os campos obrigatórios');
    return;
  }
  
  if (!validateEmail(email)) {
    alert('Por favor introduza um endereço de email válido');
    return;
  }
  
  if (!validatePhone(phone)) {
    alert('Por favor introduza um número de telefone válido');
    return;
  }
  
  if (!validateNif(nif)) {
    alert('Por favor introduza um NIF válido');
    return;
  }
  
  console.log(`Conta registada com sucesso:
    Nome: ${name},
    Email: ${email},
    Telefone: ${phone},
    Morada: ${address},
    NIF: ${nif},
    Observações: ${observations}
  `);
  
  document.getElementById('name').value = '';
  document.getElementById('email').value = '';
  document.getElementById('phone').value = '';
  document.getElementById('address').value = '';
  document.getElementById('nif').value = '';
  document.getElementById('observations').value = '';
});

function validateEmail(email) {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  }
  
  function validatePhone(phone) {
    const regex = /^[0-9]{9}$/;
    return regex.test(phone);
  }

  function validateNif(nif) {
    const regex = /^[0-9]{9}$/;
    return regex.test(nif);
    }