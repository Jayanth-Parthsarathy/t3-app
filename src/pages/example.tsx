// pages/example.tsx
import { UserButton } from "@clerk/nextjs";
 
export default function Example() {
  return (
    <>
			<header>
				<UserButton />
			</header>
			<div>Your page's content can go here.</div>
    </>
  );
}
