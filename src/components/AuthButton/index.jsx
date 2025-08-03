import { auth } from "../../firebase/config";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";

function Login() {
  const loginGoogle = async () => {
    const provider = new GoogleAuthProvider();
    provider.addScope("https://www.googleapis.com/auth/contacts.readonly");
    provider.setCustomParameters({
      login_hint: "user@example.com",
    });

    try {
      const result = await signInWithPopup(auth, provider);
      console.log("Usuário logado:", result.user);
    } catch (error) {
      console.error("Erro ao logar:", error);
    }
  };

  return (
    <div>
      <h2>Login</h2>
      <button onClick={loginGoogle}>Entrar com goggle</button>
    </div>
  );
}

export default Login;
