import { connectToDB } from "@/utils/db";
import users from "@/models/users"
 
export async function GET(
    request: Request,
    { params }: { params: { email: string } }
) {
    try {
        await connectToDB()
        const user = await users.findOne({email:params.email});
        return new Response(JSON.stringify(user), { status: 200 })
    } catch (error) {
        return new Response("Failed to fetch prompts created by user", { status: 500 })
    }
}