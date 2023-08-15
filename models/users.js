import { Schema, model, models } from 'mongoose';

const UserSchema = new Schema({
    email: {
        type: String,
        unique: [true, 'Email already exists!'],
        required: [true, 'Email is required!'],
    },
    name: {
        type: String,
        required: [true, 'Name is required!']
    },
    nickname: {
        type: String,
        required: [true, 'NickName is required!']
    },
    title: {
        type: String,
        required: [true, 'title is required!']
    },
    team: {
        type: String,
        required: [true, 'team required!']
    },
    picture: {
        type: String,
        required: [true, 'picture required!']
    },
    mobile: {
        type: String,
        required: [true, 'Mobile required!']
    },
    role: {
        type: String,
        required: [true, 'Role required!']
    }
}, {
    timestamps: {
        createdAt: 'created_at', // Use `created_at` to store the created date
        updatedAt: 'updated_at' // and `updated_at` to store the last updated date
    }
});

const Users = models.users || model("users", UserSchema);

export default Users;