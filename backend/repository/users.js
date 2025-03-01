const { handleError } = require("../utils/errorHandler");
const { Users }  = require('../models');
const { Op } = require('sequelize');

const checkUserExist = async (payload) => {
    try{
        const user = await Users.findOne({
            where: {
                [Op.or]:[
                   { email : payload.email },
                   { phone : payload.phone }
                ]
            }
        })
        return user ? true : false;
    }catch(err) {
        return err;
    }
}

const checkUserByEmail = async (email) => {
    try{
        const user = await Users.findOne({
            where: { email : email }
        })
        return user ? user : false;
    }catch(err) {
        return err;
    }
}

module.exports = { checkUserExist, checkUserByEmail }