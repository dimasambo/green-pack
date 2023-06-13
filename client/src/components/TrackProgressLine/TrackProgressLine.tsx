import React, {FC} from 'react';
import { StyledTrackProgressLine } from './StyledTrackProgressLine';

interface IProps {
    left: number
    right: number
    onChange: (e: any) => void
}

const TrackProgressLine: FC<IProps> = ({left, onChange, right}) => {
    return (
        <StyledTrackProgressLine>
            <input type={'range'} min={0} max={right} value={left} onChange={onChange}/>
            <div>{left} / {right}</div>
        </StyledTrackProgressLine>
    );
};

export default TrackProgressLine;