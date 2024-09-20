import dayjs from "dayjs";
import localizedFormat from "dayjs/plugin/localizedFormat";
import weekday from "dayjs/plugin/weekday";
import React, { useState, useEffect } from "react";
import "dayjs/locale/pt-br";

dayjs.extend(weekday);
dayjs.extend(localizedFormat);

const DisplayDate = () => {
	const [dateString, setDateString] = useState<string>("");

	dayjs.locale("pt-br");

	useEffect(() => {
		const currentDate = dayjs();

		let result = currentDate.format("dddd, DD [de] MMMM [de] YYYY");

		result = result.replace("-feira", "");

		result = result.charAt(0).toUpperCase() + result.slice(1);

		setDateString(result);
	}, []);

	return <>{dateString}</>;
};

export default DisplayDate;
