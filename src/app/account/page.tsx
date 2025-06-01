import ProtectedPage from "@/components/auth/ProtectedPage";
import AccountDetailsClient from "./AccountDetailsClient"; // Client component to access auth context

export default function AccountPage() {
  return (
    <ProtectedPage>
      <AccountDetailsClient />
    </ProtectedPage>
  );
}
