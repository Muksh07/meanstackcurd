const User = require('../Models/user');
async function handlerAddUser(req , res)
{
    const body = req.body;
    const result = await User.create({
        Name:body.Name,
        Email:body.Email,
        Password:body.Password,
        Gender:body.Gender
    });
    return res.json({msg:'success' , id:result._id});
}
async function handlerGetAllUSers(req, res)
{
    const dbusers = await User.find({});
    return res.json(dbusers);
}
module.exports = {
    handlerAddUser,
    handlerGetAllUSers
}