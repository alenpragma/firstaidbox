import Link from "next/link";
import { usePathname } from "next/navigation";

const SidebarItems = ({ setShow, show }) => {
  const pathname = usePathname();
  const formattedPath = pathname.slice(1).replace(/-/g, " ");

  console.log(formattedPath);
  return (
    <>
      <div className='flex flex-col p-1 gap-4'>
        {/* Deshbord */}
        <Link href={"/dashbord"} onClick={() => setShow(!show)}>
          <div
            className={` ${
              formattedPath == "dashbord"
                ? "bg-[#383838] font-semibold"
                : "font-medium "
            }  cursor-pointer rounded-[5px]  p-2 w-[188px] h-[40px] flex place-items-center gap-2.5`}
          >
            <div>ICon</div>
            <span className=' '>Dashbord</span>
          </div>
        </Link>
        {/* Explore */}

        <Link href={"/explore"} onClick={() => setShow(!show)}>
          <div
            className={` ${
              formattedPath == "explore"
                ? "bg-[#383838] font-semibold"
                : "font-medium "
            }  cursor-pointer rounded-[5px]  p-2 w-[188px] h-[40px] flex place-items-center gap-2.5`}
          >
            {" "}
            <div>icon</div>
            <span className='  '>Explore</span>
          </div>
        </Link>

        {/* Buy */}
        <Link href={"/buy"} onClick={() => setShow(!show)}>
          <div
            className={` ${
              formattedPath == "buy"
                ? "bg-[#383838] font-semibold "
                : "font-medium"
            }  cursor-pointer rounded-[5px] p-2 w-[188px] h-[40px] flex place-items-center gap-2.5`}
          >
            {" "}
            <div>ICON</div>
            <span className=' '>Buy</span>
          </div>
        </Link>
      </div>
    </>
  );
};

export default SidebarItems;
