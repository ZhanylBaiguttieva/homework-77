import {Router} from 'express';
import fileDb from "../fileDb";
import {MessageWithoutId} from "../types";
import {imagesUpload} from "../multer";
const messagesRouter = Router();
messagesRouter.get('/', async (req, res, next)=>{
    try {
        const messages = await fileDb.getItems();
        res.send(messages);
    } catch (e) {
        next(e);
    }
});

messagesRouter.post('/', imagesUpload.single('image'), async(req, res, next)=> {
    try {
        const message: MessageWithoutId = {
            author: req.body.author ? req.body.author : 'Anonymous',
            title: req.body.title,
            image: req.file ? req.file.filename : null,
        };

        const newMessage = await fileDb.addItem(message);
        res.send(newMessage);

        if(!message.title) {
            return res.status(422).send({error: "Title is required"})
        }
    }   catch (e) {
        next(e);
    }

});

export default messagesRouter;