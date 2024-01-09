import { useDispatch,useSelector } from 'react-redux';
import {setText} from '../redux/editorSlice';
const Editor = () => {
    const dispatch = useDispatch();
    const { text } = useSelector((state) => state.editor);

    const handleChange = (e) => {
        dispatch(setText(e.target.value))
    }


    return (
        <div className="d-flex justify-content-center">
        <div className="editorWrap">
            <div className="toolbar rounded-top"><i className="fa fa-free-code-camp" title="no-stack-dub-sack"></i>Editor</div>
            <textarea id="editor" typeof='text'  style={{height:"108px"}} onChange={handleChange}>{text}</textarea>
        </div>
        </div>
    );
}

export default Editor;