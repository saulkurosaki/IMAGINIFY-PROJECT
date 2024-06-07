import { useToast } from "../ui/use-toast";
import { CldUploadWidget } from "next-cloudinary";

const MediaUploader = ({}) => {
  const { toast } = useToast();

  const onUploadSuccessHandler = (result: any) => {};

  const onUploadErrorHandler = () => {
    toast({
      title: "Something went wrong...",
      description: "Please try again",
      duration: 5000,
      className: "error-toast",
    });
  };

  return (
    <CldUploadWidget
      uploadPreset="saul_imginify"
      options={{
        multiple: false,
        resourceType: "image",
      }}
      onSuccess={onUploadSuccessHandler}
      onError={onUploadErrorHandler}
    ></CldUploadWidget>
  );
};

export default MediaUploader;
