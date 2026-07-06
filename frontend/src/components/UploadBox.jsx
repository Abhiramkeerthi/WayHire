import { useRef, useState } from "react";
import { Link } from "react-router-dom";

import {
  UploadCloud,
  FileText,
  Trash2,
  ArrowRight,
} from "lucide-react";

function UploadBox() {
  const inputRef = useRef(null);

  const [file, setFile] = useState(null);
  const [dragging, setDragging] = useState(false);

  const handleFile = (selectedFile) => {
    if (!selectedFile) return;

    if (selectedFile.type !== "application/pdf") {
      alert("Please upload a PDF file.");
      return;
    }

    if (selectedFile.size > 5 * 1024 * 1024) {
      alert("Maximum file size is 5 MB.");
      return;
    }

    setFile(selectedFile);
  };

  const removeFile = () => {
    setFile(null);

    if (inputRef.current) {
      inputRef.current.value = "";
    }
  };

  return (
    <>
      <div
        className={`upload-box ${dragging ? "dragging" : ""}`}
        onClick={() => inputRef.current.click()}
        onDragOver={(e) => {
          e.preventDefault();
          setDragging(true);
        }}
        onDragLeave={() => setDragging(false)}
        onDrop={(e) => {
          e.preventDefault();
          setDragging(false);

          handleFile(e.dataTransfer.files[0]);
        }}
      >
        <UploadCloud
          size={50}
          className="upload-icon"
        />

        <h2>Drag & Drop Resume</h2>

        <p>or</p>

        <button
          type="button"
          className="browse-btn"
          onClick={(e) => {
            e.stopPropagation();
            inputRef.current.click();
          }}
        >
          Choose PDF
        </button>

        <small>
          Supported: PDF • Maximum Size: 5 MB
        </small>

        <input
          ref={inputRef}
          hidden
          type="file"
          accept=".pdf"
          onChange={(e) =>
            handleFile(e.target.files[0])
          }
        />
      </div>

      {file && (
        <>
          <div className="file-card">
            <div className="file-left">
              <FileText size={34} />

              <div>
                <h3>{file.name}</h3>

                <p>
                  {(file.size / 1024 / 1024).toFixed(2)}
                  {" "}MB
                </p>

                <span>
                  ✓ Ready for Analysis
                </span>
              </div>
            </div>

            <button
              type="button"
              className="remove-btn"
              onClick={removeFile}
            >
              <Trash2 size={18} />
              Remove
            </button>
          </div>

          <Link
            to="/target"
            className="continue-btn"
          >
            Continue

            <ArrowRight size={18} />
          </Link>
        </>
      )}
    </>
  );
}

export default UploadBox;