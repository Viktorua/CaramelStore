import React, { useState } from 'react';
import instance from '../components/Instance';

function ImageUploader({handleUploadImage}) {
  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
  }

  //Обработка отправки файла на сервер
  const handleUpload = async () => {
    const formData = new FormData();
    formData.append('image', selectedFile);

    const response = await fetch('/api/upload', {
      method: 'POST',
      body: formData
    });

    if (response.ok) {
      console.log('Image uploaded successfully');
    } else {
      console.error('Failed to upload image');
    }

    fetch('/upload/image', {
      method: 'POST',
      body: formData
    })
      .then(response => {
        console.log('Image uploaded successfully');
      })
      .catch(error => {
        console.error('Error while uploading image', error);
      })
  }

  return (//как отобразить картинку
    <div>
      <label htmlFor="upload">Добавить картинку</label>
      <input type="file" className="start" id="upload" name="image" onChange={handleUploadImage}/>
    </div>

  )
}

export default ImageUploader;