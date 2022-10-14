import Route from '@ioc:Adonis/Core/Route'
import './routes/api.routes' /* Pode-se carregar outro arquivo router em adonisrc.json */

Route.get('/qs', 'QuerryStringsController.qs')

Route.group(() => {
    Route.get('/', 'QuerryStringsController.response')
    Route.get('/redir', 'QuerryStringsController.redir')
}).prefix('/response')