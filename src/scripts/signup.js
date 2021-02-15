

const [user, setUser] = useState('');
const [email, setEmail] = useState('');
const [password, setPassword] = useState('');
const [emailError, setEmailError] = useState('');
const [passwordError, setPasswordError] = useState('');
const [hasAccount, setHasAccount] = useState(false);

const handleSignUp = () =>{
    FirebaseConfig
        .auth()
        .createUserWithEmailAndPassword(email, password)
        .catch(err => {
            switch (err.code){
                case "auth/email-already-in-use":
                case "auth/invalid-email":
                    setEmailError(err.message);
                    break;
                case "auth/weak-password":
                    setPasswordError(err.message);
                    break;
            }

        })
}