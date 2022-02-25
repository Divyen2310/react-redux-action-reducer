
import React, { useCallback } from 'react'
import { useDropzone } from 'react-dropzone'
import styled from 'styled-components';

const StyledDropeZone = styled.div`
    height: 104px;
    width: 438px;
    border: 0.5px dotted grey;
    display: flex;
    justify-content: center;
    align-items: center;
`
const StyledImg = styled.img`
    height: 100px;
    width: 150px;
    object-fit:contain;
    margin: 5px;
    display: flex;
    flex-direction: column;
    border: 0.5px solid lightgrey;
`


function MyDropzone() {
    const [myFiles, setmyFiles] = React.useState([]);
    console.log("myFiles", myFiles);


    const checkFile=(newFile)=>{
        let Error=false;
        myFiles.forEach(item=>{
            if(newFile === item.name){
                Error=true;
            }
        })
        console.log("Err",Error);
        return Error
    }
    const onDrop = useCallback(acceptedFiles => {
        // Do something with the files
        console.log("acceptedFiles", acceptedFiles);
        // console.log("acceptedFiles",acceptedFiles);
        const tempFiles = myFiles;
        acceptedFiles.forEach(i => {
            console.log("i", i);

            if (checkFile(i.name)){
                alert("duplicate")
            }else{
                 i.preview = URL.createObjectURL(i)
                 tempFiles.push(i)
            }
            
        })
        setmyFiles(tempFiles);
    }, [])
    const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop })

    // console.log("getRootProps", getRootProps);
    // console.log("getInputProps", getInputProps);
    // console.log("isDragActive", isDragActive);

    // const handleChange = (e) => {
    //     let tempFiles = myFiles.slice();
    //     console.log("e.ta", e.target.files);
    //     let tt = e.target.files[0];
    //     console.log("tt", tt);
    //     tt.preview = URL.createObjectURL(tt);

        
    //     tempFiles.push(tt);
    //     setmyFiles(tempFiles);
    // }

    return (
        <>
            {/* <input name="tempInputFile" type="file" onChange={handleChange} /> */}
            <StyledDropeZone  {...getRootProps({ refKey: 'innerRef' })}>
                <input {...getInputProps()} />
                {
                    isDragActive ?
                        <p>Drop the files here ...</p> :
                        <p>Drag 'n' drop some files here, or click to select files</p>
                }
            </StyledDropeZone>

            <div>
                {
                    myFiles.map((item, index) => {
                        return (
                            <StyledImg key={index} src={item.preview} alt="igas" />
                        )
                    })
                }
            </div>
        </>
    )
}


export default MyDropzone

