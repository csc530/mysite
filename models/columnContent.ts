export default interface Columnable {
	display: () => string;
	class?: string[];
}

export interface ColumnHeader {
	text: string;
	level: 1 | 2 | 3 | 4 | 5 | 6;
}