import { TypeID, typeid } from "typeid-js";

type BookId = TypeID<"book">;
type PublisherId = TypeID<"publisher">;

const addBook = (bookId: BookId, name: string) => {
    console.log(`addBook: ${bookId} - ${name}`);
}

const addPublisher = (publisherId: PublisherId, name: string) => {
    console.log(`addPublisher: ${publisherId} - ${name}`);
}

const bookId = typeid<"book">("book");
addBook(bookId, "The Lord of the Rings");


const publisherId = typeid<"publisher">("publisher");
addPublisher(publisherId, "Harper Collins");
// addPublisher(bookId, "Harper Collins"); // Error: Argument of type 'TypeID<"book">' is not assignable to parameter of type 'TypeID<"publisher">'.


const bookIdWithUuid7 = "018f1de1-5882-7b40-b729-98465eafd0dd"
const bookIdWithTypeId = "book_01hwexx7z9fncbhsj9txnrqqgs"

const bookApiEndpoint = `https://api.example.com/books/`;

const bookApiEndpointWithUuid = `${bookApiEndpoint}${bookIdWithUuid7}`;
const bookApiEndpointWithTypeId = `${bookApiEndpoint}${bookIdWithTypeId}`;

console.log(bookApiEndpointWithUuid); 
// https://api.example.com/books/018f1de1-5882-7b40-b729-98465eafd0dd

console.log(bookApiEndpointWithTypeId);
// https://api.example.com/books/book_01hwexx7z9fncbhsj9txnrqqgs
