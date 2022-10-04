import Image from "next/image";

export default function Info() {

    const titulos = '/titulos.png';
    const segmentacao = '/segmentacao.png';
    const design = '/design.png';
    const otimizacao = '/otimizacao.png';
    const paginaDestino = '/pagina-destino.png'
    const chamada = '/chamada.png';

    return (
        <section className="flex flex-col justify-center items-center mt-40 mx-auto gap-16 w-3/4">
            <h3 className="text-3xl font-bold text-center w-1/2">
                Como fazemos isso?</h3>

            <div className="text-center">
                <Image src={titulos} width={140} height={330}/>
                <Image src={segmentacao} width={140} height={330}/>
                <Image src={design} width={140} height={330}/>
                <Image src={otimizacao} width={140} height={330}/>
                <Image src={paginaDestino} width={140} height={330}/>
                <Image src={chamada} width={140} height={330}/>
            </div>
        </section>
    );
}