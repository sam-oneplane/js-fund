const path = require("path")

const fileExtensionLimiter = (allowedExtArray) => {
    // allowedExtArray : all the extensions that allowed to upload
    return (req, res, next) => {
        const files = req.files
        const fileExtensions = []

        // push all file extensions into fileExtensions array
        Object.keys(files).forEach(key => {
            fileExtensions.push(path.extname(files[key].name))
        })

        // Are the file extension allowed?  true/false
        const allowed = fileExtensions.every(ext => allowedExtArray.includes(ext))
        if (!allowed) {
            const message = `Upload failed. Only ${allowedExtArray.toString()} files allowed.`.replaceAll(",", ", ");
            return res.status(422).json({ status: "error", message });
        }

        next()
    }
}

module.exports = fileExtensionLimiter