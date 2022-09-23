const ChannelsController = require('./channels.controller');
const ValidationMiddleware = require('../common/middlewares/auth.validation.middleware');


exports.routesConfig = function (app) {
    app.post('/channels', [
        ValidationMiddleware.validJWTNeeded,
        ChannelsController.insert
    ]);
    app.get('/channels', [
        ValidationMiddleware.validJWTNeeded,
        ChannelsController.list
    ]);
    app.get('/channels/:channelId', [
        ValidationMiddleware.validJWTNeeded,
        ChannelsController.getById
    ]);
    app.patch('/channels/:channelId', [
        ValidationMiddleware.validJWTNeeded,
        ChannelsController.patchById
    ]);
    app.delete('/channels/:channelId', [
        ValidationMiddleware.validJWTNeeded,
        ChannelsController.removeById
    ]);
};