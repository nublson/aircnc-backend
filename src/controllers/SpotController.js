const User = require('../models/User')
const Spot = require('../models/Spot')

module.exports = {
	async store(req, res) {
		res.json({ ok: true })
	}
}
