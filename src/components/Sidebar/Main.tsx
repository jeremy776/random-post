import SidebarDesk from "./SidebarDesktop/SidebarDesk"
import SidebarMobile from "./SidebarMobile/SidebarMobile"

export default function Index() {
    return (
        <>
            {/* Desktop */}
            <SidebarDesk />
            {/* Mobile */}
            <SidebarMobile />
        </>
    )
}