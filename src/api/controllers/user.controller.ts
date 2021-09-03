import { Blogger } from '../../domain/models';

export async function findUser(token) {
    const user = await Blogger.findOne(token);
    return user;
}