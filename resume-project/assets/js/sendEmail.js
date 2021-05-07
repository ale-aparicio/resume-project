function sendMail(contactForm) {
    email.js.send("gmail", "rosie", {
        "from_name" : contactForm.name.value,
        "from_name" : contactForm.emailaddress.value,
        "project_request": contactForm.projectsummary.value
    })
    .then(
        function(response){
            console.log("SUCESS", response);
        }, function(error){
            console.log("FAILED", error);
        });

        return false;
}