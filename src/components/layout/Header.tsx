'use client'
import Image from 'next/image'
import { useRouter } from 'next/navigation'

const Header = () => {
    const route = useRouter()

    return (
        <header className="bg-header shadow sticky top-0 z-50 justify-center items-center flex">
            <button className="w-52 h-14 justify-center items-center flex"
                onClick={() => {
                    route.push('https://omnuong.vn/')
                }}
            >
                <Image
                    src={"https://omnuong.vn/wp-content/uploads/2024/09/cum-logo-2-300x63.png.webp"}
                    alt="Logo"
                    width={200}
                    height={50}
                    className='border'
                />
            </button>
        </header>
    )
}
export default Header