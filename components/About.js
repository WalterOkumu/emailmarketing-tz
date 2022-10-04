export default function About() {
    return(
        <section className="flex flex-col justify-center items-center mt-40 mx-auto gap-16 w-3/4">
            <h3 className="text-3xl font-bold text-center w-1/2">
                O que o email marketing faz pela sua empresa?</h3>

            <div className="text-center">
                <h4 className="font-bold text-[1.3rem]">Objetivos Gerais</h4>
                <p>Informar; Atrair; Envolver; Guiar; Estimular; Converter.</p>
            </div>

            <div className="text-center">
                <h4 className="font-bold text-[1.3rem]">O que oferecemos?</h4>
                <p className="mx-auto w-1/2">Um banco de dados exclusivo; Um serviço dedicado que gera relatórios;
                    Um produtor de conteúdo; Um designer.
                </p>
            </div>
        </section>
    );
}