export default function About() {
    return(
        <section className="mt-32 flex flex-col justify-center items-center mx-auto gap-16 md:w-3/4 w-full">


            <div className="md:mt-[1rem] md:w-1/2 w-full text-center">
                    <h1 className="text-5xl font-bold md:inline-block p-2 rounded-md text-[#070707]">Email Marketing</h1>
                    <h2 className="text-4xl text-center italic font-light pt-3 md:px-0 px-16">Fanya biashara yako iwafikie watu wengi zaidi kupitia barua pepe</h2>
                    <div className="pt-8">
                        <p className="leading-relaxed text-justify md:px-0 px-14">
                            Uuzaji wa barua pepe haukomei tu katika kukuza bidhaa au huduma. Unaweza pia kuipata ili kukuza uhusiano na wateja wako waaminifu huku ukifikia wateja watarajiwa.
                            Kupata ufikiaji wa huduma hii, itakuruhusu kufikia wateja wako katika wakati muhimu, kuwafahamisha, na kubinafsisha kampeni zako za uuzaji. Ndiyo njia ya bei nafuu zaidi na yenye ubadilishaji wa soko la dijitali leo.
                        </p>
                    </div>
                </div>

            <h3 className="text-3xl font-bold text-center md:w-1/2 px-8">
                Uuzaji wa barua pepe unaathiri vipi biashara yako?</h3>

            <div className="text-center md:w-1/2 w-full px-8">
                <h4 className="font-bold text-[1.3rem]">Malengo ya jumla</h4>
                <p>Inafahamisha; Huvutia; Inahusisha na Kuhimiza</p>
            </div>

            <div className="text-center md:w-1/2 w-full px-8">
                <h4 className="font-bold text-[1.3rem]">Je, utapata nini?</h4>
                <p className="mx-auto">
                    Kuhifadhidata ya kipekee, Huduma maalum ambayo hutoa ripoti, Mtayarishaji wa maudhui na Mbunifu
                </p>
            </div>
        </section>
    );
}