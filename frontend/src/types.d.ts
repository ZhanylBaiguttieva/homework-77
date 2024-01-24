export interface Message {
  id: string,
  author: string | null,
  title: string,
  image: string | null
}

export interface MessageMutation {
  author: string | null;
  title: string;
  image: File | null;
}