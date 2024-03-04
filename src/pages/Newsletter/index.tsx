import { useEffect, useState } from "react";
import { Controller, FieldError, useForm } from "react-hook-form";
import ImageUploading, { ImageListType } from "react-images-uploading";
import { useNavigate } from "react-router-dom";

import {
  Block,
  Button,
  ButtonsContainer,
  Input,
  ResumeCard,
  ResumeContainer,
  Text,
  Textarea,
  UploadFileCard,
  UploadFileContainer,
  Modal,
} from "@tranqi/ui-kit";

import MainContainer from "../../components/MainContainer";
import SectionContent from "../../components/SectionContent";

import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { createNewsletterAction, getNewslettersAction, submitNewsletterAction } from "../../store/slices/Newsletter/actions";

const NewslatterPage = () => {
  const dispatch = useAppDispatch();
  const { data } = useAppSelector((state) => state.newsletter);
  const [images, setImages] = useState<any>([]);
  const [newletterSelected, setNewsletter] = useState(0);
  const history = useNavigate();

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm();

  useEffect(() => {
    dispatch(getNewslettersAction());
  }, []);

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
    if (Object.keys(errors).length || !images["newsletterFile"]) {
      return true;
    }

    return false;
  };

  const getImageValue = (imageURL: ImageListType) => {
    if (!imageURL) {
      return [];
    }

    return [imageURL];
  };

  const onChangeFile = (imageList: ImageListType, addUpdateIndex: string) => {
    let newImages = { ...images } as any;
    newImages[addUpdateIndex] = imageList[0];

    setImages(newImages);
  };

  const onChangeFileWithName = (imageList: ImageListType) => {
    onChangeFile(imageList, "newsletterFile")
  }

  const onSubmit = handleSubmit((data) => {
    const params = {
      inputParams: data,
      file: images["newsletterFile"]?.file,
    };
    dispatch(createNewsletterAction(params as any));
  });

  const renderNewsletters = () => {
    return data.map((item: TNewsletter, index: number) => {
      return (
        <ResumeCard key={index} title={item.subject}>
          <Block space={1} position={"start"}>
            <Text size={"large"}>{item.content.slice(0, 40)}</Text>
          </Block>
          <Block space={1} position={"start"}>
            <Button
              type={"button"}
              variant={"outline"}
              width={100}
              style={{
                fontSize: 14,
                height: 30,
                marginRight: 10,
              }}
              onClick={() => {
                setNewsletter(item.id);
              }}
            >
              {"Submit"}
            </Button>
            <Button
              type={"submit"}
              variant={"outline"}
              width={100}
              style={{
                fontSize: 14,
                height: 30,
                marginRight: 10,
              }}
              onClick={() => {
                history(`/${item.id}`);
              }}
            >
              {"Add Email"}
            </Button>
          </Block>
        </ResumeCard>
      );
    });
  }

  const renderModal = () => {
    if (!newletterSelected) {
      return null;
    }

    return (
      <Block space={3}>
        <Modal
          leftButtonText="Cancel"
          rightButtonText="Ok"
          title="Send newsletter to subscribers"
          leftOnClick={() => {
            setNewsletter(0);
          }}
          rightOnClick={() => {
            dispatch(submitNewsletterAction({ id: newletterSelected }));
            setNewsletter(0);
          }}
          open={true}
        >
          <Block space={3}>
            <Text size={"large"}>{"Are you sure you want to send this newsletter to all subscribers?"}</Text>
          </Block>
        </Modal>
      </Block>
    );
  };

  return (
    <MainContainer>
      {renderModal()}
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
              name={"subject"}
              rules={{
                required: true,
                minLength: 3,
                maxLength: 40,
              }}
              render={({ field }) => (
                <Input
                  {...field}
                  placeholder={""}
                  name={"subject"}
                  error={getMessageError(errors.subject as FieldError)}
                />
              )}
            />
          </Block>
          <Block space={3}>
            {/* @ts-ignore */}
            <Controller
              control={control}
              name={"content"}
              rules={{
                required: true,
                minLength: 3,
                maxLength: 40,
              }}
              render={({ field }) => (
                <Textarea
                  {...field}
                  placeholder={""}
                  name={"content"}
                  error={getMessageError(errors.content as FieldError)}
                />
              )}
            />
          </Block>
          <Block space={3}>
            <Controller
              name={"imagenes"}
              control={control}
              render={({ field }) => (
                <UploadFileContainer type={"file"}>
                  <ImageUploading
                    multiple
                    value={getImageValue(images["newsletterFile"])}
                    onChange={onChangeFileWithName}
                    maxFileSize={4000000}
                    maxNumber={1}
                    dataURLKey="data_url"
                    allowNonImageType={true}
                    acceptType={["pdf"]}
                  >
                    {({
                      imageList,
                      onImageUpload,
                      onImageRemove,
                      errors,
                    }) => (
                      <>
                        <UploadFileCard
                          name={imageList.length && imageList[0].file.name}
                          type={"file"}
                          onAdd={onImageUpload}
                          onRemove={onImageRemove as any}
                          color={"primary"}
                          text={"upload file"}
                          url=""
                          about={"upload file"}
                        />
                        {errors && null}
                      </>
                    )}
                  </ImageUploading>
                </UploadFileContainer>
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
                {"Create newsletter"}
              </Button>
            </ButtonsContainer>
          </Block>
        </form>
        <Block space={3}>
          <Text size={"large-bold"}>{"Newsletter List"}</Text>
        </Block>
        <Block space={3}>
          <ResumeContainer>
            {renderNewsletters()}
          </ResumeContainer>
        </Block>
      </SectionContent>
    </MainContainer>
  );
};

export default NewslatterPage;
