const { Router } = require("express");

const router = Router()

router.get('/', (req, res) => res.send("Welcome to server"))

router.post('/upload', (req, res) => {
  console.log(req.files)
  res.send("archivo subido")
})

module.exports = router