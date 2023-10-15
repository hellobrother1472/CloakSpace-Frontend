import UserInfo from "./UserInfo";
import { navButtonType } from "@/types";
import Setting from "@/icons/Setting";
import Link from "next/link";

const navbar:navButtonType[] = [
  {path:"/editProfile", buttonName:"EDIT PROFILE"},
  {path:"/myPost", buttonName:"MY POST"},
]

const RightSidebar = () => {
	return (
		<div className="flex flex-col h-screen w-[25%] fixed right-0 pt-12 my-auto justify-between">
      <Link href="/myPost" ><UserInfo/></Link>
      <div className="flex flex-row p-5 justify-between">
        <h1 className="text-lg font-semibold cursor-pointer hover:font-bold h-fit my-auto">LOGOUT</h1>
        <Link href="/editProfile"><Setting/></Link>
      </div>
		</div>
	);
};

export default RightSidebar;
