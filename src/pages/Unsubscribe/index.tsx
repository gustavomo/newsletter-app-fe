import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

import {
  Block,
  Button,
  ButtonsContainer,
  Text,
  Title
} from "@tranqi/ui-kit";

import { unsubscribeEmailAction } from "../../store/slices/Newsletter/actions";
import { useAppDispatch } from "../../store/hooks";

import { Content } from "./style";

const UnsubscribePage = () => {
  const dispatch = useAppDispatch();
  const history = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    dispatch(unsubscribeEmailAction({ id: parseInt(id) }));
  }, []);

  return (
    <main>
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
    </main>
  );
};

export default UnsubscribePage;
