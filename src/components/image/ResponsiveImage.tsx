import Image from "next/image";

interface ResponsiveImageProps {
  imageUrl: string;
  alt: string;
}

const ResponsiveImage: React.FC<ResponsiveImageProps> = ({ imageUrl, alt }) => {
  return (
    <div style={{ width: "100%", height: "auto" }}>
      <Image
        src={imageUrl}
        alt={alt}
        layout="responsive"
        width={1000}
        height={600}
      />
    </div>
  );
};

export default ResponsiveImage;
