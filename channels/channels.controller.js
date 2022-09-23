const ChannelModel = require('./channels.model');

exports.insert = (req, res) => {
    ChannelModel.createChannel(req.body)
        .then((result) => {
            res.status(201).send({id: result._id});
        });
};

exports.list = (req, res) => {
    
    if (req.query.section) {
        ChannelModel.listBySection(req.query.section)
        .then((result) => {
            res.status(200).send(result);
        });
    } else {
        let limit = req.query.limit && req.query.limit <= 100 ? parseInt(req.query.limit) : 10;
        let page = 0;
        if (req.query && req.query.page) {
            req.query.page = parseInt(req.query.page);
            page = Number.isInteger(req.query.page) ? req.query.page : 0;
        }
        ChannelModel.list(limit, page)
            .then((result) => {
                res.status(200).send(result);
            });
    }
};

exports.getById = (req, res) => {
    ChannelModel.findById(req.params.channelId)
        .then((result) => {
            if (!result) {
                return res.status(404).send(result);
            }
            return res.status(200).send(result);
        });
};
exports.patchById = (req, res) => {
    ChannelModel.patchChannel(req.params.channelId, req.body)
        .then((result) => {
            if (!result) {
                return res.status(404).send(result);
            }
            return res.status(200).send(result);
        });

};

exports.removeById = (req, res) => {
    console.log(req.params.channelId);
    ChannelModel.removeById(req.params.channelId)
        .then((result)=>{
            res.status(200).send(result);
        });
};