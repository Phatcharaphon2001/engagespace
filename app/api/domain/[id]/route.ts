import { connectToDB } from "@/utils/db";
import Domains from "@/models/domain"

export const GET = async(
    request:Request,
    {params} : {params:{id:string}}
) => {
    const id = params.id;
    try{
        await connectToDB();
        const domain = await Domains.findById(id);
        return new Response(JSON.stringify(domain), { status: 200 })
    }catch(error){
        return new Response(JSON.stringify({message:'error',error:error}))
    }
}

export const PUT = async (
    request:Request,
    { params }: { params: { id: string } }
) => {
    const id = params.id;
    const { domainName,activeDate,endDate,concurrentUser} = await request.json();
    try {
        await connectToDB();
        const domain = await Domains.findByIdAndUpdate(id,{
            domainName,
            activeDate,
            endDate,
            concurrentUser
        });
        console.log(domain);
        await domain.save();
        const prompt = {message:'success to update a domain'}
        return new Response(JSON.stringify(prompt), { status: 201 })
    } catch (error) {
        const promt = {message:'Failed to update a domain',error:error}
        return new Response(JSON.stringify(promt), { status: 500 });
    }
}

export const DELETE = async () => {}
