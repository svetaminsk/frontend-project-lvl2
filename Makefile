install:
	npm install

publish:
	npm publish --dry-run
	npm link

help:
	npx babel-node src/bin/genDiff.js -h

lint:
	npx eslint .

test:
	npm test
	
test-coverage:
	npm test -- --coverage --coverageProvider=v8
