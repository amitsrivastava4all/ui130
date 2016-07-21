
window.addEventListener("load",init); // Lazy Load
window.addEventListener("DOMContentLoaded",init); // Eager Load
//function init2(){
//
//   alert("I am going to start......"); //document.getElementById("sayhellobt").addEventListener("click",sayHello); // Register Event and Function on Button
//}
function init(){

   //alert("I am going to start");
   document.getElementById("firstname").addEventListener("keyup",checkFirstNameCorrect); document.getElementById("sayhellobt").addEventListener("click",sayHello); // Register Event and Function on Button
}
//alert("I am Going to Start....");
//document.getElementById("sayhellobt").addEventListener("click",sayHello);
function isBlank(str, fieldName,errorfieldid){
        if(str.length==0){
            document.getElementById(errorfieldid).innerHTML= fieldName +" Can't be Blank";
            return true;
        }
        return false;
        
    }
    function minCharCheck(str,fieldname,minChar,errorfieldid){
            if(str.length<minChar){
                document.getElementById(errorfieldid).innerHTML=fieldname+" Can't Be Less than "+minChar;
                return true;
            }
        return false;
    }
        function checkFirstNameCorrect(){
           var firstname = document.getElementById("firstname"); if(!isBlank(firstname.value,"FirstName","firstnameerror")){
               if(!minCharCheck(firstname.value,"First Name",3,"firstnameerror")){
                   document.getElementById("firstnameerror").innerHTML="";
               }
           }
        }
    function sayHello(){
        var firstname = document.getElementById("firstname");
        var lastname = document.getElementById("lastname");
        var isFirstNameBlank= isBlank(firstname.value,"FirstName","firstnameerror");
        var isLastNameBlank=isBlank(lastname.value,"LastName","lastnameerror");
        if(!isFirstNameBlank){
        minCharCheck(firstname.value,"First Name",3,"firstnameerror");
        }
        if(!isLastNameBlank){
        minCharCheck(lastname.value,"Last Name",5,"lastnameerror");
        }    
            //        if(firstname.value.length==0){
//            document.getElementById("firstnameerror").innerHTML="FirstName Can't be blank";
//        }
//        var temp = firstname.value;
//        firstname.value = lastname.value;
//        lastname.value = temp;
        document.getElementsByTagName("h1")[1].innerHTML="Welcome "+firstname.value+" "+lastname.value;
        
       // alert("Hello  "+firstname.value +" "+lastname.value);
    }