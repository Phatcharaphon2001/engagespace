import { connectToDB } from "@/utils/db";
import Campaigns from "@/models/campaign"
 
export const GET = async(
    request: Request,
) => {
    try {
        await connectToDB();
        const campaignAll = await Campaigns.find({});
        return new Response(JSON.stringify(campaignAll), { status: 200 })
    } catch (error) {
        return new Response("Failed to fetch prompts created by user", { status: 500 })
    }
}

