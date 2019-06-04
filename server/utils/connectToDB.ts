import mongoose from "mongoose";

function connectToDB(dbUrl: string, user: string, password: string): void {
    if (!(dbUrl && user && password)) {
        throw new Error("Please, enter credentials");
    }

    const mongoDB = `mongodb://${user}:${password}@${dbUrl}`;
    mongoose.connect(mongoDB, { useNewUrlParser: true });
}

export default connectToDB;
