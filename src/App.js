import {BrowserRouter} from "react-router-dom";
import AppRouter from "./routes/AppRouter";
import { ThemeProvider, createTheme } from '@mui/material/styles';
import {Context} from "./index";
import {useContext, useEffect} from "react";
import {observer} from "mobx-react-lite";

const darkTheme = createTheme({
    palette: {
        mode: 'dark',
    },
});

const App = observer(() => {
    const {gender} = useContext(Context);

    useEffect(() => {
        gender.fetchGenders();
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
