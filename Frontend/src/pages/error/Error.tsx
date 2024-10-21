import { useNavigate, useRouteError } from "react-router-dom";

export default function Error() {
  const error: any = useRouteError();
  const navigate = useNavigate();

  return (
    <>
      <div className="text-center flex flex-col gap-5 mt-4 md:mt-9">
        <div className=" text-9xl">{error.status}</div>
        <div className="text-4xl">
          Uhhhh, looks like you've looked for my CSS-Skills
        </div>
        <div className="text-gray-400 text-xl">
          Dont worry I have not found them either
        </div>
        <button
          onClick={() => {
            navigate(-1);
          }}
          className="text-3xl w-1/2 md:w-1/3 mx-auto bg-primary bg-opacity-40 rounded-2xl p-4 hover:bg-secondary hover:bg-opacity-100 border-none font-bold"
        >
          Let's go back to my place
        </button>
      </div>
    </>
  );
}
