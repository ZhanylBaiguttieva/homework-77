import {Router} from 'express';
import fileDb from "../fileDb";
import {MessageWithoutId} from "../types";
import {imagesUpload} from "../multer";
const messagesRouter = Router();
messagesRouter.get('/', async (req, res)=>{
    const messages = await fileDb.getItems();
    res.send(messages);
});

messagesRouter.post('/', imagesUpload.single('image'), async(req, res)=>{

    const message: MessageWithoutId = {
        author: req.body.author,
        title: req.body.title,
        image: req.file ? req.file.filename : null,
    };

    const newMessage = await fileDb.addItem(message);
    res.send(newMessage);
});

export default messagesRouter;