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
		setAttributes( { width: newWidth } );
	};
	let styles = `#block-${blockID} {`;
	styles += `
		flex-basis: ${parseInt(width)}%;
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