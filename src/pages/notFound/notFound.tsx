import {Button, Result} from "antd";
import {FC} from "react";
import {useHistory} from "react-router-dom";

const NotFound: FC = () => {
  const history = useHistory()
  return (
    <Result
      status="404"
      title="404"
      subTitle="Page not found"
      extra={
        <Button type="primary" onClick={() => history.push("/")}>
          Back to todos page
        </Button>
      }
    />
  );
};

export default NotFound;
