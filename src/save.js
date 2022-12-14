import { __ } from '@wordpress/i18n';
import {
	useBlockProps,
	InnerBlocks
} from '@wordpress/block-editor';
export default function save( { attributes } ) {
	const { blockID, layout } = attributes;
	const styles = `
		#block-${blockID} > .cth-layout-inner {
			display: grid;
			flex-wrap: wrap;
			gap: ${layout.gap}px;
			grid-template-columns: repeat(${layout.columns}, 1fr);
			grid-auto-flow: row;
		}
	`;
	return (
		<div { ...useBlockProps.save({
			id: `block-${blockID}`
		}) }>
			<style>
				{styles}
			</style>
			<div className="cth-layout-inner">
				<InnerBlocks.Content />
			</div>
		</div>
	);
}