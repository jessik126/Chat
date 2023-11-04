import express, { Request, Response, Router } from "express";
import { User } from "../models/user";

const router: Router = express.Router();

router.get("/users", async (req: Request, res: Response): Promise<Response> => {
    const allUsers: User[] = await User.findAll();
    return res.status(200).json(allUsers);
});

router.get("/users/:id", async (req: Request, res: Response): Promise<Response> => {
    const { id } = req.params;
    const user: User | null = await User.findByPk(id);
    return res.status(200).json(user);
});

router.post("/users", async (req: Request, res: Response): Promise<Response> => {
    const user: User = await User.create({ ...req.body });
    return res.status(201).json(user);
});

router.put("/users/:id", async (req: Request, res: Response): Promise<Response> => {
    const { id } = req.params;
    await User.update({ ...req.body }, { where: { id } });
    const updatedUser: User | null = await User.findByPk(id);
    return res.status(200).json(updatedUser);
});

router.delete("/users/:id", async (req: Request, res: Response): Promise<Response> => {
    const { id } = req.params;
    const deletedUser: User | null = await User.findByPk(id);
    await User.destroy({ where: { id } });
    return res.status(200).json(deletedUser);
}
);

export default router;