import { AppDataSource } from '../../config/database.config';
import log from '../../utils/logger';
import User from './user.model';
import { CreateUserType } from './user.validations';

export const userRepository = AppDataSource.getRepository(User);

namespace UserService {
    export const createUsers = async (req: CreateUserType) => {
        log.info(`Creating user`);

        return await userRepository.save(req);
    };
}

export default UserService;
