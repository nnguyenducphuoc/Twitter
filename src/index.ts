import express from 'express'
import usersRouter from './routes/users.routes'
import databaseService from './services/database.services'
const app = express()
const PORT = 3000

app.use(express.json())
app.use('/users', usersRouter)
databaseService.connect()

app.get('/', (req, res) => {
  res.send('Hello World')
})

app.listen(PORT, () => {
  console.log(`Port is running in ${PORT}`)
})
