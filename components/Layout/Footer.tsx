import React from "react";

function Footer() {
  return (
    <footer className="flex h-12 justify-center bg-gray-600">
      <div className="flex-col">
      <p className="font-normal text-white">For more info:</p>
      <a
        className="font-semibold text-gray-100"
        href="https://github.com/SalasDelil/Data-Cipher/tree/master/data-cryptography"
      >
        GitHub
      </a>
      </div>
    </footer>
  );
}

export default Footer;
