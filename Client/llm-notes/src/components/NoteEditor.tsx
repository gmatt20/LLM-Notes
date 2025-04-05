"use client";

import { useEditor, EditorContent } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";

export default function NoteEditor() {
  const editor = useEditor({
    extensions: [StarterKit],
    content: "<p>My first note...</p>",
  });

  return <EditorContent editor={editor} />;
}
