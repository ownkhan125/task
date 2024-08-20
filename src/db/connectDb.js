import mongoose from "mongoose"
import "colors";

export const connectDb = async () => {
    try {
        await mongoose.connect(process.env.MONGODB_URI)
            .then(() => console.log("database connected successfully".bgBlue.white))
            .catch(err => console.log("database not connected -".bgRed.white + err?.message));
    } catch (error) {
        throw new Error(error?.message)
    }
}