import PaddingContainer from "@/components/layout/paddingContainer";
import PostCard from "@/components/post/postCard";
import { DUMMY_POST } from "@/DUMMY_DATA";

export default function Home() {
  return (
    <PaddingContainer>
      <main className="h-auto space-y-10">
        <PostCard post={DUMMY_POST[0]} />
        <PostCard post={DUMMY_POST[1]} />
        <PostCard post={DUMMY_POST[2]} />
      </main>
    </PaddingContainer>
  );
}
