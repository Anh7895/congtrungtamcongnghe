import MarkdownEditor from "./Markdown1";

function Markdown() {
  return (
    <div className="min-h-screen bg-gray-100">
      <h1 className="text-3xl font-bold text-center pt-6">Markdown Editor</h1>
      <MarkdownEditor />
    </div>
  );
}

export default Markdown;