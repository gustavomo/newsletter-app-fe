import { useEffect } from "react";

import {
  Block,
  Title
} from "@tranqi/ui-kit";

import { setGoToError } from "../../store/slices/App/actions";
import { useAppDispatch } from "../../store/hooks";

import { Container, Content } from "./style";

const ErrorPage = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(setGoToError(false));
  }, []);

  return (
    <Container>
      <Content>
        <Block space={3}>
          <Title size={"small"}>{"Page not found"}</Title>
        </Block>
      </Content>
    </Container>
  );
};

export default ErrorPage;
