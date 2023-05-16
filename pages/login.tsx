import React from "react";
import {
  useSession,
  signIn,
  getSession,
  GetSessionParams,
} from "next-auth/react";

function Login() {
  const { data: session } = useSession();

  if (session) {
    return <p>Loading ...</p>;
  } else {
    return (
      <div className="flex mx-auto justify-center h-screen">
        <div className="w-1/2 flex justify-center items-center bg-blue-700 border rounded-md h-screen">
          <div className="text-center">
            <div className="pl-5 text-4xl md:text-7xl text-white font-extrabold">
              Welcome to DataCipher!
            </div>
          </div>
        </div>
        <div className="w-1/2 flex flex-col justify-center border rounded-md mx-auto px-4 py-5 shadow">
          <div className="text-center">
            <div className="text-xl font-bold mt-2">
              Please Sign-in to continue!
            </div>
            <button
              className="w-24 m-3 text-white bg-blue-700 hover:bg-blue-500 rounded-xl"
              onClick={() => signIn()}
              >
                Sign in
            </button>
          </div>
          
        </div>
      </div>
    );
  }
}

export default Login;

export const getServerSideProps = async (
  context: GetSessionParams | undefined
) => {
  const session = await getSession(context);

  if (session) {
    return {
      redirect: {
        destination: "/",
      },
    };
  }

  return {
    props: { session },
  };
};
