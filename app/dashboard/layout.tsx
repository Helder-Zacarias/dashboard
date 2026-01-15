import Nav from "@/ui/Nav";

export default function Layout({children} : {children: React.ReactNode}) {
  return(
    <div className="dashboardContainer">
        <Nav/>
        <div>{children}</div>
    </div>
  );
}