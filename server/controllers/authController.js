module.exports = {
    login: (req, res) => {},
    register: (req, res) => {},
    logout: (req, res) => {
        req.session.destroy();
        res.status(200).send("Logout Successful");
    }
};
