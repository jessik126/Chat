import express, { Request, Response, Router } from "express";
import { Message } from "../models/message";

const router: Router = express.Router();

router.get("/messages", async (req: Request, res: Response): Promise<Response> => {
    const allMessages: Message[] = await Message.findAll();
    return res.status(200).json(allMessages);
});

router.get("/messages/:id", async (req: Request, res: Response): Promise<Response> => {
    const { id } = req.params;
    const message: Message | null = await Message.findByPk(id);
    return res.status(200).json(message);
});

router.post("/messages", async (req: Request, res: Response): Promise<Response> => {
    const message: Message = await Message.create({ ...req.body });
    return res.status(201).json(message);
});

router.put("/messages/:id", async (req: Request, res: Response): Promise<Response> => {
    const { id } = req.params;
    await Message.update({ ...req.body }, { where: { id } });
    const updatedMessage: Message | null = await Message.findByPk(id);
    return res.status(200).json(updatedMessage);
});

router.delete("/messages/:id", async (req: Request, res: Response): Promise<Response> => {
    const { id } = req.params;
    const deletedMessage: Message | null = await Message.findByPk(id);
    await Message.destroy({ where: { id } });
    return res.status(200).json(deletedMessage);
}
);

export default router;