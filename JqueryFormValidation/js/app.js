// Problem: Hints are shown even when the form is valid
// Solution: Hide and show hints at appropriate times

var $password = $("#password");
var $confirmPassword = $("#confirm_password");

// Hide hints
$("form span").hide();

function isPasswordValid() {
    return $password.val().length > 8;
}

function arePasswordsMatching() {
    return $password.val() === $confirmPassword.val();
}

function canSubmit() {
    return isPasswordValid() && arePasswordsMatching();
}

function passwordEvent() {
    // When password is valid (over 8 character)
    if (isPasswordValid()) {
        // Hide hint if valid
        $password.next().hide();   
    } else {        
        // Show hint if invalid
        $password.next().show();
    }
}

function confirmPasswordEvent() {
    // When confirmation is valid (confirmation matches password)
    if (arePasswordsMatching()) {
        // Hide hint if valid
        $confirmPassword.next().hide();
    } else {
        // Show hint if invalid
        $confirmPassword.next().show();
    }
}

function enableSubmitEvent() {
    $("#submit").prop("disabled", !canSubmit());
}

// When event happens on password input
// Show or hide confirmation input hint when password input value is changed
// Check to see if can submit the form
$password.focus(passwordEvent).keyup(passwordEvent).keyup(confirmPasswordEvent).keyup(enableSubmitEvent);
    
// When event happens on confirmation input
// Check to see if can submit the form
$confirmPassword.focus(confirmPasswordEvent).keyup(confirmPasswordEvent).keyup(enableSubmitEvent);

// Disable submit button by default
enableSubmitEvent();
    