"use client"
import { navButtonType } from "@/types"
import { usePathname } from "next/navigation"
import Link from "next/link"

const active = "flex flex-row space-x-2 rounded-full w-fit px-10 p-3 text-start bg-gray-100 font-bold text-lg"
const unactive = "flex flex-row hover:font-bold rounded-full w-fit px-10 p-3 text-start text-lg font-semibold"

const NavButton = ({path,buttonName} : navButtonType) => {
    const currentPath = usePathname();
    return <Link href={path} className={(currentPath===path) ? active : unactive}>{buttonName}</Link>
}

export default NavButton