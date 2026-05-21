const userService =
  require("../services/user.service");

exports.getUsers = async (
  req,
  res,
  next
) => {
  try {
    const users =
      await userService.getAllUsers();

    res.status(200).json({
      success: true,
      data: users,
    });
  } catch (error) {
    next(error);
  }
};

exports.getUser = async (
  req,
  res,
  next
) => {
  try {
    const user =
      await userService.getUserById(
        req.params.id
      );

    if (!user) {
      return res.status(404).json({
        success: false,
        message:
          "User not found",
      });
    }

    res.status(200).json({
      success: true,
      data: user,
    });
  } catch (error) {
    next(error);
  }
};

exports.getProfile = async (
  req,
  res,
  next
) => {
  try {
    const user =
      await userService.getMyProfile(
        req.user.id
      );

    res.status(200).json({
      success: true,
      data: user,
    });
  } catch (error) {
    next(error);
  }
};

exports.updateUser = async (
  req,
  res,
  next
) => {
  try {
    const user =
      await userService.updateUser(
        req.params.id,
        req.body
      );

    res.status(200).json({
      success: true,
      message:
        "User updated",
      data: user,
    });
  } catch (error) {
    next(error);
  }
};

exports.deleteUser = async (
  req,
  res,
  next
) => {
  try {
    await userService.deleteUser(
      req.params.id
    );

    res.status(200).json({
      success: true,
      message:
        "User deleted",
    });
  } catch (error) {
    next(error);
  }
};