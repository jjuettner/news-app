import axios from "axios";
import { useState, useEffect } from "react";

interface FetchState<T> {
	data: T | null;
	error: any;
	loading: boolean;
}

export function useFetch<T>(url: string) {
	const [data, setData] = useState<FetchState<T>>({
		data: null,
		error: null,
		loading: true,
	});

	useEffect(() => {
		const fetchData = async () => {
			setData({ data: null, error: null, loading: true });
			try {
				const response = await axios.get<T>(url);
				setData({ data: response.data, error: null, loading: false });
			} catch (error) {
				setData({ data: null, error: error, loading: false });
			}
		};

		fetchData();
	}, [url]);

	return data;
}
