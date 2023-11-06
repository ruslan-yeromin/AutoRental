import mongoose, { ConnectOptions } from "mongoose";

const configOptions: ConnectOptions = {

};

const connectToDB = async (): Promise<void> => {
    try {
        await mongoose.connect(process.env.MONGO_URI || "", configOptions);
        console.log("Connected to DB");
    } catch (err) {
        console.error("This error occured: "  + err);
    }
}

export default connectToDB;
