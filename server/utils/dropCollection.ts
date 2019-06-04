import { connection } from "mongoose";

function dropCollection(collection: string): void {
    connection.db.dropCollection(
        collection,
        (error): void => {
            if (error) throw new Error("Failed to drop collection in DB");
        }
    );
}

export default dropCollection;
