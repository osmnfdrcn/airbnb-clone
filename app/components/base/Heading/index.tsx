"use client";
type HeadingProps = {
  title?: string;
  subTitle?: string;
  center?: boolean;
  smallTitle?: boolean;
};

const Heading = (props: HeadingProps) => {
  const { title, subTitle, center, smallTitle } = props;
  return (
    <div className={center ? "text-center" : "text-start"}>
      <div
        className={` ${
          smallTitle ? "text-md font-semibold " : "text-2xl font-bold"
        }`}
      >
        {title}
      </div>
      <div className="font-light text-neutral-500 mt-2">{subTitle}</div>
    </div>
  );
};

export default Heading;
