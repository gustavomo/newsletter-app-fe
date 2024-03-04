import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

import {
  Block,
  Button,
  ButtonsContainer,
  Text,
  Title
} from "@tranqi/ui-kit";

import { setGoToError } from "../../store/slices/App/actions";
import { useAppDispatch } from "../../store/hooks";

import { Container, Content } from "./style";

const UnsubscribePage = () => {
  const dispatch = useAppDispatch();
  const history = useNavigate();

  useEffect(() => {
    dispatch(setGoToError(false));
  }, []);

  return (
    <Container>
      <Content>
        <Block space={3}>
          <Title size={"small"}>{"You have been removed from the newsletter"}</Title>
        </Block>
        <Block space={3}>
          <ButtonsContainer>
            <Button
              onClick={() => {
                history("/");
              }}
              variant={"fill"}
              width={165}
            >
              {"Go home"}
            </Button>
          </ButtonsContainer>
        </Block>
      </Content>
    </Container>
  );
};

export default UnsubscribePage;
