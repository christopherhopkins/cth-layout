import { __ } from '@wordpress/i18n';
import {
	FlexItem
} from "@wordpress/components";
import {
	useBlockProps,
	InnerBlocks
} from '@wordpress/block-editor';

const TEMPLATE = [];
export default function Edit() {
	return (
		<FlexItem { ...useBlockProps() }>
			<InnerBlocks />
		</FlexItem>
	);
}