// import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

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

    async getServerByModel({ params }) {
        let inputModel = params['model'];
        let findServer = this.servers.find((server) => server.model == inputModel);
        if (findServer) {
            return findServer;
        } else {
            return { error: 'Não foi possivel encotrar o servidor' };
        }
    }

    async getServerByCpu({ params }) {
        let inputCpu = params['cpu'];
        let findServer = this.servers.find((server) => server.cpu == inputCpu);
        if (findServer) {
            return findServer;
        } else {
            return { error: 'Não foi possivel encotrar o servidor' };
        }
    }

    async errorInvalidValue() {
        return { error: 'Formato inserido invalido' };
    }

    async getDisks() {
        return { model: 'HD 900', type: 3 };
    }

}
