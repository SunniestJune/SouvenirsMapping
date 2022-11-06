import React, {useEffect, useState} from 'react';
import {Pin} from "./Data/Pin";
import {getPins} from "./Data/ApiController";

interface Props {

}

const Markers: React.FC<Props> = (props: Props) => {
    const [pins, setPins] = useState<Pin[]>([]);
    const [nextPage, setNextPage] = useState<string | undefined>(undefined);
    const [stopFetching, setStopFetching] = useState<boolean>(false);

    useEffect(() => {
        if (stopFetching) return;
        setPins([...pins, getPins(nextPage)]);
    }, []);

    return (
        <>
        </>
    );
}

export default Markers;
