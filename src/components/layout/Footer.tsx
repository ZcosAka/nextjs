'use client'
import { useRouter } from 'next/navigation'
import Image from 'next/image'

const Footer_Left = [
    {
        id: 1,
        title: "Trang Chủ",
        link: 'https://omnuong.vn/'
    },
    {
        id: 2,
        title: "Về Om Nướng",
        link: 'https://omnuong.vn/ve-om-nuong/'
    },
    {
        id: 3,
        title: "Không gian",
        link: 'https://omnuong.vn/khong-gian/'
    },
    {
        id: 4,
        title: "Menu",
        link: 'https://omnuong.vn/menu/'
    },
    {
        id: 5,
        title: "Ưu đãi - Sự kiện",
        link: 'https://omnuong.vn/category/uu-dai-su-kien/'
    },
    {
        id: 6,
        title: "Tuyển dụng",
        link: "https://docs.google.com/forms/d/1WUsXE4s5gYj3MY4clBGmfHyhHZ5K9V97aEYRVYCvg88/viewform?edit_requested=true#responses"
    }
]

const Footer_Right = [
    {
        id: 1,
        brach: 'CN 1: OM Nướng Hoàng Văn Thụ',
        address: '205A Hoàng Văn Thụ, P.8, Phú Nhuận',
        link: 'https://www.google.com/maps/place/OM+N%C6%B0%E1%BB%9Bng+-+Ho%C3%A0ng+V%C4%83n+Th%E1%BB%A5/@10.7995142,106.672112,3811m/data=!3m1!1e3!4m6!3m5!1s0x317529004fcab967:0x276f4f3c720bf34f!8m2!3d10.7995142!4d106.672112!16s%2Fg%2F11vpll9lt4?entry=ttu&g_ep=EgoyMDI1MDQyMC4wIKXMDSoASAFQAw%3D%3D'
    },
    {
        id: 2,
        brach: 'CN 2: OM Nướng Phan Văn Trị',
        address: '18D Phan Văn Trị, P.10, Gò Vấp',
        link: 'https://www.google.com/maps/place/OM+N%C6%B0%E1%BB%9Bng+-+Phan+Van+Tri/@10.8348747,106.664446,814m/data=!3m2!1e3!4b1!4m6!3m5!1s0x3175293737de6e37:0x3c2e285ce0496703!8m2!3d10.8348694!4d106.6670209!16s%2Fg%2F11vq92mfpn?coh=225987&entry=tts&g_ep=EgoyMDI0MTIxMS4wIPu8ASoASAFQAw%3D%3D'
    },
    {
        id: 3,
        brach: 'CN 3: OM Nướng Sư Vạn Hạnh',
        address: '848 Sư Vạn Hạnh, P.13, Quận 10',
        link: 'https://www.google.com/maps/place/OM+N%C6%B0%E1%BB%9Bng+-+S%C6%B0+V%E1%BA%A1n+H%E1%BA%A1nh/@10.7773766,106.6635663,17z/data=!3m1!4b1!4m6!3m5!1s0x31752f9ee6f55b67:0x74eeed9496e44c1f!8m2!3d10.7773713!4d106.6661412!16s%2Fg%2F11vwpdv0v0?coh=225987&entry=tts&g_ep=EgoyMDI0MTIxMS4wIPu8ASoASAFQAw%3D%3D'
    },
    {
        id: 4,
        brach: 'CN 4: OM Nướng Ba Son',
        address: 'Công viên bờ sông Sài Gòn, TP.Thủ Đức',
        link: 'https://www.google.com/maps/place/OM+N%C6%B0%E1%BB%9Bng+-+Ba+Son/@10.7787128,106.7109589,953m/data=!3m2!1e3!4b1!4m6!3m5!1s0x31752f6b51307a5d:0x157fd10f883d27db!8m2!3d10.7787128!4d106.7109589!16s%2Fg%2F11y434kbv2?entry=ttu&g_ep=EgoyMDI1MDQyMC4wIKXMDSoASAFQAw%3D%3D'
    },
    {
        id: 5,
        brach: 'CN 5: OM Nướng Trung Sơn',
        address: 'Đường 9A, KDC Trung Sơn(Vòng xoay Trung Sơn)',
        link: 'https://www.google.com/maps/place/OM+N%C6%B0%E1%BB%9Bng+-+Trung+S%C6%A1n/@10.7396321,106.6891191,953m/data=!3m2!1e3!4b1!4m6!3m5!1s0x31752f591a49a47f:0xbb7066101ac6d2f!8m2!3d10.7396321!4d106.6891191!16s%2Fg%2F11lv23r8mc?entry=ttu&g_ep=EgoyMDI1MDQyMC4wIKXMDSoASAFQAw%3D%3D'
    },
    {
        id: 6,
        brach: 'CN 6: OM Nướng Đà Lạt',
        address: '28 Trần Hưng Đạo, Phường 10, TP.Đà Lạt',
        link: 'https://www.google.com/maps/place/OM+N%C6%B0%E1%BB%9Bng+-+%C4%90%C3%A0+L%E1%BA%A1t/@11.9394931,108.4573338,237m/data=!3m1!1e3!4m6!3m5!1s0x3171131ecd9680e7:0xb2428153cd7bb743!8m2!3d11.9394597!4d108.4572639!16s%2Fg%2F11x5vyj7c0!5m1!1e2?entry=ttu&g_ep=EgoyMDI1MDQyMC4wIKXMDSoASAFQAw%3D%3D'
    }
]
const Footer = () => {
    const route = useRouter()

    const handleClickLink = (link: string) => {
        if (!link) return
        route.push(link)
    }

    return (
        <footer className="bg-footer  flex flex-row">
            <div className="flex flex-1/4 flex-col justify-center items-start p-10">
                {Footer_Left.map((item, index) => {
                    return (
                        <button
                            key={item.id + index}
                            className="flex flex-row items-center gap-4 py-2 justify-center  hover:bg-gray-200 rounded-lg"
                            onClick={() => {
                                handleClickLink(item.link)
                            }}
                        >
                            <p className="text-footer-link text-1 font-bold text-footer underline underline-offset-8 h-auto">{`0${item.id}`}</p>
                            <p className="text-3xl font-bold text-footer">{item.title.toLocaleUpperCase()}</p>
                        </button>
                    )
                })
                }
            </div>
            <div className="flex flex-1/2 flex-col  py-5 gap-5">
                <div className="grid grid-cols-2 grid-rows-3 gap-1 flex-1/2">
                    {Footer_Right.map((item, index) => {
                        return (
                            <button
                                key={item.id + index}
                                className="flex flex-col items-start gap-2 py-2 justify-center hover:bg-gray-200 rounded-lg"
                                onClick={() => {
                                    handleClickLink(item.link)
                                }}
                            >
                                <h1 className="text-xl font-bold text-footer">{`${item.brach}`}</h1>
                                <div className='flex flex-row items-center gap-1 justify-center'>
                                    <Image
                                        src={"https://omnuong.vn/wp-content/uploads/2024/09/icon-directions.png.webp"}
                                        alt="Logo"
                                        width={24}
                                        height={24}
                                        className='border'
                                    />
                                    <p className="text-base font-light text-footer">{item.address}</p>
                                </div>
                            </button>
                        )
                    })
                    }
                </div>
                <div className='flex flex-1/2 flex-col justify-center items-start'>
                    <p className="text-base font-light text-footer">Tổng đài: <span className='text-base font-bold text-footer'>1900255869</span> – Email:  <span className='text-base font-bold text-footer'>info@omnuong.vn</span></p>
                    <p className="text-base font-light text-footer">Thời gian hoạt động: <span className='text-base font-bold text-footer'> 16h30 – 24h00 (Thứ 2 đến Chủ nhật)</span></p>
                </div>
                <div className='flex flex-1/2 flex-col justify-center items-start'>
                    <button>
                        <span onClick={() => { handleClickLink("https://omnuong.vn/ho-tro-khach-hang/") }} className="text-base font-bold text-footer hover:bg-gray-200 rounded-lg">Hỗ trợ khách hàng</span>
                    </button>
                    <button>
                        <span onClick={() => { handleClickLink("https://omnuong.vn/dieu-khoan-su-dung/") }} className="text-base font-light text-footer hover:bg-gray-200 rounded-lg">Điều khoản sử dụng</span>
                    </button>
                    <button>
                        <span onClick={() => { handleClickLink("https://omnuong.vn/chinh-sach-bao-mat/") }} className="text-base font-light text-footer hover:bg-gray-200 rounded-lg">Chính sách bảo mật</span>
                    </button>
                </div>
            </div>
        </footer>
    )
}

export default Footer