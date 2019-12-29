const path = require('path')
const multer = require('multer')

module.exports = {
	storage: multer.diskStorage({
		destination: path.resolve(__dirname, '..', '..', 'uploads'),
		filename: (req, file, cb) => {
			const ext = path.extname(file.originalname)

			cb(null, `photo-${Date.now()}${ext}`)
		}
	})
}
