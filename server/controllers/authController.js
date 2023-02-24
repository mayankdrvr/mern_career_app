import User from "../models/user.js";
import { StatusCodes } from "http-status-codes";
import { BadRequestError, UnAuthenticatedError } from "../errors/index.js";

// here we're  replacing try-catch with "express-async-errors" Package which passes error to the errorHandler
const register = async (req, res) => {
  const { name, email, password } = req.body;
  // creating custom error messages:
  if (!name || !email || !password) {
    throw new BadRequestError("Please Provide all values");
  }
  // checking for existed email
  const userAlreadyExists = await User.findOne({ email });
  if (userAlreadyExists) {
    throw new BadRequestError("Email already in use");
  }

  const user = await User.create({ name, email, password });
  const token = user.createJWT();
  // sending everything but the password
  res.status(StatusCodes.CREATED).json({
    user: {
      email: user.email,
      lastName: user.lastName,
      location: user.location,
      name: user.name,
    },
    token,
    location: user.location,
  });
};

const login = async (req, res) => {
  const { email, password } = req.body;
  if (!email || !password) {
    throw new BadRequestError("Please Provide all values");
  }

  const user = await User.findOne({ email }).select("+password"); // here we ask database to provide the user with password which we specified above that it's unselected

  if (!user) {
    throw new UnAuthenticatedError("Invalid Credentials");
  }
  console.log(user);

  const isPasswordCorrect = await user.comparePassword(password);
  if (!isPasswordCorrect) {
    throw new UnAuthenticatedError("Invalid Credentials");
  }

  const token = user.createJWT();
  user.password = undefined; // so that it won't be sent in the response

  res.status(StatusCodes.OK).json({ user, token, location: user.location });
};

const updateUser = async (req, res) => {
  const { email, name, lastName, location } = req.body;
  if (!email || !name || !lastName || !location) {
    throw new BadRequestError("Please provide all values");
  }

  const user = await User.findOne({ _id: req.user.userId }); // from auth-middleware
  console.log(user);
  user.email = email;
  user.name = name;
  user.lastName = lastName;
  user.location = location;

  await user.save();

  const token = user.createJWT(); // not required but preferred

  res.status(StatusCodes.OK).json({ user, token, location: user.location });
};

export { register, login, updateUser };
