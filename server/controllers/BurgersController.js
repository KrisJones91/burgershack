import BaseController from "../utils/BaseController";
import { burgerService } from "../services/BurgerService";

export class BurgersController extends BaseController {
    constructor() {
        super("/api/burgers")
        this.router
            .get("/:id", this.getAll)
            .get("", this.getOne)
            .post("", this.create)
            .put("/:id", this.edit)
            .delete("/:id", this.delete)
    }

    async getAll(req, res, next) {
        try {
            let data = await burgerService.getAll()
            res.send(data)
        } catch (error) {
            next(error)
        }
    }

    async getOne(req, res, next) {
        try {
            let data = await burgerService.getOne(req.params.id)
            res.send(data)
        } catch (error) {
            next(error)
        }
    }

    async create(req, res, next) {
        try {
            let data = await burgerService.create(req.body)
            res.send(req.body)
        } catch (error) {
            next(error)
        }
    }

    async edit(req, res, next) {
        try {
            // let req.body.id = req.params.id
            let data = await burgerService.edit(req.body)
            res.send(req.body)
        } catch (error) {
            next(error)
        }
    }

    async delete(req, res, next) {
        try {
            let data = await burgerService.delete(req.params.id)
            res.send(req.body)
        } catch (error) {
            next(error)
        }
    }

}
