/**
* Domain driven design - keep the domain in the centre of all interactions.
*/
import {bloggerRepository} from './repository';
import logger from '../infra/config/logger';

export class Blogger {
    constructor(public user) {
        this.user = user;
    }

    static async findOne(id) {
        const user = await bloggerRepository.findUser(id);
        logger.log('user here is', user);
        return new Blogger(user);
    }

    businessLogic() {
        // Some complex computation involving this.user
        return this.user;
    }
}
