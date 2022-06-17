// reusable name
// can take complex properties, and can take functions as properties
// still satisfies property, even if it has extra properties, only checks for what is listed!
interface Reportable {
  summary(): string
}

// must have same property names as interface
const oldCivic = {
  name: 'civic',
  year: new Date(),
  broken: true,
  summary(): string {
    return `Name: ${this.name}`
  }
};

const printSummary = (item: Reportable): void => {
  console.log(item.summary);
};

printSummary(oldCivic)