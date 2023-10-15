import Image from "next/image";
import photo from "../public/defaultUser.jpg";

const UserInfo = () => {
	return (
		<div className="flex flex-col space-y-4 my-auto">
			<Image
				src={photo}
				alt="profile"
				width={150}
				height={150}
				placeholder="blur"
				className="rounded-full mx-auto"
			/>
			<div className="flex flex-row mx-auto text-center space-x-3">
				<h1 className="font-semibold text-lg">aflsdj</h1>
			</div>
		</div>
	);
};

export default UserInfo;
