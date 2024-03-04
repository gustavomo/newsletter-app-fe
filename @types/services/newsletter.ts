type TCreateNewsletter = (
  params: { subject: string, file_url: string },
) => Promise<void | Error| Error>;

type TGetNewsletters = () => Promise<IObj | Error>;

type TUploadFile = (
  params: { subject: string },
  file: File,
) => Promise<string | Error>;

type TSubscribeEmail = (
  id: number,
  params: { email: string },
) => Promise<void | Error>;

type TSubmitNewsletter = (
  id: number,
) => Promise<void | Error>;

type TUnsubscribeEmail = (
  id: number,
) => Promise<void | Error>;
