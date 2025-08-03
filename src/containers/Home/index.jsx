import Button from "../../components/Button";
import Logo from "../../assets/IconeApp.png";

function Home() {
  return (
    <div className="mx-auto flex flex-col items-center gap-10 pt-7">
      <div className="flex flex-col items-center gap-8">
        <img src={Logo} className="w-28" />
        <p className="text-3xl leading-6 font-semibold">Soft Music</p>
      </div>
      <form className="mb-5 flex w-md max-w-1/2 flex-col items-center gap-8 rounded-2xl bg-neutral-800 p-8">
        <h1 className="text-3xl text-white">Cadastro de Usuários</h1>
        <input
          name="Name"
          type="text"
          placeholder="Nome"
          className="border-[1px] border-solid border-white rounded-4xl h-10 text-2xl pl-3 outline-none"
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
      <Button></Button>
    </div>
  );
}

export default Home;
