const { handleError } = require('../utils/errorHandler');
const { checkUserExist, checkUserByEmail} = require('../repository/users');
const { Users }  = require('../models');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
require('dotenv').config();

const getAllUsers = async (req, res) => {
    try{
        const users = await Users.findAll();
        const responseUsers = users.map((user) => {
            let userObj = user.toJSON();
            delete userObj.password;
            return userObj;
        } )

        return res.status(200).json({
            success:true,
            data: responseUsers
        })
    } catch (err) {
        return handleError(res, 400, err.message);
    }
}

const singUpUser = async (req, res) => {
    try {
        const payload = req.body;
        const userExist = await checkUserExist(payload);
        if(userExist){
            return handleError(res, 400, 'User already exist.');
        } 
        payload.password = await bcrypt.hash(payload?.password , 15);
        const user = await Users.create(payload);
        const userResponse = user.toJSON();
        delete userResponse.password;
        if(userResponse){
            return res.status(200).json({
                success: true,
                data: userResponse
            })
        }
    } catch(err) {
        return handleError(res, 400, err.message);
    }
}

const loginUser = async(req, res) => {
    try{
        const payload = req.body;
        const userExist = await checkUserByEmail(payload?.email);
        if(userExist){
            const isValidUser = await bcrypt.compare(payload.password, userExist?.password);
            if(isValidUser){
                const accessToken = jwt.sign(payload, process.env.JWT_SECRET,{ expiresIn: '1h' })
                if(accessToken){
                    const resUser = userExist.toJSON();
                    delete resUser.password;
                    resUser.accessToken = accessToken;
                    return res.status(200).json({
                        success: true,
                        data: resUser
                    })
                } else {
                    return handleError(res, 404, 'Something went wrong.'); 
                }
            } else {
                return handleError(res, 404, 'Invalid email or password'); 
            }
        } else {
            return handleError(res, 404, 'Invalid email or password');
        }
    }catch(err){
        return handleError(res, 400, err.message);
    }
}

module.exports = { getAllUsers, singUpUser, loginUser }