import { connectToDB } from "@/utils/db";
import users from "@/models/users"
 
export async function GET(
    request: Request,
    { params }: { params: { id: string } }
) {
    try {
        await connectToDB()
        const user = await users.findById(params.id);
        return new Response(JSON.stringify(user), { status: 200 })
    } catch (error) {
        return new Response("Failed to fetch prompts created by user", { status: 500 })
    }
}

export const PUT = async (
    request:Request,
    { params }: { params: { id: string } }
) => {
    const id = params.id;
    const {name, nickname, mobile, role, email, title, team, picture} = await request.json();
    try {
        await connectToDB();
        const user = await users.findByIdAndUpdate(id,{
            name,
            nickname,
            mobile,
            role,
            email,
            title,
            team,
            picture  
        });
        console.log(user);
        await user.save();
        const prompt = {message:'success to update user'}
        return new Response(JSON.stringify(prompt), { status: 201 })
    } catch (error) {
        const promt = {message:'Failed to update user',error:error}
        return new Response(JSON.stringify(promt), { status: 500 });
    }
}