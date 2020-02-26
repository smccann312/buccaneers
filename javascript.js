function validateForm(event) {
   var myForm = document.querySelector("#myForm");
   var tosWidget = document.querySelector("#tos");
  
   
   // Check to see if any form is empty.
   if (( myForm.firstName.value === "" )||( myForm.lastName.value === "" )||( myForm.address.value === "" )||( myForm.phoneNumber.value === "" )||( myForm.email.value === "" )||( myForm.zip.value === "" )||( myForm.password.value === "" )) {
	alert("One or more fields is incorrect. Check the fields in orange");
   }
   // Replace false with an expression that checks whether myForm.firstName.value is empty.
   if ( myForm.firstName.value === "" ) {
      myForm.firstName.style.backgroundColor = "Orange";
   }
   // Replace false with an expression that checks whether myForm.lastName.value is empty.
   if ( myForm.lastName.value === "" ) {
      myForm.lastName.style.backgroundColor = "Orange";
   }

   // Replace false with an expression that checks whether myForm.address.value is empty.
   if ( myForm.address.value === "" ) {
      myForm.address.style.backgroundColor = "Orange";
   }

   // Replace false with an expression that checks whether myForm.phoneNumber.value is empty.
   if ( myForm.phoneNumber.value === "" ) {
      myForm.phoneNumber.style.backgroundColor = "Orange";
   }

   // Replace false with an expression that checks whether myForm.email.value is empty.
   if ( myForm.email.value === "" ) {
      myForm.email.style.backgroundColor = "Orange";

   // Replace false with an expression that checks whether myForm.zip.value is empty.
   if ( myForm.zip.value === "" ) {
      myForm.zip.style.backgroundColor = "Orange";
   }


   // Replace false with an expression that checks whether myForm.password.value is empty.
   if ( myForm.password.value === "" ) {
      myForm.password.style.backgroundColor = "Orange";
                                              
   }



   }


    

   if (!tosWidget.checked) {
      alert("Please agree to terms of service.")
      event.preventDefault();
   }

}

var myForm = document.querySelector("#myForm");
myForm.validate.addEventListener("click", validateForm);