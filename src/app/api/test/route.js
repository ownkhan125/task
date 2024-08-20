// GET POST PUT DELETE

import { connectDb } from "@/db/connectDb";
import { NextResponse } from "next/server"

export const GET = async () => {
    try {
        connectDb();
        const response = await fetch("https://jsonplaceholder.typicode.com/posts");
         return NextResponse.json(await response.json() , {status : 201});
    } catch (error) {
        console.log(error.message);
        NextResponse.json(`${error?.message}` , {status : 500});
    }
}