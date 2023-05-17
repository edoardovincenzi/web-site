interface TechnologyLinkImageProps {
  iconLinkImage: string;
  libraryName: string;
}

const TechnologyLinkImage = ({
  iconLinkImage,
  libraryName,
}: TechnologyLinkImageProps) => {
  return (
    <div className="flex flex-col justify-center items-center gap-y-1">
      <div
        className={`h-9 w-9`}
        style={{
          background: `url("${iconLinkImage}")`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />
      <p className="icon-text-card-project">{libraryName}</p>
    </div>
  );
};

export default TechnologyLinkImage;
