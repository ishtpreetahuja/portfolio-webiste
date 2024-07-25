function sendMail(){
    let parms = {
        name: document.getElementById('name').value,
        email: document.getElementById('email').value,
        message: document.getElementById('message').value,
        subject: document.getElementById('subject').value
        }
        emailjs.send('service_64nmo8e', 'template_he26qos', parms).then(alert('Email sent successfully!'));
        
    }