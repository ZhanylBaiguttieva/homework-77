export interface Message {
    id: string,
    author: string | null,
    title: string,
    image: string | null
}

export type MessageWithoutId = Omit<Message, 'id'>;