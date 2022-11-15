import Image from "next/image";
import Lead from "./Lead";

export default function Hero() {

    const heroImage = '/black-friday.png';

    return(
        <div className="mx-auto max-w-6xl">

            <div className="flex md:flex-row flex-col-reverse gap-1 md:gap-16 md:mt-20 text-[#f8f8ff]">
                
                    <Lead />

                <div className="md:w-1/2 w-full">
                    <Image src={heroImage} width={1090} height={1000} alt="Black Friday"/>

                </div>

                {/* 
                <div className="mt-[4rem] md:w-1/2 w-full">
                    <h1 className="text-5xl font-bold bg-[#FBED04] md:inline-block p-2 rounded-md text-[#070707]">Email Marketing</h1>
                    <h2 className="text-4xl md:text-left italic font-light pt-3">Fanya biashara yako iwafikie watu wengi zaidi kupitia barua pepe</h2>
                    <div className="pt-8">
                        <p className="leading-relaxed text-justify">
                            Uuzaji wa barua pepe hauzuiliwi tu na utangazaji wa bidhaa na huduma. Unaweza pia kuipata ili kukuza uhusiano na wateja wako waaminifu huku ukifikia wateja watarajiwa.
                            Huduma hii huruhusu makampuni kuwafahamisha wateja wao na kubinafsisha ujumbe wao wa uuzaji. Hii ni mojawapo ya aina za uuzaji wa kidijitali ambayo niya gharama nafuu.
                        </p>
                    </div>
                </div>
            */}
            </div>
        </div>
    );
}