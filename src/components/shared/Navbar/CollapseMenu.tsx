import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { BiCollapseVertical } from "react-icons/bi";
const tags = Array.from({ length: 50 }).map((_, i, a) => `v1.2.0-beta.${a.length - i}`);
const CollapseMenu = ({ label, path }: { label: string; path: string }) => {
  const pathname = usePathname();
  return (
    <div className="text-light-primary-txt dark:text-dark-primary-txt hover:text-primary duration-500 ease-in-out font-medium w-full text-start">
      <Collapsible>
        <div className="flex w-full items-center justify-between">
          <span>
            <Link
              href={path}
              className={`${
                pathname === path
                  ? "text-primary font-medium"
                  : "text-light-primary-txt dark:text-dark-primary-txt hover:text-primary duration-500 ease-in-out font-medium"
              }`}
            >
              {label}
            </Link>
          </span>
          <CollapsibleTrigger>
            <BiCollapseVertical className="text-xl" />
          </CollapsibleTrigger>
        </div>

        <CollapsibleContent>
          <div className="h-72 w-[95.5%] xsm:w-[97%] sm:w-[96.5%] rounded-md overflow-y-scroll mr-5 custom-scrollbar mt-3">
            <div className="mx-2 pl-3">
              {tags.map((tag, idx) => (
                <div key={idx} className="text-sm pb-2.5 text-light-primary-txt dark:text-dark-primary-txt">
                  {tag}
                </div>
              ))}
            </div>
          </div>
        </CollapsibleContent>
      </Collapsible>
    </div>
  );
};

export default CollapseMenu;
