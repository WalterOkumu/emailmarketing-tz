export default function About() {
    return(
        <section className="flex flex-col justify-center items-center mt-40 mx-auto gap-16 md:w-3/4 w-full">
            <h3 className="text-3xl font-bold text-center md:w-1/2 px-8">
                O que o email marketing faz pela sua empresa?</h3>

            <div className="text-center md:w-1/2 w-full px-8">
                <h4 className="font-bold text-[1.3rem]">Objetivos Gerais</h4>
                <p>Informar; Atrair; Envolver; Guiar; Estimular; Converter.</p>
            </div>

            <div className="text-center md:w-1/2 w-full px-8">
                <h4 className="font-bold text-[1.3rem]">O que oferecemos?</h4>
                <p className="mx-auto">Um banco de dados exclusivo; Um serviço dedicado que gera relatórios;
                    Um produtor de conteúdo; Um designer.
                </p>
            </div>
        </section>
    );
}