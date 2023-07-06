import SubscribeForm from "./Forms/SubscribeForm";

export const Subscribe = () => {
  return (
    <>
      <div className="bg-bg w-full p-4 md:p-10">
        <div className="bg-white p-10 w-full md:w-6/12 m-auto text-center rounded-lg shadow-md">
          <SubscribeForm />
        </div>
      </div>
    </>
  );
};
