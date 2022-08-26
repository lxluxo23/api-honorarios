/* eslint-disable eqeqeq */
class ClientesController {
  constructor ({ ClienteService }) {
    this.servicio = ClienteService
  }

  async TraerTodos (req, res) {
    const datos = await this.servicio.ObtenerTodos()
    return res.status(200).send(datos)
  }

  async BuscarID (req, res) {
    try {
      const { id } = req.params
      const datos = await this.servicio.BuscarID(id)
      if (datos != undefined) {
        return res.status(200).send(datos)
      } else {
        return res.status(500).send({ success: false, msg: 'Error, no hay datos' })
      }
    } catch (error) {
      console.error(error)
      return res.status(500).send({ success: false, msg: 'Error en el servidor' })
    }
  }

  async Modificar (req, res) {
    try {
      const { id } = req.params
      const body = req.body
      // console.log(body);
      // console.log(id);
      await this.servicio.Actualizar(id, body)
      return res.status(200).send({ success: true, msg: 'Actualizado correctamente' })
    } catch (error) {
      console.error(error)
      return res.status(500).send({ success: false, msg: error.message })
    }
  }

  async Crear (req, res) {
    const body = req.body
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
module.exports = ClientesController
