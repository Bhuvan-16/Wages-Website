function sendEmail(){
    var details={
        from_name : document.getElementById('name').value,
        role : document.getElementById('role').value,
        emailID : document.getElementById('email').value

    };

    emailjs.send('service_turj1ko','template_vd0jcfv', details)
    .then(function(res){
        alert("Request sended sucessfully, You will receive your ID and PASS in your email");
    })
}