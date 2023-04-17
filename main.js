function validate() {
    
    let X = document.getElementById('CNIC').value;
    let XObject = document.getElementById('CNIC');
    
    let Y = /^[0-9]{5}-[0-9]{7}-[0-9]{1}$/;
    
    if(Y.test(X))
    {
        alert("Valid");
        return true;
    }
    else
    {
        XObject.style.border = "red solid 3px"
        alert("Invalid");
        return false;
    }
    
}