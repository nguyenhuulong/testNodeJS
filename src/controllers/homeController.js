import db from '../models/index'
import CRUDService from "../services/CRUDService"

let getHomePage = async (req, res) => {
    try {
        let data = await db.User.findAll()
        return res.render('homepage.ejs', { data: JSON.stringify(data) })
    } catch (e) {
        console.log(e)
    }

}
let getAboutPage = (req, res) => {
    return res.render('about.ejs') // render ra view
}
let getCRUD = (req, res) => {
    return res.render('crud.ejs')
}
let postCRUD = async (req, res) => {
    let message = await CRUDService.createNewUser(req.body)
    console.log(message)
    return res.send('post crud from server')
}
let displayCRUD = async(req, res) => {
    let data = await CRUDService.getAllUser()
    return res.render('display-crud.ejs', {
        dataTable: data
    })
}
let editCRUD = async (req, res) => {
    let userId = req.query.id
    if(userId) {
        let userData = await CRUDService.getUserInfoById(userId)
        return res.render('edit-crud.ejs', {
            user: userData
        })
    }
    else {
        return res.send('User not found')
    }
}
let putCRUD = async (req, res) => {
    let data = req.body
    let allUsers = await CRUDService.updateUserData(data)
    return res.render('display-crud.ejs', {
        dataTable: allUsers
    })
}
let deleteCRUD = async (req, res) => {
    let userId = req.query.id
    if(userId) {
        let allUsers = await CRUDService.deleteUserById(userId)
        return res.render('display-crud.ejs', {
            dataTable: allUsers
        })
    }
    else {
        return res.send('user not found')
    }
}
module.exports = {
    getHomePage: getHomePage,
    getAboutPage: getAboutPage,
    getCRUD: getCRUD,
    postCRUD: postCRUD,
    displayCRUD: displayCRUD,
    editCRUD: editCRUD,
    putCRUD: putCRUD,
    deleteCRUD: deleteCRUD
}