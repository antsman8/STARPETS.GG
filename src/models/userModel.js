class UserModel {
    constructor(pool) {
        this.pool = pool;
    }

    async updateUserBalance(userId, amount) {
        const queryText =
            'UPDATE users SET balance = balance + $2 WHERE id = $1 AND balance + $2 >= 0 RETURNING *';
        const values = [userId, amount];
        const { rows } = await this.pool.query(queryText, values);
        if (rows.length === 0) {
            throw new Error('Insufficient balance');
        }
        return rows[0];
    }
}

module.exports = UserModel;
