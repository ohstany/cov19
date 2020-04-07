import { memo } from "react";
import AdminCover from "Templates/Admin/Cover";
import Countries from "Templates/Admin/Countries";

export default memo(() => (
	<AdminCover>
		<Countries />
	</AdminCover>
));
