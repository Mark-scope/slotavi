type Props = {
    date: string;
  };
  
  export default function DateSelector({ date }: Props) {
    return (
      <div className="flex items-center gap-2 bg-blue-600 text-white rounded-xl px-4 py-2 mt-4 w-fit">
        📅 <span>{date}</span>
      </div>
    );
  }
  