import Image from "next/image";

export default function Hero() {

    const heroImage = '/hero.png';

    return(
        <div className="mx-auto max-w-6xl">
            <div className="flex md:flex-row flex-col-reverse gap-16 md:mt-20">
                <div className="md:w-1/2 w-full">
                    <Image src={heroImage} width={1090} height={1000}/>
                </div>
                <div className="mt-[4rem] md:w-1/2 w-full">
                    <h1 className="text-5xl font-bold bg-[#FBED04] md:inline-block p-2 rounded-md">E-mail Marketing</h1>
                    <h2 className="text-4xl md:text-left italic font-thin pt-3">Get discounts and make the right bet!</h2>
                    <div className="pt-8">
                        <p className="leading-relaxed text-justify">
                            Email marketing is the use of emails to promote 
                            products or services. But it's not just limited to that. 
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