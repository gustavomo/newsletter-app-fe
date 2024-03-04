import { useEffect } from "react";
import { Controller, FieldError, useForm } from "react-hook-form";
import { useNavigate, useParams } from "react-router-dom";

import {
  Block,
  Button,
  ButtonsContainer,
  Input,
} from "@tranqi/ui-kit";

import MainContainer from "../../components/MainContainer";
import SectionContent from "../../components/SectionContent";

import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { subscribeEmailAction } from "../../store/slices/Newsletter/actions";

const NewsletterSubscriptionPage = () => {
  const dispatch = useAppDispatch();
  const { lastAction } = useAppSelector((state) => state.newsletter);
  const history = useNavigate();
  const { id } = useParams();

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm();

  useEffect(() => {
    if (lastAction === "newsletter/subscribeEmail/fulfilled") {
      history("/");
    }
  }, [lastAction]);

  const getMessageError = (fieldError: FieldError) => {
    if (fieldError) {
      if (fieldError.type === "required") {
        return "required field";
      }
      else {
        return fieldError.message;
      }
    }
  };

  const getFormDisabled = () => {
    if (Object.keys(errors).length) {
      return true;
    }

    return false;
  };

  const onSubmit = handleSubmit((data) => {
    const params = {
      id: id,
      inputParams: data,
    };

    dispatch(subscribeEmailAction(params as any));
  });

  return (
    <MainContainer>
      <SectionContent>
        <form
          onSubmit={onSubmit}
          onKeyPress={(e) => {
            if (e.key === "Enter") {
              e.preventDefault();
            }
          }}
        >
          <Block space={3}>
            {/* @ts-ignore */}
            <Controller
              control={control}
              name={"email"}
              rules={{
                required: true,
                minLength: 3,
                maxLength: 40,
                pattern: {
                  message: 'Invalid email',
                  value: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/,
                },
              }}
              render={({ field }) => (
                <Input
                  {...field}
                  placeholder={""}
                  name={"email"}
                  error={getMessageError(errors.email as FieldError)}
                />
              )}
            />
          </Block>
          <Block space={3} position={"start"}>
            <ButtonsContainer>
              <Button
                disabled={getFormDisabled()}
                type={"submit"}
                variant={"fill"}
                width={165}
              >
                {"Subscribe email"}
              </Button>
            </ButtonsContainer>
          </Block>
        </form>
      </SectionContent>
    </MainContainer>
  );
};

export default NewsletterSubscriptionPage;
