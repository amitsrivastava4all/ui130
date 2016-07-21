window.addEventListener("load",init);
function init(){
    document.getElementById("sayhellobt").addEventListener("click",takeData);
}
function takeData(){
    var firstName = document.getElementById("firstname").value;
    var lastName = document.getElementById("lastname").value;
    firstName = initCap(firstName);
    lastName = initCap(lastName);
    document.getElementsByTagName("h1")[1].innerHTML="Welcome  "+firstName +" "+ lastName;
    
}
