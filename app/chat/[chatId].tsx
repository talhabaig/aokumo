'use client'
import { useRouter } from 'next/router';

export default function ChatPage() {
  const router = useRouter();
  const { chatId } = router.query;

  return (
    <div>
      <h1>Chat Page for Chat ID: {chatId}</h1>
      {/* Your chat UI */}
    </div>
  );
}
