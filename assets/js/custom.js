//JAVASCRIPT PERSONALIZADO

function sendEmail(template_params){
  emailjs.send('javitofm15_gmail_com', 'template_SDZsLF1w', template_params)
    .then(function(response) {
       console.log('SUCCESS!', response.status, response.text);
    }, function(error) {
       console.log('FAILED...', error);
    });
  alert("La funcion la ejecuta");
}
