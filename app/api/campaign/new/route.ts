import { connectToDB } from "@/utils/db";
import Campaign from "@/models/campaign"

export const POST = async (
    request:Request
) => {
    const { name,title,items} = await request.json();
    try {
        await connectToDB();
        const campaign = new Campaign({
            name,
            title,
            items
        })
        //console.log(user);
        await campaign.save();
        const prompt = {message:'success to create a new campaign'}
        return new Response(JSON.stringify(prompt), { status: 201 })
    } catch (error) {
        const promt = {message:'Failed to create a new user',error:error}
        return new Response(JSON.stringify(promt), { status: 500 });
    }
}
