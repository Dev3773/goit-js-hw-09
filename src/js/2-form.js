const inputRef = document.querySelector(".form__input");

const fooRef = (event) => {
  if (event.target.value) {
     inputRef.classList.add('active');
  } else {
  inputRef.classList.remove('active');
   }
} 

  inputRef.addEventListener('input', fooRef);