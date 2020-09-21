function validateName() {
    var name = document.forms["newParticipant"]["userName"];
    if (name.value == "") {
        alert("Please enter your name.");
        name.focus();
        return false;
        
        }
};

function validateEmailNotBlank() {
    var email = document.forms["newParticipant"]["userEmail"]
    if (email.value == "") {
        alert("Please provide your email address.");
        email.focus();
        return false;
    }
};
// Need to debug this function 
function validateEmailValidAddress() {
    var email = document.forms["newParticipant"]["userEmail"]
    atSign = email.indexOf("@");
    dot = email.lastIndexOf(".");
    
    if (atSign < 1 || (dot - atSign < 2)) {
        alert("Please enter a valid email address.")
        email.focus();
        return false;
    }
};
// Need to debug this function
function validateBirthdate() {
    var birthdate = document.forms["newParticipant"]["userBirthdate"]
    var month = parseInt(birthdate.substring(0,2));
    var day = parseInt(birthdate.substring(3, 5));
    var year = parseInt(birthdate.substring(6));
    var currentTime = new Date();
    const thisYear = currentTime.getFullYear();

    if (month > 12) {
        alert("Please enter a valid birthdate.")
        email.focus();
        return false;
    }

    // Need to validate birth day in the month
            
    if (year < 1900 || year > thisYear) {
        return false;
    }     
};

function validateCheckBox() {
    var checkbox = document.forms["newParticipant"]["checkbox"]
    if (checkbox.checked == false) {
        alert("You must agree to be contacted.")
        return false;
    } else {
        return true;
    }
};

function successMessage() {
    alert("Thank you! The form has been sumbitted.");
    clearForm();
}


function clearForm() {
    document.getElementById("name").value = "";
    document.getElementById("mail").value = "";
    document.getElementById("birthdate").value = "";
    document.getElementById("chkAgreement").value = "";
    
};


document.getElementById("reset").onclick = clearForm()



document.addEventListener('submit', function (event) {

    event.preventDefault();
    validateName();
    validateEmailNotBlank();
    // validateEmailValidAddress();
    // validateBirthdate();
    validateCheckBox();


    let data = [{
        id: 1,
        name: document.getElementById("name").value,
        email: document.getElementById("mail").value,
        birthDate: document.getElementById("birthdate").value,
        emailConsent: true
    }];
    
    console.log(data);
  

    $.ajax({
        type: "POST",
        url: "https://my-json-server.typicode.com/JustUtahCoders/interview-users-api/users",
        data: JSON.stringify(data),
        success: successMessage(),
        dataType: "json",
        contentType : "application/json"
    });
    
    console.log(data);

});



