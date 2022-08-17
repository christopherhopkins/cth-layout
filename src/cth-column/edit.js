import { __ } from '@wordpress/i18n';
import {
	FlexItem,
	PanelBody,
	RangeControl
} from "@wordpress/components";
import {
	useBlockProps,
	InnerBlocks,
	InspectorControls
} from '@wordpress/block-editor';
import { useEffect } from "@wordpress/element";
const TEMPLATE = [
	[ 'core/paragraph', {} ]
];
export default function Edit( { attributes, setAttributes, clientId, context } ) {
	const { blockID, width } = attributes;
	const gap = context["cth-layout/layout"];
	console.log(gap);
	useEffect( () => {
    setAttributes( { blockID: clientId } );
  }, [] );
	const onChangeWidth = (newWidth) => {
		console.log(newWidth);
		// const updatedWidth = newWidth - 0.01;
		const updatedWidth = newWidth;
		setAttributes( { width: updatedWidth } );
	};
	let styles = `#block-${blockID} {`;
	styles += `
		max-width: calc( ${parseInt(width)}% - ( ${gap.gap}px * 0.5 ) );
		flex-grow: 1;
	`;
	styles += `}`;
	return (
		<>
			<InspectorControls>
				<PanelBody title={ __( "Layout Settings", "cth-layout" ) }>
					<RangeControl
						label="Width"
						value={ width }
						onChange={ onChangeWidth }
						min={ 1 }
						max={ 100 }
					/>
				</PanelBody>
			</InspectorControls>
			<FlexItem { ...useBlockProps() }>
				<style>
					{styles}
				</style>
				<InnerBlocks template={TEMPLATE} />
			</FlexItem>
		</>
	);
}