const AuthLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex h-full items-center justify-center space-y-4 p-4">
      {children}
    </div>
  );
};

export default AuthLayout;
