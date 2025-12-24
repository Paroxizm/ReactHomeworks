import './App.css'
import {Route, Routes, useNavigate} from "react-router";
import HomePage from "./pages/HomePage.js";
import LoginPage from "./pages/LoginPage.js";
import RegisterPage from "./pages/RegisterPage.js";
import NotFoundPage from "./pages/NotFoundPage.js";
import {AppShell, Avatar, Button, Center} from "@mantine/core";
import {useAppSelector} from "./hooks.ts";
import LogoutPage from "./pages/LogoutPage.tsx";


function App() {

    const user = useAppSelector(state => state.user);

    const navigate = useNavigate();
    
    return (
        <Center>
            <AppShell
                padding={{ base: 10, sm: 15, lg: 'xl' }}
                header={{ height: 60 }}                
            >
                <AppShell.Header>
                    <Center m={5}>
                        <Button mx={10} variant={"outline"} onClick={() => navigate("/")}>Начало</Button>
                        {user.isAuthenticated &&
                            <Button mx={10} disabled={!user.isAuthenticated} variant={"outline"} onClick={() => navigate("/logout")}>Выход</Button>
                            
                        }
                        {!user.isAuthenticated && (
                            <>
                                <Button mx={10}  variant={"outline"} onClick={() => navigate("/login")}>Вход</Button>
                                <Button mx={10} variant={"outline"} onClick={() => navigate("/register")}>Регистрация</Button>
                            </>)
                        }
                        <Button mx={10} variant={"outline"} onClick={() => navigate("/some-other-page")}>404</Button>

                        {user.isAuthenticated && (
                            <Avatar title={user.name ?? ""} key={user.name} name={user.name ?? ""} color="initials" />
                        )}
                    </Center>                    
                </AppShell.Header>
                <AppShell.Main>
                    <Routes>
                        <Route path="/" element={<HomePage/>}/>
                        <Route path="/login" element={<LoginPage />}/>
                        <Route path="/logout" element={<LogoutPage />}/>
                        <Route path="/register" element={<RegisterPage/>}/>
        
                        <Route path="*" element={<NotFoundPage/>}/>
                    </Routes>
                </AppShell.Main>
            </AppShell>
        </Center>
    );    
}

export default App