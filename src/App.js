import './App.css';
import Paper from '@mui/material/Paper';
import TaskList from "./components/TaskList";
import Heading from "./components/Heading";
import ListHeader from "./components/ListHeader";
import {ThemeProvider, createTheme} from '@mui/material/styles';

function App() {
    const theme = createTheme({
        typography: {
            fontFamily: "'Comic Sans MS', cursive",
        },
        palette: {
            primary: {
                main: '#626262',
            },
            background: {
                paper: '#f4f4f4',
            },

        },
    });

    return (
        <ThemeProvider theme={theme}>
            <div className="App">
                <Paper className='paper' elevation={3}>
                    <Heading/>
                    <div className='taskList'>
                        <ListHeader/>
                        <TaskList/>
                    </div>
                </Paper>
            </div>
        </ThemeProvider>
    );
}

export default App;
