import fs from 'fs'
import path from 'path'

export default function handler(req, res) {
  const {
    query: { id }
  } = req

  try {
    const filePath = path.join(process.cwd(), 'api', 'efood', 'restaurantes.json')
    const jsonData = fs.readFileSync(filePath, 'utf8')
    const restaurantes = JSON.parse(jsonData)

    const restaurante = restaurantes.find(r => r.id === Number(id))

    if (!restaurante) {
      res.status(404).json({ error: 'Restaurante não encontrado' })
    } else {
      res.status(200).json(restaurante)
    }
  } catch (error) {
    res.status(500).json({ error: 'Erro ao carregar o restaurante.' })
  }
}
