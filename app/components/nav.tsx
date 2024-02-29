"use client";
import { ArrowLeft } from "lucide-react";
import { Button } from "@nextui-org/react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useEffect, useRef, useState } from "react";

export const Navigation: React.FC = () => {
	const ref = useRef<HTMLElement>(null);
	const router = useRouter();
	const [isIntersecting, setIntersecting] = useState(true);


	useEffect(() => {
		if (!ref.current) return;
		const observer = new IntersectionObserver(([entry]) =>
			setIntersecting(entry.isIntersecting),
		);

		observer.observe(ref.current);
		return () => observer.disconnect();
	}, []);

	const isAuthed = false
  const path = isAuthed ? '/secrets' : '/'

	return (
		<header ref={ref}>
			<div
				className={`fixed inset-x-0 top-0 z-50 backdrop-blur  duration-200 border-b  ${
					isIntersecting
						? "bg-zinc-900/0 border-transparent"
						: "bg-zinc-900/500  border-zinc-800 "
				}`}
			>
				<div className="container flex flex-row-reverse items-center justify-between p-6 mx-auto">
					<div className="flex justify-between gap-8">
						<Link
							href="/mapit"
							className="duration-200 text-zinc-400 hover:text-zinc-100"
						>
							map.it
						</Link>
						<Link
							href="/"
							className="duration-200 text-zinc-400 hover:text-zinc-100"
						>
							home
						</Link>
					</div>

					<Button
					  isIconOnly
						className="duration-200 text-zinc-300 hover:text-zinc-100"
						aria-label="Go back"
						onClick={() => router.back()}
					>
						<ArrowLeft className="w-6 h-6 " />
					</Button>
				</div>
			</div>
		</header>
	);
};
