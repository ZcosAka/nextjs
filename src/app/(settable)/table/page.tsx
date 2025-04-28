'use client'

import clsx from "clsx"
import { motion } from "framer-motion"
import Image from 'next/image'
import { useRouter } from "next/navigation"
import { useState } from "react"

interface TableModel {
    id?: string | number,
    isSelected?: boolean,
    isSet?: boolean
}

const tempTables: TableModel[] = [
    { id: 1, isSelected: false, isSet: false },
    { id: 2, isSelected: false, isSet: true },
    { id: 3, isSelected: false, isSet: false },
    { id: 4, isSelected: false, isSet: true },
    { id: 5, isSelected: false, isSet: false },
    { id: 6, isSelected: false, isSet: true },
    { id: 7, isSelected: false, isSet: true },
    { id: 9, isSelected: false, isSet: false },
    { id: 10, isSelected: false, isSet: true }
]

const address = "CN1 - OM Nướng Hoàng Văn Thụ"
const time = '16h30 - 28/05/2025'
const TablePage = () => {
    const [selectTable, setSelectTable] = useState<TableModel>({
        id: 0,
        isSelected: false
    })
    const [tables, setTables] = useState<TableModel[]>(tempTables)
    const route = useRouter()

    return (
        <section className="flex flex-row px-10 py-6 max-w-full max-h-full bg-btn-set-table gap-10">
            <div className="flex flex-2 flex-col max-h-full justify-center items-center py-5">
                <div className="grid grid-cols-3 gap-20">
                    {tables.map((table) => (
                        <motion.button
                            key={table.id}
                            disabled={table.isSet}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            transition={{ duration: 0.3 }}
                            className={clsx(
                                "relative w-52 h-32 rounded-xl shadow-lg flex items-center justify-center transition-all duration-300 group",
                                table.isSet
                                    ? "bg-orange-400 cursor-not-allowed opacity-80" :
                                    selectTable.id === table.id
                                        ? "bg-header"
                                        : "bg-footer hover:bg-btn-hover focus:bg-btn-focus active:bg-btn-active"
                            )}
                            onClick={() => {
                                const tempTable = [...tables]
                                const newTable = tempTable.map(item => {
                                    if (item.id === table.id) {
                                        setSelectTable(item)
                                        return {
                                            ...item,
                                            isSelected: true
                                        }
                                    }
                                    return {
                                        ...item,
                                        isSelected: false
                                    }
                                })
                                setTables(newTable)
                            }}
                        >
                            {/* Ghế xung quanh */}
                            <div className={
                                clsx("absolute top-2 left-1/2 -translate-x-1/2 w-6 h-6 rounded-full",
                                    table.isSet
                                        ? 'bg-white' :
                                        selectTable.id === table.id
                                            ? 'bg-white'
                                            : "bg-gray-300"
                                )} />
                            <div className={
                                clsx("absolute bottom-2 left-1/2 -translate-x-1/2 w-6 h-6 bg-gray-300 rounded-full",
                                    table.isSet
                                        ? 'bg-white' :
                                        selectTable.id === table.id
                                            ? 'bg-white'
                                            : "bg-gray-300"
                                )} />
                            <div className={
                                clsx("absolute left-2 top-1/2 -translate-y-1/2 w-6 h-6 bg-gray-300 rounded-full",
                                    table.isSet
                                        ? 'bg-white' :
                                        selectTable.id === table.id
                                            ? 'bg-white'
                                            : "bg-gray-300"
                                )} />
                            <div className={
                                clsx("absolute right-2 top-1/2 -translate-y-1/2 w-6 h-6 bg-gray-300 rounded-full",
                                    table.isSet
                                        ? 'bg-white' :
                                        selectTable.id === table.id
                                            ? 'bg-white'
                                            : "bg-gray-300"
                                )} />

                            {/* Số bàn */}
                            <span className={clsx("text-lg font-bold  transition-colors duration-300",
                                table.isSet
                                    ? 'text-btn' :
                                    selectTable.id === table.id
                                        ? "text-btn"
                                        : "text-footer group-focus:text-green-700 group-hover:text-white"
                            )}>{`Bàn ${table.id}`}</span>
                        </motion.button>
                    ))}
                </div>
            </div>
            <div className="flex flex-1 flex-col justify-center items-center max-w-full gap-4">
                {/* Chi tiết đặt bàn */}
                <div className="flex flex-1 flex-col max-h-full bg-white justify-start items-center w-full rounded-2xl shadow-lg py-4 gap-4">
                    <div className="flex-1 border-b-2 border-green-800">
                        <span className="text-footer font-bold text-2xl">{`Chi tiết đặt bàn số: ${selectTable.id}`}</span>
                    </div>
                    <div className="flex-1 flex flex-col justify-center items-start w-full px-4 gap-2">
                        <div className="flex flex-row justify-between items-center w-full">
                            <span className="text-footer font-normal text-l">{`Hệ thống: `}</span>
                            <span className="text-footer font-normal text-l">{`${address}`}</span>
                        </div>
                        <div className="flex flex-row justify-between items-center w-full">
                            <span className="text-footer font-normal text-l">{`Thời gian đặt bàn:`}</span>
                            <span className="text-footer font-normal text-l">{`${time}`}</span>
                        </div>
                    </div>
                    <div className="flex flex-2 flex-row justify-between items-center w-full px-4">
                        <button
                            onClick={() => {
                                route.push("/product")
                            }}
                            className="bg-btn-unfocus bg-btn-hover bg-btn-focus bg-btn-active justify-center items-center mt-4 py-2 px-4 w-42 h-12 transition duration-300 rounded-lg">
                            <span className="text-sm text-btn font-bold">Chọn món ăn</span>
                        </button>
                        <button
                            className="bg-red-600 bg-btn-active mt-4 py-2 px-4 w-42 h-12 justify-center items-center transition duration-300 rounded-lg">
                            <span className="text-sm text-btn font-bold">Bỏ qua</span>
                        </button>
                    </div>
                </div>
                {/* Chú thích */}
                <div className="flex flex-1 flex-col max-h-full bg-white justify-start items-center w-full rounded-2xl shadow-lg py-4 gap-4">
                    <div className="border-b-2 border-green-800">
                        <span className="text-footer font-bold text-2xl">{`Chú thích`}</span>
                    </div>
                    <div className="flex flex-col items-start justify-center gap-4 w-full p-4">
                        <div className="flex flex-row justify-start items-center w-full gap-4">
                            <Image
                                src={'/images/img/img_table_empty.png'}
                                width={100}
                                height={60}
                                alt={'table_empty'}
                            />
                            <span className="text-footer font-normal text-l">{'Bàn còn trống'}</span>
                        </div>
                        <div className="flex flex-row justify-start items-center w-full gap-4">
                            <Image
                                src={'/images/img/img_table_choose.png'}
                                width={100}
                                height={50}
                                alt={'table_choose'}
                            />
                            <span className="text-footer font-normal text-l">{'Bàn đang chọn'}</span>
                        </div>
                        <div className="flex flex-row justify-start items-center w-full gap-4">
                            <Image
                                src={'/images/img/img_table_selected.png'}
                                width={100}
                                height={50}
                                alt={'table_selected'}
                            />
                            <span className="text-footer font-normal text-l">{'Bàn đã được đặt'}</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default TablePage