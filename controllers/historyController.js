const { History } = require("../models");
const formatDate = require("../helpers/formatDate");

class HistoryController {
  static historyGet(req, res, next) {
    History.findAll({
      order: [["createdAt", "DESC"]],
    })
      .then((history) => {
        history.forEach((history) => {
          history.dataValues.createdAt = formatDate(history.createdAt);
        });
        console.log(history);
        res.status(200).json({ history });
      })
      .catch((err) => {
        next({ statusCode: 500 });
      });
  }
}

module.exports = HistoryController;

// HistoryController.historyPost()
