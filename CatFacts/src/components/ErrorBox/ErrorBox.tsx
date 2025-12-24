import "./ErrorBox.css";

export interface ErrorBoxProps {
    message: string;
    isError: boolean;
}

function ErrorBox({isError, message} : ErrorBoxProps) {
    
    return (
        <div className={"error-box"} style={{ display: isError ? 'block' : 'none' }}>
            {message}
        </div>
    )
}

export default ErrorBox