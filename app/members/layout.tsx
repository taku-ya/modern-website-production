import Hero from "../_components/Hero";
import Sheet from "../_components/Sheet";

export const metadata = {
  title: "メンバー",
};

type Props = {
  children: React.ReactNode;
};

export default function RootLayout({ children }: Props) {
  return (
    <>
      <Hero title="Member" sub="メンバー" />
      <Sheet>{children}</Sheet>
    </>
  );
}
