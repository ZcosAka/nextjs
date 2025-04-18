'use client'

import { FC } from "react"
import Image from 'next/image'
import Logo from '../../../public/Images/icon/icon_logo.png'
import { useRouter } from "next/navigation"

interface LogoIconProps {
    title?: string,
}

const LogoIcon: FC<LogoIconProps> = ({
    title
}: LogoIconProps) => {
    const router = useRouter()

    return (
        <button onClick={() => {
            router.push('/setting')
        }}
            className="flex justify-center items-center gap-1 h-20 w-full"
        >
            <Image
                src={Logo}
                width={28}
                height={28}
                alt='logo'
            />
            <h1 className="text-xl font-bold text-gray-800">{title}</h1>
        </button>
    )
}

export default LogoIcon