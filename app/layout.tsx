import type { Metadata } from "next";
import "../styles/global.css";
import Navigation from "@/components/navigation";
import Footer from "@/components/footer";

export const metadata: Metadata = {
  title: {
    template: "KANG CHAN GU | %s ",
    default: "KANG CHAN GU",
  },
  description: "The best movies on the best frameworks",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <div className="wrapper">
          <Navigation />
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}
