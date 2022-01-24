import react from "react";

const [campusData, setCampusData] = useState([])

    useEffect(() => {
        (async () => {
            const res = await fetch(/*api request here*/)
            const data = await res.json();
            setCampusData(data)
        })();
    }, []);