import Image from "next/image";
import logo from "/public/Logo.svg";
import Link from "next/link";
import cellimage from "/public/Imagem.svg";

export default function HomePage() {
  return (
    <div className="flex w-screen h-screen justify-center py-[10%] px-[10%] items-center bg-gradient-to-b from-green-400 to-green-700">
      <div className="container rounded-lg flex w-full justify-evenly items-center bg-[#F7FAFC] p-[5%] h-auto">
        <div className="flex flex-col h-full justify-center ">
          <div className="py-4">
            <Image
              src={logo}
              alt="Logotipo GreenCircles"
              width={249}
              height={52}
            />
          </div>
          <div className="flex flex-col pb-10">
            <h2 className="text-black font-bold text-[24px] mb-3">
              Cadastre-se!
            </h2>
            <p className="text-black text-[14px] mb-5">
              Venha conhecer um novo leque de oportunidades!
            </p>
            <form className="flex flex-col">
              <label className="text-black text-[14px]">Nome</label>
              <input
                className="text-black border rounded-lg text-[14px] py-2 px-2 mb-5"
                type="text"
                placeholder="Nome"
              />
              <label className="text-black text-[14px]">E-mail</label>
              <input
                className="text-black text-[14px] py-2 px-2 border rounded-lg mb-5"
                type="email"
                placeholder="E-mail"
              />
              <label className="text-black text-[14px]">Senha</label>
              <input
                className="text-black text-[14px] py-2 px-2 border rounded-lg mb-5"
                type="password"
                placeholder="********"
              />
              <label className="text-black text-[14px]">
                Escolha onde você mora:
              </label>
              <select
                name="Cidades"
                className="text-black text-[14px] py-2 px-2 border rounded-lg dark:text-gray-400 bg-transparent dark:focus:border-gray-600 mb-5"
              >
                <option selected>Cidade</option>
                <option value="Cidade 1">Cidade 1</option>
                <option value="Cidade 2">Cidade 2</option>
                <option value="Cidade 3">Cidade 3</option>
                <option value="Cidade 4">Cidade 4</option>
                <option value="Cidade 5">Cidade 5</option>
              </select>
              <label className="text-black text-[14px]">
                Escolha o grupo que representa:
              </label>
              <select
                name="Grupos"
                className="text-black text-[14px] py-2 px-2 border rounded-lg dark:text-gray-400 bg-transparent dark:focus:border-gray-600 mb-5"
              >
                <option selected>Grupo</option>
                <option value="Grupo 1">Grupo 1</option>
                <option value="Grupo 2">Grupo 2</option>
                <option value="Grupo 3">Grupo 3</option>
                <option value="Grupo 4">Grupo 4</option>
                <option value="Grupo 5">Grupo 5</option>
              </select>
              <input
                className="bg-green-400 rounded-[8px] py-2 mb-3"
                type="submit"
                value="Cadastrar"
              />
            </form>
            <p className="text-gray-400 text-[14px] flex items-center justify-center mb-2">
              ou
            </p>
            <div className="flex justify-center">
              <p className="text-black text-[14px]">
                Já tem uma conta?{" "}
                <Link href="/" className="text-green-400 text-[14px]">
                  Clique aqui e faça login
                </Link>
              </p>
            </div>
          </div>
        </div>
        <div>
          <Image
            className="mt-[70px]"
            src={cellimage}
            alt="Celular e Pessoa"
            width={785 * 0.75}
            height={818 * 0.75}
          />
        </div>
      </div>
    </div>
  );
}