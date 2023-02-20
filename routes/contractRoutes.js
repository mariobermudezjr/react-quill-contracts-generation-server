import express from 'express'
import * as dotenv from 'dotenv'

import Contract from '../mongodb/models/contract.js'

dotenv.config()

const router = express.Router()

// GET ALL CONTRACTS
router.route('/').get(async (req, res) => {
  try {
    const contracts = await Contract.find({})
    res.status(200).json({ success: true, data: contracts })
  } catch (err) {
    res.status(500).json({ success: false, message: 'Fetching contracts failed, please try again' })
  }
})

// CREATE CONTRACT
router.route('/').post(async (req, res) => {
  try {
    const { name, content } = req.body

    const newContract = await Contract.create({
      name,
      content,
    })

    res.status(200).json({ success: true, data: newContract })
  } catch (err) {
    res
      .status(500)
      .json({ success: false, message: 'Unable to create a contract, please try again' })
  }
})

export default router
