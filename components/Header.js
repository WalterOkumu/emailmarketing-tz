import Image from "next/image"

export default function Header() {
    const logPA = '/logo-pa.png';

    return(
        <header className="flex flex-row justify-between">
            <Image src={logPA} width={40} height={40} alt='Páginas Amarelas' className="object-contain"/>
        </header>
    )
};