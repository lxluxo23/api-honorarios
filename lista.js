const inquirer = require('inquirer')

inquirer
  .prompt([
    {
      type: 'list',
      name: 'entorno',
      message: 'que entorno usar ?',
      choices: ['development', 'production']
    }
  ])
  .then(res => {
    console.info('Se a seleccionado el entorno de ', res.entorno)
  })
