import { useSelector } from 'react-redux';
import React from 'react';
import Markdown from 'marked-react';

const Previewer = () => {
    const { text } = useSelector((state) => state.editor);
    
    return(
    
        <div className='previewWrap'>
            <div class="toolbar rounded-top"><i className="fa fa-free-code-camp" title="no-stack-dub-sack"></i>Previewer</div>
            <div id="preview" className='rounded-bottom'><Markdown breaks={true}>{text}</Markdown></div>
        </div>

    )
}

export default Previewer;
