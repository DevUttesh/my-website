import { EnvelopeIcon } from "@heroicons/react/24/outline";

const Footer = () => {
  return (
    <footer className="h-1/2 bg-slate-50 text-slate-500 flex flex-col py-10 items-center text-center justify-between " >
      <h1 className="text-4xl font-bold" >Suthar Uttesh</h1>
      <p>
        Et aut eum quis fuga eos sunt ipsa nihil. Labore corporis magni eligendi
        fuga maxime saepe commodi placeat.
      </p>
      <div className="flex  gap-3" >
        <div className="bg-green-900 rounded-full p-5" >
          <EnvelopeIcon className="text-white" />
        </div>
        <div className="bg-green-900 rounded-full p-5" ></div>
        <div className="bg-green-900 rounded-full p-5" ></div>
        <div className="bg-green-900 rounded-full p-5" ></div>
        <div className="bg-green-900 rounded-full p-5" ></div>
      </div>
      <small>© Copyright <b>Suthar Uttesh</b>. All Rights Reserved <br /> Designed by  Uttesh</small>
    </footer>
  );
};

export default Footer;
