import SunEditor from 'suneditor-react'
import plugins from 'suneditor/src/plugins'
import { en } from 'suneditor/src/lang'
import CodeMirror from 'codemirror'
import katex from 'katex'
import 'suneditor/dist/css/suneditor.min.css'
import 'katex/dist/katex.min.css'
import 'codemirror/mode/htmlmixed/htmlmixed'
import 'codemirror/lib/codemirror.css'
import axios from 'axios'
import { useSlotProps } from '@mui/base'

const Editor = ({ name, onChange, defaultvalue, props }) => {
    const options = {
        plugins: plugins,
        height: 850,
        codeMirror: {
            src: CodeMirror,
            options: {
                indentWithTabs: true,
                tabSize: 2
            }
        },
        katex: katex,
        lang: en,
        buttonList: [
            [
                'font',
                'fontSize',
                'formatBlock',
                'bold',
                'underline',
                'italic',
                'paragraphStyle',
                'blockquote',
                'strike',
                'subscript',
                'superscript',
                'fontColor',
                'hiliteColor',
                'textStyle',
                'removeFormat',
                'undo',
                'redo',
                'outdent',
                'indent',
                'align',
                'horizontalRule',
                'list',
                'lineHeight',
                'table',
                'link',
                'image',
                // 'video',
                // 'audio',
                // You must add the 'katex' library at options to use the 'math' plugin.
                // 'math',
                // You must add the "imageGalleryUrl".
                // 'imageGallery',
                'fullScreen',
                'showBlocks',
                'codeView',
                'preview'
                // 'print'
                // 'save',
                // 'template'
            ]
        ]
    }

    const handleImageUploadBefore = async (files, info, uploadHandler) => {
        // uploadHandler is a function
        // console.log(files, info)

        const KEY = 'docs_upload_example_us_preset'

        const Data = new FormData()
        Data.append('file', files[0])
        Data.append('upload_preset', KEY)

        await axios({
            method: 'POST',
            url: 'https://api.cloudinary.com/v1_1/demo/image/upload',
            data: Data
        })
            .then((response) => {
                // console.log(response)
                const res = {
                    // The response must have a "result" array.
                    errorMessage: response?.data?.message,
                    result: [
                        {
                            url: response.data.secure_url,
                            size: response.data.file_size,
                            name: response.data.public_id
                        }
                    ]
                }
                uploadHandler(res)
            })
            .catch((error) => {
                console.log(error)
            })
    }

    const handleImageUpload = (
        targetElement,
        index,
        state,
        info,
        remainingFilesCount,
        core
    ) => {
        console.log(core)
    }

    const handleImageUploadError = (errorMessage, result) => {
        console.log(errorMessage, result)
    }

    return (
        <SunEditor
            {...props}
            defaultValue={defaultvalue}
            placeholder="Please type here..."
            name={name}
            lang="en"
            setDefaultStyle="font-family: Arial; font-size: 14px; min-height:670px; margin-left:auto;margin-right:auto"
            setOptions={options}
            // onImageUpload={onImageUpload}
            onImageUploadBefore={handleImageUploadBefore}
            onImageUpload={handleImageUpload}
            onImageUploadError={handleImageUploadError}
            onChange={onChange}
        />
    )
}

export default Editor
