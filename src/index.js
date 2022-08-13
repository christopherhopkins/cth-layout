import { registerBlockType } from '@wordpress/blocks';
import './cth-column';
import './style.scss';
import Edit from './edit';
import save from './save';
registerBlockType( 'cth-blocks/cth-layout', {
	/**
	 * @see ./edit.js
	 */
	edit: Edit,

	/**
	 * @see ./save.js
	 */
	save,
} );
