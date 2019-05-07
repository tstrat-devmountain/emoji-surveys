module.exports = {
    getSchedule: (req, res) => {
        const db = req.app.get("db");

        db.get_schedule()
            .then(schedule => res.status(200).json(schedule))
            .catch(err => {
                console.log(
                    "An error has occurred in schedule controller: getSchedule"
                );
                res.sendStatus(501);
            });
    }
};
