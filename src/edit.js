import { __ } from '@wordpress/i18n';
import {
	Flex,
	RangeControl,
	PanelBody,
	TabPanel,
} from "@wordpress/components";
import {
	useBlockProps,
	InnerBlocks,
	InspectorControls
} from '@wordpress/block-editor';
import { useEffect } from "@wordpress/element";
import './editor.scss';
const TEMPLATE = [
	[ 'cth-blocks/cth-column', {"width": 50} ]
];
const ALLOWED_BLOCKS = ['cth-blocks/cth-column'];
export default function Edit({ attributes, setAttributes, clientId }) {
	const { blockID, layout } = attributes;
	const onChangeColumns = (count) => {
		const newLayout = {...layout};
		newLayout["columns"] = count;
		setAttributes({ layout: newLayout });
	}
	const onChangeGap = (newGap) => {
		const newLayout = {...layout};
		newLayout["gap"] = newGap;
		setAttributes({ layout: newLayout });
	}
	const styles = `
		#block-${blockID} > .block-editor-inner-blocks > .block-editor-block-list__layout {
			display: flex;
			flex-wrap: wrap;
			gap: ${layout.gap}px;
		}
	`;
	useEffect( () => {
    setAttributes( { blockID: clientId } );
  }, [] );
	return (
		<>
			<InspectorControls>
				<PanelBody title={ __( "Layout Settings", "cth-layout" ) }>
					<TabPanel
						className="tab"
						activeClass="is-active"
						onSelect={ (tabName) => console.log(tabName) }
						initialTabName="desktop"
						tabs={
							[
								{
									name: __( "desktop", "cth-layout" ),
									title: __( "Desktop", "cth-layout" ),
									className: "tab-one",
									options:
										<>
										<RangeControl
											label="Columns"
											value={ layout.columns }
											onChange={ onChangeColumns }
											min={ 1 }
											max={ 12 }
										/>
										<RangeControl
											label="Column Gap"
											value={ layout.gap }
											onChange={ onChangeGap }
											min={ 0 }
											max={ 300 }
										/>
									</>
								},
								{
									name: __( "tablet", "cth-layout" ),
									title: __( "Tablet", "cth-layout" ),
									className: "tab-two"
								}
							]
						}
					>
						{ ( { options, className } ) =>
							<div className={className} style={{paddingTop:"15px"}}>
								{options}
							</div>
						}
					</TabPanel>
				</PanelBody>
			</InspectorControls>

			<Flex
				{ ...useBlockProps() }
			>
				<style>
					{styles}
				</style>
				<InnerBlocks
					template={TEMPLATE}
					allowedBlocks={ ALLOWED_BLOCKS }
					orientation="horizontal"
				/>
			</Flex>
		</>
	);
}