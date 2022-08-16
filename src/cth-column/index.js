import { registerBlockType } from '@wordpress/blocks';
import Edit from './edit';
import save from './save';
registerBlockType( 'cth-blocks/cth-column', {
  apiVersion: 2,
	name: "cth-blocks/cth-column",
	version: "0.1.0",
	title: "Column Block",
	category: "design",
	icon: "text-page",
	description: "CTH Column Block",
	supports: {
		html: false
	},
	attributes: {
		blockID: {
			type: "string"
		},
		width: {
			type: "number",
			default: 50
		}
	},
	textdomain: "cth-layout",
	usesContext: ["cth-layout/gap"],
	edit: Edit,
	save,
} );