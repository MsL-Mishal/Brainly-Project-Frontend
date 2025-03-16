interface InputPropsInterface {
    label?: string,
    placeholder: string,
    value?: string,
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void,
    type: string,
    required: boolean,
    reference?: React.RefObject<HTMLInputElement>
}

export function Input({label, placeholder, value, onChange, type, required, reference} : InputPropsInterface) {
    return <div className="flex flex-col mb-4">
        <label className="mb-2 font-medium">{label}</label>
        <input type={type} placeholder={placeholder} value={value} onChange={onChange} className="border border-gray-300 rounded-md p-2" required={required} ref={reference} />
    </div>
}