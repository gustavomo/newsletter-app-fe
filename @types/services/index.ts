type THeader = {
  'Content-Type': string;
}

type TMethodType = 'PUT' | 'DELETE' | 'GET' | 'POST';

type TExecuteRequestFunc = (
  endpoint: string,
  params: IObj,
  method: TMethodType,
  formDataFile?: File,
) => Promise<IObj>;
