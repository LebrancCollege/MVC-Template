import fs from 'fs';

class Controller {
	// File Reading Function. 
	readFile(path: string): string {
		const output = fs.readFileSync(path).toString('utf-8');
		return output;
	}

	// Get Data from Data File. 
	getDataFromFile(fileExtension: string, fileName: string) {
		let result;
		switch(fileExtension) {
			case 'json':
				result = this.readFile(`./models/data/${fileExtension}/${fileName}.json`);
				break;
			case 'text':
				result = this.readFile(`./models/data/${fileExtension}/${fileName}.txt`);
				break;
			case 'xml':
				result = this.readFile(`./models/data/${fileExtension}/${fileName}.xml`);
				break;
			case 'csv':
				result = this.readFile(`./models/data/${fileExtension}/${fileName}.csv`);
				break;
		}
		return result;
	}

	// Working Function (Function that you want to do for your work.) 
}

export default Controller;