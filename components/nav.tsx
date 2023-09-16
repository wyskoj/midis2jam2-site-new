import WideLogo from '@/components/wide-logo';

type NavProps = { onIndexPage?: boolean };

export default function Nav(props: NavProps) {
	return (
		<nav
			className={`${
				props.onIndexPage ? 'absolute top-4' : ''
			} flex w-full flex-col content-between items-center justify-between space-y-4 lg:space-y-0 px-32 text-white lg:flex-row pt-4`}
		>
			<a href={'/'}>Home</a>
			<a href={'/builds'}>Builds</a>
			<WideLogo className={'max-w-[90vw]'} />
			<a href={'https://github.com/wyskoj/midis2jam2'} target={'_blank'}>
				Source
			</a>
			<a href={'https://discord.gg/HD6KFQ2zkW'} target={'_blank'}>
				Discord
			</a>
		</nav>
	);
}
