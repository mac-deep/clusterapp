import "../styles/globals.css";
import { ThemeProvider } from "next-themes";

function MyApp({ Component, pageProps }) {
  const PageLayout = Component.PageLayout || EmptyLayout;

  return (
    <ThemeProvider attribute="class">
      <PageLayout>
        <Component {...pageProps} />
      </PageLayout>
    </ThemeProvider>
  );
}

const EmptyLayout = ({ children }) => <>{children}</>;

export default MyApp;
