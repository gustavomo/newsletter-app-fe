type TNewsletterReducer = {
  url: string;
  data: TNewsletter[];
  subscribers: TSubscriber[];
  lastAction: string;
}

type TNewsletter = {
  id: number;
  subject: string;
  content: string;
  file_url: string;
  createdAt: string;
  updatedAt: string;
}

type TSubscriber = {
  id: number;
  email: string;
  createdAt: string;
  updatedAt: string;
}