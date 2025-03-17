import express from "express";
import app from "./app.js";
import cloudinary from "cloudinary";
import cors from "cors";
import cookieParser from "cookie-parser";

// Configura CORS
app.use(
  cors({
    origin: "http://localhost:3000", // Permite solicitudes del frontend
    credentials: true, // Necesario para manejar cookies o credenciales
  })
);

// Middleware para parsear JSON y cookies
app.use(express.json());
app.use(cookieParser());

// Configura Cloudinary
cloudinary.v2.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

// Inicia el servidor
app.listen(process.env.PORT, () => {
  console.log(`Server listening at port ${process.env.PORT}`);
});
