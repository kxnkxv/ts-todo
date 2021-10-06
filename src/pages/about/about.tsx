import {FC} from 'react';
import {Card, Typography} from "antd";

const About: FC = () => {
  const {Title, Paragraph, Text} = Typography;

  return (
    <Card>
      <Typography>
        <Title>Задача для кандидата на позицию frontend разработчик:</Title>
        <Paragraph>
          <ul>
            <li>
              <Text>Требуется написать приложение из 2х компонент: TaskList и Task</Text>
            </li>
            <li>
              <Text>Можно использовать create-react-app и любую библиотеку ui (желательно ant design)</Text>
            </li>
            <li>
              <Text>Желательно выполнить один компонент в классовом стиле, второй в функциональном</Text>
            </li>
            <li>
              <Text>Валидация - нельзя создавать task с имеющимся названием . При попытке создать или отредактировать
                такую запись информируем пользователя.</Text>
            </li>
          </ul>
        </Paragraph>
        <Paragraph>
          TaskList - отображает список задача в виде таблицы (все поля сущности task) из redux store
          По клику на строку таблицы открывается popup с компонентом Task (Для редактирования сущности)
          Над таблицей есть кнопка «Добавить задание» по которому открывается popup для создания (тоже компонент Task)
          После создания новой записи popup закрывается, а в списке появляется новая запись.
        </Paragraph>
        <Paragraph>
          Интерфейс сущности task:
          <Text code={true}>
            {
              `export interface Task {
              id: number;
              title: string;
              description: string;
              isActive: boolean;
              startDate: Date;
              }`
            }
          </Text>
        </Paragraph>
        <Paragraph>
          Функции системы:
          getTasks - список заданий
          getTask - данные об одном задании
          createTask - создание задания
          editTask - изменение задания
        </Paragraph>
      </Typography>
    </Card>
  );
};

export default About;
