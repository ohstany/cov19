import { useEffect } from "react";

let r = null;

export default ({ children, className, name, beforeUpload, uploaded }) => {
	useEffect(() => {
		if (uploaded) {
			r.value = "";
		}
	}, [uploaded]);

	return (
		<label className={"uploads" + (className ? " " + className : "")}>
			<div className="files">
				<input
					ref={rf => (r = rf)}
					style={{ display: "none" }}
					type="file"
					name={name}
					onChange={e => {
						beforeUpload(e.target.files[0]);
					}}
				/>
				Upload File
			</div>
			{children}
		</label>
	);
};
