export default function About() {
    return(
        <section className="mt-20 flex flex-col justify-center items-center mx-auto gap-12 md:w-3/4 w-full">
            <h3 className="text-3xl font-bold text-center md:w-1/2 px-8">
                Uuzaji wa barua pepe unaathiri vipi biashara yako? 
            </h3>

            <div className="flex md:flex-row flex-col gap-8 md:w-3/4">
                <div className="text-center w-1/2 self-center">
                    <h4 className="font-bold text-[1.3rem]">Malengo ya jumla </h4>
                    <p>Inafahamisha; Huvutia; Inahusisha na Kuhimiza </p>
                </div>

                <div className="text-center w-1/2 self-center">
                    <h4 className="font-bold text-[1.3rem]">Je, utapata nini? </h4>
                    <p className="mx-auto">
                        Kuhifadhidata ya kipekee, Huduma maalum ambayo hutoa ripoti, Mtayarishaji wa maudhui na Mbunifu.
                    </p>
                </div>
            </div>
        </section>
    );
}