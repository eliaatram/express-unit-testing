import { IItem } from 'src/interfaces/item.interface';
export declare const createItem: (itemObj: IItem) => Promise<import("mongoose").Document<unknown, any, {
    name: string;
    rating: string;
    price: number;
    hash: string;
}> & Omit<{
    name: string;
    rating: string;
    price: number;
    hash: string;
} & {
    _id: import("mongoose").Types.ObjectId;
}, never>>;
export declare const updateItemHash: (hash: string) => Promise<import("mongoose").Document<unknown, any, {
    name: string;
    rating: string;
    price: number;
    hash: string;
}> & Omit<{
    name: string;
    rating: string;
    price: number;
    hash: string;
} & {
    _id: import("mongoose").Types.ObjectId;
}, never>>;
export declare const readItem: (hash: string) => Promise<import("mongoose").Document<unknown, any, {
    name: string;
    rating: string;
    price: number;
    hash: string;
}> & Omit<{
    name: string;
    rating: string;
    price: number;
    hash: string;
} & {
    _id: import("mongoose").Types.ObjectId;
}, never>>;
