'use strict';
const fs = require('fs');
const util = require('util');
const is = require('@sindresorhus/is');
const isFormData = require('./is-form-data');

module.exports = async options => {
	const {body} = options;

	if (options.headers['content-length']) {
		return Number(options.headers['content-length']);
	}

	if (!body && !options.stream) {
		return 0;
	}

	if (is.string(body)) {
		return Buffer.byteLength(body);
	}

	if (is.buffer(body)) {
		return body.length;
	}

	if (isFormData(body)) {
		return util.promisify(body.getLength.bind(body))();
	}

	if (body instanceof fs.ReadStream) {
		const {size} = await util.promisify(fs.stat)(body.path);
		return size;
	}

	if (is.nodeStream(body) && is.buffer(body._buffer)) {
		return body._buffer.length;
	}

	return null;
};
