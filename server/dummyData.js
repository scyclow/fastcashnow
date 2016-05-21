export default (User) => {

  User.find({}, (err, users) => {
    if (err) return err;
    if (users.length) {
      console.log(users)
      return;
    }

    const user = {
      email: 'steve@fast.plus',
      username: 'steve',
      password: 'password',
    };

    User.create(user, (error, u) => {
      if (!error) {
        console.log(u)
      }
    });
  });
}
