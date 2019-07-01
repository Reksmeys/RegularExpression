var form = document.getElementById('frm');
form.addEventListener('submit', function(e){
    e.preventDefault()
    let username = document.getElementById('username').value;
    let sname = document.getElementById('school').value;
    let patt = /[^a-z]/gi;
    let pattSchool = /[^a-z \s]/gi;
    let pattContact = /[0-9]/gi;
    let msgResult = document.getElementById('usermsg');
    let sResult = document.getElementById('smsg');

    let contact = document.getElementById('phone');
    let cMsg = document.getElementById('phonemsg');
    //match 
    //valiate on username text field
    if (username.match(patt) != null){
        msgResult.innerHTML = "*user input number or other character beside a -z"
        msgResult.style.color = 'red'
    }
    if (username.match(patt) == null){
        msgResult.innerHTML = "*correct username"
        msgResult.style.color = 'green'
    }
    if (username == "" || username == null){
        msgResult.innerHTML = "*cannot blank"
        msgResult.style.color = 'red'
    }
    //validate school name text field
    if(sname.match(pattSchool) != null){
        console.log("incorrect school name")
        sResult.innerHTML = "*incorrect school name"
        sResult.style.color = 'red'
    }
    if (sname.match(pattSchool) == null){
        sResult.innerHTML = "correct school name"
        sResult.style.color = 'green'
    }
    if (sname == "" || sname == null){
        sResult.innerHTML = "*cannot blank school"
        sResult.style.color = 'red'
    }
    if (contact.value.length < 9 || contact.value.length > 10){
        cMsg.innerHTML = "*invalid contact"
        cMsg.style.color = 'red';
    }
    if (contact.value.match(pattContact) == null){
        cMsg.innerHTML = "*invalid contact"
        cMsg.style.color = 'red';
    }
    if (contact.value[0] == '0' && contact.value.match(pattContact) != null){
        contact.value = `+855${contact.value.substring(1)}`
    }



})