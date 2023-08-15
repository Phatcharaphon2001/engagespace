import { connectToDB } from "@/utils/db";
import Users from "@/models/users"

export const POST = async (
    request:Request
) => {
    const { email,name,nickname,title,team,picture,mobile,role} = await request.json();
    try {
        await connectToDB();
        const user = new Users({
            email,
            name,
            nickname,
            title,
            team,
            picture,
            mobile,
            role
        })
        //console.log(user);
        await user.save();
        const prompt = {message:'success to create a new user'}
        return new Response(JSON.stringify(prompt), { status: 201 })
    } catch (error) {
        const promt = {message:'Failed to create a new user',error:error}
        return new Response(JSON.stringify(promt), { status: 500 });
    }
}
