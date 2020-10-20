const { Router } = require('express')
const auth = require('../middleware/auth.middleware')
const User = require('../models/User')
const router = Router()

router.get('/users', auth, async (req, res) => {
    try {
        let users = await User.findAll({})
        users = users.map(user => {
            return {
                id: user.id,
                fullName: user.firstName + " " + user.lastName,
                email: user.email,
                createdAt: user.createdAt.toISOString(),
                updatedAt: user.updatedAt.toISOString(),
                status: user.status,
                isChecked: false
            }
        })
        res.json(users)
    } catch (e) {
        res.status(500).json({
            message: "Something went wrong. Try again."
        })
    }
})

router.put('/users', auth, async (req, res) => {
    try {
        const { ids, status } = req.body
        records = await User.update({ status : status },{ where : { id : ids }})

        res.status(200).json({
            message: "Success"
        })
    } catch (e) {
        res.status(500).json({
            message: "Something went wrong. Try again."
        })
    }
})

router.delete('/users/:id', auth, async (req, res) => {
    console.log('-----------------------------------------------------------');
    console.log(req.body);
    try {
        await User.destroy({ where: { id: req.body.id } });
        res.status(200).json({
            message: "Success"
        })
    } catch (e) {
        res.status(500).json({
            message: "Something went wrong. Try again."
        })
    }
})

module.exports = router