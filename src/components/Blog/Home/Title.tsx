type TitleProps = {
  text: string;
  classNames: string;
  mainTitle: string;
};

const Title = ({ text, classNames, mainTitle }: TitleProps) => {
  return (
    <div className={` lg:${classNames} flex  flex-col gap-[24px]`}>
      <div className="flex flex-col gap-2 items-center justify-center lg:justify-start">
        <p className="text-gray-400 font-bold">{text}</p>
        <div className="flex items-center justify-center lg:justify-start">
          <p className={` h-[2px] w-9 bg-MainTheme`}></p>
        </div>
      </div>

      <div className="flex items-center justify-center lg:justify-start">
        <h1 className="text-2xl md:text-[1.3rem] lg:text-[2.74rem] font-bold pt-2 leading-[2.8rem]">
          {mainTitle}
        </h1>
      </div>
    </div>
  );
};

export default Title;
