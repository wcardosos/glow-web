import { FileUpload } from "@/components/file-upload";

export function UploadPage() {
  return (
    <div className="py-6 min-h-screen space-y-4">
      <h1 className="font-bold text-2xl">Novo resumo</h1>
      <FileUpload />
    </div>
  )
}