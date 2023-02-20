// const mongoose = require('mongoose')
// const Document = require('./Document')
import * as dotenv from 'dotenv'
import cors from 'cors'
import express from 'express'
import connectDB from './mongodb/connect.js'
import contractRoutes from './routes/contractRoutes.js'
dotenv.config()

const app = express()
app.use(cors())
app.use(express.json({ limit: '50mb' }))

app.use('/api/v1/contract', contractRoutes)

const startServer = async () => {
  try {
    connectDB(process.env.MONGODB_KEY_URI)
    app.listen(process.env.PORT || 8000, () => console.log('Server started on port 8000'))
  } catch (error) {
    console.log(error)
  }
}

startServer()

// mongoose.connect('mongodb://localhost/react-cloud-doc', {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
//   useFindAndModify: false,
//   useCreateIndex: true,
// })

// const io = require('socket.io')(3001, {
//   cors: {
//     origin: 'http://localhost:3000',
//     methods: ['GET', 'POST'],
//   },
// })

// const defaultValue = ''

// io.on('connection', (socket) => {
//   socket.on('get-document', async (documentId) => {
//     const data = ''

//     const document = await findOrCreateDocument(documentId)
//     socket.join(documentId)
//     socket.emit('load-document', document.data)

//     socket.on('send-changes', (delta) => {
//       socket.broadcast.to(documentId).emit('receive-changes', delta)
//     })

//     socket.on('save-document', async (data) => {
//       await Document.findByIdAndUpdate(documentId, { data })
//     })
//   })
// })

// async function findOrCreateDocument(id) {
//   if (id == null) return

//   const document = await Document.findById(id)
//   if (document) return document
//   return await Document.create({ _id: id, data: defaultValue })
// }
