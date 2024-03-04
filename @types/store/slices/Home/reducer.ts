type TNewsletterReducer = {
  url: string;
  data: TNewsletter[];
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