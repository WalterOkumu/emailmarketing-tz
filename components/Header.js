import Image from "next/image"

export default function Header() {
    const logPA = '/logo-pa.png';

    return(
        <header className="flex flex-row justify-start md:pl-10">
            <Image src={logPA} width={50} height={50} alt='Páginas Amarelas' className="object-contain"/>
        </header>
    )
};