const loginForm = document.querySelector('.login-form');

loginForm.addEventListener('submit', fillInForm);

function fillInForm(event) {
  event.preventDefault();

  const { email, password } = event.currentTarget.elements;

  const trimmedEmail = email.value.trim();
  const trimmedPassword = password.value.trim();

  if (!trimmedEmail || !trimmedPassword) {
    return alert('Please fill in all the fields!');
  }

  const formData = {
    email: trimmedEmail,
    password: trimmedPassword,
  };

  console.log(formData);
  event.currentTarget.reset();
}