"use client";

import { useEditor, EditorContent } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";

export default function NoteEditor() {
  const storedContent =
    typeof window !== "undefined" && localStorage.getItem("note-content");

  const editor = useEditor({
    extensions: [StarterKit],
    content: storedContent
      ? JSON.parse(storedContent)
      : {
          type: "doc",
          content: [],
        },
    onUpdate: ({ editor }) => {
      const json = editor.getJSON();
      localStorage.setItem("note-content", JSON.stringify(json));
    },
    editorProps: {
      attributes: {
        class:
          "border-2 border-[#575757] w-[80%] focus:outline-none prose prose-sm sm:prose-base lg:prose-lg xl:prose-2xl m-5 p-10 dark:prose-invert rounded-lg",
      },
    },
  });

  return (
    <EditorContent
      className="w-screen flex items-center justify-center"
      editor={editor}
    />
  );
}
