const { User } = require("../models");

const getAllUsers = async () => {
    return await User.findAll({
        attributes: {
            exclude: ["password"],
        },
    });
};

const getUserById = async (id) => {
    return await User.findByPk(id, {
        attributes: {
            exclude: ["password"],
        },
    });
};

const getMyProfile = async (userId) => {
    return await User.findByPk(userId, {
        attributes: {
            exclude: ["password"],
        },
    });
};

const updateUser = async (
    id,
    data
) => {
    const user =
        await User.findByPk(id, {
            attributes: {
                exclude: ["password"],
            },
        });

    if (!user) {
        throw new Error(
            "User not found"
        );
    }

    await user.update(data);

    return user;
};

const deleteUser = async (
    id
) => {
    const user =
        await User.findByPk(id, {
            attributes: {
                exclude: ["password"],
            },
        });

    if (!user) {
        throw new Error(
            "User not found"
        );
    }

    await user.destroy();

    return true;
};

module.exports = {
    getAllUsers,
    getUserById,
    getMyProfile,
    updateUser,
    deleteUser,
};