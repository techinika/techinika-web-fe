"use client";

export const HeadTitle = ({
  title,
  tagline,
}: {
  title: string;
  tagline: string;
}) => {
  return (
    <div className="flex justify-center w-full items-center py-10 md:w-8/12 m-auto flex-col gap-5 px-4">
      <h2 className="text-4xl font-bold h-1/2">{title}</h2>

      <p>
        <i>{tagline}</i>
      </p>
    </div>
  );
};
