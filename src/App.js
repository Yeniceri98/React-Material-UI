import React, { useState } from 'react';
import './App.css';
import Button from '@material-ui/core/Button';    // Material UI'da buton ekledik
import ButtonGroup from '@material-ui/core/ButtonGroup';
import SaveIcon from '@material-ui/icons/Save';
import DeleteIcon from '@material-ui/icons/Delete';
import Checkbox from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import TextField from '@material-ui/core/TextField';

import { makeStyles, ThemeProvider, createMuiTheme } from '@material-ui/core/styles';   // Style eklenmesi (Butona eklenecek)
import { green, orange } from '@material-ui/core/colors';   // Aşağıda main color olarak yeşili ve secondary color olarak turuncuyu belirlemiştik

import 'fontsource-roboto';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
    root: {
        background: "linear-gradient(45deg, rgba(44, 130, 201, 1), rgba(129, 207, 224, 1))",
        border: 0,
        marginBottom: 15,
        borderRadius: 15,
        color: "white",
        padding: "0 30px"
    }
})

const theme = createMuiTheme({
    typography: {    // Altta oluşturulan Typography'nin düzenlenmesi
        h3: {
            fontSize: 36,
            marginBottom: 15
        }
    },
    palette: {
        primary: {
            main: green[700],    // Yeşil main color olacak ve "Save" "Discard" gibi kısımlar yeşil rengine dönecek çünkü <ThemeProvider /> component'ini hepsini kapsayacak şekilde yerleştirdik (Köşeli parantez içine yazılan değer ne kadar koyu olduğunu belirtiyor)
        },
        secondary: {             // Turuncu Secondary color olacak (Testing Checkbox'ın yanındaki kaydetme simgesi turuncu rengine döner)
            main: orange[500],
        }
    }
})

function StyledButton() {
    const classes = useStyles();
    return <Button className={classes.root}>Styled Button</Button>
}


function CheckboxExample() {
    const [checked, setChecked] = useState(true);

    return (
        <FormControlLabel
            control={<Checkbox 
                checked={checked}
                onChange={e => setChecked(e.target.checked)}
                icon={<DeleteIcon />}
                checkedIcon={<SaveIcon />}
                inputProps={{
                    "aria-label": "secondary checkbox"
                }}
                // color="primary"          
            />}
            label="Testing Checkbox"
        />

    );
}


function App() {
    return (
        <ThemeProvider theme={theme}>
            <div className="App">
                <div className="App-header">
                    <Typography variant="h3" component="div">
                        Welcome to MUI
                    </Typography>
                    <Typography variant="body1">
                        Learn how to use Material UI
                    </Typography>
                    <StyledButton />
                    <TextField 
                        variant="outlined"
                        color="primary"
                        type="email"
                        label="E-Mail"
                        placeholder="test@test.com"
                    />
                    <CheckboxExample />
                    <ButtonGroup variant="contained" color="primary">   
                        <Button 
                            startIcon={<SaveIcon />}     // Save icon başta yer alır (sonda kalması için endIcon deriz)
                            onClick={() => alert("You saved it")} 
                            // variant="contained"  Yukarıdaki ButtonGroup'da tanımlandığı için burada tanımlamaya gerek yok
                            // color="primary"
                            size="large"
                        >
                            Save
                        </Button>
                        <Button 
                            endIcon={<DeleteIcon />}        
                            // variant="contained" 
                            // color="secondary"
                            size="large"
                        >
                            Discard
                        </Button>
                    </ButtonGroup>
                </div>
            </div>
        </ThemeProvider>
    );
}

export default App;


/*
    _____ MATERIAL-UI SETUP _____
    https://material-ui.com/getting-started/installation/
    npm install @material-ui/core
    Yüklenilenleri package.json dosyasında kontrol edebiliriz
*/
/*
    _____ ICON DOWNLOAD _____
    npm add @material-ui/icons

    _____ fontsource-roboto DOWNLOAD (Typography için) _____
    https://material-ui.com/components/typography/#typography
    npm add fontsource-roboto
*/