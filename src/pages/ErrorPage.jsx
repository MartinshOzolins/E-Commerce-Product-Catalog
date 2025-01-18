import NotFoundImage from "../../public/writer.svg";

export default function ErrorPage({ resetErrorBoundary }) {
  return (
    <div className="w-full h-full flex flex-col items-center mt-10">
      <img src={NotFoundImage} alt="Error image" className="w-60 mb-5" />
      <div className="flex flex-col items-center">
        <p className="text-center">
          Something went wrong. Try clicking the refresh page button to reload
          the application.
        </p>
        <button
          className="bg-red-400 hover:bg-red-600 px-4 py-1 rounded"
          onClick={resetErrorBoundary}
        >
          Refresh Page
        </button>
      </div>
    </div>
  );
}
