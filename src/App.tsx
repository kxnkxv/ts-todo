import {FC} from "react";
import CustomLayout from "./components/Layout/Layout";
import Routes from "./routes";

const App: FC = () => {
    return (
        <CustomLayout>
            <Routes/>
        </CustomLayout>
    );
}

export default App;
