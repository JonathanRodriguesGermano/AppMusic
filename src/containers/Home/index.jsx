import Button from "../../components/Button";
import Logo from "../../assets/IconeApp.png";
import Login from "../../components/AuthButton";
import Logout from "../../components/Button";
import { auth } from "../../firebase/config";
import { useEffect, useState } from "react";

function Home() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    auth.onAuthStateChanged(setUser);
  }, []);

  return (
    <div className="mobile-fullscreen-container mx-auto mt-10 flex max-w-[734px] flex-col items-center gap-10 rounded-2xl bg-neutral-800 p-8">
      <div className="flex flex-col items-center gap-8">
        <img src={Logo} className="w-28" />
        <p className="text-3xl leading-6 font-semibold">Soft Music</p>
      </div>
      <form className="flex w-md max-w-2xl flex-col items-center gap-8 rounded-2xl bg-violet-600 p-8">
        <h1 className="text-3xl text-white">Cadastro de Usuários</h1>

        <input
          name="Name"
          type="text"
          placeholder="Nome"
          className="h-11 rounded-4xl border-[1px] border-solid border-white pl-3 text-2xl outline-none hover:bg-gray-500"
        />
        <input name="Age" type="number" className="bg-white" />
        <input name="e-mail" type="email" className="bg-white" />
        <button
          type="button"
          className="h-10 cursor-pointer rounded-4xl border-none bg-white text-xl font-bold hover:bg-violet-600 focus:outline-2 focus:outline-offset-2 focus:outline-violet-500 active:bg-violet-700"
        >
          Cadastra-se
        </button>
      </form>
      {user ? <Logout user={user} /> : <Login />}
    </div>
  );
}

export default Home;
