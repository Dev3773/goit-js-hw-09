const LOCAL_STORAGE_KEY = "feedback-form-state";
const formRef = document.querySelector(".feedback-form");

const formData = {email: "", message: ""};

const savedData = localStorage.getItem(LOCAL_STORAGE_KEY);
const parsedData = JSON.parse(savedData);

if (savedData) {
  formData.email = parsedData.email || "";
  formData.message = parsedData.message || "";
  
  formRef.elements.email.value = formData.email;
  formRef.elements.message.value = formData.message;
}

const formHandler = (evt) => {
  if (evt.target.name === "email") {
    formData.email = evt.target.value.trim();
  }
  else if (evt.target.name === "message") {
    formData.message = evt.target.value.trim();
  }

  localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(formData));
}
  
const listenSubmit = (evt) => {
  evt.preventDefault();

  const inputRef = evt.target.elements.email.value;
  const textareaRef = evt.target.elements.message.value

  if (inputRef === ""|| textareaRef === "") {
    return alert("Fill please all fields");
  } else {
    console.log(formData);
}
    localStorage.removeItem(LOCAL_STORAGE_KEY);
    formRef.reset();
};

formRef.addEventListener("input", formHandler);
formRef.addEventListener("submit", listenSubmit);
