import User from '../models/user';

export function referal(req, res, next) {
  User.findOne({ referalCode: req.query.ref }, (err, user) => {
    if (err) console.error(err);
    if (err || !user) return;

    user.makeFastCash(5, () => {
      console.log(req.params)
      req.user = user;
      next();
    });
  });
}
