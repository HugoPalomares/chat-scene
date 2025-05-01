
import * as React from "react";
import { format } from "date-fns";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Calendar } from "@/components/ui/calendar";
import { Calendar as CalendarIcon } from "lucide-react";
import { cn } from "@/lib/utils";
import { toast } from "sonner";

interface PostponeReviewModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export const PostponeReviewModal: React.FC<PostponeReviewModalProps> = ({
  open,
  onOpenChange,
}) => {
  const [date, setDate] = React.useState<Date | undefined>(
    new Date(Date.now() + 7 * 24 * 60 * 60 * 1000) // One week from now as default
  );

  const handlePostpone = () => {
    if (date) {
      toast.success("Review postponed", {
        description: `Scheduled for ${format(date, "MMMM dd, yyyy")}`,
      });
      onOpenChange(false);
    } else {
      toast.error("Please select a date");
    }
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Postpone Review</DialogTitle>
          <DialogDescription>
            Select a future date to schedule this review.
          </DialogDescription>
        </DialogHeader>
        <div className="py-4 space-y-4">
          <div className="flex flex-col space-y-2">
            <p className="text-sm text-muted-foreground">
              Choose when you'd like to revisit this access review:
            </p>
            <Popover>
              <PopoverTrigger asChild>
                <Button
                  variant={"outline"}
                  className={cn(
                    "w-[280px] justify-start text-left font-normal",
                    !date && "text-muted-foreground"
                  )}
                >
                  <CalendarIcon className="mr-2 h-4 w-4" />
                  {date ? format(date, "MMMM dd, yyyy") : <span>Pick a date</span>}
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-auto p-0">
                <Calendar
                  mode="single"
                  selected={date}
                  onSelect={setDate}
                  initialFocus
                  disabled={(date) => date < new Date()}
                  className="pointer-events-auto"
                />
              </PopoverContent>
            </Popover>
          </div>
          
          <div className="text-sm text-muted-foreground">
            <p>Postponing this review will:</p>
            <ul className="list-disc pl-5 mt-1">
              <li>Pause the current review cycle</li>
              <li>Send a reminder on the selected date</li>
              <li>Not affect already reviewed items</li>
            </ul>
          </div>
        </div>
        <DialogFooter>
          <Button variant="outline" onClick={() => onOpenChange(false)}>
            Cancel
          </Button>
          <Button onClick={handlePostpone}>
            Schedule
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};
