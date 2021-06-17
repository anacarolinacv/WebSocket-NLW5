import { DbAddUserOptions, getCustomRepository, Repository } from "typeorm";
import { UserRepository } from "../repositories/UsersRepository";
import { User } from "../entities/User"


class UsersService {
    
    private userRepository: Repository<User>;

    constructor() {
        this.userRepository = getCustomRepository(UserRepository);
    }

    async findByEmail(email: string) {
        
        const user = await this.userRepository.findOne({
            email
        })

        return user;
    }


    async create(email: string) {
        

        const userAlreadyExists = await this.userRepository.findOne({
            email
        })

        if(userAlreadyExists) {
            return userAlreadyExists;
        }

        const user = this.userRepository.create({
            email, 
        })

        await this.userRepository.save(user);

        return user;
    }

}

export { UsersService }