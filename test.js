const path = require('path');
const execa = require('execa');
const pathExists = require('path-exists');
const rimraf = require('rimraf');
const test = require('ava');

test("Test downloading main branch tarball", async t => {
	await execa.stdout(path.join(__dirname, 'cli.js'), ['--out', __dirname, 'https://github.com/tylerbutler/download-cli/archive/master.zip']);
	t.true(pathExists.sync(path.join(__dirname, 'download-cli-master.zip')));
	rimraf.sync(path.join(__dirname, 'download-cli-master.zip'));
});
