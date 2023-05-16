/* eslint-disable @next/next/no-img-element */
//@ts-nocheck
import React from "react";
import Head from "next/head";
import Link from "next/link";
import {
  useSession,
  signOut,
  getSession,
  GetSessionParams,
} from "next-auth/react";

function Header() {
  const { data: session } = useSession();

  return (
    <>
      <Head>
        <title>DataCipher</title>
        <meta name="description" content="Developed by AAiT Students" />
        <link rel="icon" href="./favicon1.ico" />
      </Head>
      {session ? (
        <div className="flex pl-5 justify-between bg-white shadow-md border-b rounded-lg py-1">
          <div className="font-bold text-3xl text-blue-700">DataCipher</div>
          <div className="flex font-semibold p-1 mx-2 text-sm text-blue-700">
            <Link
              href={"https://github.com/SalasDelil/Data-Cipher/tree/master/data-cryptography"}
              className="mx-2 hover:text-blue-600"
            >
              Github
            </Link>
            <div className="flex">
              <div className="flex mx-2 justify-center">
                <img
                  className="mx-1 w-6 h-6 rounded-full"
                  src={session?.user?.image}
                  alt="profile-image"
                />
                <div className="text-sm font-semibold">
                  {session?.user?.name}
                </div>
              </div>
              <button
                onClick={() => signOut()}
                className="w-24 mx-2 rounded-xl bg-blue-700 hover:bg-blue-600 text-white"
              >
                Logout
              </button>
            </div>
          </div>
        </div>
      ) : (
        <></>
      )}
    </>
  );
}

export default Header;
