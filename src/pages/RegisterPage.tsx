import {useAppDispatch, useAppSelector} from "../hooks.ts";
import {useNavigate} from "react-router";
import {useForm} from "@mantine/form";
import {login} from "../store/userSlice.ts";
import {Button, Group, TextInput} from "@mantine/core";


const RegisterPage = () => {
    const dispatch = useAppDispatch();
    const user = useAppSelector(state => state.user);

    const navigate = useNavigate();

    const form = useForm({
        mode: 'uncontrolled',
        initialValues: {
            email: '',
            name: '',
            password: '',
        },

        validate: {
            email: (value) => (/^\S+@\S+$/.test(value) ? null : 'Введите корректный email'),
            name: (value) => (value.length ? null : 'Введите имя'),
            password: (value) => (value.length ? null : 'Введите пароль')
        },
        onSubmitPreventDefault: "always",
        clearInputErrorOnChange: true
    });

    return (
        <>
            {user.isAuthenticated ? (
                <>
                    Вы уже вошли как: <strong>{user.name}</strong>
                </>
            ) : (

                <form onSubmit={form.onSubmit((values) => {
                    
                    // call registration API here: (values) => auth

                    dispatch(login({
                        name: values.name,
                        email: values.email
                    }));

                     navigate("/");
                })}>
                    <TextInput
                        withAsterisk
                        label="Имя пользователя"
                        placeholder="имя пользователя"
                        key={form.key('name')}
                        {...form.getInputProps('name')}
                    />
                    <TextInput
                        withAsterisk
                        label="Email"
                        placeholder="адрес электронной почты"
                        key={form.key('email')}
                        {...form.getInputProps('email')}
                    />

                    <TextInput
                        withAsterisk
                        label="Пароль"
                        placeholder="придумайте пароль"
                        key={form.key('password')}
                        {...form.getInputProps('password')}
                    />

                    <Group justify="flex-end" mt="md">
                        <Button type="submit">Регистрация</Button>
                    </Group>
                </form>
            )
            }
        </>
    );
}

export default RegisterPage