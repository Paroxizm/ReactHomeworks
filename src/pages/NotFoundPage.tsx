import {IconInfoCircle} from "@tabler/icons-react";
import {Alert} from "@mantine/core";

const NotFoundPage = () => {
    const icon = <IconInfoCircle />;
    return (
        <Alert variant="light" color="orange" title="Ой, что-то пошло не так..." icon={icon}>
            Мы не нашли страницу, которую Вы ищете. Попробуйте проверить адрес или воспользуйтесь поиском, возможно адрес изменился.
        </Alert>
    );
}

export default NotFoundPage;