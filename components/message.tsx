import { cn } from "@/lib/utils";

interface MessageProps {
    children: React.ReactNode;
    avatar: React.ElementType;
    className?: string;
}

const Message = ({ avatar: Avatar, className, children }: MessageProps) => {
    return (
        <div className={cn("p-8 w-full flex items-start gap-x-8 rounded-lg", className)}>
            <Avatar />
            {children}
        </div>
    );
};

export default Message;
