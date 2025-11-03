import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

interface MainLayoutProps {
  children: React.ReactNode;
}

export default function MainLayout({ children }: MainLayoutProps) {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50 text-gray-900">
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-6">{children}</main>
      <Footer />
    </div>
  );
}
