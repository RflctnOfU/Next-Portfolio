import Link from "next/link";
import { FileText, Download } from "lucide-react";

export default function Resume() {
  return (
    <div className="h-full flex items-center">
      <div className="h-1/4 flex flex-col justify-around items-center text-foreground">
        <h1 className="text-2xl">View my Resume</h1>

        <Link
          href={
            "https://docs.google.com/document/d/1EbP922bEX-H04TKCCedPaPdNCTcqzmc_-TlQkWuk40g/edit?usp=sharing"
          }
          target="_blank"
        >
          {/* <FileText size={40} /> */}
          <Download size={50} />
        </Link>
      </div>
    </div>
  );
}
