import express from "express";
import cors from "cors";
import bookmarks from "./bookmarks.js";
import "dotenv/config";

const app = express();
const Frontend = process.env.NEXT_PUBLIC_URL;

app.use(
  cors({
    origin: "https://bookmark-assignment-client.vercel.app",
  }),
);
app.use(express.json());

/**
 GET ALL + tag filter
*/
app.get("/bookmarks", (req, res) => {
  const { tag } = req.query;

  if (tag) {
    return res.json(bookmarks.filter((b) => b.tags?.includes(tag)));
  }

  res.json(bookmarks);
});

/**
 CREATE
*/
app.post("/bookmarks", (req, res) => {
  const { url, title, description, tags } = req.body;

  if (!url || !title) {
    return res.status(400).json({
      error: "url and title required",
    });
  }

  // ✅ URL VALIDATION 
  try {
    new URL(url);
  } catch {
    return res.status(400).json({
      error: "Invalid URL",
    });
  }

  if (title.length > 200) {
    return res.status(400).json({
      error: "title too long",
    });
  }

  if (tags && tags.length > 5) {
    return res.status(400).json({
      error: "max 5 tags",
    });
  }

  const newBookmark = {
    id: crypto.randomUUID(),
    url,
    title,
    description: description || "",
    tags: tags || [],
    createdAt: new Date().toISOString(),
  };

  bookmarks.push(newBookmark);

  res.status(201).json(newBookmark);
});

/**
 UPDATE
*/
app.put("/bookmarks/:id", (req, res) => {
  const bookmark = bookmarks.find((b) => b.id === req.params.id);

  if (!bookmark) {
    return res.status(404).json({
      error: "not found",
    });
  }

  Object.assign(bookmark, req.body);

  res.json(bookmark);
});

/**
 DELETE
*/
app.delete("/bookmarks/:id", (req, res) => {
  const index = bookmarks.findIndex((b) => b.id === req.params.id);

  if (index === -1) {
    return res.status(404).json({
      error: "not found",
    });
  }

  bookmarks.splice(index, 1);

  res.status(204).send();
});

export default app;
