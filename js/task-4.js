const loginForm = document.querySelector('.login-form');
 
loginForm.addEventListener('submit', fillInForm);

function fillInForm(element) {
  element.preventDefault();
  const { email, password } = element.currentTarget.elements;
   

  if (!email.value.trim() || !password.value.trim()) {
    return alert('Please fill in all the fields!');
  } else {
    const formData = {
      email: email.value,
      password: password.value,
    };
    console.log(formData);
    element.currentTarget.reset();
  };
};
