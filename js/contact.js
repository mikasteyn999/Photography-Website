// Testing this for myself...not working yet
document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById("contactForm");
    form.addEventListener("submit", function(e) {
        e.preventDefault();
  
        const fullName = form.elements["fullname"].value;
        const email = form.elements["email"].value;
        const number = form.elements["number"].value;
        const subject = form.elements["subject"].value;
        const message = form.elements["message"].value;  
        // Do something with the form data in future, print it for now
        console.log(fullName, email, number, subject, message);
        // Clear the form
        form.reset();
      });
    });
  