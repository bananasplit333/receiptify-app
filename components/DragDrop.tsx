import React, { useState, useRef } from 'react';
import { FilePond, registerPlugin } from 'react-filepond';
import 'filepond/dist/filepond.min.css';
import FilePondPluginImageExifOrientation from 'filepond-plugin-image-exif-orientation';
import FilePondPluginImagePreview from 'filepond-plugin-image-preview';
import 'filepond-plugin-image-preview/dist/filepond-plugin-image-preview.css';
import { FilePondFile } from 'filepond';

// Register the plugins
registerPlugin(FilePondPluginImageExifOrientation, FilePondPluginImagePreview);

const DragDropComponent: React.FC = () => {
  const [files, setFiles] = useState<FilePondFile[]>([]);
  const pondRef = useRef<FilePond>(null);

  const handleInit = () => {
    console.log("FilePond instance has initialised");
  };

  return (
    <div className="drag-drop-component">
      <FilePond
        ref={pondRef}
        allowMultiple={true}
        allowReorder={true}
        maxFiles={3}
        server="/api"
        name="files"
        className=""
        labelIdle='Drag & Drop your files or <span class="filepond--label-action">Browse</span>'
        labelFileProcessing='Uploading'
        labelFileProcessingComplete='Upload complete'
        labelFileProcessingAborted='Upload cancelled'
        labelFileProcessingError='Error during upload'
        oninit={handleInit}
        onupdatefiles={(fileItems) => {
          setFiles(fileItems.map((fileItem) => fileItem as FilePondFile));
        }}
      />
    </div>
  );
}

export default DragDropComponent;
