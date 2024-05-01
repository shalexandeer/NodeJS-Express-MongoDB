
module.exports = mongoose => {
    const User = mongoose.model(
        "tutorial",
        mongoose.Schema({
            email: String,
            password: String,
        },
        {
            timestamps: true
        }
        )
    )
    return User
}