import Image from "next/image";
import user from "/public/Profile.svg";
import imgTmp from "/public/agricultor.jpg";
import Link from "next/link";

export default function LoginScreen() {
  return (
    <div className="bg-[#F2F3F5] h-screen w-screen flex justify-center items-center">
      <div className="flex w-full max-w-[1160px] justify-between items-center">
        <div className="max-w-[380px] w-full mr-32">
          <h1 className="text-black text-[48px] font-bold">
            A melhor forma de se
            <span className="text-[#35B276]"> informar.</span> Faça parte do
            <span className="text-[#35B276]"> círculo!</span>
          </h1>
          <p className="text-black text-[20px]">
            Venha conhecer a forma mais rápida de savber tudo o que acontece no
            mundo agro. Cadastre-se agora e comece a fazer negócios com
            especialistas da sua região.
          </p>
        </div>
        <div className="container bg-white w-full max-w-[840px] flex justify-between items-center rounded-[16px]">
          <div className="flex flex-col w-full items-center my-6">
            <Image className="mb-4 w-[50px]"
            src={user}
            alt="Imagem de perfil padrão" />
            <h2 className="text-black text-[28px] font-bold mb-4">Login</h2>
            <p className="text-black text-[14px] mb-2">Bem-vindo de volta!</p>
            <form className="flex flex-col w-full max-w-[310px]">
              <label className="text-black text-[14px]">E-mail</label>
              <input
                className="mb-4 border py-2 px-2 text-[14px] rounded-[8px] text-black"
                type="email"
                placeholder="example@gmail.com"
              />
              <label className="text-black text-[14px]">Password</label>
              <input
                className="border py-2 px-2 text-[14px] rounded-[8px] mb-5 text-black"
                type="password"
                placeholder="********"
              />
              <div className="w-full flex justify-end mb-5">
                <Link
                  className="text-green-400 text-[14px] underline justify-"
                  href=""
                >
                  Esqueceu a senha?
                </Link>
              </div>
              <input className="bg-green-400 rounded-[8px] py-2 mb-5 text-white" 
                type="submit"
                value="Entrar"
              />
              {/* <button className="bg-green-400 rounded-[8px] py-2 mb-5">
                Entrar
              </button> */}
            </form>
            <div>
              <p className="text-black text-[14px]">
                Não tem uma conta?
                <Link className="text-green-400" href="/create_account"> Clique aqui e crie uma!</Link>
              </p>
            </div>
          </div>
          <div className="mr-10">
            <Image className="border-[8px] border-green-400 rounded-xl"
                src={imgTmp}
                width={400}
                height={512}
                alt="Imagem temporaria"
            />
          </div>
        </div>
      </div>
    </div>
  );
}