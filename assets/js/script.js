$(document).ready(function() { //El modal del test de seguridad
    $('#submitTestBtn').on('click', function() {
        let score = 0;
        const totalQuestions = 3;
        if ($('#securityTestForm input:checked').length < totalQuestions) {
            alert('Por favor, responde todas las preguntas.');
            return;
        }
        if ($('input[name="q1"]:checked').val() === 'no') {
            score++;
        }
        if ($('input[name="q2"]:checked').val() === 'yes') {
            score++;
        }
        if ($('input[name="q3"]:checked').val() === 'yes') {
            score++;
        }
        const resultDiv = $('#testResult');
        let message = '';
        let alertClass = '';

        if (score === 3) {
            message = '<strong>¡Excelente!</strong> Tus hábitos de seguridad son muy buenos. ¡Sigue así!';
            alertClass = 'alert-success';
        } else if (score >= 1) {
            message = '<strong>¡Puedes mejorar!</strong> Tienes algunas buenas prácticas, pero hay áreas clave que puedes reforzar.';
            alertClass = 'alert-warning';
        } else {
            message = '<strong>¡Cuidado!</strong> Tus hábitos actuales te ponen en riesgo. Te recomendamos leer nuestros consejos detenidamente.';
            alertClass = 'alert-danger'; 
        }
        resultDiv.html(message);
        resultDiv.removeClass('alert-success alert-warning alert-danger').addClass(alertClass);
        resultDiv.slideDown();
    });
    
    $('#securityTestModal').on('hidden.bs.modal', function () {
        $('#securityTestForm')[0].reset(); 
        $('#testResult').hide().html('').removeClass('alert-success alert-warning alert-danger');
    });

   $('#contactForm').on('submit', function(event) { //El formulario de contacto
                const form = $(this);
        if (form[0].checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
        } else {
            event.preventDefault(); 
            alert('¡Mensaje enviado con éxito! Gracias por contactarnos.');
            form[0].reset();
            form.removeClass('was-validated');
            return;
        }
        form.addClass('was-validated');
    });
});
