function validateForm(){
     const username = document.getElementById("uname").value;
       if(username.length<4)
       {
        alert("Username must be atleast 4 characters long.");
        return false;
       }
     const password = document.getElementById("password").value;
     const pattern = /^[A-Za-z].*#$/ ;
     if(!pattern.test(password)||password.length<8){
        alert("Password must be atleast 8 character long, start with alphabet and end with #.")
        return false;
     }
     const country = document.getElementById("country").value;
     if(country===""){
        alert("Please select your country.");
        return false;
     }
     const gender = document.querySelector('input[name="gender"]:checked');
     if(!gender){
        alert("Please select your gender.");
        return false;
     }
     return true;
}