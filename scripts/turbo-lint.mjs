import { execSync } from 'node:child_process';

try {
	execSync('pnpm eslint --fix src', { stdio: 'inherit' }); // JS/TS
	execSync('pnpm prettier --write .', { stdio: 'inherit' }); // Format JS/TS
	execSync('poetry run pylint src', { stdio: 'inherit' }); // Lint Python
} catch (err) {
	process.exit(1);
}
