import React, { useState, useRef } from 'react';
import { FilePond, registerPlugin } from 'react-filepond';
import 'filepond/dist/filepond.min.css';
import FilePondPluginImageExifOrientation from 'filepond-plugin-image-exif-orientation';
import FilePondPluginImagePreview from 'filepond-plugin-image-preview';
import 'filepond-plugin-image-preview/dist/filepond-plugin-image-preview.css';
import './styles/styles.css';

// Register the plugins
registerPlugin(FilePondPluginImageExifOrientation, FilePondPluginImagePreview);

interface UploadedFile {
  file: File;
  filename: string;
}

interface DragDropComponentProps {
  onJsonDataReceived: (data: any) => void;
}

const DragDropComponent: React.FC<DragDropComponentProps> = ({ onJsonDataReceived }) => {
  const [uploadedFiles, setUploadedFiles] = useState<UploadedFile[]>([]);
  const [files, setFiles] = useState<File[]>([]);
  const pondRef = useRef<FilePond>(null);

  const handleInit = () => {
    console.log("FilePond instance has initialised");
  };

  const handleUpdateFiles = (fileItems: any) => {
    setFiles(fileItems.map((fileItem: any) => fileItem.file));
  };

  const handleProcessFile = (error: any, file: any) => {
    if (!error) {
      const newFile: UploadedFile = { file: file.file, filename: file.file.name };
      setUploadedFiles((prevFiles) => [...prevFiles, newFile]);
    }
  };

  const handleResponse = (response: string) => {
    const jsonResponse = JSON.parse(response);
    onJsonDataReceived(jsonResponse);
    return response;
  };

  return (
    <div className="drag-drop-component p-4 sm:p-6 md:p-2">
      <FilePond
        ref={pondRef}
        allowMultiple={false}
        allowReorder={true}
        allowReplace={true}
        acceptedFileTypes={['image/*']}
        maxFiles={1}
        server={{
          url: '/api',
          process: {
            url: '/upload',
            onload: (response) => handleResponse(response),
            onerror: (response) => response,
          },
        }}
        name="files"
        dropValidation={true}
        labelIdle='Drag & Drop your files or <span class="filepond--label-action">Browse</span>'
        labelFileProcessing='Uploading'
        labelFileProcessingComplete='Upload complete'
        labelFileProcessingAborted='Upload cancelled'
        labelFileProcessingError='Error during upload.'
        oninit={handleInit}
        onupdatefiles={handleUpdateFiles}
        onprocessfile={handleProcessFile}
      />
      <div className="uploaded-files-dashboard mt-4">
        <h2>Uploaded Files</h2>
        <ul>
          {uploadedFiles.map((file, index) => (
            <li key={index}>

              <p>{file.filename}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default DragDropComponent;