import { Schema, model, models } from 'mongoose';

const DomainSchema = new Schema({
    domainName: {
        type: String,
        required: [true, 'Domain is required!'],
    },
    activeDate: {
        type: String,
        required: [true, 'ActiveDate is required!']
    },
    endDate: {
        type: String,
        required: [true, 'EndDate is required!']
    },
    concurrentUser:{
        type:Number,
        required: [true, 'ConcurrentUser is required!']
    }
}, {
    timestamps: {
        createdAt: 'created_at', // Use `created_at` to store the created date
        updatedAt: 'updated_at' // and `updated_at` to store the last updated date
    }
});

const Domain = models.domains || model("domains", DomainSchema);

export default Domain;