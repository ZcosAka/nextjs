'use client'
import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';

const categories = [
    { id: 'phan-an-nhom', label: 'Phần Ăn Nhóm', img: '/images/phan-an-nhom.png' },
    { id: 'ga-ran', label: 'Gà Rán', img: '/images/ga-ran.png' },
    { id: '', label: 'Burger', img: '/images/burger.png' },
    { id: 'khuyen-mai', label: 'Burger', img: '/images/burger.png' },
    { id: 'thuc-uong', label: 'Burger', img: '/images/burger.png' },
    { id: 'do-kho', label: 'Burger', img: '/images/burger.png' },
    { id: 'do-kho-1', label: 'Burger', img: '/images/burger.png' },
    { id: 'do-kho-2', label: 'Burger', img: '/images/burger.png' },
    { id: 'do-kho-3', label: 'Burger', img: '/images/burger.png' },
    { id: 'do-kho-4', label: 'Burger', img: '/images/burger.png' },
    { id: 'do-kho-5', label: 'Burger', img: '/images/burger.png' },
    { id: 'do-kho-6', label: 'Burger', img: '/images/burger.png' }
];

const products = [
    { id: 1, name: 'Loy Set', desc: '02 Gà rán', category: 'phan-an-nhom', price: 145000, oldPrice: 177000, img: '/images/loy-set.png' },
    { id: 2, name: 'Lody Set', desc: '02 Gà rán, 01 Mì ý', category: 'phan-an-nhom', price: 145000, oldPrice: 169000, img: '/images/lody-set.png' },
    { id: 3, name: 'Lody Set', desc: '02 Gà rán, 01 Mì ý', category: 'phan-an-nhom', price: 145000, oldPrice: 169000, img: '/images/lody-set.png' },
    { id: 4, name: 'Lody Set', desc: '02 Gà rán, 01 Mì ý', category: 'phan-an-nhom', price: 145000, oldPrice: 169000, img: '/images/lody-set.png' },
    { id: 5, name: 'Lody Set', desc: '02 Gà rán, 01 Mì ý', category: 'phan-an-nhom', price: 145000, oldPrice: 169000, img: '/images/lody-set.png' },
    { id: 6, name: 'Lody Set', desc: '02 Gà rán, 01 Mì ý', category: 'phan-an-nhom', price: 145000, oldPrice: 169000, img: '/images/lody-set.png' },
    { id: 7, name: 'Lody Set', desc: '02 Gà rán, 01 Mì ý', category: 'phan-an-nhom', price: 145000, oldPrice: 169000, img: '/images/lody-set.png' },
    { id: 8, name: 'Lody Set', desc: '02 Gà rán, 01 Mì ý', category: 'phan-an-nhom', price: 145000, oldPrice: 169000, img: '/images/lody-set.png' },
    { id: 9, name: 'Lody Set', desc: '02 Gà rán, 01 Mì ý', category: 'phan-an-nhom', price: 145000, oldPrice: 169000, img: '/images/lody-set.png' },
    { id: 10, name: 'Lody Set', desc: '02 Gà rán, 01 Mì ý', category: 'phan-an-nhom', price: 145000, oldPrice: 169000, img: '/images/lody-set.png' },
    { id: 11, name: 'Lody Set', desc: '02 Gà rán, 01 Mì ý', category: 'phan-an-nhom', price: 145000, oldPrice: 169000, img: '/images/lody-set.png' },
    { id: 12, name: 'Lody Set', desc: '02 Gà rán, 01 Mì ý', category: 'phan-an-nhom', price: 145000, oldPrice: 169000, img: '/images/lody-set.png' },
    { id: 13, name: 'Lody Set', desc: '02 Gà rán, 01 Mì ý', category: 'phan-an-nhom', price: 145000, oldPrice: 169000, img: '/images/lody-set.png' },
    { id: 14, name: 'Gà Rán 2 Miếng', desc: '02 Gà rán giòn', category: 'ga-ran', price: 69000, oldPrice: 89000, img: '/images/ga-ran-2.png' },
    { id: 15, name: 'Burger Bulgogi', desc: '01 Burger Bulgogi', category: 'burger', price: 45000, oldPrice: 59000, img: '/images/burger-bulgogi.png' }
]

const numPerPage = 4
const address = "CN1 - OM Nướng Hoàng Văn Thụ"
const time = '16h30 - 28/05/2025'

const ProductPage = () => {
    const [selectedCategory, setSelectedCategory] = useState<string>('phan-an-nhom')
    const scrollRef = useRef<HTMLDivElement>(null)
    const [currentPage, setCurrentPage] = useState<number>(0)

    const isDragging = useRef<boolean>(false)
    const startX = useRef<number>(0)
    const scrollLeft = useRef<number>(0)

    const handleMouseDown = (e: React.MouseEvent) => {
        isDragging.current = true
        startX.current = e.pageX - (scrollRef.current?.offsetLeft ?? 0)
        scrollLeft.current = scrollRef.current?.scrollLeft ?? 0
    }

    const handleMouseMove = (e: React.MouseEvent) => {
        if (!isDragging.current || !scrollRef.current) return
        e.preventDefault()
        const x = e.pageX - scrollRef.current.offsetLeft
        const walk = (x - startX.current) * 1.5 // tăng tốc kéo
        scrollRef.current.scrollLeft = scrollLeft?.current - walk
    }

    const handleMouseUp = () => {
        isDragging.current = false
    }

    const totalPage = Math.ceil(categories.length / numPerPage)

    const scrollToPage = (page: number) => {
        if (scrollRef.current) {
            const container = scrollRef?.current
            const scrollAmount = container.scrollWidth / totalPage
            container.scrollTo({
                left: page * scrollAmount,
                behavior: "smooth",
            })
            setCurrentPage(page)
        }
    }

    // optional: detect scroll to update dot
    useEffect(() => {
        const handleScroll = () => {
            const container = scrollRef.current;
            if (!container) return;

            const scrollLeft = container.scrollLeft || 0;
            if (scrollLeft) {
                const widthPerPage = container.scrollWidth / totalPage;
                const page = Math.round(scrollLeft / widthPerPage);
                setCurrentPage(page);
            }
        }

        const container = scrollRef.current
        container?.addEventListener("scroll", handleScroll)
        return () => container?.removeEventListener("scroll", handleScroll)
    }, [totalPage])

    const filteredProducts = products.filter(
        (product) => product.category === selectedCategory
    );

    return (
        <section className="flex flex-row items-start max-w-full max-h-full bg-btn-set-table p-4 gap-10">
            <div className='flex flex-2 flex-col justify-center items-center w-2xl'>
                <div className="flex flex-col items-center justify-center w-full overflow-hidden" >
                    {/* Categories */}
                    <div className="flex gap-4 w-full overflow-x-auto whitespace-nowrap scroll-smooth no-scrollbar cursor-grab active:cursor-grabbing"
                        ref={scrollRef}
                        onMouseDown={handleMouseDown}
                        onMouseMove={handleMouseMove}
                        onMouseLeave={handleMouseUp}
                        onMouseUp={handleMouseUp}
                    >
                        {categories.map((cat) => (
                            <motion.button
                                layout
                                key={cat.id}
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -10 }}
                                transition={{ duration: 0.3 }}
                                onClick={() => setSelectedCategory(cat.id)}
                                className={`flex flex-col items-center w-28 h-28  rounded-xl transition-colors duration-300 justify-center 
        ${selectedCategory === cat.id ? 'bg-white border-2 border-green-800' : 'bg-white'}
      `}>
                                <div className="relative w-27 h-20 mb-2">
                                    {/* <Image src={cat.img} alt={cat.label} fill className="object-contain" /> */}
                                    <Image src={"https://omnuong.vn/wp-content/uploads/2024/10/DSC9778-min.png.webp"} alt={cat.label} className="object-center rounded-t-xl" fill />
                                </div>
                                <span className="text-sm font-semibold text-center">{cat.label}</span>
                            </motion.button>
                        ))}
                    </div>
                    {/* Pagination Dots */}
                    <div className="flex justify-center mt-4 gap-2">
                        {Array.from({ length: totalPage }).map((_, idx) => (
                            <motion.button
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -10 }}
                                transition={{ duration: 0.3 }}
                                key={idx}
                                onClick={() => scrollToPage(idx)}
                                className={`w-3 h-3 rounded-full ${currentPage === idx ? "bg-header" : "bg-gray-300"
                                    }`}
                            ></motion.button>
                        ))}
                    </div>
                </div>
                {/* Product List */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-4">
                    <AnimatePresence mode="popLayout">
                        {filteredProducts.map((product) => (
                            <motion.div
                                key={product.id}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -20 }}
                                transition={{ duration: 0.3 }}
                                className="bg-white rounded-xl shadow-xl flex flex-col min-w-[200px]"
                            >
                                <div className="relative w-full h-40 mb-4">
                                    {/* <Image src={product.img} alt={product.name} fill className="object-contain" /> */}
                                    <Image src={"https://omnuong.vn/wp-content/uploads/2024/12/final-muop-xao-long.png.webp"} alt={product.name} fill className="object-center rounded-t-xl" />
                                </div>
                                <div className='flex flex-col p-4 justify-center'>
                                    <h2 className="text-footer text-lg font-bold mb-1">{product.name}</h2>
                                    <p className="text-gray-500 text-sm mb-3">{product.desc}</p>
                                    <div className="mt-auto">
                                        <div className="flex items-center justify-between">
                                            <div>
                                                <p className="text-pink-600 font-bold text-xl">{product.price.toLocaleString()} đ</p>
                                                <p className="text-gray-400 text-sm line-through">{product.oldPrice.toLocaleString()} đ</p>
                                            </div>
                                            <button className="bg-header bg-btn-hover bg-btn-focus bg-btn-active mt-4 py-2 px-4 transition duration-300 rounded-lg
                                            hover:scale-105 active:scale-95
                                            ">
                                                <span className='text-sm text-btn font-bold'>{`+`}</span>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </div>
            </div>
            <motion.div
                className='flex flex-1 flex-col justify-start items-center bg-white w-xl rounded-2xl gap-4 min-h-[300px] max-h-[90vh] overflow-y-auto p-4'
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3 }}
            >
                {/* hiển thị title */}
                <div className="flex flex-col border-b-2 justify-center items-center border-green-800">
                    <span className="text-footer font-bold text-2xl">{`Chọn món cho bàn 3`}</span>
                    <span className="text-footer font-thin text-xl">{`${address}`}</span>
                    <span className="text-footer font-thin text-xl">{`${time}`}</span>
                </div>
                {/* hiển thị list sản phẩm đã chọn */}
                <div className="flex flex-col justify-center items-center w-full gap-4">
                    <div className='flex flex-1 flex-row w-full justify-between items-center'>
                        <Image
                            src={'https://omnuong.vn/wp-content/uploads/2024/12/final-muop-xao-long.png.webp'}
                            height={50}
                            width={100}
                            className='object-center rounded-2xl'
                            alt={'mon-an-1'}
                        />
                        <span className="text-footer font-normal text-l">{'Lòng xào mướp x 1'}</span>
                        <span className="text-red-400 font-normal text-l">{'180.000 VNĐ'}</span>
                    </div>
                    <div className='flex flex-1 flex-row w-full justify-between items-center'>
                        <Image
                            src={'https://omnuong.vn/wp-content/uploads/2024/10/final-sup-muc-min.png.webp'}
                            height={50}
                            width={100}
                            className='object-center rounded-2xl'
                            alt={'mon-an-2'}
                        />
                        <span className="text-footer font-normal text-l">{'Lẩu cá bóp x 1'}</span>
                        <span className="text-red-400 font-normal text-l">{'250.000 VNĐ'}</span>
                    </div>
                    <div className='flex flex-1 flex-row w-full justify-between items-center'>
                        <Image
                            src={'https://omnuong.vn/wp-content/uploads/2024/10/DSC9778-min.png.webp'}
                            height={50}
                            width={100}
                            className='object-center rounded-2xl'
                            alt={'mon-an-2'}
                        />
                        <span className="text-footer font-normal text-l">{'Trà đào cam xả x 1'}</span>
                        <span className="text-red-400 font-normal text-l">{'50.000 VNĐ'}</span>
                    </div>
                </div>
                {/* hiển thị tổng số tiền và tổng món ăn */}
                <div className="flex flex-row justify-end items-center w-full gap-4">
                    <span className="text-footer font-normal text-l">{'Tổng thanh toán:'}</span>
                    <span className="text-red-400 font-normal text-l">{'480.000 VNĐ'}</span>
                </div>
                {/* nút thanh toán */}
                <div className='flex flex-col w-full justify-center items-center'>
                    <button
                        onClick={() => {
                            // route.push("/product")
                        }}
                        className="bg-btn-unfocus bg-btn-hover bg-btn-focus bg-btn-active justify-center items-center mt-4 py-2 px-4 w-full h-12 transition duration-300 rounded-lg">
                        <span className="text-sm text-btn font-bold">Thanh toán</span>
                    </button>
                </div>
            </motion.div>
        </section>
    );
}

export default ProductPage