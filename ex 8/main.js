const username = "1";
const password = "1"

const readUsername = prompt("Dati loginul");
const readPassword = prompt("dati parola");

const checkUsername = (usr) => usr === readUsername;
const checkPw = (pw) => pw === readPassword;



const checkCredentials = () => {

	const validUsername = checkUsername(username);

	const validPassword = checkPw(password);

	const success = validUsername && validPassword;

	if (success) {
		console.log("validare trecuta");
	}

	if (!(validUsername && validPassword) === "") {
		console.log("wrong input");
	} else {
		if (!validUsername ) {
		console.log("Username wrong");
		}

		if (!validPassword) {
			console.log("Password wrong");
		}

	}

	
	
}