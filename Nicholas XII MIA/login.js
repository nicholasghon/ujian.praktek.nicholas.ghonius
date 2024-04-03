function Login(){
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    if (username == "admin" && password == "admin"){
        window.alert("Login berhasil");
        window.location = ("index.html")
    }else if (username == "" && password == ""){
        window.alert("Masukan Username / Sandi");
    } else {
        window.alert("Sandi/ Username Salah");
    }
}
function Signup(){
    window.alert("Error 101");
}