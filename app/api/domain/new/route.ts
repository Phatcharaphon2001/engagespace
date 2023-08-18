import { connectToDB } from "@/utils/db";
import Domains from "@/models/domain"

export const POST = async (
    request:Request
) => {
    const { domainName,activeDate,endDate,concurrentUser} = await request.json();
    try {
        await connectToDB();
        const domain = new Domains({
           domainName,
           activeDate,
           endDate,
           concurrentUser,
        })
        //console.log(user);
        await domain.save();
        const prompt = {message:'success to create a new domain'}
        return new Response(JSON.stringify(prompt), { status: 201 })
    } catch (error) {
        const promt = {message:'Failed to create a new domain',error:error}
        return new Response(JSON.stringify(promt), { status: 500 });
    }
}
