type TCreateNewsletter = (
  params: any,
) => Promise<any>;

type TGetNewsletters = () => Promise<any>;

type TUploadFile = (
  params: any,
  file: File,  
) => Promise<string>;

type TSubscribeEmail = (
  id: number,
  params: any,
) => Promise<any>;

type TSubmitNewsletter = (
  id: number,
) => Promise<any>;

type TUnsubscribeEmail = (
  id: number,
) => Promise<any>;
