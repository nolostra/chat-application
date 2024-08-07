import ChatComponent from "@/components/ChatComponent";
import "../app/globals.css";
export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <ChatComponent />
    </main>
  );
}
