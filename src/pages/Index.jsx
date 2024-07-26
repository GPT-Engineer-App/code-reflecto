import NoChangesAlert from "@/components/NoChangesAlert";

const Index = () => {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">Web App Builder</h1>
      <p className="mb-4">Welcome to your web app building workspace. Use the prompt below to make changes to your app.</p>
      
      {/* Placeholder for your prompt input */}
      <div className="mb-4">
        <input type="text" placeholder="Enter your prompt here" className="w-full p-2 border rounded" />
      </div>
      
      {/* Example usage of NoChangesAlert */}
      <div className="mb-4">
        <NoChangesAlert />
      </div>
      
      {/* Placeholder for your app preview or code display */}
      <div className="bg-gray-100 p-4 rounded">
        <p>Your app preview or code will be displayed here</p>
      </div>
    </div>
  );
};

export default Index;
