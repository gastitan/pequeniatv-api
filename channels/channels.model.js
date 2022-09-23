const mongoose = require('../common/services/mongoose.service').mongoose;
const Schema = mongoose.Schema;

const channelSchema = new Schema({
    name: String,
    source: String,
    logo: String,
    channel: String,
    section: String
});

channelSchema.virtual('id').get(function () {
    return this._id.toHexString();
});

// Ensure virtual fields are serialised.
channelSchema.set('toJSON', {
    virtuals: true
});

channelSchema.findById = function (cb) {
    return this.model('Channels').find({id: this.id}, cb);
};

const Channel = mongoose.model('Channels', channelSchema);

exports.findById = (id) => {
    return Channel.findById(id)
        .then((result) => {
            if (result) {
                result = result.toJSON();
                delete result._id;
                delete result.__v;
            }
            return result;
        });
};

exports.createChannel = (channelData) => {
    const channel = new Channel(channelData);
    return channel.save();
};

exports.list = (perPage, page) => {
    return new Promise((resolve, reject) => {
        Channel.find()
            .limit(perPage)
            .skip(perPage * page)
            .exec(function (err, channels) {
                if (err) {
                    reject(err);
                } else {
                    resolve(channels);
                }
            })
    });
};

exports.listBySection = (section) => {
    return Channel.find({ section: section });
}

exports.patchChannel= (id, channelData) => {
    return Channel.findOneAndUpdate({
        _id: id
    }, channelData, {new: true})
    .then(result => {
        console.log(result);
        return result;
    });
};

exports.removeById = (channelId) => {
    return Channel.deleteOne({_id: channelId})
                .then(result => {
                    if (result.deletedCount === 0) {
                        return 'Nada para eliminar';
                      }
                      return 'Deleted';
                })
                .catch(error => {
                    console.log(error);
                    return "error";
                });
        

};