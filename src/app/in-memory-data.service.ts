import { InMemoryDbService } from 'angular-in-memory-web-api';

export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const heroes = [
      { id: 11, name: 'Mr. Nice', phone: '776149662' },
      { id: 12, name: 'Narco', phone: '776149662' },
      { id: 13, name: 'Bombasto', phone: '776149662' },
      { id: 14, name: 'Celeritas', phone: '776149662' },
      { id: 15, name: 'Magneta', phone: '776149662' },
      { id: 16, name: 'RubberMan', phone: '776149662' },
      { id: 17, name: 'Dynama', phone: '776149662' },
      { id: 18, name: 'Dr IQ', phone: '776149662' },
      { id: 19, name: 'Magma', phone: '776149662' },
      { id: 20, name: 'Tornado', phone: '776149662' }
    ];
    return { heroes };
  }
}
