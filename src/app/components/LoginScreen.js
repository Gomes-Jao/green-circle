import Image from "next/image"
import user from "/public/Profile.svg"
import imgTmp from "/public/agricultor.jpg"

export default function LoginScreen(){
    return(
        <div className="bg-[#F2F3F5] h-screen w-screen flex justify-center items-center">
            <div className="flex w-full max-w-[1160px] justify-between items-center">
                <div className="max-w-[380px] w-full">
                    <h1 className="text-black text-[48px] font-bold">
                        A melhor forma de se informar.
                        Faça parte do círculo!
                    </h1>
                    <p className="text-black text-[20px]">
                        Venha conhecer a forma mais rápida
                        de savber tudo o que acontece no mundo
                        agro. Cadastre-se agora e comece a fazer
                        negócios com especialistas da sua região.
                    </p>
                </div>
                <div className="container bg-white w-full max-w-[840px] flex justify-between items-center">
                    <div className="flex flex-col items-center">
                        <Image className="mb-10"
                            src={user}
                            alt="Imagem de perfil padrão"
                        />
                        <h2 className="text-black text-[28px] font-bold mb-4">
                            Login
                        </h2>
                        <p className="text-black text-[10px] mb-2">
                            Bem-vindo de volta!
                        </p>
                        <form className="flex flex-col w-full max-w-[310px]">
                            <label className="text-black text-[10px]">
                                E-mail
                            </label>
                            <input className="mb-4 border py-2 px-2 text-[10px] rounded-[8px]"
                                type="email"
                                placeholder="example@gmail.com"
                            />
                            <label className="text-black text-[10px]">
                                Password
                            </label>
                            <input className="border py-2 px-2 text-[10px] rounded-[8px] mb-5"
                                type="password"
                                placeholder="*******"
                            />
                            <div className="w-full flex justify-end mb-5">
                                <a className="text-green-400 text-[10px] underline justify-" href="">
                                    Esqueceu a senha?
                                </a>
                            </div>
                            <button className="bg-green-400 rounded-[8px] py-2 mb-5">
                                Entrar
                            </button>
                        </form>
                        <div>
                            <p>

                            </p>
                            <p className="text-black text-[10px]">
                                Não tem uma conta?
                                <a className="text-green-400">
                                    Clique aqui e crie uma!
                                </a>
                            </p>
                        </div>
                    </div>
                    <div className="z-99 w-full h-full overflow-hidden relative max-w-[400px] max-h-[660px] pb-[100%]">
                        <Image className="object-cover absolute overflow-hidden"
                            src={imgTmp}
                            alt="Imagem temporária de agricultor"
                            fill
                        />
                    </div>
                </div>
            </div>
            
        </div>
    )
}