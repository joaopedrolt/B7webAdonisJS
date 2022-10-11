// import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class QuerryStringsController {

    async qs({ request }) {
        return {
            response: 'Index do painel',
            qs: request.qs()
        }
    }

}
