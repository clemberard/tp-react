import React, { useState } from "react";
import { ChangeEventHandler } from "react";

type Iprops = {
  label: string;
  isChecked: boolean;
  onClick: ChangeEventHandler<HTMLInputElement>;
  name: string;
};

const Checkbox: React.FC<Iprops> = ({ label }) => {
	const [isChecked, setIsChecked] = useState(false);

	const handleCheckboxChange = () => {
		setIsChecked(!isChecked);
	};

	return (
		<div>
			<label>
				<input type="checkbox" checked={isChecked} onChange={handleCheckboxChange} />
				{label}
			</label>
		</div>
	);
};

export { Checkbox };
