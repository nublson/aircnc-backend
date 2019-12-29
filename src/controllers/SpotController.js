const User = require('../models/User')
const Spot = require('../models/Spot')

module.exports = {
	async store(req, res) {
		const { filename: thumbnail } = req.file
		const { company, price, techs } = req.body

		// Access the user id from the Header
		const { user_id } = req.headers

		// Verify user
		const user = await User.findById(user_id)

		if (!user) {
			return res.status(400).json({ error: 'User does not exists!' })
		}

		// Create spot
		const spot = await Spot.create({
			thumbnail,
			company,
			price,
			techs: techs.split(',').map(tech => tech.trim().toUpperCase()),
			user: user_id
		})

		res.json(spot)
	}
}
