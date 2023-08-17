import { connectToDB } from "@/utils/db";
import Domains from "@/models/domain"
 
export const GET = async(
    request: Request,
) => {
    try {
        await connectToDB();
        const domainAll = await Domains.find({});
        return new Response(JSON.stringify(domainAll), { status: 200 })
    } catch (error) {
        return new Response("Failed to fetch domains", { status: 500 })
    }
}

