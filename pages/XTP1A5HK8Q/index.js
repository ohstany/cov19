import { memo } from "react";
import AdminCover from "Layouts/Admin/Cover";
import Markers from "Layouts/Admin/Markers";

export default memo(() => (
	<AdminCover>
		<Markers />
	</AdminCover>
));
