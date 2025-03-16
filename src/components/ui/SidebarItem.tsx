import { ReactElement } from "react"

interface SidebarItemPropsInterface {
    icon: ReactElement,
    label: string,
    active: boolean
}

export function SidebarItem({icon, label, active} : SidebarItemPropsInterface) {
    return <div className={`flex justify-start items-center gap-4 p-2 font-medium rounded-md cursor-pointer transition-all delay-75 duration-150 w-full h-14 ${active ? 'bg-primaryblue text-white hover:bg-secondaryblue hover:text-primaryblue' : 'text-black hover:bg-gray-200 hover:text-slate-700'}`}>
        <div className="w-1/4 px-2">
            {icon}
        </div>
        <div className="w-3/4">
            <span>{label}</span>
        </div>
    </div>
}