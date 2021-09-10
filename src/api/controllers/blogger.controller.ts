import { Blogger } from '../../domain/models';

/**
 * Get user
 * @public
 */
export async function getBlogger(req, res, next) {
  const blogger = await Blogger.findOne(Number.parseInt(req.params.userId, 10));
  res.json(blogger);
}

// /**
//  * Get logged in user info
//  * @public
//  */
// export const loggedIn = (req, res) => res.json(req.user.transform());

// /**
//  * Create new user
//  * @public
//  */
// export const create = async (req, res, next) => {
//   try {
//     const user = new User(req.body);
//     const savedUser = await user.save();
//     res.status(httpStatus.CREATED);
//     res.json(savedUser.transform());
//   } catch (error) {
//     next(User.checkDuplicateEmail(error));
//   }
// };

// /**
//  * Replace existing user
//  * @public
//  */
// export const replace = async (req, res, next) => {
//   try {
//     const { user } = req.locals;
//     const newUser = new User(req.body);
//     const ommitRole = user.role !== 'admin' ? 'role' : '';
//     const newUserObject = omit(newUser.toObject(), '_id', ommitRole);

//     await user.updateOne(newUserObject, { override: true, upsert: true });
//     const savedUser = await User.findById(user._id);

//     res.json(savedUser.transform());
//   } catch (error) {
//     next(User.checkDuplicateEmail(error));
//   }
// };

// /**
//  * Update existing user
//  * @public
//  */
// export const update = (req, res, next) => {
//   const ommitRole = req.locals.user.role !== 'admin' ? 'role' : '';
//   const updatedUser = omit(req.body, ommitRole);
//   const user = Object.assign(req.locals.user, updatedUser);

//   user
//     .save()
//     .then((savedUser) => res.json(savedUser.transform()))
//     .catch((error) => next(User.checkDuplicateEmail(error)));
// };

// /**
//  * Get user list
//  * @public
//  */
// export const list = async (req, res, next) => {
//   try {
//     const users = await User.list(req.query);
//     const transformedUsers = users.map((user) => user.transform());
//     res.json(transformedUsers);
//   } catch (error) {
//     next(error);
//   }
// };

// /**
//  * Delete user
//  * @public
//  */
// export const remove = (req, res, next) => {
//   const { user } = req.locals;

//   user
//     .remove()
//     .then(() => res.status(httpStatus.NO_CONTENT).end())
//     .catch((error) => next(error));
// };
