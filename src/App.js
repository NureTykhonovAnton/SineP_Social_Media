import {BrowserRouter} from "react-router-dom";
import AppRouter from "./routes/AppRouter";
import { ThemeProvider, createTheme } from '@mui/material/styles';
import {Context} from "./index";
import {useContext, useEffect} from "react";
import {observer} from "mobx-react-lite";
import {useNavigate} from "react-router";
import {HOME_ROUTE, LOGIN_ROUTE} from "./uutils/consts";

const darkTheme = createTheme({
    palette: {
        mode: 'dark',
    },
});

const App = observer(() => {
    const {gender, user} = useContext(Context);

    useEffect(() => {
        gender.fetchGenders();
        user.fetchUser();
    }, []);


    return (
        <ThemeProvider theme={darkTheme}>
            <BrowserRouter className={'App'}>
                <AppRouter/>
            </BrowserRouter>
        </ThemeProvider>
    );
});

export default App;
