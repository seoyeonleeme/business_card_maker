class ImageUploader {
    async upload(file) {
        const data = new FormData();
        data.append("file", file);
        data.append("upload_preset", "eanwgsfz");
        const result = await fetch(
            'http://api.cloudinary.com/v1_1/corcaroli/upload',
            {
                method: 'POST',
                body: data,
            }
        );
        return await result.json();
    }
}

export default ImageUploader;

/* 사용자에게 파일을 인자로 받아서 파일을 서버에 업로드하고 나서,
    서버에 있는 이미지의 url을 전달해주는 것
    (서버에 업로드하고 업로드 완료되면 결과값을 리턴하니까 async씀)
*/