'use strict'

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use('Route')

Route.post('users', 'UserController.store')
Route.post('sessions', 'SessionController.store')

Route.post('forgot-password', 'ForgotPasswordController.store')
Route.put('forgot-password', 'ForgotPasswordController.update')

Route.get('/files/:id', 'FileController.show')

Route.group(() => {
  Route.post('/files', 'FileController.store')

  Route.resource('projects', 'ProjectController').apiOnly()
}).middleware(['auth'])
