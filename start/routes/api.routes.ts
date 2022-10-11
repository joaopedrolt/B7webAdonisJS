import Route from '@ioc:Adonis/Core/Route'

Route.group(() => {

    Route.group(() => {
        Route.get('/', 'ApiController.getServers')
        Route.get('/:cpu', 'ApiController.getServerByCpu').where('cpu', Route.matchers.number())
        Route.get('/:model', 'ApiController.getServerByModel').where('model', /^[R][0-9]{3}$/)
        Route.get('/:invalid', 'ApiController.errorInvalidValue')
    }).prefix('/servers')

    Route.get('/disks', 'ApiController.getDisks')

}).prefix('/api')