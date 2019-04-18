const bcrypt = require('bcrypt');
const saltRounds = 12;

module.exports = {
    register: (req, res) => {
        const db = app.get('db');
        const { username, password } = req.body;
        bcrypt.hash(password, saltRounds).then(hash => {
            db.create_user([username, hash]).then(() => {
            req.session.user = { username };
            res.json({ user: req.session.user })
        }).catch(error => {
            console.log('error', error);
            res.status(500).json({ message: 'An error has occured durring register'})
        })
        })
    },
    login: (req, res) => {
        const db = app.get('db');
        const { username, password } = req.body;
        db.find_user([username]).then(users => {
        if (users.length) {
        bcrypt.compare(password, user[0].password).then(passwordsMatch => {
            if (passwordsMatch) {
            req.session.user = { username: users[0].username };
            res.json({ user: req.session.user });
            } else {
            res.status(403).json({ message: 'password incorrect' })
            }
        })
            } else {
            res.status(403).json({ message: "user is not registered" })
            }
        })
    },
    logout: (req, res) => {
        req.session.destroy()
        res.status(200).send();
    }
}