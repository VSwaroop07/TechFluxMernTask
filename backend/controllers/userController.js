const User = require("../models/User");

const registerUser = async (req, res) => {
    try {
        const { name, email, mobile, city } = req.body;

        if (!name || !email || !mobile || !city) {
            return res.status(400).json({
                message: "All fields are required",
            });
        }

        const existingUser = await User.findOne({ email });

        if (existingUser) {
            return res.status(400).json({
                message: "Email already exists",
            });
        }

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (!emailRegex.test(email)) {
            return res.status(400).json({
                message: "Invalid email format",
            });
        }

        const mobileRegex = /^[0-9]{10}$/;

        if (!mobileRegex.test(mobile)) {
            return res.status(400).json({
                message: "Mobile number must be exactly 10 digits",
            });
        }

        const user = await User.create({
            name,
            email,
            mobile,
            city,
        });

        res.status(201).json(user);

    } catch (error) {
        res.status(500).json({
            message: error.message,
        });
    }
};

const searchUsers = async (req, res) => {
    try {
        const keyword = req.query.q || "";

        const users = await User.find({
            $or: [
                {
                    name: {
                        $regex: keyword,
                        $options: "i",
                    },
                },
                {
                    email: {
                        $regex: keyword,
                        $options: "i",
                    },
                },
            ],
        });

        res.json(users);

    } catch (error) {
        res.status(500).json({
            message: error.message,
        });
    }
};

const deleteUser = async (req, res) => {
    try {
        const user = await User.findByIdAndDelete(req.params.id);

        if (!user) {
            return res.status(404).json({
                message: "User not found",
            });
        }

        res.json({
            message: "User deleted successfully",
        });

    } catch (error) {
        res.status(500).json({
            message: error.message,
        });
    }
};

module.exports = {
    registerUser,
    searchUsers,
    deleteUser,
};