import fs from 'fs'
import path from 'path'

export default function handler(req, res) {
  try {
    const filePath = path.join(process.cwd(), 'api', 'efood', 'restaurantes.json')
    const fileData = fs.readFileSync(filePath, 'utf8')
    const data = JSON.parse(fileData)

    res.status(200).json(data)
  } catch (error) {
    res.status(500).json({ error: 'Erro ao carregar os restaurantes.' })
  }
}
