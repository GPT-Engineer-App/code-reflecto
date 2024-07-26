import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { InfoIcon } from "lucide-react";

const NoChangesAlert = () => {
  return (
    <Alert>
      <InfoIcon className="h-4 w-4" />
      <AlertTitle>No Changes Detected</AlertTitle>
      <AlertDescription>
        Your prompt didn't result in any code changes. The AI returned the same code as before. 
        Try rephrasing your request or providing more specific instructions.
      </AlertDescription>
    </Alert>
  );
};

export default NoChangesAlert;
