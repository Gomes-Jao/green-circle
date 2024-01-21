import logo from "/public/Logo.svg"
import Image from "next/image"

export default function HeaderLogin(){
    return(
        <div className="bg-white w-screen flex justify-center items-center">
            <div className="w-full max-w-[1160px] flex justify-between py-[6px]">
                <Image
                    src={logo}
                    alt="Logotipo GreenCircles"
                    width={249}
                    height={52}
                />
                <div className="flex gap-10">
                    <button className="bg-green-500 px-12 py-2 rounded-[8px]">
                        Entrar
                    </button>
                    <button className="bg-green-500 px-8 py-2 rounded-[8px]">
                        Cadastrar
                    </button>
                </div>
            </div>
        </div>
    )
}