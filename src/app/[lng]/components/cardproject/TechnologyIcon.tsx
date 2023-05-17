interface TechnologyIconProps {
  icon: JSX.Element;
  libraryName: string;
}

const TechnologyIcon = ({ icon, libraryName }: TechnologyIconProps) => {
  return (
    <div className="flex flex-col justify-center items-center gap-y-1">
      <>
        {icon}
        <p className="icon-text-card-project">{libraryName}</p>
      </>
    </div>
  );
};

export default TechnologyIcon;
