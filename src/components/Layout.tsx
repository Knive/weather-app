import { Footer } from "./Footer";

export function Layout({ children }: { children: React.ReactNode }) {
	return (
		<div className="h-screen w-screen bg-[#202023] text-[#2e3151]">
			<div className="relative bg-[#fdfcf3] h-screen max-w-md mx-auto rounded-2xl overflow-y-auto pt-5">

				{/* Body */}
				<div className="px-5 overflow-y-auto" style={{ height: 'calc(100vh - 100px)' }}>
					{children}
				</div>

				<Footer />
			</div>
		</div>
	)
}