const inputs = document.querySelectorAll(".input");

function focusFunc() {
  let parent = this.parentNode;
  parent.classList.add("focus");
}

function blurFunc() {
  let parent = this.parentNode;
  if (this.value == "") {
    parent.classList.remove("focus");
  }
}

inputs.forEach((input) => {
  input.addEventListener("focus", focusFunc);
  input.addEventListener("blur", blurFunc);
});

function sendMail() {
  const params = {
    from_name: document.getElementById("name").value,
    email_id: document.getElementById("email").value,
    phone_no: document.getElementById("phone").value,
    message: document.getElementById("message").value,
  };

  emailjs.send("service_0i8ldy8", "template_qvbst7k", params)
    .then((response) => {
      alert("Email Sent!!");
    })
    .catch((error) => {
      console.error("Error sending email:", error);
      alert("Failed to send email.");
    });
}
