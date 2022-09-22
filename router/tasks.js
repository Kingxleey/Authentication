const express = require('express')
const router = express.Router()

const {
    signUp,
    signIn,
    deleteUser,
    updateUser,
    getAll,
    getOne,
} = require('../controller/new')

router.post("/signup", signUp);
router.post("/signin", signIn);
router.route('/').get(getAll).post(createTask)
router.route("/:id").delete(deleteUser).patch(updateUser).get(getOne);
module.export = router


   