import OsTargetButton from '@/components/os-target-button';
import { SiApple, SiLinux, SiWindows11 } from 'react-icons/si';

export default function Download() {
	return (
		<div className={'h-screen bg-container text-center text-white'}>
			<h2 className={'text-3xl font-extrabold uppercase'}>Download</h2>
			<p className={'text-xs'}>v1.8.0 &ndash; 09/09/2023</p>
			<div className={'flex w-full justify-center space-x-4'}>
				<OsTargetButton icon={SiWindows11} name={'Windows'} />
				<OsTargetButton icon={SiApple} name={'macOS'} />
				<OsTargetButton icon={SiLinux} name={'Linux'} />
			</div>
		</div>
	);
}
