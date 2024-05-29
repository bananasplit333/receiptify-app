import React, { useState, useRef } from 'react';
import { FilePond, registerPlugin } from 'react-filepond';
import 'filepond/dist/filepond.min.css';
import FilePondPluginImageExifOrientation from 'filepond-plugin-image-exif-orientation';
import FilePondPluginImagePreview from 'filepond-plugin-image-preview';
import 'filepond-plugin-image-preview/dist/filepond-plugin-image-preview.css';
import { FilePondFile } from 'filepond';
import './styles/styles.css'
// Register the plugins
registerPlugin(FilePondPluginImageExifOrientation, FilePondPluginImagePreview);

const DragDropComponent: React.FC = () => {
  const [files, setFiles] = useState<FilePondFile[]>([]);
  const pondRef = useRef<FilePond>(null);

  const handleInit = () => {
    console.log("FilePond instance has initialised");
  };

  return (
    <div className="drag-drop-component p-4 sm:p-6 md:p-2 ">
      <FilePond
        ref={pondRef}
        allowMultiple={false}
        allowReorder={true}
        allowReplace={true}
        acceptedFileTypes={['image/*']}
        maxFiles={3}
        server="api/upload"
        name="files"
        dropValidation={true}
        labelIdle='Drag & Drop your files or <span class="filepond--label-action">Browse</span>'
        labelFileProcessing='Uploading'
        labelFileProcessingComplete='Upload complete'
        labelFileProcessingAborted='Upload cancelled'
        labelFileProcessingError='Error during upload. Please ensure you are uploading images.'
        oninit={handleInit}
        onupdatefiles={(fileItems) => {
          setFiles(fileItems.map((fileItem) => fileItem as FilePondFile));
        }}

      />
    </div>
  );
}

export default DragDropComponent;
