const path = require('path')
const multer = require('multer')

module.exports = {
	storage: multer.diskStorage({
		destination: path.resolve(__dirname, '..', '..', 'uploads'),
		filename: (req, file, cb) => {
			cb(
				null,
				`${file.fieldname}-${Date.now()}${path.extname(
					file.originalname
				)}`
			)
		}
	})
}
