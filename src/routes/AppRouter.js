import {Route, Routes, useNavigate} from "react-router";
import {privateRoutes, publicRoutes} from "./routes";
import {HOME_ROUTE, LOGIN_ROUTE} from "../uutils/consts";
import {useContext, useEffect} from "react";
import {Context} from "../index";
import {observer} from "mobx-react-lite";

const AppRouter = observer(() => {
    const {user} = useContext(Context);

    let token = user.getAuth();

    const navigate = useNavigate();

    const navigateToLogin = () => {
        navigate(LOGIN_ROUTE);
    }

    const navigateToHome = () => {
        navigate(HOME_ROUTE);
    }


    useEffect(() => {
        token = user.getAuth();
        if (token) {
            navigateToHome();
        } else {
            navigateToLogin();
        }
    }, [user])


    return (
        <Routes>
            {
                publicRoutes.map(({path, Component}) => {
                    return <Route key={path} path={path} element={<Component/>}/>
                })
            }
            {
                token && privateRoutes.map(({path, Component}) => {
                    return <Route key={path} path={path} element={<Component/>} exact={true}/>
                })
            }
        </Routes>
    );
});

export default AppRouter;
