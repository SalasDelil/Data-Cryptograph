// @ts-nocheck
import { useState } from "react";
import Head from "next/head";
import Link from "next/link";
import { encryptAES, decryptAES } from "../../helpers/AES";
import { encryptTDES, decryptTDES } from "../../helpers/TripleDES";
import { encryptOTP, decryptOTP } from "../../helpers/OTP";

export default function Crypto() {
  // encription state catcher
  const [text, setText] = useState(""); // an inupt message to be encrypted
  const [algorithm, setAlgorithm] = useState("AES"); //the algorithm used to encrypt the message
  const [key, setKey] = useState(""); // encryption key
  const [encrypted, setEncryptedText] = useState(""); // result of encrypted message

  // decryption state
  const [encTextInput, setEncTextInput] = useState("");
  const [decKey, setDecKey] = useState("");
  const [decryptAlgorithm, setDecryptionAlgorithm] = useState("AES"); //the algorithm used to decrypt the message
  const [decryptedText, setDecryptedText] = useState("");

  // input text field handler
  const handleInputChange = (event) => {
    setText(event.target.value);
  };

  // encription handler function
  const handleEncryption = () => {
    switch (algorithm) {
      case "AES":
        setEncryptedText(encryptAES(text, key));
        break;
      case "TripleDES":
        setEncryptedText(encryptTDES(text, key));
        break;
      case "OTP":
        setEncryptedText(encryptOTP(text, key));
        break;
      default:
        break;
    }
  };

  // decription handler function
  const handleDecryption = () => {
    switch (decryptAlgorithm) {
      case "AES":
        setDecryptedText(decryptAES(encTextInput, decKey));
        break;
      case "TripleDES":
        setDecryptedText(decryptTDES(encTextInput, decKey));
        break;
      case "OTP":
        setDecryptedText(decryptOTP(encTextInput, decKey));
        break;
      default:
        break;
    }
  };

  return (
    <div className="flex flex-col mx-auto rounded-lg bg-gradient-to-b from-blue-200 to-gray-400">
      <div className="bg-light text-white">
          <div className="text-center">
            <h1 className="my-3 text-3xl text-blue-900 font-bold font-mono">Welcome to Encryption and Decryption Tool</h1>
            <p className="text-gray-600 font-mono">A web-based tool to encrypt and decrypt your sensitive messages using the latest encryption algorithms.</p>
          </div>
        </div>
      <main className="flex flex-col md:px-36">
        <div className="flex flex-wrap md:flex-nowrap justify-center text-semibold my-10">
          <div
            className="w-full md:w-1/2 flex flex-col justify-center mx-2 mt-5 p-4 bg-gradient-to-b from-gray-400 to-gray-900 border rounded-lg border-gray-300 shadow"
          >
            <div className="my-2 text-3xl font-mono text-red-900 font-bold">
              Encryption
            </div>
            <div className="flex flex-col mt-2">
              <label className="p-1 mx-2">PlainText</label>
              <textarea
                type="text"
                rows={3}
                placeholder="Enter a plaintext"
                className="ml-3 p-1 w-1/1 border focus:border-blue-500 rounded-lg"
                onChange={(event) => handleInputChange(event)}
                value={text}
              />
            </div>
            <div className="flex flex-col mt-2">
              <label className="p-1 mx-2">Key</label>
              <input
                type="text"
                name="key"
                placeholder="Enter a key"
                value={key}
                onChange={(event) => setKey(event.target.value)}
                className="w-1/1 ml-3 p-1 rounded-lg"
              />
            </div>
            <div className="flex flex-col mt-2">
              <label className="mx-2 p-1">Algorithm</label>
              <select
                id="Algo"
                name="Algo"
                className="rounded-lg ml-3 p-1 w-1/1"
                onChange={(event) => setAlgorithm(event.target.value)}
              >
                <option value="">Select encipher Algorithm</option>
                <option value="AES">AES</option>
                <option value="TripleDES">TripleDES</option>
                <option value="OTP">OTP</option>
              </select>
            </div>
            <button
              onClick={handleEncryption}
              className="my-4 mx-auto shadow-md rounded w-24 bg-red-700 hover:bg-red-600 text-white"
            >
              Encrypt
            </button>
            <textarea
              className="text-xl w-4/5 mx-auto mt-5 bg-gray-50 p-2 rounded-lg"
              value={encrypted}
              readOnly="true"
            />
          </div>

          <div
            className="w-full md:w-1/2 flex flex-col justify-center mx-2 mt-5 p-4 bg-gradient-to-b from-gray-400 to-gray-900 border rounded-lg border-gray-300 shadow"
          >
            <div className="my-2 text-3xl  font-mono text-red-900 font-bold">
              Decryption
            </div>
            <div className="flex flex-col mt-2">
            <label className="p-1 mx-2">CipherText</label>
              <textarea
                type="text"
                rows={3}
                placeholder="Enter a ciphertext"
                className="ml-3 p-1 w-1/1 border focus:border-blue-500 rounded-lg"
                value={encTextInput}
                onChange={(event) => setEncTextInput(event.target.value)}
              />
            </div>
            <div className="flex flex-col mt-2">
              <label className="w-1/4 p-1 mx-2">Key</label>
              <input
                type="text"
                name="decr_key"
                placeholder="Enter a key"
                value={decKey}
                onChange={(event) => setDecKey(event.target.value)}
                className="w-1/1 ml-3 p-1 rounded-lg"
              />
            </div>
            <div className="flex flex-col mt-2">
              <label className="mx-2 p-1" s>
                Algorithm
              </label>
              <select
                id="Algo"
                name="Algo"
                className="ml-3 p-1 rounded-lg w-1/1"
                onChange={(event) => setDecryptionAlgorithm(event.target.value)}
              >
                <option value="">Select decipher Algorithm</option>
                <option value="AES">AES</option>
                <option value="TripleDES">TripleDES</option>
                <option value="OTP">OTP</option>
              </select>
            </div>
            <button
              onClick={handleDecryption}
              className="my-4 mx-auto shadow-md rounded w-24 bg-red-700 hover:bg-red-600 text-white"
            >
              Decrypt
            </button>
            <textarea
              className="text-xl w-4/5 mx-auto mt-5 p-2 bg-gray-100 rounded-lg"
              value={decryptedText}
              readOnly={true}
            />
          </div>
        </div>
        <div className="rounded-lg py-2 my-2 mx-5 px-3 bg-gray-300">
          <p className="font-semibold text-sm">
            Note: for OTP enc-dec, the length of message and key has to be the
            same. for Eg. text = ABcdefG, key = lmnopqr
          </p>
        </div>
      </main>
    </div>
  );
}
