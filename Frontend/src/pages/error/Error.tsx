import { useNavigate, useRouteError } from "react-router-dom";

export default function Error() {
  const error: any = useRouteError();
  const navigate = useNavigate();

  return (
    <>
      <div className=" text-center flex flex-col gap-5 mt-4">
        <div className=" text-9xl">{error.status}</div>
        <div className="text-4xl">
          Uhhhh, looks like you've looked for my CSS-Skills
        </div>
        <div className=" text-gray-400 text-xl">
          Dont worry I have not found them either
        </div>
        <div
          onClick={() => {
            navigate(-1);
          }}
          className=" text-4xl w-1/2 md:w-1/4 mx-auto bg-gray-500 bg-opacity-40 rounded-lg p-2 hover:bg-grey-700 hover:bg-opacity-100"
        >
          Let's go back to my place
        </div>
      </div>
    </>
  );
}
