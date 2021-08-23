const User = require('../models/User');

module.exports = {


    async index(req, res){

        const  { name } = req.params;

        const user = await User.findOne({name: name})
        
        return res.json(user)
    },


};