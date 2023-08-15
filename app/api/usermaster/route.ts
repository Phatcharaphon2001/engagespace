import { connectToDB } from "@/utils/db";
import Users from "@/models/users"
 
export const GET = async(
    request: Request,
) => {
    try {
        await connectToDB();
        const userAll = await Users.find({});
        return new Response(JSON.stringify(userAll), { status: 200 })
    } catch (error) {
        return new Response("Failed to fetch prompts created by user", { status: 500 })
    }
}

