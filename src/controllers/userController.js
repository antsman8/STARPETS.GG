const UserModel = require('../models/userModel');

class UserController {
    constructor(userModel) {
        this.userModel = userModel;
    }

    async updateBalance(req, res) {
        try {
            const { userId, amount } = req.body;
            const updateUser = await this.userModel.updateUserBalance(
                userId,
                amount
            );
            res.json(updateUser);
        } catch (error) {
            res.status(400).json({ error: error.message });
        }
    }
}

module.exports = UserController;
