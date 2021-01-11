import { dbContext } from "../db/DbContext";
import { BadRequest } from "../utils/Errors";

class BurgerService {

    aysnc getAll(query = {}) {
        let values = await dbContext.burgers.find(query);
        return values;
    }
    getOne(id) {
        throw new Error("Method not implemented.");
    }
    create(body) {
        throw new Error("Method not implemented.");
    }
    edit(body) {
        throw new Error("Method not implemented.");
    }
    delete(body) {
        throw new Error("Method not implemented.");
    }
}



















export const burgerService = new BurgerService();