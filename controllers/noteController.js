import { Note } from "../models/Note.js";

export const getNotes = async (req, res) => {
  try {
    const notes = await Note.find().sort({ createdAt: -1 });
    res.json(notes);
  } catch (error) {
    console.error("GET /api/notes failed:", error.message);
    res.status(500).json({ error: error.message });
  }
};

export const createNote = async(req , res) => {
   const {title, content, color } = req.body;
   try {
    const note = await Note.create({title,content, color});
    res.status(201).json(note);
   } catch (error) {
    console.error("Error fetching notes:", error);
    res.status(500).json({ error: error.message });
   }
}

export const updateNote = async(req , res) => {
    const {id} = req.params;
    try {
        const updated = await Note.findByIdAndUpdate(id, req.body, {new: true});
        res.json(updated);
    } catch (error) {
        console.error("Error fetching notes:", error);
        res.status(500).json({ error: error.message });
    }
}

export const deleteNote = async (req, res) => {
  const { id } = req.params;
  try {
    await Note.findByIdAndDelete(id);
    res.json({ message: 'Note deleted' });
  } catch (error) {
    console.error("Error fetching notes:", error);
    res.status(500).json({ error: error.message });
  }
};
