import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="pt-8 pl-4 grid grid-rows-1 gap-4 grid-cols-3 w-full items-center mt-0 pt-0">
      <div className="col-start-1">
        <Link href="/">
          <h1 className="text-4xl font-bold font-sans tracking-widest">
            CASTFINDR
          </h1>
        </Link>
      </div>
      <div className="col-start-2">
        {/* Placeholder for additional buttons or content */}
      </div>
      {/* <div className="col-start-3 text-right">
                <Link href="/find" legacyBehavior>
                    <a className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition-colors duration-200">
                        FIND
                    </a>
                </Link>
            </div> */}
      {/* Other navbar items can go here */}
    </nav>
  );
};

export default Navbar;
