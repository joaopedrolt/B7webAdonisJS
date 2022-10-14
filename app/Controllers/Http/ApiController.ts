import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class ApiController {

    protected servers = [{
        model: 'R410',
        cpu: 2
    },
    {
        model: 'R710',
        cpu: 3
    }]

    async getServers() {
        return this.servers;
    }

    async getServerByModel({ params }: HttpContextContract) {
        let inputModel = params['model'];
        let findServer = this.servers.find((server) => server.model == inputModel);
        if (findServer) {
            return findServer;
        } else {
            return { error: 'Não foi possivel encotrar o servidor' };
        }
    }

    async getServerByCpu({ params }: HttpContextContract) {
        let inputCpu = params['cpu'];
        let findServer = this.servers.find((server) => server.cpu == inputCpu);
        if (findServer) {
            return findServer;
        } else {
            return { error: 'Não foi possivel encotrar o servidor' };
        }
    }

    async errorInvalidValue({ response }: HttpContextContract) {
        response.status(400).send({ error: 'Formato inserido invalido. 400' });
    }

    async getDisks() {
        return { model: 'HD 900', type: 3 };
    }

}