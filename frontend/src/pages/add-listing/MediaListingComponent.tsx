import React, { useState, useCallback } from "react";
import { useDropzone } from "react-dropzone";

function MediaListingComponent() {
  const [files, setFiles] = useState([]);

  const onDrop = useCallback((acceptedFiles) => {
    // Update the state with the new uploaded files
    setFiles((prevFiles) => [...prevFiles, ...acceptedFiles]);
  }, []);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });

  // Function to render thumbnails of the uploaded images
  const renderThumbnails = () => {
    return files.map((file, index) => (
      <div key={index} className="inline-flex flex-col items-center p-2">
        <img
          src={URL.createObjectURL(file)}
          className="border rounded-md"
          alt={`preview ${index}`}
          style={{ width: "100px", height: "100px" }}
        />
        <button
          type="button"
          className="bg-red-500 hover:bg-red-700 text-white text-xs font-bold py-1 px-2 mt-1 rounded"
          onClick={() => handleRemoveFile(file.name)}
        >
          Remove
        </button>
      </div>
    ));
  };

  // Function to remove a file from the state
  const handleRemoveFile = (fileName) => {
    setFiles(files.filter((file) => file.name !== fileName));
  };

  // Function to handle form submission
  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle the form submission, for example, uploading to a server
    console.log("Submitted files:", files);
  };

  return (
    <div className="flex flex-col">
      <h3 className="font-bold text-2xl mb-4">Listing Media</h3>
      <form onSubmit={handleSubmit} className="container mx-auto p-4">
        <div className="flex flex-wrap mt-4 mb-2">{renderThumbnails()}</div>
        <div
          {...getRootProps()}
          className="flex flex-col items-center justify-center w-full"
        >
          <div
            className={`flex flex-col items-center justify-center border-dashed border-2 border-gray-300 py-12 px-4 ${
              isDragActive ? "bg-gray-100" : ""
            }`}
          >
            <input {...getInputProps()} />
            {isDragActive ? (
              <p className="text-gray-700">Drop the files here ...</p>
            ) : (
              <p className="text-gray-700">
                Drag 'n' drop some files here, or click to select files
              </p>
            )}
            <button
              type="button"
              className="mt-2 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            >
              Select Media
            </button>
          </div>
        </div>
        <div className="text-sm text-gray-600 mt-4">
          <p>
            * At least 1 image is required for a valid submission. Minimum size
            is 500x500px.
          </p>
          <p>** Double click on the image to select featured.</p>
          <p>*** Change images order with Drag & Drop.</p>
          <p>**** PDF files upload supported as well.</p>
          <p>***** Images might take longer to be processed.</p>
        </div>
        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4"
        >
          Next Media
        </button>
      </form>
    </div>
  );
}

export default MediaListingComponent;
