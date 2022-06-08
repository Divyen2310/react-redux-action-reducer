import { useState, forwardRef, useEffect } from "react";
import { Editor } from "react-draft-wysiwyg";
// import { styled } from '@mui/material/styles';
import { EditorState, convertToRaw } from "draft-js";
import draftToHtml from "draftjs-to-html";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import { ContentState } from "draft-js";
import { convertFromHTML } from "draft-js";
// import clsx from 'clsx';

// const Root = styled('div')({
//   '& .rdw-dropdown-selectedtext': {
//     color: 'inherit',
//   },
//   '& .rdw-editor-toolbar': {
//     borderWidth: '0 0 1px 0!important',
//     margin: '0!important',
//   },
//   '& .rdw-editor-main': {
//     padding: '8px 12px',
//     height: `${256}px!important`,
//   },
// });

const WYSIWYGEditor = forwardRef((props, ref) => {
  const [editorState, setEditorState] = useState(
    props.state && props.state !== ""
      ? EditorState.createWithContent(ContentState.createFromBlockArray(convertFromHTML(props.state)))
      : EditorState.createEmpty()
  );

  function onEditorStateChange(_editorState) {
    setEditorState(_editorState);

    return props.onChange(draftToHtml(convertToRaw(_editorState.getCurrentContent())));
  }
  // useEffect(() => {
  //   if (props.state && props.state !== "") {
  //     setEditorState(
  //       EditorState.createWithContent(ContentState.createFromBlockArray(convertFromHTML("<p>My initial content.</p>")))
  //     );
  //   }
  //   // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, []);

  return (
    <div
      // className={clsx('rounded-4 border-1 overflow-hidden w-full', props.className)}
      ref={ref}
    >
      <Editor editorState={editorState} onEditorStateChange={onEditorStateChange} />
    </div>
  );
});

export default WYSIWYGEditor;
