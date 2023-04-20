import {BrowserRouter} from "react-router-dom";
import AppRouter from "./routes/AppRouter";
import { ThemeProvider, createTheme } from '@mui/material/styles';

const darkTheme = createTheme({
    palette: {
        mode: 'dark',
    },
});

function App() {
    return (
        <ThemeProvider theme={darkTheme}>
            <BrowserRouter className={'App'}>
                <AppRouter/>
            </BrowserRouter>
        </ThemeProvider>
    );
}

export default App;
