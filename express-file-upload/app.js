
// File upload server using express

const PORT = process.env.PORT || 3500;
const express = require("express");
const fileUpload = require("express-fileupload");
const path = require("path");

const filesPayloadExists = require('./middleware/filesPayloadExists');
const fileExtensionLimiter = require('./middleware/fileExtensionLimiter');
const fileSizeLimiter = require('./middleware/fileSizeLimiter');

const app = express();

// app get request
app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
})


app.post('/upload',
    fileUpload({ createParentPath: true }),
    filesPayloadExists,
    fileExtensionLimiter(['.png', '.jpg', '.jpeg']),
    fileSizeLimiter,
    (req, res) => {
        const files = req.files
        console.log(files)

        Object.keys(files).forEach(key => {
            const filepath = path.join(__dirname, 'files', files[key].name)
            files[key].mv(filepath, (err) => {
                if (err) return res.status(500).json({ status: "error", message: err })
            })
        })

        return res.json({ status: 'success', message: Object.keys(files).toString() })
    }
)



app.listen(PORT, () => console.log(`Server running on port ${PORT}`));