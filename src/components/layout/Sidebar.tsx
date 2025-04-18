'use client'
import clsx from "clsx";
import { ChevronDown } from "lucide-react";
import Link from "next/link";
import { LogoIcon } from "../common";

const menuItems = [
    { label: 'Dashboard', icon: '📊', href: '/dashboard', active: true },
    { label: 'Calendar', icon: '📅', href: '#', active: false },
    { label: 'Messages', icon: '✉️', href: '#', badge: 6, active: false },
    { label: 'Healthy Menu', icon: '🍽️', href: '#', active: false },
    { label: 'Meal Plan', icon: '📦', href: '#', expandable: true, active: false },
    { label: 'Food Diary', icon: '📋', href: '#', active: false },
    { label: 'Progress', icon: '📈', href: '#', active: false },
    { label: 'Exercises', icon: '🏃‍♂️', href: '#', active: false },
    { label: 'Health Insights', icon: '💖', href: '#', active: false }
];

const Sidebar = () => {
    // const [isOpen, setIsOpen] = useState(true)

    return (
        <aside className="bg-white w-64 min-h-screen p-4 shadow-xl flex flex-col justify-between">
            <div className="justify-center items-center w-full">
                {/* Logo */}

                <LogoIcon
                    title="Tiệm Nướng Nọ"
                />
                {/* Menu */}
                <nav className="space-y-4">
                    {menuItems.map((item) => (
                        <Link
                            key={item.label}
                            href={item.href}
                            className={
                                clsx(
                                    'flex items-center justify-between px-3 py-2 rounded-2xl transition-all text-sm font-medium',
                                    item.active
                                        ? 'bg-lime-200 text-gray-900'
                                        : 'text-gray-600 hover:bg-gray-100'
                                )
                            }
                        >
                            <div className="flex items-center justify-start space-x-2 border w-full">
                                <span>{item.icon}</span>
                                <span>{item.label}</span>
                            </div>
                            {item.badge && (
                                <span className="bg-orange-400 text-white text-xs px-2 py-0.5 rounded-full">
                                    {item.badge}
                                </span>
                            )}
                            {item.expandable && <ChevronDown className="w-4 h-4 text-gray-400" />}
                        </Link>
                    ))}
                </nav>
            </div>
            {/* Logout */}
            <div className="mt-10 space-y-4">
                <button className="w-full text-left text-sm flex items-center space-x-2 text-gray-500 hover:text-black transition">
                    <span>↩️</span>
                    <span>Logout</span>
                </button>
            </div>
        </aside>
    )
}

export default Sidebar