 import dotenv from 'dotenv'
 import nodemailer from 'nodemailer';

 dotenv.config();

 export default async function handler(req, res) {
   const { applianceType, brand, model, issue, name, phone } = req.body;

   // E-posta ayarlarını yapın
   const transporter = nodemailer.createTransport({
     service: process.env.EMAIL_SERVICE,
     auth: {
       user: process.env.EMAIL_USER,
       pass: process.env.EMAIL_PASSWORD,
     },
   });

   const mailOptions = {
     from: 'adress',
     to: 'adress2',
     subject: 'Beyaz Eşya Arıza Formu',
     html: `
       <h2>Beyaz Eşya Bilgileri</h2>
       <p>Türü: ${applianceType}</p>
       <p>Marka: ${brand}</p>
       <p>Model: ${model}</p>
       <h2>Arıza Açıklaması</h2>
       <p>${issue}</p>
       <h2>İletişim Bilgileri</h2>
       <p>Ad: ${name}</p>
       <p>Telefon: ${phone}</p>
     `,
   };

   // E-postayı gönderin
   try {
     await transporter.sendMail(mailOptions);
     res.status(200).send('E-posta gönderildi');
   } catch (error) {
     res.status(500).send('E-posta gönderilemedi');
   }
}
