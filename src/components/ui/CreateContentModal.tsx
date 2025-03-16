import { useRef } from "react";
import { CloseIcon } from "../../icons/CloseIcon";
import { Button } from "./Button";
import { Input } from "./Input";
import { BACKEND_URL } from "../../config";
import axios from "axios";

interface CreateContentModalPropsInterface {
    modalOpen: boolean,
    onClose?: () => void,
    onSubmit?: () => void
}

export function CreateContentModal({modalOpen, onClose, onSubmit} : CreateContentModalPropsInterface ) {

    const typeRef = useRef<HTMLInputElement | any>(null);
    const titleRef = useRef<HTMLInputElement | any>(null);
    const linkRef = useRef<HTMLInputElement | any>(null);
    const tagsRef = useRef<HTMLInputElement | any>(null);

    async function createContent() {
        if(onSubmit) {
            onSubmit
        }

        const type = typeRef.current?.value;
        const title = titleRef.current?.value;
        const link = linkRef.current?.value;
        const tags = tagsRef.current?.value;

        const tagsArray = tags.split(',');
        console.log(tagsArray);


        if (!type || !title || !link) {
            alert('Please fill in the required fields');
            return;
        }

        console.log('Content', type, title, link);

        if(onClose) {
            onClose
        }

        await axios.post(BACKEND_URL + '/api/v1/content', { 
            type, 
            title, 
            link, 
            tagsArray
         }, {
                headers: {
                    "authorization": localStorage.getItem('token')
                }
            }
        ).then((response) => {
            console.log(response.data);
            alert("Content Added Successfully");
        }).catch((error) => {
            console.log(error);
            alert("Failed to Add Content");
        });

    }

    return <div>
        { modalOpen && <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
            <div className="bg-white p-4 rounded-md w-96">
                <div className="flex justify-between items-center">
                    <div className="font-medium w-full">
                        <div className="flex justify-end">
                            <CloseIcon size='md' onClick={onClose} />
                        </div>

                        <div className="flex justify-center py-2 font-semibold">
                            Add Content
                        </div>

                        {/* The next line is an Input Component to Select One among the following types from a dropdown : 'Article', 'Video', 'Twitter', 'Other' */}
                        <Input label='Type' placeholder='Type' value='' onChange={() => {}} type='text' required={true} reference={typeRef} />

                        <Input label='Title' placeholder='Title' value='' onChange={() => {}} type='text' required={true} reference={titleRef} />

                        <Input label='Link' placeholder='Link' value='' onChange={() => {}} type='text' required={true} reference={linkRef} />

                        <Input label="Tags" placeholder="Tags" value="" onChange={() => {}} type="text" required={false} reference={tagsRef} />

                        <div className="flex justify-center">
                            <Button variant='primary' size='md' content='Submit' onClick={ createContent } />
                        </div>
                    </div>
                </div>
            </div>
        </div>
        }
    </div>
}