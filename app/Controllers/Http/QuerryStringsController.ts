import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class QuerryStringsController {

    async qs({ request }: HttpContextContract) {
        return {
            response: 'Index do painel',
            qs: request.qs(),
            method: request.method(),
            url: request.url(),
            completeUrl: request.completeUrl(),
            only: request.only(['idade']),
            ip: request.ip(),
            ipsTruested: request.ips()
        }
    }

    async response({ response }: HttpContextContract) {
        let json = { response: 'response.send' };
        /* response.download('filepath'); */
        response.send(json);
    }

    async redir({ response }: HttpContextContract) {
        /* response.redirect().back(); 
           response.redirect('https://....') */
        response.redirect().toPath('/api/servers');
    }

}