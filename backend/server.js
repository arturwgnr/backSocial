import { PrismaClient } from "@prisma/client";
import cors from "cors";
import express from "express";

const app = express();
app.use(cors());
app.use(express.json());

const prisma = new PrismaClient();

//GET
app.get("/", (req, res) => {
  res.send("🌌 I have everything that I need in order to succeed!");
});

app.get("/profiles", async (req, res) => {
  try {
    const profiles = await prisma.profile.findMany();

    res.status(200).json({
      message: "✔️ Profiles list genereted successfully!",
      profiles: profiles,
    });
  } catch (error) {
    res.status(500).json({ message: "⚠️ Error gathering users", error: error });

    console.log(error);
  }
});

//-----

//POST
app.post("/profiles", async (req, res) => {
  try {
    const { name, username, bio, profession, online } = req.body;
    console.log("📥 Received:", req.body);

    const newProfile = await prisma.profile.create({
      data: { name, username, bio, profession, online },
    });

    res.status(201).json({
      message: "✔️ Profile created successfully",
      profile: newProfile,
    });
  } catch (error) {
    res
      .status(500)
      .json({ message: "⚠️ Error creating new User", error: error });
  }
});

//PUT
app.put("/profiles/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const data = req.body;

    const updated = await prisma.profile.update({
      where: { id: Number(id) },
      data: data,
    });

    res
      .status(200)
      .json({ message: "✔️ Profile updated successfully", updated });
  } catch (error) {
    res.status(500).json({ message: "⚠️ Error updating user", error: error });
  }
});

//----

//DELETE
app.delete("/profiles/:id", async (req, res) => {
  try {
    const { id } = req.params;

    const deleted = await prisma.profile.delete({
      where: { id: Number(id) },
    });

    res
      .status(200)
      .json({ message: `💀 Profile ${id} killed permanently`, deleted });
  } catch (error) {
    res
      .status(500)
      .json({ message: "⚠️ Error killing profile... 🕊️", error: error });
  }
});

app.listen(3000, () => {
  console.log("Selvagem! Server is running on: http://localhost:3000");
});
