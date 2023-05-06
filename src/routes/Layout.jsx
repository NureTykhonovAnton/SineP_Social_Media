import {Header} from "../components/Home/Header/Header";
import {MobileNavigationFooter} from "../components/Home/BottomNavigation/BottomNavigaton";
import {Outlet} from "react-router";

export const Layout = () => {
    return (
        <>
            <Header/>
            <Outlet/>
            <MobileNavigationFooter/>
        </>
    );
}
