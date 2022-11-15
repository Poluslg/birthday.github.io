function myFunction(){
        var x =document.getElementById("pass");
        if(x.type ==="password"){
            x.type="text"
        }
        else{
            x.type="password"
        }
    }

    function validate(){
        var password=document.getElementById("pass");
        var length=document.getElementById("length");

        if(password.ariaValueMax.length >=8){
            alert("loging Succesfull");
            return false;
        }
        else
            alert("loging Failed")
    }