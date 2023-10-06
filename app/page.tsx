import PaddingContainer from "@/components/layout/padding-container";
import PostCard from "@/components/post/post_card";
import { DUMMY_POST } from "@/DUMMY_DATA";

export default function Home() {
  return (
    <PaddingContainer>
      <main className="h-auto space-y-10">
        <PostCard post={DUMMY_POST[0]} />
      </main>
    </PaddingContainer>
  );
}
