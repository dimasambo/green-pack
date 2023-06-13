import React, {ChangeEvent, FC, LegacyRef, useRef} from 'react';
import { StyledFileUpload } from './StyledFileUpload';

interface IFileUpload {
    setFile: (file: File) => void
    accept: string
    children: React.ReactNode
}

export const FileUpload: FC<IFileUpload> = ({setFile, accept, children}) => {
    const ref = useRef<HTMLInputElement | any>()

    const handlerChange = (e: ChangeEvent<HTMLInputElement>) => {
        if(e.target.files) {
            setFile(e.target.files[0])
        }
    }

    return (
        <StyledFileUpload onClick={() => ref.current.click()}>
            <input type={'file'} accept={accept} ref={ref} onChange={handlerChange}/>
            {children}
        </StyledFileUpload>
    );
};