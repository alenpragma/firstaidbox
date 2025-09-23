// app/layout.js
import { Tiro_Bangla } from "next/font/google";
import "./globals.css";
import { Provider } from "./_components/_provider/Provider";
import { GoogleTagManager } from "@next/third-parties/google";
import Topbar from "./_components/_topbar/Topbar";
import Nav from "./_components/_nav/Nav";
import Footer from "./_components/_footer/Footer";
import { Suspense } from "react";
import ProgressBar from "./_components/progress/Progressbar";

const tiro = Tiro_Bangla({ subsets: ["latin"], weight: "400" });

// Fetch general settings
async function getGeneralSettings() {
  const res = await fetch(
    "https://firstaid.goodmorningaidbd.com/api/general-settings",
    { cache: "no-store" }
  );
  const data = await res.json();
  return data?.data;
}

// Dynamic metadata
export async function generateMetadata() {
  const settings = await getGeneralSettings();
  return {
    title: settings?.app_name || "Good Morning Aid",
    description: "Good Morning Aid a Trusted Medical Shop",
  };
}

export default async function RootLayout({ children }) {
  const settings = await getGeneralSettings();
  const favicon =
    settings?.favicon || "https://i.postimg.cc/PJ8b3Msv/gmfav.png";

  return (
    <html lang="en">
      <head>
        <link rel="icon" href={favicon} />

        {/* Header scripts from API */}
        {settings?.header_scripts && (
          <script
            dangerouslySetInnerHTML={{ __html: settings.header_scripts }}
          />
        )}
      </head>
      <body className={tiro.className}>
        {/* Google Tag Manager */}
        {settings?.google_tag_manager && (
          <GoogleTagManager gtmId={settings.google_tag_manager} />
        )}
        <Suspense fallback={null}>
          <ProgressBar />
        </Suspense>
        <Provider>
          {" "}
          <div className="">
            <Topbar />
          </div>
          {children}
          <Footer />
        </Provider>

        {/* Footer scripts from API */}
        {settings?.footer_scripts && (
          <script
            dangerouslySetInnerHTML={{ __html: settings.footer_scripts }}
          />
        )}
      </body>
    </html>
  );
}
