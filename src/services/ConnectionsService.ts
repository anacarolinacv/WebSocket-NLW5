import { getCustomRepository, Repository } from "typeorm"
import { ConnectionsRepository } from "../repositories/ConnectionsRepository";
import { Connection } from "../entities/Connection";


interface IConnectionCreate{
    admin_id?: string;

    socket_id: string;

    user_id: string;

    id?: string;
}
class ConnectionsService {

    private connectionsRepository: Repository<Connection>;

    constructor() {
        this.connectionsRepository = getCustomRepository(ConnectionsRepository);
    }


    async create({admin_id, socket_id, user_id, id} : IConnectionCreate) {


        const connection = this.connectionsRepository.create({
            socket_id, 
            admin_id, 
            user_id,
            id,
        });

        await this.connectionsRepository.save(connection);

        return connection;

    }

    async findByUserId(user_id: string) {
        const connection = await this.connectionsRepository.findOne({
            user_id,
        })

        return connection;
    }

}

export { ConnectionsService }