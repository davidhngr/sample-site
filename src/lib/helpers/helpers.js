import reactS3 from "react-s3";

const config = {
    bucketName: "sample-site-blog-images",
    region: "ap-southeast-1",
    accessKeyId: process.env.REACT_APP_AWS_ACCESS_KEY,
    secretAccessKey: process.env.REACT_APP_AWS_SECRETACCESS_KEY,
  };
  
export const uploadToS3 = (file) => {
    reactS3
      .uploadFile(file, config)
      .then((data) => console.log(data))
      .catch((err) => console.log(err));
  };