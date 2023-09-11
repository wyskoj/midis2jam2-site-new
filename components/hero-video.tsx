/**
 * The background video on the landing page.
 */
export default function HeroVideo() {
	return (
		<video
			src={'/promo.m4v'}
			muted={true}
			autoPlay={true}
			controls={false}
			className={
				'absolute -z-10 m-auto block h-screen w-screen overflow-hidden object-cover brightness-50'
			}
			loop={true}
		/>
	);
}
