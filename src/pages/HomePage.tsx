import FactsPanel from "../components/FactsPanel/FactsPanel.tsx"
import {useAppSelector} from "../hooks.ts";
import {Button, Stack, Text} from "@mantine/core";
import {useNavigate} from "react-router";


const HomePage = () => {
    
    const userState = useAppSelector(state => state.user);

    const navigate = useNavigate();
    
    return (
        <>
            {userState.isAuthenticated ? (
                <div>
                    <Text>{userState.name}, покажем тебе 100 фактов про котиков</Text>
                    <FactsPanel url="https://catfact.ninja/facts?limit=100" timeout={20000}/>
                </div>
            ) : (
                <Stack>
                    
                    <FactsPanel url="https://catfact.ninja/facts" timeout={20000}/>

                    <Text>Хочешь знать больше про котиков?
                        <Button mx={10} variant={"outline"} px={5} onClick={() => navigate("/login")}>Заходи!</Button>

                    </Text>
                </Stack>
            )}
        </>
    )
}

export default HomePage