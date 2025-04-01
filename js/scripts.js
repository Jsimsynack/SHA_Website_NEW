

document.addEventListener('DOMContentLoaded', () => {
    const burger = document.querySelector('.navbar-burger');
    const menu = document.querySelector('#navbarBasicExample');
  
    burger.addEventListener('click', () => {
      menu.classList.toggle('is-active');
    });
  });


// Read More Portion for Documents Page

function toggleText(button) {
  var content = button.previousElementSibling; // Get the div before the button
  
  if (content.style.display === "none" || content.style.display === "") {
    content.style.display = "block";
    button.innerText = "....Read Less";
  } else {
    content.style.display = "none";
    button.innerText = "Read More....";
  }
}

document.addEventListener("DOMContentLoaded", function() {
  let titleBox = document.getElementById("titleHeaderBox");
  titleBox.style.animation = "puff-in-center 1s ease-out forwards";
});


function clearData() {
  document.querySelector("#submitForm input[type='text']").value = "";
  document.querySelector("#submitForm input[type='email']").value = "";
  document.querySelector("#submitForm select").selectedIndex = 0;
  document.querySelector("#submitForm textarea").value = "";
  document.getElementById("emailValidated").textContent = ""; // Clear error message
};


function sendEmail() {
  // Get form values
  let emailParams = {
      name: document.getElementById("userName").value,
      email:  document.getElementById("userEmail").value,
      subject: document.querySelector("#dropDownItem select").value,
      message: document.getElementById("textMessage").value
  }

  let emailValidated = document.getElementById("emailValidated")

  // Email validation regex
  let emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  // Validate Email
  if (!emailPattern.test(emailParams.email)) {
      emailValidated.textContent = "Please enter a valid email address.";
      return;
  } else {
      emailValidated.textContent = ""; // Clear error message if valid
  }

  // Send email using EmailJS
  emailjs.send('service_twvumuz', 'template_z8ou2od', emailParams)
      .then(function(response) {
          console.log("Email sent successfully!", response);
          alert("Form submitted and email sent successfully!");
          clearData();
      }, function(error) {
          console.error("Failed to send email.", error);
          alert("Error sending email. Please try again later.");
      });
  
  // Clear form after submission
  clearData();
};


document.addEventListener("DOMContentLoaded", function () {
  window.addEventListener("scroll", function () {
      let scrollAmount = window.scrollY;
      let body = document.body;

      if (scrollAmount > 50) { // Adjust threshold for blur activation
          body.classList.add("background-blur");
      } else {
          body.classList.remove("background-blur");
      }
  });
})

