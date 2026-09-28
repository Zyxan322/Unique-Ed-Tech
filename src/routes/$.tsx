import { createFileRoute, notFound } from "@tanstack/react-router";
import { ContentPage } from "@/components/content-page";
import { grades, pageDetails, programs } from "@/lib/site-data";

export const Route = createFileRoute("/$")({
  beforeLoad: ({ params }) => {
    const path = params._splat ?? "";
    const segments = path.split("/").filter(Boolean);
    const root = segments[0] ?? "";
    const detail = pageDetails[root];
    const child = segments[1];
    const validChild = (root === "academics" && child && grades.includes(child)) || (root === "programs" && child && programs.includes(child)) || (root === "admissions" && child && ["process","apply","book-visit","faq"].includes(child));
    if (!detail || segments.length > 2 || (segments.length === 2 && !validChild)) throw notFound();
    return { root, child, detail };
  },
  head: ({ params }) => { const path=params._splat ?? ""; const parts=path.split("/").filter(Boolean); const label=(parts.at(-1) ?? "Page").replaceAll("-"," ").replace(/\b\w/g,c=>c.toUpperCase()); return { meta: [{title:`${label} | Unique EdTech`},{name:"description",content:`Explore ${label} at Unique EdTech, DM Chapter G, Magnolia.`},{property:"og:title",content:`${label} | Unique EdTech`},{property:"og:description",content:`Explore ${label} at Unique EdTech, DM Chapter G, Magnolia.`},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary_large_image"}], links:[{rel:"canonical",href:`/${path}`}]} },
  component: CatchAllPage,
});

function CatchAllPage(){const {root,child,detail}=Route.useRouteContext(); const itemTitle=child ? child.replaceAll("-"," ").replace(/\b\w/g,c=>c.toUpperCase()) : undefined; return <ContentPage detail={detail} kind={root} itemTitle={itemTitle}/>;}