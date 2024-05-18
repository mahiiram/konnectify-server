
import multer from "multer";
import sharp from "sharp";
import Usermodel from "../model/user-model.js";
import { Router } from "express";


const imagerouter = Router();

const storage = multer.diskStorage({
  destination: function(req, file, cb) {
    cb(null, 'Public/images');
  },
  filename: function (req, file, cb) {
    cb(null, file.fieldname + '-' + Date.now() + '.jpg');
  }
});

const upload = multer({ storage: storage });

imagerouter.post('/upload', upload.single('image'), async (req, res) => {
  try {
    const user = await Usermodel.findById(req.user.id);
    if (!user) {
      return res.status(404).send('User not found');
    }
    const resizedImage = await sharp(req.file.buffer)
      .resize(250, 250)
      .toFormat('jpg')
      .jpeg({ quality: 90 })
      .toBuffer();
    const imagePath = 'Public/images' + req.file.filename;

    await fs.promises.writeFile(imagePath, resizedImage);

    user.Image = imagePath;
    await user.save();

    res.status(201).send('Image uploaded successfully');
  } catch (error) {
    console.log(error);
    res.status(400).send(error);
  }
});


export default imagerouter;