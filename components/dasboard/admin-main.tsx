type AdminMainSectionProps = {
  children?: React.ReactNode;
};

const AdminMainSection: React.FC<AdminMainSectionProps> = ({ children }) => {
  // ...
  return (
    <div>
      {/* ... */}
      {children}
      {/* ... */}
    </div>
  );
};

export default AdminMainSection;
