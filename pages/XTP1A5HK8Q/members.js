import { memo } from "react";
import AdminCover from "Templates/Admin/Cover";
import Members from "Templates/Admin/Members";

export default memo(() => (
	<AdminCover>
		<Members />
	</AdminCover>
));
