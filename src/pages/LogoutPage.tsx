import {Blockquote, Box, Button, Center} from "@mantine/core";
import {useAppDispatch, useAppSelector} from "../hooks.ts";
import {IconInfoCircle} from "@tabler/icons-react";
import {useNavigate} from "react-router";
import {logout} from "../store/userSlice.ts";


const LogoutPage = () => {

    const dispatch = useAppDispatch();
    const user = useAppSelector(state => state.user);

    const icon = <IconInfoCircle/>;

    const navigate = useNavigate();
    return (
        <>
            {user.isAuthenticated ? (
                <Box>
                    <Blockquote color="blue" cite="– вежливый Кролик" icon={icon} mt="xl">
                        {user.name}, уже уходите? Даже чаю не попьёте?
                    </Blockquote>

                    <Box m={"md"}>
                        <Button mx={10} variant={"outline"} onClick={() => {
                            dispatch(logout());
                            navigate("/");
                        }}>Уйти</Button>
                    </Box>

                </Box>
            ) : (

                <Box>
                    <Blockquote color="blue" cite="– Граф Монте-Кристо" icon={icon} mt="xl">
                        Нельзя сбежать оттуда, куда не вошёл
                    </Blockquote>

                    <Center m={"md"}>
                        <Button mx={10} variant={"outline"} onClick={() => navigate("/login")}>Войти</Button>
                        <Button mx={10} disabled={!user.isAuthenticated} variant={"outline"}
                                onClick={() => navigate("/register")}>Зарегистрироваться</Button>
                    </Center>
                </Box>

            )
            }
        </>
    );
}

export default LogoutPage