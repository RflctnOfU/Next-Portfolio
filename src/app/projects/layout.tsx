export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex flex-col items-center justify-center h-full border border-red-400">
      <div>Projects</div>
      {children}
    </div>
  );
}
