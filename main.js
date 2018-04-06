$(document).ready(function(){

	//intercetto l'evento submit del form
    $('#Form').submit(function(k){
		//creo le variabili dei vari input fields
        var nome = $('#name');
        var cognome = $('#surname');
        var age = $('#age');
        var mail = $('#mail');
        var password = $('#password');
        var passwordConfirmation = $('#password_confirmation');

		//controllo che nome e cognome abbiano un value più lungo o uguale a 5 caratteri
        if(nome.val().length < 5){
            nome.addClass("red-border");
        }
		//Se fosse più corto di 5 caratteri, cambio la classe notificando all'utente che quell'input non ha passato la validazione
        else {
            nome.addClass("green-border");
        }
        if(cognome.val().length < 5){
            cognome.addClass("red-border")
        } else {
            cognome.addClass("green-border");
        }

		var parseIntAge = parseInt(age.val());
		//Controllo che l'età sia un numero e controllo anche che sia compresa tra 18 e 99 anni
        if (
			isNaN(parseIntAge)
			|| parseIntAge < 18
			|| parseIntAge > 99
		) {
            age.addClass("red-border");
        } else {
            age.addClass("green-border");
        }

		//verifico che l'input mail abbia sia la chiocciola sia il punto
		if (
			!mail.val().includes('@')
			|| !mail.val().includes('.')
		) {
			mail.addClass("red-border");
		} else {
			mail.addClass("green-border");
		}

		//Verifico che il value non sia vuoto. Scrivere !stringa è come verificare che la sua length sia uguale a 0 e che le due password siano uguali
		if (
			!password.val()
			|| password.val() != passwordConfirmation.val()
		) {
			password.addClass("red-border");
			passwordConfirmation.addClass("red-border");
		} else {
			password.addClass("green-border");
			passwordConfirmation.addClass("green-border");
		}

		//ritorno false per non permettere al form di fare submit.
        return false;
    });
});
