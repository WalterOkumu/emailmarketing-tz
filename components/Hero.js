import Image from "next/image";

export default function Hero() {

    const heroImage = '/black-friday.png';

    return(
        <div className="mx-auto max-w-6xl">
            <div className="flex md:flex-row flex-col-reverse gap-16 md:mt-20">
                <div className="md:w-1/2 w-full">
                    <Image src={heroImage} width={1090} height={1000} alt="Black Friday"/>
                </div>
                <div className="mt-[4rem] md:w-1/2 w-full">
                    <h1 className="text-5xl font-bold bg-[#FBED04] md:inline-block p-2 rounded-md">E-mail Marketing</h1>
                    <h2 className="text-4xl md:text-left italic font-light pt-3">Enjoy <span className="font-bold">30% OFF</span> until the end of the year!</h2>
                    <div className="pt-8">
                        <p className="leading-relaxed text-justify">
                            Email marketing is the use of emails to promote 
                            products or services. But it&apos;s not just limited to that. 
                            You can use email marketing to develop relationships with 
                            current customers or reach out to potential clients. 
                            This service allows companies to keep their customers 
                            informed and personalize their marketing messages. 
                            Look at it as one of the most cost-effective and conversion-rich
                             forms of digital marketing today.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}