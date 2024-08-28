interface ErrorProps {
  message: string,
}

const Error = ({message}: ErrorProps) => {
  return (
    <span className="text-sm text-red-400">{message}</span>
    
  );
}

export default Error;








