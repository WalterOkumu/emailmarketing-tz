import Image from "next/image";

export default function Hero() {

    const heroImage = '/hero.png';

    return(
        <div className="mx-auto max-w-6xl">
            <div className="flex md:flex-row flex-col-reverse">
                <div className="md:pb-[32rem] md:w-1/2 w-full">
                    <Image src={heroImage} width={1090} height={1000}/>
                </div>
                <div className="mt-[4rem] md:pr-8 md:ml-16 md:w-1/2 w-full pb-8">
                    <h1 className="text-5xl font-bold bg-[#FBED04] md:inline-block p-2 rounded-md">E-mail Marketing</h1>
                    <h2 className="text-4xl md:text-left italic font-thin pt-3">Ganhe descontos e faça a aposta certeira</h2>
                    <div className="pt-8">
                        <p className="leading-relaxed text-justify">
                            O marketing por email é o uso do email para promover
                            produtos ou serviços. Mas não se limita apenas a isso.
                            Você pode usar o marketing por e-mail para devenvolver
                            relações com os clientes atuais e / ou para chegar a
                            clientes em potencial. O marketing por e-mail permite que
                            as empresas mantenham seus clientes informados e 
                            personalizem as suas mensagens de marketing. Veja nisso
                            como uma das formas de marketing digital mais
                            económicas e ricas em conversões da atualidade.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}