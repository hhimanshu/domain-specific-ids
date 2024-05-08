import { typeid, TypeID } from 'typeid-js';

type BookId = TypeID<"book">
type PublisherId = TypeID<"pub">


const addBook = (bookId: BookId, name: string) => {
    console.log(`Adding book with id: [${bookId}] and name: [${name}]`)
}

const addPublisher = (publisherId: PublisherId, name: string) => {
    console.log(`Adding publisher with id: [${publisherId}] and name: [${name}]`)
}


const bookId: BookId = typeid<"book">("book");
const publisherId: PublisherId = typeid<"pub">("pub");

addBook(bookId, "The Alchemist")
addPublisher(publisherId, "Harper Collins")


"018f1ea8-f47e-7f5f-8f05-f3b24aeb4cb3"
"pub_01hwfaggfbfjmarpkccy28h2hr"

const AMZ_CATEGORY_PREFIX = "cat";
export type AmzCategoryId = TypeID<typeof AMZ_CATEGORY_PREFIX>;
export const createNewAmzCategoryId = (): AmzCategoryId => typeid(AMZ_CATEGORY_PREFIX);

const newAmzCatId = createNewAmzCategoryId()
console.log(`New Amazon Category Id: [${newAmzCatId}]`)