export interface Photo {
    id?:string;
    title: string;
    link: string;
    media: {m:string};
    author: string;
    author_id?: string;
    date_taken?: string;
    description?: string;
    published?: string;
    tags?: string;
}

export interface FlickrResponse {
    items: Photo[];
}