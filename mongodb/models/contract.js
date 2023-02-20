import mongoose from 'mongoose'

const Contract = new mongoose.Schema({
  name: { type: String, required: true },
  content: { type: String, required: true },
})

const ContractSchema = mongoose.model('Contract', Contract)

export default ContractSchema
