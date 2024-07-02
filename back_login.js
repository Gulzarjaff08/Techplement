const check = ()=>{
    username=document.querySelector("#username").value;
    password=document.querySelector("#password").value;

    if(username === "12212195@nitkkr.ac.in" && password === "1234"){
        alert("login succesfull!!");
        window.location.href='index.html';
    }
    else{
        alert("please check username and password");
    }
}