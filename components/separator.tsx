const Separator = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex border-b-2 border-gray-400 border-dashed pb-5 md:pb-7 mb-5">
      {children}
    </div>
  );
};

export default Separator;
