class TipoPagoController {
  constructor ({ TipoPagoService }) {
    this.servicio = TipoPagoService
  }

  async TraerTodos (req, res) {
    const datos = await this.servicio.ObtenerTodos()
    return res.status(200).send(datos)
  }

  async Crear (req, res) {
    const body = req.body

    console.table(body)
    await this.servicio.Crear(body).then(() => {
      return res.status(200).send({ success: true, msg: 'Creado Exitosamente ' })
    }).catch(err => {
      console.error(err)
      return res.status(500).send({ success: false, msg: 'Error, no es posible guardar los datos' })
    })
  }

  async Eliminar (req, res) {
    try {
      const { id } = req.params
      await this.servicio.Eliminar(id)
      return res.status(200).send({ success: true, msg: 'ELIMINADO EXITOSAMENTE' })
    } catch (error) {
      return res.status(500).send({ success: false, msg: error.message })
    }
  }
}
module.exports = TipoPagoController
