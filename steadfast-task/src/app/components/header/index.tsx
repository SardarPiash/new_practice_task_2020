"use client"

import { Menu, MapPin, HelpCircle, Store } from "lucide-react";
import catMenuIcon from "../../../../public/assets/cat-menu.png";
import trackMenuIcon from "../../../../public/assets/track-order.png";
import helpCenterIcon from "../../../../public/assets/help-center.png";
import sellWithUsIcon from "../../../../public/assets/sell-with-us.png";
import Image from "next/image";
import Link from "next/link";

export default function NavigationBar() {
    const categories = ["Electronics", "Home Appliances", "Mother & Baby", "Automotive", "Sports Gear"]

    const utilityLinks = [
        {
            icon: trackMenuIcon,
            label: "TRACK ORDER",
            href: "/track-order",
        },
        {
            icon: helpCenterIcon,
            label: "HELP CENTER",
            href: "/help",
        },
        {
            icon: sellWithUsIcon,
            label: "SELL WITH US",
            href: "/sell",
        },
    ]

    return (
        <nav className="bg-white border-b border-gray-200">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-12">
                    {/* Left Section - Categories */}
                    <div className="flex items-center space-x-8">
                        <button className="flex items-center space-x-2 text-gray-700 cursor-pointer hover:text-gray-900 px-3 py-2">
                            <Image src={catMenuIcon} alt="menu-icon" className="" width={25} height={30} />
                            <span className="font-medium">Categories</span>
                        </button>

                        {/* Category Links */}
                        <div className="hidden md:flex items-center space-x-6">
                            {categories.map((category) => (
                                <a
                                    key={category}
                                    href={`/category/${category.toLowerCase().replace(/\s+/g, "-")}`}
                                    className="text-sm text-gray-600 hover:text-gray-900 transition-colors duration-200"
                                >
                                    {category}
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Right Section - Utility Links */}
                    <div className="flex items-center space-x-6">
                        {utilityLinks.map((data, index) => (

                            <div key={index}>
                                <Link
                                    key={data.label}
                                    href={data.href}
                                    className="flex items-center space-x-1 text-xs text-gray-600 cursor-pointer hover:text-gray-900 transition-colors duration-200"
                                >
                                    <Image src={data.icon} alt="menu-icon" className="" width={12} height={12} />
                                    <span className="font-medium">{data.label}</span>
                                </Link>
                            </div>
                        )
                        )
                        })

                    </div>
                </div>
            </div>


        </nav>
    )
}
