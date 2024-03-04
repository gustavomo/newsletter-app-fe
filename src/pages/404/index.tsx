import { useEffect } from "react";

import {
  Block,
  Title
} from "@tranqi/ui-kit";

import { setGoToError } from "../../store/slices/App/actions";
import { useAppDispatch } from "../../store/hooks";

import { Content } from "./style";

const ErrorPage = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(setGoToError(false));
  }, []);

  return (
    <main>
      <Content>
        <Block space={3}>
          <Title size={"small"}>{"Page not found"}</Title>
        </Block>
      </Content>
    </main>
  );
};

export default ErrorPage;
