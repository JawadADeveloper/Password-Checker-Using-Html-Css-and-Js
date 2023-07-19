const input = document.querySelector("input"),
      showHide = document.querySelector(".show_hide"),
      indicator = document.querySelector(".indicator"),
      iconText = document.querySelector(".icon-text h4"),
      text = document.querySelector(".text");

      // js code for show and hide the password.

            showHide.addEventListener("click", ()=> {
                if (input.type === "password") {
                    input.type = "text";
                   showHide.classList.replace("fa-eye-slash", "fa-eye");
                }
                else {
                    input.type = "password";
                    showHide.classList.replace("fa-eye","fa-eye-slash");
                }
            });


            // js code to show password strength 

            let alphabet = /[a-zA-Z]/,
             number = /[0-9]/,
             special = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/;


            input.addEventListener("keyup", ()=> {
                indicator.classList.add("active");

                let val = input.value;

                if((val.match(alphabet) || val.match(number) || val.match(special)) && val.length>0 && val.length <=4){
                    text.textContent = "Password is weak";
                    input.style.borderColor = "#FF6333";
                    iconText.style.color = "#FF6333";
                    iconText.style.color = "#FF6333";
                }


                if(val == ""){

                    indicator.classList.remove("active");
                    input.style.borderColor = "#A6A6A6";
                    iconText.style.color = "#A6A6A6";
                    iconText.style.color = "#A6A6A6";
                }

                
                if(val.match(alphabet) && val.match(number) && val.match(special) && val.length >= 6){
                    text.textContent = "Password is Medium";
                    input.style.borderColor = "#cc8500";
                    iconText.style.color = "#cc8500";
                    iconText.style.color = "#cc8500";
                }

                if(val.match(alphabet) && val.match(number) && val.match(special) && val.length >= 8){
                    text.textContent = "Password is Strong";
                    input.style.borderColor = "#22C32A";
                    iconText.style.color = "#22C32A";
                    iconText.style.color = "#22C32A";
                }

            });
