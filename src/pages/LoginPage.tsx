import {useForm} from "@mantine/form";
import {Button, Group, Text, TextInput} from "@mantine/core";
import {useAppDispatch, useAppSelector} from "../hooks.ts";
import {login} from "../store/userSlice.ts";
import {useNavigate} from "react-router";

const LoginPage = () => {

    const dispatch = useAppDispatch();
    const user = useAppSelector(state => state.user);

    const navigate = useNavigate();

    const form = useForm({
        mode: 'uncontrolled',
        initialValues: {
            email: '',
            password: ''
        },

        validate: {
            email: (value) => (/^\S+@\S+$/.test(value) ? null : 'Введите корректный email'),
            password: (value) => (value.length ? null : 'Введите пароль')
        },
        onSubmitPreventDefault: "always",
        clearInputErrorOnChange: true
    });

    return (
        <>
            {user.isAuthenticated ? (
                <Text>
                    Вы вошли как: <strong>{user.name}</strong>
                </Text>
            ) : (

                <form onSubmit={form.onSubmit((values) => {

                    // call API here: (values) => auth

                    dispatch(login({
                        password: values.password,
                        email: values.email
                    }));

                    navigate("/");
                })}>
                    <TextInput
                        withAsterisk
                        label="Email"
                        placeholder="your@email.com"
                        key={form.key('email')}
                        {...form.getInputProps('email')}
                    />
                    
                    <TextInput
                        mt={"md"}
                        withAsterisk
                        label="Пароль"
                        placeholder="пароль"
                        key={form.key('password')}
                        {...form.getInputProps('password')}
                    />
                    

                    <Group justify="center" mt="xl">
                        <Button type="submit">Submit</Button>
                    </Group>
                </form>
            )
            }
        </>
    );
}

export default LoginPage