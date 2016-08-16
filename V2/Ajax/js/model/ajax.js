function doAjax(methodType,url,params){
    
 var promise = new Promise(function(resolve, reject) {    
//step-1 To Make Ajax Call we need to create
// XMLHttpRequest Object
var xmlhttp = new window.XMLHttpRequest();
// step -2 open the request and specify the url 
// and method type and asynch true
//xmlhttp.open("GET","https://freegeoip.net/json/google.com",true);
    xmlhttp.open(methodType,url,true);
//xmlhttp.send(null);
    xmlhttp.send(params);
//xmlhttp.send("name='Amit'&id=1001");
// send the request to the server and not specify the values
//xmlhttp.onreadystatechange=function(){
    xmlhttp.onload = function() {
        if (xmlhttp.status == 200) {
                        resolve(xmlhttp.response); 
        }
        else {
                        reject(Error(xmlhttp.statusText)); // status is not 200 OK, so reject
                    }
     //if(xmlhttp.readyState==4 && xmlhttp.status==200){
   //console.log("Type of ",typeof xmlhttp.responseText);
       // return xmlhttp.responseText;
        //var object = JSON.parse(xmlhttp.responseText);
        //document.getElementById("mymsg").innerHTML= "IP Address is "+object.ip+" IP Location is "+object.country_name;
    }
});
 return promise;
 }