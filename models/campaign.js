import { models,model,Schema} from 'mongoose';

const CampaignSchema = new Schema({
    name: {
        type: String,
        unique: [true, 'Name already exists!'],
        required: [true, 'Name is required!'],
    },
    title:{
        type:String,
        required: [true, 'Title is required!'],
    },
    items:{
        type:[{name:String,description:String}],
        required: [true, 'items is required!'],
    },
}, {
    timestamps: {
        createdAt: 'created_at', // Use `created_at` to store the created date
        updatedAt: 'updated_at' // and `updated_at` to store the last updated date
    }
});

const Campaign = models.campaign || model("campaign",  CampaignSchema);

export default Campaign;