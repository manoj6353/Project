import { extname } from "path";

export const editFileName = (req, file, callback) => {
  const name = file.originalname.split(".")[0];
  const fileExtensionName = extname(file.originalname);
  const randomeName = Date.now();

  callback(null, randomeName + "-" + name + fileExtensionName);
};

export const imageFileFilter = (req, file, cb) => {
  const allowedExtension = [".jpg", ".jpeg", ".png"];

  const ext = extname(file.originalname).toLowerCase();

  if (allowedExtension.includes(ext)) {
    cb(null, true);
  } else {
    cb(new Error("Invalid file type"));
  }
};
