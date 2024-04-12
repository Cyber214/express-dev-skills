import { Devskill } from "../models/devskill.js"

function index(req, res) {
  Devskill.find({})
  .then(devskills => {
    res.render('devskills/index', {
      devskills: devskills,
      time: req.time
    })
  })
  .catch(error => {
    console.log(error)
    res.redirect('/')
  })
}

function newDevskill(req, res) {
  res.render('devskills/new')
}

function create(req, res) {
  // set the done property to false
  req.body.done = false
  // create devskill
  Devskill.create(req.body)
  .then(devskill => {
    // redirect to devskills index
    res.redirect('/devskills')
  })
  .catch(error => {
    console.log(error)
    res.redirect('/devskills')
  })
}

function show(req, res) {
  // find the devskill in the database by it's _id
  Devskill.findById(req.params.devskillId)
  .then(devskill => {
    // render it
    res.render('devskills/show', {
      devskill: devskill
    })
  })
  .catch(error => {
    console.log(error)
    res.redirect('/devskills')
  })
}

function deleteDevskill(req, res) {
  // use model to delete a devskill
  Devskill.findByIdAndDelete(req.params.devskillId)
  .then(devskill => {
    // redirect to devskills index
    res.redirect('/devskills')
  })
  .catch(error => {
    console.log(error)
    res.redirect('/devskills')
  })
}

function edit(req, res) {
  // find the devskill and pass it to render
  Devskill.findById(req.params.devskillId)
  .then(devskill => {
    // render a view with a form (edit.ejs)
    res.render('devskills/edit', {
      devskill: devskill
    })
  })
  .catch(error => {
    console.log(error)
    res.redirect('/devskills')
  })
}

function update(req, res) {
  // handle checkbox logic
  req.body.done = !!req.body.done
  // find the devskill by id and update
  Devskill.findByIdAndUpdate(req.params.devskillId, req.body, {new: true})
  .then(devskill => {
    // redirect back to show view
    res.redirect(`/devskills/${req.params.devskillId}`)
  })
  .catch(error => {
    console.log(error)
    res.redirect('/devskills')
  })
}

export {
  index,
  newDevskill as new,
  create,
  show,
  deleteDevskill as delete,
  edit,
  update,
}