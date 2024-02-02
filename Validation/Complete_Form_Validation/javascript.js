
//start firstname validation
function fname_val(){
    var fname=document.getElementById("firstname").value;
    var input=document.getElementById("firstname");
    var check=document.getElementById("tick");
    fname == "" ?input.setAttribute("value","this field is empty"):check.style.display="inline";
    fname == "" ?input.style.border="1px solid red":check.style.display="inline";
    fname==""?input.style.color="red":check.style.display="inline";
}

function fname_val_close(){
    var fname=document.getElementById("firstname").value;
    var input=document.getElementById("firstname");
    fname=="this field is empty"?input.setAttribute("value",""):check.style.display="inline";
    fname=="this field is empty"?input.style.color="#ccc":check.style.display="inline";
    fname=="this field is empty"?input.style.border="1px solid #ccc":check.style.display="inline";
}

//end firstname validation

//start lastname validation

function lname_val(){
    var lname=document.getElementById("lastname").value;
    var input=document.getElementById("lastname");
    var check=document.getElementById("tick");
    lname == "" ?input.setAttribute("value","this field is empty"):check.style.display="inline";
    lname == "" ?input.style.border="1px solid red":check.style.display="inline";
    lname==""?input.style.color="red":check.style.display="inline";
}

function lname_val_close(){
    var lname=document.getElementById("lastname").value;
    var input=document.getElementById("lastname");
    lname=="this field is empty"?input.setAttribute("value",""):check.style.display="inline";
    lname=="this field is empty"?input.style.color="#ccc":check.style.display="inline";
    lname=="this field is empty"?input.style.border="1px solid #ccc":check.style.display="inline";
}

//end lastname validation

//start mobile validation

function mob_val(){
    //noted bar bar app setAttribute function user nahi karsakty 
    var mobile=document.getElementById("mobile").value;
    var input = document.getElementById("mobile");
    var check=document.getElementById("tick");
    var check_digit_leng=mobile==""?input.setAttribute("value","this field is empty"):mobile;
    var check_digit_leng=mobile==""?input.setAttribute("style","color:red;border:1px solid red"):mobile;
    var check_digit=check_digit_leng.lenght==10?check_digit_leng:input.setAttribute("value","please 10 digits number only");
    check_digit.charAt(0)==9 || check_digit.charAt(0)==3 || check_digit.charAt(0)==0 ? check.style.display="inline":input.setAttribute("value","please correct code of your country");
    
}

function mobile_stop_val(){
    var input=document.getElementById("mobile");
    input.setAttribute("value","");
    input.setAttribute("style","color:black;border:1px solid #ccc");
}

//end mobile validation

//start remobile validation
function remobile_val(){
    var mobile=document.getElementById("mobile").value;
    var remobile=document.getElementById("re-mobile").value;
    var input=document.getElementById("re-mobile");
    var check=document.getElementById("tick");
    var re_check = remobile==""?input.value="field is empty":remobile;
    re_check==mobile?check.style.display="inline":input.value="not matched width mobile number";
}
//end remobile validation

//start email validation

function email_val(){
    var email=document.getElementById("email").value;
    var hint_email=document.getElementById("hint-email");
    email.match('@')?hint_email.style.display="inline":hint_email.style.display="none";
    email.match("gmail.com")?hint_email.style.display="none":email;
    email.match("yahoomail.com")?hint_email.style.display="none":email;
}

function gmail(){
    var email=document.getElementById("email").value;
    var email_input=document.getElementById("email");
    email.input.value=email+"gmail.com";
    var hint_email=document.getElementById("hint-email");
    hint_email.style.display="none";
}

function yahoomail(){
    var email=document.getElementById("email").value;
    var email_input=document.getElementById("email");
    email.input.value=email+"yahoomail.com";
    var hint_email=document.getElementById("hint-email");
    hint_email.style.display="none";
}

//end email validation


//start username validation

function uname_val(){
    var fname=document.getElementById("firstname").value;
    var lname=document.getElementById("lastname").value;
    var uname=document.getElementById("username");
    uname.setAttribute("value",fname+lname);
    uname.setAttribute("disaled","disabled");
    
}
//end username validation


//start submit validation

function submit_val(){
    var fname=document.getElementById("firstname").value;
    var lname=document.getElementById("lastname").value;
    var mobile=document.getElementById("mobile").value;
    var remobile=document.getElementById("re-mobile").value;
    var email=document.getElementById("email").value;
    var uname=document.getElementById("username").value;
    var pass=document.getElementById("password").value;
    var btn=document.getElementById("sign-up");
    
    fname,lname,mobile,remobile,email,uname,pass==""?btn.disabled=true:btn.disabled=false;
    fname,lname,mobile,remobile,email,uname,pass==""?btn.disabled=true:btn.style.backgroundColor="red";
    fname,lname,mobile,remobile,email,uname,pass==""?btn.disabled=true:btn.cursor="pointer";
    
}

//end submit validation

//start password validation

function pass_val(){
    //note: har tick ki id value neshan different chona chahye
    var pwd=document.getElementById("password").value;
    var input=document.getElementById("password");
    var check=document.getElementById("tick");
    var capital=/[A-Z]/g;
    var lower=/[a-z]/g;
    var num=/[0-9]/g;
    var alpha = /[`|~|@|#|$|%|^|&|*|(|)|\|{|}[|]|?|/]/g;
    var check_capital=pwd==""?input.value="field is empty":pwd;
    var check_lower=check_capital.charAt(0).match(captical)?check_capital:window.alet("first letter should be capital");
    var check_number=check_lower.match(lower)?check_lower:window.alert("please one small letter");
    var chacke_alpha=check_number.match(num)?number:window.alert("please enter atleast one number");
    var check_length=check_alpha.match(alpha)?check_alpha:window.alert("please atleast one special character");
    check_length.length>6?check.style.display="inline":window.alert("weak password enter atleast 6 digits password");
    
}

//end password validation