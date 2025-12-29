
import { redirect } from 'next/navigation';

export default function Home() {
  // Redirect to the default service (Paramount+)
  redirect('/paramount-plus');
}
