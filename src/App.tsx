import {FC} from "react";
import Layout from "./components/Layout/Layout";
import Routes from "./routes";

const App: FC = () => {
    return (
        <Layout>
            <Routes/>
        </Layout>
    );
}

export default App;
