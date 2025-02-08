const email = document.getElementById("email")
const senha = document.getElementById("password")

console.log("oi")

document.getElementById("login").addEventListener("submit", function(){
    if(email.value === "ADM.UVV.BR" && senha.value === "ADM#123"){
        window.alert("ADASDA")

    }
    else{window.alert("ERRADO")}
})
