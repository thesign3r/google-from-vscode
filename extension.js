const vscode = require('vscode');
function activate(context) {
	console.log('Congratulations, your extension "google-from-vscode" is now active!');
	let disposable = vscode.commands.registerCommand('extension.openBrowser', function () {
		vscode.window.showInputBox({
			placeHolder: 'Please input your querry!'
		}).then(text => {
			console.log('result: ' + text);
			vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://www.google.pl/search?q=' + text));
		});
	});

	context.subscriptions.push(disposable);
}
exports.activate = activate;
function deactivate() {}
exports.deactivate = deactivate;