'use strict'

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use('Route')

Route.post('users', 'UserController.store')
Route.post('sessions', 'SessionController.store')

Route.post('forgot-password', 'ForgotPasswordController.store')
Route.put('forgot-password', 'ForgotPasswordController.update')

Route.post('/files', 'FileController.store')
