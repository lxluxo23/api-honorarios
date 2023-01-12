/* eslint-disable eqeqeq */

class HonorariosController {
  constructor ({ HonorariosService }) {
    this.servicio = HonorariosService
  }

  async TraerTodos (req, res) {
    try {
      const datos = await this.servicio.ObtenerTodos()
      if (datos != undefined && datos.length > 0) {
        return res.status(200).send({ data: datos })
      } else {
        return res.status(500).send({ success: false, msg: 'Error, no hay datos' })
      }
    } catch (error) {
      console.error(error)
      return res.status(500).send({ success: false, msg: 'Error en el servidor' })
    }
  }

  async BuscarID (req, res) {
    try {
      const { id } = req.params
      const datos = await this.servicio.BuscarID(id)
      if (datos != undefined) {
        return res.status(200).send({ data: datos })
      } else {
        return res.status(500).send({ success: false, msg: 'Error, no hay datos' })
      }
    } catch (error) {
      console.error(error)
      return res.status(500).send({ success: false, msg: 'Error en el servidor' })
    }
  }

  async BuscarMes (req, res) {
    try {
      const { id } = req.params
      const datos = await this.servicio.ObtenerPorMes(id)
      if (datos != undefined && datos.length > 0) {
        let total = 0
        datos.forEach(function (item) {
          total += item.total
        })

        return res.status(200).send({ data: datos, total })
        // return res.status(500).send({ success: false, msg: 'Error, no hay datos' })
      } else {
        return res.status(500).send({ success: false, msg: 'Error, no hay datos' })
      }
    } catch (error) {
      console.error(error)
      return res.status(500).send({ success: false, msg: 'Error en el servidor' })
    }
  }

  async BuscarPorfecha (req, res) {
    try {
      const { fecha } = req.params
      console.log('la fecha culia ' + fecha)
      // const datos = await this.servicio.ObtenerPorFecha(fecha)
      // if (datos != undefined && datos.length > 0) {
      //   let total = 0
      //   datos.forEach(function (item) {
      //     total += item.total
      //   })

      //   return res.status(200).send({ data: datos, total })
      // } else {
      //   return res.status(500).send({ success: false, msg: 'Error, no hay datos' })
      // }
    } catch (error) {
      console.error(error)
      return res.status(500).send({ success: false, msg: 'Error en el servidor' })
    }
  }

  async BuscarUsuario (req, res) {
    try {
      const { id } = req.params
      const datos = await this.servicio.BuscarUsuario(id)
      if (datos != undefined) {
        return res.status(200).send({ data: datos })
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
module.exports = HonorariosController
