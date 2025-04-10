import NoteEditor from "@/components/NoteEditor";

export default function NoteEditorPage() {
  return (
    <div className="flex items-center justify-center h-screen w-screen flex-col text-white">
      <h1>Note Editor</h1>
      <NoteEditor />
    </div>
  );
}
