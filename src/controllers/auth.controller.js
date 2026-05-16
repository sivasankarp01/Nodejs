const {
  registerUser,
  loginUser,
} = require("../services/auth.service");

const {
  validateRegister,
  validateLogin,
} = require("../validations/auth.validation");

exports.register = async (req, res, next) => {
  try {
    const errors = validateRegister(req.body);

    if (errors.length) {
      return res.status(400).json({
        success: false,
        errors,
      });
    }

    const result = await registerUser(req.body);

    res.status(201).json({
      success: true,
      message: "User registered successfully",
      token: result.token,
      user: result.user,
    });
  } catch (error) {
    next(error);
  }
};

exports.login = async (req, res, next) => {
  try {
    const errors = validateLogin(req.body);

    if (errors.length) {
      return res.status(400).json({
        success: false,
        errors,
      });
    }

    const result = await loginUser(req.body);
    const userData = result.user.toJSON();
    delete userData.password;
    res.status(200).json({
      success: true,
      message: "Login successful",
      token: result.token,
      user: userData,
    });
  } catch (error) {
    next(error);
  }
};