const uploadFile = (req, res) => {
    console.log(req.file)
    res.json({
        name: req.file.originalname,
        type: req.file.mimetype,
        size: req.file.size
    })
}

module.exports = uploadFile