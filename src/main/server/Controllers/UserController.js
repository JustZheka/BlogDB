import User from "../Models/User.js";

class UserController {
    async create(req, res) {
        try {
            const data = req.body;
            const user = await User.create(data);
            return res.json(user); 
        }
        catch(err) {
            return res.status(500).json(err);
        }
    }

    async remove(req, res) {
        try {
            const {id} = req.params;
            if (!isFinite(id)) {
                res.status(400).json({message: "invalid id"});
            }
            const user = await User.findByPk(id);

            await user.destroy();

            return res.json(user); 
        }
        catch(err) {
            return res.status(500).json(err);
        }
    }

    async getAll(req, res) {
        try {
            const users = await User.findAll({raw:true});
            return res.json(users);
        }
        catch(err) {
            return res.status(500).json(err);
        }
    }

    async getOne(req, res) {
        try {
            const {id} = req.params;
            if (!isFinite(id)) {
                return res.status(400).json({message: "invalid id"});
            }
            const user = await User.findByPk(id);
            return res.json(user);
        }
        catch(err) {
            return res.status(500).json(err);
        }
    }

    async update(req, res) {
        try {
            const data = req.body;
            if (!isFinite(data.id)) {
                return res.status(400).json({message: "invalid id"});
            }
            const user = await User.findByPk(data.id);

            user.username = data.username;
            user.password = data.password;
            user.email = data.email;

            await user.save();

            return res.json(user); 
        }
        catch(err) {
            return res.status(500).json(err);
        }
    }
}

export default new UserController();