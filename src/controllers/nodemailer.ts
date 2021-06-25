import { Request, Response } from "express";
import nodemailer from "nodemailer";

class NodemailerControlllers {
  public async sendEmail(req: Request, res: Response) {
    const { to, subject, text } = req.body;
    var transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 465,
      secure: true,
      auth: {
        user: "marcelina.zoto.villca2109@gmail.com",
        pass: "ltyxqflyxtihvtmi",
      },
    });
    var mailOptions = {
      from: "Marcelina Zoto Villca",
      to: "marcelina.zoto.villca2109@gmail.com",
      subject: "This is my test for the assignment",
      text: "Hola mundo",
      attachments: [
        {
          path: "/opt/app/uploads/74c52df5-66dd-4e67-8f6f-1cd84dd9cebb.jpg",
        },
      ],
    };
    transporter.sendMail(mailOptions, function (error, info) {
      if (error) {
        res.status(500).json({ message: "Error, error" });
      } else {
        res.status(200).json({
          message: "E-mail enviado con éxito",
          serverResponse: mailOptions,
        });
      }
    });
  }
}
export const nodemailerControlllers = new NodemailerControlllers();
