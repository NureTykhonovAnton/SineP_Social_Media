import {Route, Routes, useNavigate} from "react-router";
import {privateRoutes, publicRoutes} from "./routes";
import {HOME_ROUTE, LOGIN_ROUTE} from "../uutils/consts";
import {useContext, useEffect} from "react";
import {Context} from "../index";
import {observer} from "mobx-react-lite";
import {Layout} from "./Layout";

const AppRouter = observer(() => {
    const {user} = useContext(Context);

    let token = localStorage.getItem('token');

    const navigate = useNavigate();

    const navigateToLogin = () => {
        navigate(LOGIN_ROUTE);
    }

    const navigateToHome = () => {
        navigate(HOME_ROUTE);
    }


    useEffect(() => {
        user.fetchUser().then(res => {
            if (res) {
                navigateToHome();
            } else {
                navigateToLogin();
            }
        });
    }, [])


    return (
        <Routes>
            {
                publicRoutes.map(({path, Component}) => {
                    return <Route key={path} path={path} element={<Component/>}/>
                })
            }
            <Route path={'/'} element={<Layout/>}>
                {
                    token && privateRoutes.map(({path, Component}) => {
                        return <Route key={path} path={path} element={<Component/>} exact={true}/>
                    })
                }
            </Route>
        </Routes>
    );
});

export default AppRouter;
