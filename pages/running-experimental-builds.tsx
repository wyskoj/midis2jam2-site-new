import Link from '@/components/blue-link';
import Nav from '@/components/nav';
import { sora } from '@/pages/_app';
import React from 'react';

export default function RunningExperimentalBuilds() {
	return (
		<main className={'min-h-screen bg-container'}>
			<Nav onIndexPage={false} />

			<div
				className={
					'markdown-styles container max-w-6xl space-y-4 p-4 text-white'
				}
			>
				<h1 className={`${sora.className}`}>Running experimental builds</h1>
				<p>
					This page shows you how to run experimental builds of midis2jam2. You
					can use experimental builds to test features of midis2jam2 that are
					currently in development. Because these features are in development,
					they are prone to bugs and subject to change.
				</p>
				<h2>Obtaining an experimental build</h2>
				<p>
					To begin, you need a <code>.jar</code> file of the build you want to
					run. You can download them from a couple of places:
				</p>
				<ul>
					<li>
						The <Link href={'/builds'} text={'builds'} /> page &mdash; Download
						a build by clicking the &quot;Download JAR&quot; link, then
						selecting the appropriate file for your operating system.
					</li>
					<li>
						Pre-releases from the{' '}
						<Link
							href={'https://github.com/wyskoj/midis2jam2/releases'}
							text={'GitHub releases'}
						/>{' '}
						page &mdash; Select the appropriate file for your operating system
						under the &quot;assets&quot; dropdown.
					</li>
				</ul>
				<p>
					Once you have downloaded the build, you will have a file that might be
					named something like <code>midis2jam2-linux-61e31ca7.jar</code>. The
					file is named after the target operating system and the beginning of
					the GitHub commit hash.
				</p>
				<h2>Obtaining Java 17</h2>
				<p>
					You need the Java 17 JDK to run the <code>.jar</code> file. From{' '}
					<Link
						href={'https://aws.amazon.com/corretto'}
						text={'Amazon Corretto'}
					/>
					, download an archive (i.e., not an installer). Extract it to a folder
					on your computer.
				</p>
				<h2>Running the build</h2>
				<p>
					Once you have the JDK and the <code>.jar</code> file, you are ready to
					run it!
				</p>
				<ol>
					<li>
						Using your computer&apos;s file explorer, move the previously
						downloaded
						<code>.jar</code> file to the <code>bin</code> folder located within
						the extracted JDK folder.
					</li>
					<li>Open your computer&apos;s terminal/command prompt.</li>
					<ul>
						<li>
							On Windows, press the Start Button, then search for
							&quot;cmd&quot;.
						</li>
						<li>
							On MacOs and Linux, open the search, then search for
							&quot;Terminal&quot;.
						</li>
					</ul>
					<li>
						Within your terminal/command prompt, navigate to the{' '}
						<code>bin</code> folder in the JDK folder.
					</li>
					<ul>
						<li>
							Use the <code>cd</code> command, for example:
							<br />
							<code>
								cd
								&quot;C:\Users\wysko\Downloads\jdk-17.0.05_windows-x64_bin\jdk-17.0.05\bin&quot;
							</code>
							<br />
							Edit the path used in the this example to the actual path of the
							folder on your computer.
						</li>
					</ul>
					<li>Run the build.</li>
					<ul>
						<li>
							Use this command to run the build.{' '}
							<b>
								You must change the name used in this example to the actual name
								of the <code>.jar</code> file you downloaded!
							</b>
							<br />
							<code>java -jar midis2jam2-windows-61e31ca7.jar</code>
						</li>
					</ul>
				</ol>
				<h2>Troubleshooting</h2>
				<p>
					View the{' '}
					<Link
						href={'https://wyskoj.github.io/midis2jam2-docs/development'}
						text={'documentation'}
					/>{' '}
					for more information on how to run midis2jam2.
				</p>
			</div>
		</main>
	);
}
