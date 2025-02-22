import nodemailer from 'nodemailer';

export async function POST(req) {
  try {
    const { name, email, message } = await req.json();

    let transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: "adrienlimache1412@gmail.com", // Ton email
        pass: "jxht groy diqo uyys " // ⚠️ Utilise un App Password si Gmail
      }
    });

    let mailOptions = {
      from: `${name} <${email}>`, // Expéditeur = utilisateur
      to: "adrien.limache@etud.univ-paris8.fr", // Destinataire = toi
      subject: `Nouveau message de ${name}`,
      text: `Email: ${email}\n\nMessage:\n${message}`
    };

    await transporter.sendMail(mailOptions);
    return new Response(JSON.stringify({ success: true }), { status: 200 });
  } catch (error) {
    return new Response(JSON.stringify({ error: "Erreur d'envoi" }), { status: 500 });
  }
}
