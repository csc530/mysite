const toTitleCase = (s: string, locales?: string[] | string): string => {
	if(locales)
		return s.charAt(0).toLocaleUpperCase(locales) + s.slice(1).toLocaleLowerCase(locales);
	return s.charAt(0).toUpperCase() + s.slice(1).toLowerCase();
}
const equalsIgnoreCase = (s1: string, s2: string): boolean => {
	return s1.toLowerCase() === s2.toLowerCase();
}

const manipulation = {
	toTitleCase,
	equalsIgnoreCase,
};

export default manipulation;
export {toTitleCase, equalsIgnoreCase};