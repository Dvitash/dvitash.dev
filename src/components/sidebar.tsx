import { fetchContributions } from "@/lib/github";
import Container from "@/components/container";
import ContributionSquare from "@/components/contribution-square";

export default async function Sidebar() {
  const contributions = await fetchContributions();

  return (
    <Container className="hidden lg:block h-[calc(100vh-80px)] w-[78px] float-right overflow-hidden" borders="lrb">
      <div id="githubContributions" className="grid grid-cols-5 grid-flow-row content-start">
        {contributions.map((contribution, index) => {
          return <ContributionSquare key={index} contribution={contribution} />;
        })}
      </div>
    </Container>
  );
}
