import throttle from 'lodash.throttle';
const formRef = document.querySelector('.feedback-form');
formRef.addEventListener('input', throttle(onFormInput, 500));
let formData = {};
function onFormInput(evt) {
  const key = evt.target.name;
  formData[key] = evt.target.value;
  localStorage.setItem('feedback-form-state', JSON.stringify(formData));
}

function checkLS() {
  const data = JSON.parse(localStorage.getItem('feedback-form-state'));
  if (!data) {
    return;
  }
  formData.email = data.email || '';
  formData.message = data.message || '';
  formRef.elements.email.value = data.email || '';
  formRef.elements.message.value = data.message || '';
}

checkLS();

formRef.addEventListener('submit', onFormSubmit);
function onFormSubmit(evt) {
  evt.preventDefault();
  if (!formData.email || !formData.message) {
    alert('Please fill out all inputs');
    return;
  }
  console.log(formData);
  evt.target.reset();
  localStorage.removeItem('feedback-form-state');
  formData = {};
}
